---
title: 'links'
date: '2020-12-05'
---

Internal Links in your Markdown will not cause a browser refresh.

This works for absolute and relative links:

- `md•[absolute images](https://github.io/gatsby-blog-typescript-jest-tailwind/posts/images)`
  - [absolute images](https://github.io/gatsby-blog-typescript-jest-tailwind/posts/images)
- `md•[relative images](/posts/images)`
  - [relative images](/posts/images)

For configuration see
[gatsby-plugin-catch-links](https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-links/).

Exteranl links are handled with
[gatsby-remark-external-links](https://www.gatsbyjs.com/plugins/gatsby-remark-external-links/?=gatsby-remark-external-links).
with the defaults of `target: _blank` and `rel: nofollow noopener noreferrer`.
