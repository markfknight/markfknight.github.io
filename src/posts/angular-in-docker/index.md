---
title: Angular Development in Docker - Part 1
date: '2020-06-24'
description: 'Getting a good docker development environment'
---

# Angular Development in Docker

We need to create a local working directory four our source code, if your using
WSL, place this in your WSL file system rather than a `mnt/c` location.

## `.dockerignore`

Create a `.dockeringore` file in the project root directory.

```
.git
.gitignore
.vscode
docker-compose*.yml
Dockerfile
node_modules
```

It's worth adding any file/folder that you docker image does not require as the
ignore file stops the build process from copying the data into your image.

## `Dockerfile`

Next we can create a `Dockerfile` in the project root directory

```Dockerfile
# Dockerfile
FROM node:lts
RUN mkdir /home/node/app && chown node:node /home/node/app
RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules
WORKDIR  /home/node/app
USER node
```

This downloads the current NodeJs LTS image, we use the full image for a
development environment so we have access to git.

The Dockerfile creates our `WORKDIR` and localtion for `node_modules`
directory to `/srv/app` where we will bind our source code and our `node_modules`
volume.

Finally we set our user to the default `node` user supplied with the node image
so we don't run as root. If we don't set this we will have issues
with `npx` shortly. We also need to make sure the node user owns the working
directory and `node_modules` otherwise we will have installation issues.

## `docker-compose.yml`

Now lets create a `docker-compose.yml` to manage our setup.

```yml
# docker-compose
version: '3.7'

services:
  app:
    build: .
    command: echo 'ready'
    volumes:
      - ./:/home/node/app
      - node_modules:/home/node/app/node_modules

volumes:
  node_modules:
```

`build: .` will build the `Dockerfile` in the current location when
`docker-compose build` is run.

`command:` we will replace this with our call to the development server shortly.
`volumes:` we are using this to mount our current working directory in to the
container and a volume for `node_modules` to reside in.

We have two options for building the image, via `docker` or `docker-compose`

```sh
docker build -t app .

docker-compose build
```

We will be using the `docker-compose` from now on as it simplifies the commands.

Now that our bse node image is building, we can leverage node without the need
to install on our local machine. We can use `docker-compose` to launch an image
that is bound to our source folder and start using it to install node packages.

First we need to start the container and get shell

```sh
$ docker-compose run --rm app bash
```

You will be in the container shell ready to work with `npx`, to use the
[Angular CLI](https://cli.angular.io/) to create a new app we want to move back
a folder and generate a new project.

```sh
$ cd ..
$ npx -p @angular/cli ng new app --strict=true
```

`--strict=true` - because TypeScript.

If you have a look at your local folder, you will be please to see that you have
all the you Angular configuration and a bootstrapped app almost ready to develop
with.

## `node_modules`

Now lets look at our Dockerfile, we need to optimise the layer building process.
Lets start by copying our `package.json` and `package-lock.json`

```Dockerfile
# Dockerfile
# ...
COPY --chown=node:node package.json package-lock.json ./
```

Now we have our `package.json` and `package-lock.json` we can populate our
`node_modules`.

```Dockerfile
# Dockerfile
# ...
RUN npm ci --quiet
```

This will populate the `node_modules` folder as part of our image build, as this
is a layer of our Docker image, if `package.json` or `package-lock.json` changes
the layer is rebuilt and `node_modules` is repopulated. If there are no changes
to `package.json` or `package-lock.json` docker uses the cached layer until one
of these files changes.

We use `npm ci` to install, so our dependencies don't change underneath us.

Finally we can copy the rest of the source files into the container, we should
end up with something like this

```Dockerfile
# Dockerfile
FROM node:lts
RUN mkdir /home/node/app && chown node:node /home/node/app
RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules
WORKDIR  /home/node/app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --quiet
COPY --chown=node:node . .
```

## `ng serve`

Now let's get `docker-compose` to start our app and expose the correct port

```yml
# docker-compose
version: '3.7'

services:
services:
  app:
    build: .
    command: sh -c "npm start"
    ports:
      - 4200:4200
    working_dir: /home/node/app
    volumes:
      - ./:/home/node/app
      - node_modules:/home/node/app/node_modules

volumes:
  node_modules:
```

`command:` - runs a shell command to start our development server.

We have exposed the Angular CLI port `4200` so when we `docker-compose run` we
we can go to `localhost:4200` and hit the Angular CLI development server.

As we are running inside a docker container we need to bind the Angular CLI
server correctly by detailing the host. Todo this we update `package.json`

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve --host 0.0.0.0",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
},
```

The `--host 0.0.0.0` binds the server within the docker container so that we
can expose the server port `4200` on our `localhost`, this means you get your
normal Angular CLI workflow.

## Build

Lets use `docker-compose` to build

```sh
$ docker-compose build
```

## Running

To start

```sh
$ docker-compose up -d
```

`-d` Launches you container in a detached state, we can browse to
[localhost:4200](localhost:4200) and start developing as we normally would.

To stop the container

```sh
$ docker-compose down
```

In the next part we will look at how we are able to take this starting point and
build a distribution of our application before using the complied distribution
and running it in a containerised server.
