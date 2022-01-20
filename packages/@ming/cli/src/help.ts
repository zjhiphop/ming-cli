import type { Command, Topic } from '@oclif/core'
import { Help } from '@oclif/core'

export default class MyHelpClass extends Help {
  // acts as a "router"
  // and based on the args it receives
  // calls one of showRootHelp, showTopicHelp,
  // or showCommandHelp
  showHelp(args: string[]): void {}

  // display the root help of a CLI
  showRootHelp(): void {}

  // display help for a topic
  showTopicHelp(topic: Topic): void {}

  // display help for a command
  showCommandHelp(command: Command): void {}

  // the default implementations of showRootHelp
  // showTopicHelp and showCommandHelp
  // will call various format methods that
  // provide the formatting for their corresponding
  // help sections;
  // these can be overwritten as well

  // the formatting responsible for the header
  // displayed for the root help
  formatRoot(): string {}

  // the formatting for an individual topic
  formatTopic(topic: Config.Topic): string {}

  // the formatting for a list of topics
  protected formatTopics(topics: Config.Topic[]): string {}

  // the formatting for a list of commands
  formatCommands(commands: Config.Command[]): string {}

  // the formatting for an individual command
  formatCommand(command: Config.Command): string {}
}
