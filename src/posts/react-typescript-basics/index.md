---
title: 'React: TypeScript basics'
date: '2022-03-26'
description: 'Start writing React with TypeScript'
---

This is the first in a series of posts delving into using
[React](https://reactjs.org/) with
[TypeScript](https://www.typescriptlang.org/) (Ts).

Writing React with Ts is a lot of fun, Ts is in general! It helps to eradicate
a whole subset of bugs, document JavaScript (Js) code with the intent of the
original author and makes it easier to onboard developers to a project, reducing
cognitive load.

Project starters that such as [create-react-app](https://create-react-app.dev)
have Ts [optional](https://create-react-app.dev/docs/adding-typescript/)
support built into their project bootstrapping. For `create-react-app` you need
to add the flag `--template typescript` when you initialise your new application.

Adding TypeScript to and existing project depends on your set up so advise on
setup can vary greatly, most people are likely using
[webpack](https://webpack.js.org/) and their
[Ts docs](https://webpack.js.org/guides/typescript/) are well maintained.
Fundamentally you need to get `.ts` and `.tsx` file types transpiled in your
build pipeline.

Using Ts on a [`npm`](https://www.npmjs.com/) based project some packages you
install will ship with _Type Definitions_ (typings), some like
React don't.

Typings allow the Ts complier (`tsc`) to enforce the API of the libraries you
use, making third party library consumption easy. Ts ships with typings for
standard Js, so writing plain Ts as a direct replacement for Js is a doddle.

If React does not have a types definitions shipped, what do we do? Luckily
there is a community lead project called
[DefinitelyTyped](https://definitelytyped.org/) which maintains a repository for
the major Js projects (such as React) on
[GitHub](https://github.com/DefinitelyTyped/DefinitelyTyped), MicroSoft in turn
make sure these typings are available on `npm`, under the
[`@types`](https://www.npmjs.com/search?q=%40types) scope. These typings are
installed as **devDependencies**, as types are not required at runtime.

Run the following command to get typings for your React code.

#### npm

```sh
npm i -D @types/node @types/react @types/react-dom
```

#### yarn

```sh
yarn add -D @types/node @types/react @types/react-dom
```

Typings for [Jest](https://jestjs.io/) are also available from the package
`@types/jest`.

Once your configuration is setup, you can start creating you first components.

Lets start simple and create a `<Title />` component. I will be writing in the
functional form of React, writing with React object form is also
supported.

Create a new file `Title.tsx`, the `.tsx` file extension is used to denote JSX
written in Ts.

```tsx
// Title.tsx

// We define the type for our props
type TitleProps = {
  children?: ReactNode;
};

// We use the type to define our components API
const Title = (props: TitleProps) => <h1>{children}</h1>;

export default Title;
```

Its about as simple as that, we you consume the component the API of our
component is known by our IDE, contract of the API is enforced at transpile
time, resulting in a failed build if the component is being used incorrectly
and live feedback is provided from the IDE to the developer as they work.

As a note, the `type` keyword can be replaced with `interface` in this example.
The `ReactNode` type is very broad but probably the most appropriate for child
element in React.

#### Resources

A list of resources that may be useful on your React TypeScript journey.

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
