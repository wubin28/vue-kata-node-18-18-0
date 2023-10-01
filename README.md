# vue-kata-node-18-18-0

This template should help get you started developing with Vue 3 in Vite.

## how to configure nvm to use node.js China mirror

Add or modify the following lines in your shell profile (.bashrc, .zshrc, etc.):

```
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
```

Restart your shell or run source ~/.bashrc (or source ~/.zshrc if you're using Zsh).

Now, when you use nvm install, it will download Node.js from the Taobao mirror, which should be much faster in mainland China.

## How to install the latest versions of node.js/npm, vue and generate a scaffold project on macOS

```
# Install nvm
node -v
brew info node
brew uninstall node
brew cleanup
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# closing and reopening the terminal
nvm -v

# Install node.js/npm
nvm ls-remote
nvm install --lts
node -v # v18.18.0
npm -v # 9.8.1

# generate a scaffold project
npm create vue@latest
cd vue-kata-node-18-18-0
npm install
npm run format
npm run dev
```

## how to install node.js/npm, yarn on ubuntu

```
# Install nvm
node -v
which node
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# closing and reopening the terminal
nvm -v

# Install node.js/npm
nvm install 12.18.3
nvm alias default 12.18.3
node -v
npm -v

# Install yarn
npm install -g yarn@1.22.10
yarn -v
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
