# Brennan Glynn - Portfolio [Deployment Branch]

> **⚠️ Important Note**
>
> This branch (`gh-pages`) contains the automated build output of my portfolio project. **Do not edit files on this branch directly.** Any manual changes will be overwritten by the next deployment.

## About This Branch

This branch serves as the deployment target for the live version of my portfolio, hosted via GitHub Pages. It contains only the static, compiled assets (HTML, CSS, and JavaScript) generated from the source code on the `main` branch.

## Deployment Workflow

The content of this branch is automatically generated and pushed by the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package using the following workflow:

1.  All development and source code changes are made on the `main` branch.
2.  The `yarn build` command is run, which uses Vite to compile the project into the `/dist` directory.
3.  The `yarn deploy` command executes the `gh-pages -d dist` script, which pushes the complete contents of the local `/dist` directory to this `gh-pages` branch.

This process ensures that the live site is always in sync with the latest stable build from the source code.

## Links

* **Live Site:** **[https://brennanglynn.github.io/your-repo-name/](https://brennanglynn.github.io/)**
* **Source Code:** For all development, please see the **[../tree/main](../tree/main)**.

---

*This branch was last automatically updated on: August 10, 2025.*
