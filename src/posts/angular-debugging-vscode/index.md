---
title: Debugging Angular in VS Code
date: '2017-02-17'
description: 'Getting Visual Studio Code setup for debugging an Angular CLI project.'
redirect_from:
  - /angular-debugging-vscode/
---

With the VS Code Extension **Debugger for Chrome** this should be a quick setup for
most projects, especially if you are using _angular-cli_. Open your project and
install the **Debugger for Chrome** extension and reload VS Code. Once reloaded,
open the command panel (Shift + Cmd + P) and type launch, before selecting
**Debug: Open launch.json**. From the list select **Chrome** to generate the base
**launch.json** for the Chrome debugger.

There are a couple of changes to be made to this base config, some to make the
general Chrome debugging experience nicer and some to be able to debug your
Angular project. The first thing we do is update the **url** port number, for
_angular-cli_ the default port is **4200**.

```json
"url": "http://localhost:4200"
```

Now we need to tell the debugger that source maps are required.

```json
"sourceMaps": true
```

You should now be able to build you application (angular-cli -> ng serve) then
debug by starting the VS Code debugger. You may have issues connecting if you have
Chrome session running with more than one tab.

To get round this we can have the debugger create a Chrome profile for the
debugger on first start up and reuse the same profile on every debug session.
The neatest way I have found to do this is to create a profile in the projects
**.vscode** directory. Creating one here, rather than in TEMP or another location
that you may reuse, gets round issues you may experience when switching between
multiple projects.

To enable this, add the following line. Set the directory as you see fit.

```json
"userDataDir": "${workspaceRoot}/.vscode/chrome/",
```

Now when the debugger starts, it will start a new Chrome session, great! You may
notice that stopping and starting the debug session will cause Chrome to complain,
easy fix, just add the following and you wont get the annoying prompts.

```json
"runtimeArgs": [
    "--disable-session-crashed-bubble",
    "--disable-infobars"
]
```

Now we should have something that looks a little like this:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome against localhost",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceRoot}",
      "userDataDir": "${workspaceRoot}/.vscode/chrome/",
      "sourceMaps": true,
      "runtimeArgs": ["--disable-session-crashed-bubble", "--disable-infobars"]
    },
    {
      "name": "Attach to Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "webRoot": "${workspaceRoot}"
    }
  ]
}
```
