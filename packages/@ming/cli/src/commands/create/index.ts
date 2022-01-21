import { Command, Flags } from '@oclif/core'

export default class Vue extends Command {
  static description = 'Vue project Manager'

  async run(): Promise<void> {
    this.log(Vue.description)
  }
}
