// @ts-check
const fs = require('fs')
const path = require('path')
const prompts = require('prompts')
const extract = require('fast-extract')
import { exec } from './exec'

const {
  yellow,
  green,
  cyan,
  blue,
  magenta,
  lightRed,
  red,
  reset
} = require('kolorist')

const cwd = process.cwd()

const renameFiles: {
  _gitignore: string
} = {
  _gitignore: '.gitignore'
}

async function init(targetDir: string, template: string): Promise<any> {
  const defaultProjectName = targetDir || 'ming-project'
  const ORG = 'minglabs-sz'

  let result: any = {}

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: reset('Project name:'),
          initial: defaultProjectName,
          onState: (state: any) =>
            (targetDir = state.value.trim() || defaultProjectName)
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.'
              ? 'Current directory'
              : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`
        },
        {
          type: (_: any, { overwrite }: { overwrite?: boolean } = {}) => {
            if (overwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled')
            }
            return null
          },
          name: 'overwriteChecker'
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : 'text'),
          name: 'packageName',
          message: reset('Package name:'),
          initial: () => toValidPackageName(targetDir),
          validate: (dir: string) =>
            isValidPackageName(dir) || 'Invalid package.json name'
        }
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        }
      }
    )
  } catch (cancelled: any) {
    console.log(cancelled.message)
    return
  }
  ;``
  // user choice associated with prompts
  const { overwrite, packageName } = result

  const root = path.join(cwd, targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root)
  }

  console.log(`\nScaffolding project in ${root}...`)

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'pnpm'

  const isPkgManagerExists =
    (await exec(`which ${pkgManager}`)).indexOf('not found') === -1

  if (!isPkgManagerExists) {
    console.log(`Package manager not found: ${pkgManager}`)
    return
  }

  // download unpacked tar package to target directory
  try {
    const pkg = `@${ORG}/template-${template}`
    // download package from npm
    await exec(`npm pack ${pkg}`)

    const latestVersion = await exec(`npm view ${pkg} version`)

    // use tar to unpack all
    const pkgName = `${ORG}-template-${template}-${latestVersion.replace(
      /\s/,
      ''
    )}.tgz`

    console.log('Package Name: ', pkgName)

    // extract package
    await extract(pkgName, root, { strip: 1 })

    // delete package
    await exec(`rm -f ${pkgName}`)

    // go inside target dir
    process.chdir(root)

    // install dependencies
    await exec(`${pkgManager} install`)
  } catch (e: any) {
    console.log(e.message)
    return
  }

  const pkg = require(path.join(root, `package.json`))

  pkg.name = packageName || targetDir

  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))

  console.log(`\nDone. Now run:\n`)

  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`)
  }

  console.log(`  ${pkgManager} dev`)

  console.log()
}

function copy(src: string, dest: string) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function isValidPackageName(projectName: string) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName
  )
}

function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(path: string) {
  return fs.readdirSync(path).length === 0
}

function emptyDir(dir: string) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    // baseline is Node 12 so can't use rmSync :(
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent: string | undefined) {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  }
}

// init("ming-test", "vue3").catch((e) => {
//   console.error(e)
// })

export default init
