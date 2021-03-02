---
title: Angular strict mode
date: '2020-02-09'
description: 'What is strict mode and how to turn it on'
redirect_from:
  - /angular-strict/
---

# Strict Angular

If you like to have your TypeScript type checking to be stricter, there are a
few settings that can be turned on within your `ts.config`.

## TypeScript Compiler Options

When generating a new project from the [Angular CLI](https://cli.angular.io/)
with the `--strict` flag, the following compiler options are added to
`tsconfig.json` for you.

```JSON
// tsconfig.json
{
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noFallthroughCasesInSwitch": true,
    "strictNullChecks": true,
}
```

These settings do not encompass all of TypeScripts `strict` flag as detailed in
the TypeScript compiler
[docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html),
just a subset.

```JSON
// tsconfig.json
{
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
}
```

Are options that TypeScript would not turn on with its `strict` flag.

If you would like to make your Angular project fully strict, replace the
provided options like so:

```JSON
// tsconfig.json
{
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
}
```

## Angular Compiler Options

[Angular compiler options](https://angular.io/guide/angular-compiler-options)
are added within `tsconfig.json`. For projects built with the
[Angular CLI](https://cli.angular.io/) `fullTemplateTypeCheck` will be defaulted
on.

```JSON
{
    "angularCompilerOptions": {
        "fullTemplateTypeCheck": true,
    }
}
```

Although defaulted off, it is recommended within the Angular documentation that
`strictInjectionParameters` is turned on.

```JSON
{
    "angularCompilerOptions": {
        "strictInjectionParameters": true,
    }
}
```

As of Angular 9, with Ivy turned on we can also turn on
[Strict mode](https://angular.io/guide/template-typecheck#strict-mode) for
template checking.

```JSON
{
    "angularCompilerOptions": {
        "strictTemplates": true
    }
}
```

This is a superset of `fullTemplateTypeCheck` so when `strictTemplates` is turn
on you can remove the config for `fullTemplateTypeCheck`, ending up with
something like this:

```JSON
{
    "angularCompilerOptions": {
        "strictInjectionParameters": true,
        "strictTemplates": true
    }
}
```
