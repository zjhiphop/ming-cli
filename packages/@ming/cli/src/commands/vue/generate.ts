import { Command } from '@oclif/core'
import * as inquirer from 'inquirer'

const FEATURES = {
  VIEW: 'view',
  COMPONENT: 'component',
  STORE: 'store',
  PLUGIN: 'plugin',
  MIXIN: 'mixin',
  DIRECTIVE: 'directive',
  MIDDLEWARE: 'middleware'
}

const OPTIONS = Object.entries(FEATURES).map((item) => item[1])

export default class VueGenerate extends Command {
  static description = `Generate Vue files including: ${OPTIONS.join(',')}`

  static examples = [`$ mingcli vue add`]

  async run(): Promise<void> {
    const feature: any = await inquirer.prompt([
      {
        name: 'feature',
        message: 'select a feature to add',
        type: 'list',
        choices: OPTIONS
      }
    ])

    this.log(`the feature selected is: ${feature}`)
  }
}
