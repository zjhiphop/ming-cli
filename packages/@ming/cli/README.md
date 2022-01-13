oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mingcli
$ mingcli COMMAND
running command...
$ mingcli (--version)
mingcli/0.0.0 darwin-x64 node-v14.17.6
$ mingcli --help [COMMAND]
USAGE
  $ mingcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mingcli help [COMMAND]`](#mingcli-help-command)
* [`mingcli plugins`](#mingcli-plugins)
* [`mingcli plugins:inspect PLUGIN...`](#mingcli-pluginsinspect-plugin)
* [`mingcli plugins:install PLUGIN...`](#mingcli-pluginsinstall-plugin)
* [`mingcli plugins:link PLUGIN`](#mingcli-pluginslink-plugin)
* [`mingcli plugins:uninstall PLUGIN...`](#mingcli-pluginsuninstall-plugin)
* [`mingcli plugins update`](#mingcli-plugins-update)

## `mingcli help [COMMAND]`

Display help for mingcli.

```
USAGE
  $ mingcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mingcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `mingcli plugins`

List installed plugins.

```
USAGE
  $ mingcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mingcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `mingcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mingcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mingcli plugins:inspect myplugin
```

## `mingcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mingcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mingcli plugins add

EXAMPLES
  $ mingcli plugins:install myplugin 

  $ mingcli plugins:install https://github.com/someuser/someplugin

  $ mingcli plugins:install someuser/someplugin
```

## `mingcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mingcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ mingcli plugins:link myplugin
```

## `mingcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mingcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mingcli plugins unlink
  $ mingcli plugins remove
```

## `mingcli plugins update`

Update installed plugins.

```
USAGE
  $ mingcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
