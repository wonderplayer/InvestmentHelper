oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g investment-helper
$ InvestmentHelper COMMAND
running command...
$ InvestmentHelper (--version)
investment-helper/0.0.1 linux-x64 node-v20.2.0
$ InvestmentHelper --help [COMMAND]
USAGE
  $ InvestmentHelper COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`InvestmentHelper help [COMMANDS]`](#investmenthelper-help-commands)
* [`InvestmentHelper plugins`](#investmenthelper-plugins)
* [`InvestmentHelper plugins:install PLUGIN...`](#investmenthelper-pluginsinstall-plugin)
* [`InvestmentHelper plugins:inspect PLUGIN...`](#investmenthelper-pluginsinspect-plugin)
* [`InvestmentHelper plugins:install PLUGIN...`](#investmenthelper-pluginsinstall-plugin-1)
* [`InvestmentHelper plugins:link PLUGIN`](#investmenthelper-pluginslink-plugin)
* [`InvestmentHelper plugins:uninstall PLUGIN...`](#investmenthelper-pluginsuninstall-plugin)
* [`InvestmentHelper plugins:uninstall PLUGIN...`](#investmenthelper-pluginsuninstall-plugin-1)
* [`InvestmentHelper plugins:uninstall PLUGIN...`](#investmenthelper-pluginsuninstall-plugin-2)
* [`InvestmentHelper plugins update`](#investmenthelper-plugins-update)

## `InvestmentHelper help [COMMANDS]`

Display help for InvestmentHelper.

```
USAGE
  $ InvestmentHelper help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for InvestmentHelper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `InvestmentHelper plugins`

List installed plugins.

```
USAGE
  $ InvestmentHelper plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ InvestmentHelper plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `InvestmentHelper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ InvestmentHelper plugins:install PLUGIN...

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
  $ InvestmentHelper plugins add

EXAMPLES
  $ InvestmentHelper plugins:install myplugin 

  $ InvestmentHelper plugins:install https://github.com/someuser/someplugin

  $ InvestmentHelper plugins:install someuser/someplugin
```

## `InvestmentHelper plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ InvestmentHelper plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ InvestmentHelper plugins:inspect myplugin
```

## `InvestmentHelper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ InvestmentHelper plugins:install PLUGIN...

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
  $ InvestmentHelper plugins add

EXAMPLES
  $ InvestmentHelper plugins:install myplugin 

  $ InvestmentHelper plugins:install https://github.com/someuser/someplugin

  $ InvestmentHelper plugins:install someuser/someplugin
```

## `InvestmentHelper plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ InvestmentHelper plugins:link PLUGIN

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
  $ InvestmentHelper plugins:link myplugin
```

## `InvestmentHelper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ InvestmentHelper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ InvestmentHelper plugins unlink
  $ InvestmentHelper plugins remove
```

## `InvestmentHelper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ InvestmentHelper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ InvestmentHelper plugins unlink
  $ InvestmentHelper plugins remove
```

## `InvestmentHelper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ InvestmentHelper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ InvestmentHelper plugins unlink
  $ InvestmentHelper plugins remove
```

## `InvestmentHelper plugins update`

Update installed plugins.

```
USAGE
  $ InvestmentHelper plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
