---
title: 'formatting'
date: '2020-12-01'
---

Posts have
[TailWind Typography](https://github.com/tailwindlabs/tailwindcss-typography)
formatting and code formatting support via
[gatsby-remark-vscode](https://www.gatsbyjs.com/plugins/gatsby-remark-vscode).

[Monokai Operator Theme](https://marketplace.visualstudio.com/items?itemName=markfknight.monokai-operator-theme)
is configured and can can be replaced by any default
[VSCode](https://code.visualstudio.com/) theme or custom theme installed from
npm as configured in `gatsby-browser.js`.

There are some customisations in `styles/global.css` to customise inline and
line highlight formatting.

It supports `code` blocks, with highlights, optional numberlines and diffs.

```ts { numberLines, 3-6, diff }
const test: number = 1;

export const config = {
  id: 1,
  name: 'boom',
};

- // This is a diff!
+ // ...

for (let i; i < 10; i++) { //L40
  console.log(i);
}
```

Inline highlights i.e. `ts•const test: number = 1` are supported.
Use `•` to split the language and the code to highlight.
