---
title: Haskell with Visual Studio Code
date: '2020-01-20'
description: 'Getting Visual Studio Code setup for hacking on Haskell.'
redirect_from:
  - /haskell-setup-windows-vs-code/
---

## Installing Haskell

Head to [haskell.org](https://haskell.org) and [download](https://haskell.org/downloads) a copy of the minimal installer for your platform.

This will install the core Haskell libraries, [GHC](https://www.haskell.org/ghc/) (The Glasgow Haskell Compiler), [cabal](https://www.haskell.org/cabal/) and [Stack](https://github.com/commercialhaskell/stack).

## Visual Studio Code Setup

### Syntax Highlighting

For our first addition, open your VS Code extensions and search for Haskell, towards the top of the list (if not at the top) you will see [Haskell Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=justusadam.language-haskell).

### Completions et al.

To keep this simple we are going to leverage GHC directly with a great plugin
[Simple GHC (Haskell) Integration](https://marketplace.visualstudio.com/items?itemName=dramforever.vscode-ghc-simple).
It provides diagnostics, completion, types, an inline REPL, definitions, and usages.

<!-- ### Errors and Warnings
To keep this simple and fast we are going to leverage **[gchid](https://github.com/ndmitchell/ghcid)**

``` sh
$ stack install ghcid
```

Once **ghcid** is installed we can hookup VS Code to help manage the running of ghcid and report the errors with help from the [haskell-ghcid](https://marketplace.visualstudio.com/items?itemName=ndmitchell.haskell-ghcid) pluggin. -->

### Debugging

To enable debugging within the VS Code debugger, lets first install a couple of
stack packages:

```sh
$ stack install phoityne-vscode haskell-dep
```

Now we can wire up to VS Code with
[Haskell GHCi Debug Adapter Phoityne](https://marketplace.visualstudio.com/items?itemName=phoityne.phoityne-vscode).
When you are in a Haskell project you can select VS Codes' debugger and create a
new `launch.json` based on the `haskell-debug-adapter` option.
Within the `launch.json` you can change your startup file to hit `Main.hs`
if you like. Starting the a debug session should let you breakpoint and debug now.
