# Developing, building, and testing readme-inspector

> <img align="bottom" alt="code" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg"> This document describes how to set up your development environment to build and test readme-inspector. It also explains the basic mechanics of using `git`, `node`, and `npm` from a Terminal/CLI (command-line interface).
>
> [![Request a feature][issues-new-feat-image]][issues-new-feat-url] [![Report a defect][issues-new-defect-image]][issues-new-defect-url]

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) ⛔️ -->
- [1. Prerequisite software](#1-prerequisite-software)
- [2. Getting the source code](#2-getting-the-source-code)
- [3. Installing dependencies](#3-installing-dependencies)
- [4. Building](#4-building)
- [5. Running tests](#5-running-tests)
- [5. Formatting and verifying your sources' quality](#5-formatting-and-verifying-your-sources-quality)
- [6. Git rules](#6-git-rules)
  * [6.1. _Always_ create a topic branch or fork from `master`](#61-_always_-create-a-topic-branch-or-fork-from-master)
  * [6..2. Favor the branch naming convention `GH-{ISSUE_NUMBER}--[-]`](#62-favor-the-branch-naming-convention-gh-issue_number---)
  * [6.3. **_Never_** push into the `master` branch. **_Always_** submit a Pull Request](#63-_never_-push-into-the-master-branch-_always_-submit-a-pull-request)
  * [6.4. Submit a Pull Request as soon as possible](#64-submit-a-pull-request-as-soon-as-possible)
  * [6.5. Add reviewers and the label `Status: Needs Review` when the topic branch is ready](#65-add-reviewers-and-the-label-status-needs-review-when-the-topic-branch-is-ready)
  * [6.6. Delete local and remote topic branches after merging](#66-delete-local-and-remote-topic-branches-after-merging)
  * [6.7. Protect the `master` branch](#67-protect-the-master-branch)
  * [6.8. GitHub workflow](#68-github-workflow)
  * [6.8.1. Initialize a Git repository in the product directory (_for new repositories only_).](#681-initialize-a-git-repository-in-the-product-directory-_for-new-repositories-only_)
  * [6.8.2. Checkout a new `feat`ure or `fix` branch.](#682-checkout-a-new-feature-or-fix-branch)
  * [6.8.3. Make Changes.](#683-make-changes)
  * [6.8.4. Follow the Conventional Commits Specification for commit messages.](#684-follow-the-conventional-commits-specification-for-commit-messages)
  * [6.8.5. Sync with remote to get changes you’ve missed.](#685-sync-with-remote-to-get-changes-youve-missed)
  * [6.8.6. Update your topic branch with the latest changes from `master` by interactive rebase](#686-update-your-topic-branch-with-the-latest-changes-from-master-by-interactive-rebase)
  * [6.2.7. Resolve conflicts (if any occur), and continue rebase](#627-resolve-conflicts-if-any-occur-and-continue-rebase)
  * [6.2.8. Push your branch with the `-f` flag (if necessary).](#628-push-your-branch-with-the--f-flag-if-necessary)
  * [6.2.9. Submit a Pull Request](#629-submit-a-pull-request)
  * [6.2.10. Remove your local topic branch if you're done](#6210-remove-your-local-topic-branch-if-youre-done)
- [7. **Code standards**](#7-code-standards)
  * [7.1. Use the Standard JS Style](#71-use-the-standard-js-style)
  * [7.2. Use ESLint to analyze source code.](#72-use-eslint-to-analyze-source-code)
- [8. **Unit testing**](#8-unit-testing)
  * [8.1. Write Jest tests](#81-write-jest-tests)
  * [8.2. Reach 100% code coverage](#82-reach-100%25-code-coverage)
- [9. **Directory structure**](#9-directory-structure)
- [10. **Logging**](#10-logging)
- [11. **Dependencies**](#11-dependencies)
  * [11.1. Production](#111-production)
  * [11.2. Development](#112-development)
- [12. **Licensing**](#12-licensing)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END ⛔️ -->

## 1. Prerequisite software

Before you can build and test readme-inspector, you must install and configure the
following products on your development machine:

1.  [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
    [Windows](http://windows.github.com)); [GitHub's Guide to Installing
    Git](https://help.github.com/articles/set-up-git) is a good source of information.

1.  [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](../package.json)) which is used to run a development web server,
    run tests, and generate distributable files.

1.  [NPM](https://yarnpkg.com) (version specified in the engines field of [`package.json`](../package.json)) which is used to install dependencies.

## 2. Getting the source code

Fork and clone the readme-inspector repository:

1.  [**Sign in**](https://github.com/login) to your GitHub account or [sign up for a (free) GitHub account](https://github.com/join).
2.  [**Fork**](http://help.github.com/forking) the [main readme-inspector repository](https://github.com/commonality/readme-inspector) (aka, "`origin`").
3.  **Clone your fork** of the readme-inspector repository and define an `upstream` remote pointing back to the readme-inspector repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:<github username>/readme-inspector.git

# Go to the readme-inspector directory:
cd readme-inspector

# Add the main readme-inspector repository as an upstream remote to your repository:
git remote add upstream https://github.com/commonality/readme-inspector.git
```

## 3. Installing dependencies

Next, install the JavaScript modules needed to build and test readme-inspector:

```shell
# Install readme-inspector project dependencies (package.json)
npm install
```

## 4. Building

![info][octicon-info] There are currently no build tasks for readme-inspector.

## 5. Running tests

> ![check][octicon-check] Your test suites must pass within coverage thresholds before you submit a PR to GitHub.

To run tests:

```shell
$ npm test
# => Run all readme-inspector tests on node

$ npm run test:watch
# => Run tests whenever a file changes
```

> <h3>Debugging your source code</h3>
>
> ![bug][octicon-bug] See [DEBUG.md](DEBUG.md) for information on debugging the code while running the unit tests.

All tests are executed with Continuous Integration services.

1.  We test on Node.js versions `9`, `8`, and `7.6.0` on Windows, Mac, and Ubuntu operating systems.
1.  PRs will only be merged once all tests pass.
1.  Travis CI will fail if any of the test suites fails, or a linting rule is violated.

## 5. Formatting and verifying your sources' quality

![verified][octicon-verified] readme-inspector uses

1.  [ESLint](http://clang.llvm.org/docs/ClangFormat.html) to evaluate and format source code;
1.  [Fixpack](https://www.npmjs.com/package/fixpack) to order all `package.json` properties consistently; and
1.  [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier) to format JSON, Markdown, and YAML.

You can both evaluate and format your all sources by running:

```shell
$ npm run lint
# => Formats and lints all JavaScript, JSON, Markdown, and
#    package.json.
```

You can also format sources by type:

```shell
# Evaluate and format JavaScript:
npm run lint:js

# Format JSON:
npm run lint:json

# Clean up the product manifest (package.json):
npm run lint:manifest

# Format all markdown files:
npm run lint:md
```

> ![alert][octicon-alert] If the source code does not pass linting, the CI will fail and the PR can not be merged.

## 6. Git rules

![Git Logo][icon-git-logo-image]

`readme-inspector` manages contributions with the [GitHub Flow](https://guides.github.com/introduction/flow/):
**anything in the `master` branch is _always_ deployable**.

### 6.1. _Always_ create a topic branch or fork from `master`

_Why:_

> ⌦ Use an isolated topic branch for parallel product development. Topic branches allow you to submit multiple pull requests without confusion. You can iterate without polluting the `master` branch with potentially unstable, unfinished code.

### 6..2. Favor the branch naming convention `GH-{ISSUE_NUMBER}-<type>-<scope>[-<subject>]`

_Why:_

> ⌦ Although not required, our team
>
> 1.  Prefixes branches with the GitHub issue number in the format
>
>     ```shell
>     GH-{ISSUE_NUMBER}
>     ```
>
>     followed by
>
> 1.  The `<type>` or "kind" of change being introduced, followed by
> 1.  The `<scope>` of change, (the feature or module that is changing), followed by
> 1.  An _optional_ short, descriptive `<subject>`.

_Examples:_

> 1.  **feat**: a new feature, e.g.,
>
>     ```shell
>     GH-1-feat-cli-add-authz
>     ```
>
> 1.  **fix**: a defect/bug repair, e.g., `GH-2-fix-api-logging-error`
>
>     ```shell
>     GH-1-feat-cli-add-authz
>     ```
>
> 1.  **build**: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm), e.g., `GH-8-build-add-markdown-toc`
>
>     ```shell
>     GH-1-feat-cli-add-authz
>     ```
>
> 1.  **chore**: changes that don't modify src or test files, e.g., `GH-10-remove-unused-files`
>
>     ```shell
>     GH-1-feat-cli-add-authz
>     ```
>
> 1.  **ci**: changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs), e.g.:
>
>     ```shell
>     GH-9-ci-travis-deploy-semantic-release
>     ```
>
> 1.  **docs**: documentation changes, e.g.:
>
>     ```shell
>     GH-3-docs-readme-revise-api
>     ```
>
> 1.  **perf**: change that improves performance, e.g.:
>
>     ```shell
>     GH-6-perf-quicksort
>     ```
>
> 1.  **refactor**: code changes that improve design, but neither fixes a bug nor adds a feature, e.g.:
>
>     ```shell
>     GH-5-refactor-extract-class
>     ```
>
> 1.  **revert**: reverts a previous commit, e.g.:
>
>     ```shell
>     GH-11-revert-7f87cc2
>     ```
>
> 1.  **style**: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc), e.g.:
>
>     ```shell
>     GH-4-style-lint
>     ```
>
> 1.  **test**: add missing tests or correct existing tests, e.g.:
>
>     ```shell
>     GH-7-test-complete-coverage
>     ```

### 6.3. **_Never_** push into the `master` branch. **_Always_** submit a Pull Request

_Why:_

> ⌦ It notifies team members whenever changes occur and allows the community to review your changes at any time.
>
> ⌦ It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

### 6.4. Submit a Pull Request as soon as possible

_Why:_

> ⌦ Pull Requests declare work in progress. Frequent pushes to a Pull Request notify your team members about change, and gives them the opportunity to provide feedback more often.
>
> ⌦ Pull Request pushes also trigger automated CI-services, which help you fail fast and assess quality.

### 6.5. Add reviewers and the label `Status: Needs Review` when the topic branch is ready

_Why:_

> ⌦ When you add a Reviewer, GitHub (or Bitbucket) notifies teammates that your topic branch meets all Acceptance Criteria and is ready to be merged into `master`.
>
> Add the label <kbd>Status: Review Needed</kbd> and someone in the community will take a look.

### 6.6. Delete local and remote topic branches after merging

_Why:_

> ⌦ Topic branches should only exist while work is in-progress. Merged topic branches clutter up your list of branches with dead branches. Topic branch deletion also insures that you only ever merge back into `master`.

### 6.7. Protect the `master` branch

_Why:_

> ⌦ Branch protection prevents production-ready branches from incorporating unexpected and irreversible changes. Learn more about
>
> 1.  [GitHub protected branches](https://help.github.com/articles/about-protected-branches/) and
> 1.  [Bitbucket protected branches](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html).

### 6.8. GitHub workflow

We use the [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow). We _recommend_ [interactive rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), too, but that's not required.

### 6.8.1. Initialize a Git repository in the product directory (_for new repositories only_).

For subsequent features and changes, this step should be ignored.

```sh
cd <product-repo-directory>
git init
```

### 6.8.2. Checkout a new `feat`ure or `fix` branch.

```sh
# For a new feature branch:
git checkout -b GH-<issueId>-feat-scope-of-change

# For branches that address defects:
git checkout -b GH-<issueId>-fix-scope-of-change
```

### 6.8.3. Make Changes.

```sh
git add
git commit -a
```

_Why:_

> ⌦ `git commit -a` will start an editor which lets you separate the subject from the body. Read more about it in _section 1.3_.

### 6.8.4. Follow the Conventional Commits Specification for commit messages.

This project enforces [AngularJS Git Commit Guidelines][git-commit-guidelines-url] (which is now an extension of the [Conventional Commits Specfication][conventional-commits-url]) with [`commitplease`][commitplease-url] pre-commit hooks.

_Why:_

> Consistent, legible Git logs not only facilitate communication, but also enable automated `CHANGELOG` generation and semantic versioning with [`standard-version`][standard-version-url] and [`semantic-release`][semantic-release-url].

---

<details><summary>Click here for conventional commit definitions with examples.</summary><p>

1.  **`BREAKING CHANGES` commit messages**

    Commits that change the public API of your product.

    > ![info][octicon-info] BREAKING CHANGES result in a MAJOR version bump.

    ```shell
    <type>(<scope>): <subject>
    <BLANK LINE>
    BREAKING CHANGE: <Summarize your changes to the public API here.>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>
    ```

1.  **`build` commit messages**

    Issues related to product builds.

    ```shell
    build(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`chore` commit messages**

    Issues related to miscellaneous non-functional changes (usually "maintenance" changes).

    ```shell
    chore(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`ci` commit messages**

    Issues related to continuous integration, delivery, and deployment tasks.

    ```shell
    ci(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`docs` commit messages**

    Issues related to documentation.

    ```shell
    docs(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`feat` (feature) commit messages**

    New feature or enhancement requests.

    ```shell
    feat(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`fix` commit messages**

    Defect (bug) repair issues.

    ```shell
    fix(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`perf` (performance) commit messages**

    Performance improvement issues.

    ```shell
    perf(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`refactor` commit messages**

    Source code design **improvements that do not affect product behavior**.

    ```shell
    refactor(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`revert` commit messages**

    Tasks that revert to a previous commit hash. Your message should begin with `revert:`, followed by the header of the reverted commit.

    In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

    ```shell
    revert: <hash>
    <BLANK LINE>
    This reverts commit <hash>.
    <BLANK LINE>
    <footer>
    ```

1.  **`style` commit messages**

    Issues related to style guideline compliance, especially `ESLint` errors and warnings.

    ```shell
    style(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

1.  **`test` commit messages**

    Test coverage tasks.

    ```shell
    test(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

<p></details>

---

### 6.8.5. Sync with remote to get changes you’ve missed.

```shell
git checkout master
git pull
```

_Why:_

> ⌦ This will give you a chance to deal with conflicts on your machine while rebasing(later) rather than creating a Pull Request that contains conflicts.

### 6.8.6. Update your topic branch with the latest changes from `master` by interactive rebase

```sh
git checkout <branchname>
git rebase -i --autosquash master
```

_Why:_

> ⌦ You can use `--autosquash` to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch.
>
> [Learn more about autosquashing Git commits][autosquashing-git-commits-url].

### 6.2.7. Resolve conflicts (if any occur), and continue rebase

```sh
git add <file1> <file2> ...
git rebase --continue
```

[Learn more about resolving conflicts][git-resolve-conflicts-url].

### 6.2.8. Push your branch with the `-f` flag (if necessary).

Rebase changes history, so you might need to force changes into the `remote` branch with the `-f` flag. If someone else is working on your branch, use the less destructive `--force-with-lease`.

```sh
git push -f
```

_Why:_

> ⌦ When you do a rebase, you are changing the history on your topic branch. As a result, Git will reject normal `git push`. Instead, you'll need to use the -f or --force flag.
>
> [Learn more about `--force-with-lease`][force-with-lease-url].

### 6.2.9. Submit a Pull Request

Once accepted, the Pull request will be approved, merged, closed, and deleted by an administrator.

### 6.2.10. Remove your local topic branch if you're done

```sh
git branch -D <branchname>
```

to remove all branches which are no longer on remote

```sh
git fetch -p && \
  for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; \
    do git branch -D $branch; \
  done
```

## 7. **Code standards**

[![JavaScript Style Guide][standard-js-badge-image]][standard-js-url] [![ESLint logo][eslint-logo-image]][eslint-url]

### 7.1. Use the Standard JS Style

`readme-inspector` follows the [Standard JS Style][standard-js-url].

### 7.2. Use ESLint to analyze source code.

_Why:_

> ⌦ [ESLint][eslint-url] evaluates JavaScript code (and `--fix`es what it can) whenever `npm test` runs. You can run ESLint directly with:

```shell
npm run lint:js
```

>

View [`readme-inspector's` ESLint rules][eslint-rules-table-url] and their enforcement.

## 8. **Unit testing**

[![Jest JavaScript Testing][jest-logo-image]][jest-url]

### 8.1. Write Jest tests

_Why:_

> ⌦ Behavior-driven development specifications are executable documentation.

1.  **Put test files in the `__tests__` directory.**

1.  **Use the `.test.js` suffix for all tests.**

### 8.2. Reach 100% code coverage

_Why:_

> ⌦ Full coverage makes automated dependency drift updates safer, which also allows more people to work on the product at the same time.

1.  View a test coverage summary in the Terminal:


    ```shell
    npm test

    > jest --config=jest.config.json

      PASS  **tests**/app.js
       readme-inspector:app
        ✓ creates files (1ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        2.595s
    Ran all test suites.
    ----------|----------|----------|----------|----------|----------------|
    File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
    ----------|----------|----------|----------|----------|----------------|
    All files |      100 |      100 |      100 |      100 |                |
     index.js |      100 |      100 |      100 |      100 |                |
    ----------|----------|----------|----------|----------|----------------|
    ```

> ![info][octicon-info] Open `/lib/__tests__/coverage/lcov-report/index.html` in a Web browser to view detailed coverage reports.

## 9. **Directory structure**

<img align="bottom" alt="file-directory" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg">

> ![info][octicon-info] `node_modules` has been excluded for brevity.

```text

```

## 10. **Logging**

<img align="botom" alt="eye" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg"> `readme-inspector` uses [`bunyan`](https://github.com/trentm/node-bunyan) for logging.

## 11. **Dependencies**

<img align="bottom" alt="package" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg">

### 11.1. Production

`readme-inspector` requires the following dependencies to operate.

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:production=true) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
 | [@octokit/rest@15.2.6](https://github.com/octokit/rest.js#readme) | GitHub REST API client for Node.js | 15.2.6 | MIT | production | 
 | [bunyan@1.8.12](https://github.com/trentm/node-bunyan#readme) | a JSON logging library for node.js services | 1.8.12 | MIT | production | 
 | [bunyan-format@0.2.1](https://github.com/thlorenz/bunyan-format) | Writable stream that formats bunyan records that are piped into it. | 0.2.1 | [object Object] | production | 
 | [dotenv@5.0.1](https://github.com/motdotla/dotenv#readme) | Loads environment variables from .env file | 5.0.1 | BSD-2-Clause | production | 
 | [dotenv-extended@2.0.2](https://github.com/keithmorris/node-dotenv-extended#readme) | A module for loading .env files and optionally loading defaults and a schema for validating all values are present. | 2.0.2 | MIT | production | 
 | [got@8.3.0](https://github.com/sindresorhus/got#readme) | Simplified HTTP requests | 8.3.0 | MIT | production | 
 | [insight@0.10.1](https://github.com/yeoman/insight#readme) | Understand how your tool is being used by anonymously reporting usage metrics to Google Analytics or Yandex.Metrica | 0.10.1 | BSD-2-Clause | production | 
 | [lodash.camelcase@4.3.0](https://lodash.com/) | The lodash method `_.camelCase` exported as a module. | 4.3.0 | MIT | production | 
 | [lodash.mapkeys@4.6.0](https://lodash.com/) | The lodash method `_.mapKeys` exported as a module. | 4.6.0 | MIT | production | 
 | [lodash.noop@3.0.1](https://lodash.com/) | The lodash method `_.noop` exported as a module. | 3.0.1 | MIT | production | 
 | [meow@4.0.0](https://github.com/sindresorhus/meow#readme) | CLI app helper | 4.0.0 | MIT | production | 
<!-- AUTO-GENERATED-CONTENT:END -->

### 11.2. Development

`readme-inspector` uses the the following dependencies to build, test, or deploy:

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:dev=true) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
 | [@semantic-release/changelog@2.0.1](https://github.com/semantic-release/changelog#readme) | Set of semantic-release plugins for creating or updating a changelog file | 2.0.1 | MIT | dev | 
 | [@semantic-release/git@4.0.2](https://github.com/semantic-release/git#readme) | Set of semantic-release plugins to publish to a git repository | 4.0.2 | MIT | dev | 
 | [@semantic-release/npm@3.2.4](https://github.com/semantic-release/npm#readme) | Set of semantic-release plugins to publish to a npm registry | 3.2.4 | MIT | dev | 
 | [ajv@6.4.0](https://github.com/epoberezkin/ajv) | Another JSON Schema Validator | 6.4.0 | MIT | dev | 
 | [ajv-keywords@3.1.0](https://github.com/epoberezkin/ajv-keywords#readme) | Custom JSON-Schema keywords for Ajv validator | 3.1.0 | MIT | dev | 
 | [codacy-coverage@2.1.1](https://github.com/codacy/node-codacy-coverage) | Code Coverage reporter for Codacy.com | 2.1.1 | MIT | dev | 
 | [commitplease@3.2.0](https://github.com/jzaefferer/commitplease#readme) | Validates strings as commit messages | 3.2.0 | MIT | dev | 
 | [coveralls@3.0.0](https://github.com/nickmerwin/node-coveralls#readme) | takes json-cov output into stdin and POSTs to coveralls.io | 3.0.0 | BSD-2-Clause | dev | 
 | [eslint@4.19.1](https://eslint.org) | An AST-based pattern checker for JavaScript. | 4.19.1 | MIT | dev | 
 | [eslint-config-prettier@^2.4.0](https://github.com/prettier/eslint-config-prettier#readme) | Turns off all rules that are unnecessary or might conflict with Prettier. | 2.9.0 | MIT | dev | 
 | [eslint-config-scanjs@1.0.0-beta4](https://github.com/mozfreddyb/eslint-config-scanjs#readme) | umbrella config to get scanjs-like functionality from eslint | 1.0.0-beta4 | MPL-2.0 | dev | 
 | [eslint-config-standard@11.0.0](https://github.com/standard/eslint-config-standard) | JavaScript Standard Style - ESLint Shareable Config | 11.0.0 | MIT | dev | 
 | [eslint-config-xo@0.20.1](https://github.com/xojs/eslint-config-xo#readme) | ESLint shareable config for XO | 0.20.1 | MIT | dev | 
 | [eslint-plugin-import@2.11.0](https://github.com/benmosher/eslint-plugin-import) | Import with sanity. | 2.11.0 | MIT | dev | 
 | [eslint-plugin-jsdoc@3.6.3](https://github.com/gajus/eslint-plugin-jsdoc#readme) | JSDoc linting rules for ESLint. | 3.6.3 | BSD-3-Clause | dev | 
 | [eslint-plugin-json@1.2.0](https://github.com/azeemba/eslint-plugin-json#readme) | Lint JSON files | 1.2.0 | ISC | dev | 
 | [eslint-plugin-no-unsafe-innerhtml@1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/) | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML | 1.0.16 | MPL-2.0 | dev | 
 | [eslint-plugin-node@6.0.1](https://github.com/mysticatea/eslint-plugin-node#readme) | Additional ESLint's rules for Node.js | 6.0.1 | MIT | dev | 
 | [eslint-plugin-prettier@^2.2.0](https://github.com/prettier/eslint-plugin-prettier#readme) | Runs prettier as an eslint rule | 2.6.0 | MIT | dev | 
 | [eslint-plugin-promise@3.7.0](https://github.com/xjamundx/eslint-plugin-promise#readme) | Enforce best practices for JavaScript promises | 3.7.0 | ISC | dev | 
 | [eslint-plugin-security@1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme) | Security rules for eslint | 1.4.0 | Apache-2.0 | dev | 
 | [eslint-plugin-standard@3.0.1](https://github.com/xjamundx/eslint-plugin-standard#readme) | ESlint Plugin for the Standard Linter | 3.0.1 | MIT | dev | 
 | [eslint-plugin-unicorn@4.0.3](https://github.com/sindresorhus/eslint-plugin-unicorn#readme) | Various awesome ESLint rules | 4.0.3 | MIT | dev | 
 | [eslint-plugin-xss@0.1.9](https://github.com/Rantanen/eslint-plugin-xss#readme) | Validates XSS related issues of mixing HTML and non-HTML content in variables. | 0.1.9 | ISC | dev | 
 | [fixpack@2.3.1](https://github.com/henrikjoreteg/fixpack) | cli tool that cleans up package.json files. | 2.3.1 | MIT | dev | 
 | [husky@^0.14.3](https://github.com/typicode/husky) | Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...) | 0.14.3 | MIT | dev | 
 | [jest@22.4.3](http://facebook.github.io/jest/) | Delightful JavaScript Testing. | 22.4.3 | MIT | dev | 
 | [jest-runner-eslint@0.4.0](https://github.com/jest-community/jest-runner-eslint) | An experimental ESLint runner for Jest | 0.4.0 | MIT | dev | 
 | [jsdoc@3.5.5](https://github.com/jsdoc3/jsdoc#readme) | An API documentation generator for JavaScript. | 3.5.5 | Apache-2.0 | dev | 
 | [lec@^1.0.1](https://github.com/iShafayet/lec) | Command Line Wrapper for Line Ending Corrector (An utility that makes sure your files have consistent line endings) | 1.0.1 | MIT | dev | 
 | [lint-staged@7.0.4](https://github.com/okonet/lint-staged#readme) | Lint files staged by git | 7.0.4 | MIT | dev | 
 | [lodash.isundefined@3.0.1](https://lodash.com/) | The modern build of lodash’s `_.isUndefined` as a module. | 3.0.1 | MIT | dev | 
 | [lodash.set@4.3.2](https://lodash.com/) | The lodash method `_.set` exported as a module. | 4.3.2 | MIT | dev | 
 | [markdown-magic@0.1.21](https://github.com/DavidWells/markdown-magic#readme) | Automatically update markdown files with content from external sources | 0.1.21 | MIT | dev | 
 | [markdown-magic-dependency-table@1.3.2](https://github.com/camacho/markdown-magic-dependency-table#readme) | Generate table of information about dependencies automatically in markdown | 1.3.2 | MIT | dev | 
 | [markdown-magic-install-command@1.3.1](https://github.com/camacho/markdown-magic-install-command#readme) | Print install command for markdown file | 1.3.1 | MIT | dev | 
 | [markdown-magic-package-scripts@1.2.1](https://github.com/camacho/markdown-magic-package-scripts#readme) | Print list of scripts in package.json with descriptions | 1.2.1 | MIT | dev | 
 | [minami@1.2.3](https://github.com/Nijikokun/minami) | Clean and minimal JSDoc 3 Template / Theme | 1.2.3 | UNLICENSED | dev | 
 | [nsp@^3.2.1](https://github.com/nodesecurity/nsp#readme) | The Node Security (nodesecurity.io) command line interface | 3.2.1 | Apache-2.0 | dev | 
 | [prettier@1.12.1](https://prettier.io) | Prettier is an opinionated code formatter | 1.12.1 | MIT | dev | 
 | [semantic-release@15.1.7](https://github.com/semantic-release/semantic-release#readme) | Automated semver compliant package publishing | 15.1.7 | MIT | dev | 
 | [standard-markdown@4.0.2](https://github.com/zeke/standard-markdown#readme) | Test your Markdown files for Standard JavaScript Style™ | 4.0.2 | MIT | dev | 
 | [standard-version@4.3.0](https://github.com/conventional-changelog/standard-version#readme) | replacement for `npm version` with automatic CHANGELOG generation | 4.3.0 | ISC | dev | 
<!-- AUTO-GENERATED-CONTENT:END -->

## 12. **Licensing**

<img align="left" alt="law" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg"> Make sure you use resources that you have the rights to use. If you use libraries, remember to look for MIT, Apache or BSD but if you modify them, then take a look into license details. Copyrighted images and videos may cause legal problems.

<!-- ⛔️  Do not remove anything below this comment. ⛔️  -->

[all-contributors-cli-url]: https://github.com/kentcdodds/all-contributors
[autosquashing-git-commits-url]: https://robots.thoughtbot.com/autosquashing-git-commits
[changelog-url]: ./CHANGELOG.md
[cite-interview-torvalds-url]: https://techcrunch.com/2012/04/19/an-interview-with-millenium-technology-prize-finalist-linus-torvalds/
[cla-url]: https://www.clahub.com/agreements/commonality/readme-inspector
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[commitplease-url]: https://www.npmjs.com/package/commitplease
[commonality-palette-image]: ./assets/img/palette.svg
[contributing-url]: ./CONTRIBUTING.md
[contribution-lifecycle-issues-image]: ./assets/img/icons8/contribution-lifecycle-create-issue.png
[contribution-lifecycle-pr-image]: ./assets/img/icons8/contribution-lifecycle-pr.png
[conventional-commits-url]: https://conventionalcommits.org
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[eslint-logo-image]: ./assets/img/logo-eslint.png
[eslint-rules-table-url]: .github/eslint-rules-table.md
[eslint-url]: https://eslint.org
[force-with-lease-url]: https://developer.atlassian.com/blog/2015/04/force-with-lease/
[fossa-image-large]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Forganization%2Frepo-name.svg?type=large
[gh-create-account-url]: https://github.com/signup/free
[gh-git-labelmaker-url]: https://github.com/himynameisdave/git-labelmaker
[gh-try-github-url]: https://try.github.io/levels/1/challenges/1
[git-commit-guidelines-url]: https://github.com/commonality/readme-inspector.js/blob/master/CONTRIBUTING.md#commit
[git-resolve-conflicts-url]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
[icon-bitbucket-20-image]: ./assets/img/icons8/icon-bitbucket-20.png
[icon-git-logo-image]: ./assets/img/icons8/git-logo.png
[icon-github-20-image]: ./assets/img/icons8/icon-github-filled-20.png
[icon-info-image]: ./assets/img/icons8/icon-info-50.png
[icon-issue-image]: ./assets/img/icons8/icon-issues.png
[icon-pr-image]: ./assets/img/icons8/icon-pr.png
[icon-rest-api-image]: ./assets/img/icons8/icon-rest-api.png
[issues-new-defect-image]: https://img.shields.io/badge/report-defect-F5CB5C.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: /commonality/readme-inspector.git/issues/new?title=defect%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-defect-url]: https://github.com/commonality/readme-inspector/issues/new?title=defect%28scope%29%3A+summary-of-problem&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-image]: https://img.shields.io/badge/request-feature-c1ccc6.svg?style=for-the-badge&label=request+a
[issues-new-feat-url]: /commonality/readme-inspector.git/issues/new?title=feat%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: https://github.com/commonality/readme-inspector/issues/new?title=feat%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: /commonality/readme-inspector/issues
[issues-url]: https://github.com/commonality/readme-inspector/issues
[jest-logo-image]: ./assets/img/logo-jest.png
[jest-url]: https://facebook.github.io/jest/
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[osi-logo-image]: ./assets/img/logo-osi.png
[product-development-guidelines-url]: ./assets/product-development-guidelines/js/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[product-repo-logo-image]: ./assets/img/logo-commonalaxy.png
[product-repo-url]: https://github.com/commonality/common-vocabular
[stackshare-badge-image]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat-square
[stackshare-url]: https://stackshare.io/commonality/readme-inspector
[standard-js-badge-image]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[standard-js-url]: https://github.com/standard/standard
[standard-version-url]: https://github.com/semantic-release/semantic-releasehttps://github.com/conventional-changelog/standard-version
[tech-stack-image]: ./assets/img/icons8/icon-package-filled.png
[semantic-release-url]: https://github.com/semantic-release/semantic-release

<!-- ⛔️ LINK REFERENCES(Begin) ⛔️  -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
[toc]: #table-of-contents
