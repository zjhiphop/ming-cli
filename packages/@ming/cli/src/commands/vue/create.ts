import { Command, Flags } from '@oclif/core'
import { pull, mkdir, exec } from '../../utils/exec'
import cli from 'cli-ux'
import initTemplate from '../../utils/init-template'

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

    // 1. fetch project template from github
    cli.action.start('Pulling template from github', 'initializing...', {
      stdout: true
    })

    try {
      await initTemplate(args.project, 'vue3')
    } catch (err: any) {
      cli.action.stop('Finished with error: ' + err.message)
    }

    if (process.env.TEST) {
      // TODO:  delete files generated
    }

    this.log(
      `Create project: ${args.project} with Vue ${flags.vueVersion} and ${
        flags.useTs ? 'use' : 'no'
      } typescript! `
    )

    cli.action.stop('Finished!') // shows 'starting a process... custom message'
  }
}
