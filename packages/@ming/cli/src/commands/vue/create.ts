import { Command, Flags } from '@oclif/core'
import { pull, mkdir, exec } from '../../utils/exec'
import cli from 'cli-ux'

const VERSION = {
  V3: 'vue3'
}

export default class VueCreate extends Command {
  static description = 'Create Vue project for Web'

  static examples = [`$ mingcli vue projectName -v ${VERSION.V3} -t true`]

  static flags = {
    vueVersion: Flags.string({
      char: 'v',
      description: 'which version to use? (default use Vue3)',
      default: VERSION.V3,
      required: false
    }),
    useTs: Flags.boolean({
      char: 't',
      description: 'whether use ts? (default not use typescript)',
      default: false,
      required: false
    })
  }

  static args = [
    { name: 'project', description: 'Project name', required: true }
  ]

  async run(): Promise<void> {
    const { args, flags } = await this.parse(VueCreate)
    // start the spinner
    cli.action.start('starting a process')

    const isSuccess = await mkdir(args.project)

    if (!isSuccess) {
      cli.action.stop('Finished with error.') // shows 'starting a process... custom message'

      return
    }

    process.chdir(args.project)

    // 1. fetch project template from github
    if (!process.env.TEST) {
      cli.action.start('Pulling template from github', 'initializing...', {
        stdout: true
      })

      await pull('@ming/template-vue3')

      // 2. add typescript support if needed
      if (flags.useTs) {
        try {
          await exec('vue add typescript')
        } catch (e) {
          cli.action.stop('Finished with error.') // shows 'starting a process... custom message'
        }
      }
    }

    this.log(
      `Create project: ${args.project} with Vue ${flags.vueVersion} and ${
        flags.useTs ? 'use' : 'no'
      } typescript! `
    )

    cli.action.stop('Finished!') // shows 'starting a process... custom message'
  }
}
