# rust-wasm-typescript-lib

This repo is a minimal template for a typescript library with some components written in rust (and bundled as wasm).

Both npm and wasm-pack offer comprehensive tooling for libraries written entirely in their respective languages, but I understood my projects as *one* library that had components written in *both* domains. This is what I use for those projects.

## Overview

The template is a standard typescript npm library (`/ts`) that uses (and bundles) wasm-pack output of a rust library (`/rs`) as a dependency. All commands are run from the `/ts` folder.

By default, the output from `build` is configured for use in the browser with a bundler. Both typescript and rust must be compiled to a node-compatible version before running tests, though. Make sure to run `build` before deploying the package (or don't, if you intend for it to be used in a server-side node context).

### Folders

- `/rs`: rust code, configurations, and tests
- `/rs/pkg`: wasm-pack output, javascript glue, and type definitions
- `/ts`: typescript code, configurations, and tests
- `/ts/dist`: transpiled build output ready for deployment

### Commands

- `build`: build .ts & .rs files for production (web bundler by default)
- `build:ts`: build only .ts
- `build:rs:prod`: build only .rs as wasm (for a web bundler)
- `build:rs:node`: build only .rs as wasm (for a nodejs context)
- `test`: run typescript and rust tests (rust first)
- `test:rs`: run rust tests
- `test:ts`: run typescript tests (will rebuild rust)

## System Dependencies

In order to run all node and rust commands, your system must have these installed:

- [nodejs](https://nodejs.org/en/download/)
- [rust](https://www.rust-lang.org/tools/install)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
