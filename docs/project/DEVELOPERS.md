# Building and testing readme-inspector

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
- [5. Formatting and verifying your sources](#5-formatting-and-verifying-your-sources)
- [6. Git guidelines](#6-git-guidelines)
  * [6.1. Makes changes in a topic branch](#61-makes-changes-in-a-topic-branch)
  * [6..2. Favor the topic branch naming convention `GH-{ISSUE_NUMBER}-type-scope`](#62-favor-the-topic-branch-naming-convention-gh-issue_number-type-scope)
  * [6.3. Branch out from `master`.](#63-branch-out-from-master)
  * [6.4. **_Never_**. push into the `master` branch. **_Always_** submit a Pull Request](#64-_never_-push-into-the-master-branch-_always_-submit-a-pull-request)
  * [6.5. Submit a Pull Request as soon as possible.](#65-submit-a-pull-request-as-soon-as-possible)
  * [6.6. Rebase your local `master` branch before you ask for PR approvals.](#66-rebase-your-local-master-branch-before-you-ask-for-pr-approvals)
  * [6.7. Resolve rebase conflicts before Pull Request reviews.](#67-resolve-rebase-conflicts-before-pull-request-reviews)
  * [6.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.](#68-add-reviewers-and-the-label-status-needs-review-when-the-topic-branch-is-ready)
  * [6.9. Delete local and remote topic branches after merging.](#69-delete-local-and-remote-topic-branches-after-merging)
  * [6.10. Protect your `master` branch.](#610-protect-your-master-branch)
  * [6.2. **Feature-branch-workflow**](#62-feature-branch-workflow)
  * [6.2.1. Initialize a Git repository in the product directory (_for new repositories only_).](#621-initialize-a-git-repository-in-the-product-directory-_for-new-repositories-only_)
  * [6.2.2. Checkout a new `feat`ure or `fix` branch.](#622-checkout-a-new-feature-or-fix-branch)
  * [6.2.3. Make Changes.](#623-make-changes)
  * [6.2.4. Follow the Conventional Commits Specification for commit messages.](#624-follow-the-conventional-commits-specification-for-commit-messages)
  * [6.2.5. Sync with remote to get changes you’ve missed.](#625-sync-with-remote-to-get-changes-youve-missed)
  * [6.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.](#626-update-your-topic-branch-with-the-latest-changes-from-master-by-interactive-rebase)
  * [6.2.7. Resolve conflicts (if any occur), and continue rebase.](#627-resolve-conflicts-if-any-occur-and-continue-rebase)
  * [6.2.8. Push your branch with the `-f` flag (if necessary).](#628-push-your-branch-with-the--f-flag-if-necessary)
  * [6.2.9. Submit a Pull Request.](#629-submit-a-pull-request)
  * [6.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.](#6210-once-accepted-the-pull-request-will-be-merged-closed-and-deleted-by-an-administrator)
  * [6.2.11. Remove your local topic branch if you're done.](#6211-remove-your-local-topic-branch-if-youre-done)
- [3. **Code standards**](#3-code-standards)
  * [3.1. Use the Standard JS Style.](#31-use-the-standard-js-style)
  * [3.2. Use ESLint to analyze source code.](#32-use-eslint-to-analyze-source-code)
- [4. **Unit testing**](#4-unit-testing)
  * [4.1. Write Jest tests.](#41-write-jest-tests)
  * [4.2. Reach 100% code coverage.](#42-reach-100%25-code-coverage)
- [5. **Directory structure**](#5-directory-structure)
- [6. **Logging**](#6-logging)
- [7. **Dependencies**](#7-dependencies)
  * [7.1. Production](#71-production)
  * [7.2. Development](#72-development)
  * [7.3. Optional](#73-optional)
- [8. **APIs**](#8-apis)
  * [8.1 **API design**](#81-api-design)
  * [8.2 **API security**](#82-api-security)
  * [8.3 **API documentation**](#83-api-documentation)
- [9. **Licensing**](#9-licensing)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END ⛔️ -->

## 1. Prerequisite software

Before you can build and test readme-inspector, you must install and configure the
following products on your development machine:

1.  [Git](http://git-scm.com) and/or the \**GitHub app*1. (for [Mac](http://mac.github.com) or
    [Windows](http://windows.github.com)); [GitHub's Guide to Installing
    Git](https://help.github.com/articles/set-up-git) is a good source of information.

1.  [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](../package.json)) which is used to run a development web server,
    run tests, and generate distributable files.

1.  [NPM](https://yarnpkg.com) (version specified in the engines field of [`package.json`](../package.json)) which is used to install dependencies.

## 2. Getting the source code

Fork and clone the readme-inspector repository:

1.  [**Sign in**](https://github.com/login) to your GitHub account or [sign up for a (free) GitHub account](https://github.com/join).
2.  [**Fork**](http://help.github.com/forking) the [main readme-inspector repository](https://github.com/commonality/readme-inspector) (aka, "`origin`").
3.  \**Clone your fork*1. of the readme-inspector repository and define an `upstream` remote pointing back to the readme-inspector repository that you forked in the first place.

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

![info][octicon-info] There are no build tasks for versions <samp>1.x.x</samp> of readme-inspector.

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

All the tests are executed on our Continuous Integration infrastructure and a PR could only be merged once the tests pass.

1.  CircleCI fails if your code is not formatted properly,
1.  Travis CI fails if any of the test suites described above fails.

## 5. Formatting and verifying your sources

![verified][octicon-verified] readme-inspector uses

1.  [ESLint](http://clang.llvm.org/docs/ClangFormat.html) to evaluate and format source code;
1.  [Fixpack]() to order all `package.json` properties in alphabetical order; and
1.  [Prettier]() to format JSON, Markdown, and YAML.

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

## 6. Git guidelines

![Git Logo][icon-git-logo-image]

`readme-inspector` manages contributions with the [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow).

### 6.1. Makes changes in a topic branch

_Why:_

> ⌦ Use an isolated topic branch for parallel product development. Topic branches allow you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. The `readme-inspector` team uses:
>
> 1.  [Feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow) for small-ish codebases, or
> 1.  [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) for large applications and monoliths

### 6..2. Favor the topic branch naming convention `GH-{ISSUE_NUMBER}-type-scope`

_Why:_

> ⌦ Although not required, our team prefixes branches with the GitHub issue number, followed by the type of change being introduced, followed by the scope of changes.
>
> **Examples:**
>
> 1.  **feat**: a new feature, e.g., `GH-1-feat-cli-add-authz`.
> 1.  **fix**: a defect/bug repair, e.g., `GH-2-fix-api-logging-error`.
> 1.  **build**: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm), e.g., `GH-8-build-add-markdown-toc`.
> 1.  **chore**: changes that don't modify src or test files, e.g., `GH-10-remove-unused-files`.
> 1.  **ci**: changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs), e.g., `GH-9-ci-travis-deploy-semantic-release`.
> 1.  **docs**: documentation changes, e.g., `GH-3-docs-readme-revise-api`.
> 1.  **perf**: change that improves performance `GH-6-perf-quicksort`.
> 1.  **refactor**: code changes that improve design, but neither fixes a bug nor adds a feature, e.g., `GH-5-refactor-extract-class`.
> 1.  **revert**: reverts a previous commit, e.g., `GH-11-revert-7f87cc2`.
> 1.  **style**: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc), e.g., `GH-4-style-lint`.
> 1.  **test**: add missing tests or correct existing tests, e.g., `GH-7-test-complete-coverage`.

### 6.3. Branch out from `master`.

_Why:_

> ⌦ `readme-inspector` follows the feature-branch-workflow.

### 6.4. **_Never_**. push into the `master` branch. **_Always_** submit a Pull Request

_Why:_

> ⌦ It notifies team members whenever changes occur and allows the community to review your changes at any time..
>
> It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

### 6.5. Submit a Pull Request as soon as possible.

_Why:_

> ⌦ Pull Requests declare work in progress. Frequent pushes to a Pull Request notify your team members about change, and gives them the opportunity to provide feedback more often.
>
> Pull Request pushes also trigger automated CI-services, which help you fail fast and assess quality.

### 6.6. Rebase your local `master` branch before you ask for PR approvals.

_Why:_

> ⌦ Rebasing will merge in the requested branch (`master` or `develop`) and apply the commits that you have made locally to the top of the history without creating a merge commit (assuming there were no conflicts). This results in a nice and clean history.

### 6.7. Resolve rebase conflicts before Pull Request reviews.

_Why:_

> ⌦ Rebasing will merge in the `master` branch and apply the commits that you have made locally to the top of it.

### 6.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.

_Why:_

> ⌦ When you add a Reviewer, GitHub (or Bitbucket) notifies teammates that your topic branch meets all Acceptance Criteria and is ready to be merged into `master`.
>
> Add the label "Status: Review Needed" formally declares the status of your topic branch, and helps teams filter through issues.

### 6.9. Delete local and remote topic branches after merging.

_Why:_

> ⌦ Topic branches should only exist while work is in-progress. Merged topic branches clutter up your list of branches with dead branches. Topic branch deletion also insures that you only ever merge back into `master`.

### 6.10. Protect your `master` branch.

_Why:_

> ⌦ Branch protection prevents production-ready branches from incorporating unexpected and irreversible changes. Learn more about
>
> 1.  [GitHub protected branches](https://help.github.com/articles/about-protected-branches/) and
> 1.  [Bitbucket protected branches](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html).

### 6.2. **Feature-branch-workflow**

We use the [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow). We _recommend_ [interactive rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), too, but that's not required.

### 6.2.1. Initialize a Git repository in the product directory (_for new repositories only_).

For subsequent features and changes, this step should be ignored.

```sh
cd <product-repo-directory>
git init
```

### 6.2.2. Checkout a new `feat`ure or `fix` branch.

```sh
# For a new feature branch:
git checkout -b GH-<issueId>-feat-scope-of-change

# For branches that address defects:
git checkout -b GH-<issueId>-fix-scope-of-change
```

### 6.2.3. Make Changes.

```sh
git add
git commit -a
```

_Why:_

> ⌦ `git commit -a` will start an editor which lets you separate the subject from the body. Read more about it in _section 1.3_.

### 6.2.4. Follow the Conventional Commits Specification for commit messages.

This project enforces [AngularJS Git Commit Guidelines][git-commit-guidelines-url] (which is now an extension of the [Conventional Commits Specfication][conventional-commits-url]) with [`commitplease`][commitplease-url] pre-commit hooks.

_Why:_

> Consistent, legible Git logs not only facilitate communication, but also enable automated `CHANGELOG` generation and semantic versioning with [`standard-version`][standard-version-url].

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

### 6.2.5. Sync with remote to get changes you’ve missed.

```shell
git checkout master
git pull
```

_Why:_

> ⌦ This will give you a chance to deal with conflicts on your machine while rebasing(later) rather than creating a Pull Request that contains conflicts.

### 6.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.

```sh
git checkout <branchname>
git rebase -i --autosquash master
```

_Why:_

> ⌦ You can use `--autosquash` to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch.
>
> [Learn more about autosquashing Git commits][autosquashing-git-commits-url].

### 6.2.7. Resolve conflicts (if any occur), and continue rebase.

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

### 6.2.9. Submit a Pull Request.

### 6.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.

### 6.2.11. Remove your local topic branch if you're done.

```sh
git branch -d <branchname>
```

to remove all branches which are no longer on remote

```sh
git fetch -p && \
  for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; \
    do git branch -D $branch; \
  done
```

## 3. **Code standards**

[![JavaScript Style Guide][standard-js-badge-image]][standard-js-url] [![ESLint logo][eslint-logo-image]][eslint-url]

### 3.1. Use the Standard JS Style.

`readme-inspector` follows the [Standard JS Style][standard-js-url].

### 3.2. Use ESLint to analyze source code.

_Why:_

> ⌦ [ESLint][eslint-url] evaluates JavaScript code (and `--fix`es what it can) whenever `npm test` runs. You can run ESLint directly with:

```shell
npm run lint:js
```

>

View [`readme-inspector's` ESLint rules][eslint-rules-table-url] and their enforcement.

## 4. **Unit testing**

[![Jest JavaScript Testing][jest-logo-image]][jest-url]

### 4.1. Write Jest tests.

_Why:_

> ⌦ Behavior-driven development specifications are executable documentation.

1.  **Put test files in the \*\*test\*\1. directory.**

1.  **Use the `.spec.js` suffix for all tests.**

### 4.2. Reach 100% code coverage.

_Why:_

> ⌦ Full coverage makes automated dependency drift updates safer.

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

1.  Open `/coverage/lcov-report/index.html` in a Web browser to view detailed coverage reports.

## 5. **Directory structure**

> `node_modules` has been excluded for brevity.

```text

```

## 6. **Logging**

`readme-inspector` uses [`bunyan`](https://github.com/trentm/node-bunyan) for logging.

## 7. **Dependencies**

### 7.1. Production

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

### 7.2. Development

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

### 7.3. Optional

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:optional=true) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
<!-- AUTO-GENERATED-CONTENT:END -->

## 8. **APIs**

![APIs][icon-rest-api-image]

### 8.1 **API design**

We try to enforce development of sanely constructed RESTful interfaces, which team members and clients can consume simply and consistently.

Lack of consistency and simplicity can massively increase integration and maintenance costs, which is why `API design` is included in this document.

1.  We mostly follow resource-oriented design. It has three main factors: resources, collection, and URLs.

1.  A resource has data, gets nested, and there are methods that operate against it.
1.  A group of resources is called a collection.
1.  URL identifies the online location of resource or collection.

    _Why:_

    > ⌦ This is a very well-known design to developers (your main API consumers). Apart from readability and ease of use, it allows us to write generic libraries and connectors without even knowing what the API is about.

1.  Use kebab-case for URLs.
1.  Use camelCase for parameters in the query string or resource fields.
1.  Use plural kebab-case for resource names in URLs.

1.  Always use a plural nouns for naming a url pointing to a collection: `/users`.

    _Why:_

    > ⌦ Basically, it reads better and keeps URLs consistent. [read more...](https://apigee.com/about/blog/technology/restful-api-design-plural-nouns-and-concrete-names)

1.  In the source code convert plurals to variables and properties with a List suffix.

    _Why_:

    > ⌦ Plural is nice in the URL but in the source code, it’s just too subtle and error-prone.

1.  Always use a singular concept that starts with a collection and ends to an identifier:

    ```http
    /students/245743
    /airports/kjfk
    ```

1.  Avoid URLs like this:

    ```http
    GET /blogs/:blogId/posts/:postId/summary
    ```

    _Why:_

    > ⌦ This is not pointing to a resource but to a property instead. You can pass the property as a parameter to trim your response.

1.  Keep verbs out of your resource URLs.

    _Why:_

    > ⌦ Because if you use a verb for each resource operation you soon will have a huge list of URLs and no consistent pattern which makes it difficult for developers to learn. Plus we use verbs for something else.

1.  Use verbs for non-resources. In this case, your API doesn't return any resources. Instead, you execute an operation and return the result. These \**are not*1. CRUD (create, retrieve, update, and delete) operations:

    ```http
    /translate?text=Hallo
    ```

    _Why:_

    > ⌦ Because for CRUD we use HTTP methods on `resource` or `collection` URLs. The verbs we were talking about are actually `Controllers`. You usually don't develop many of these. [read more...](https://byrondover.github.io/post/restful-api-guidelines/#controller)

1.  The request body or response type is JSON then please follow `camelCase` for `JSON` property names to maintain the consistency.

    _Why:_

    > ⌦ This is a JavaScript project guideline, Where Programming language for generating JSON as well as Programming language for parsing JSON are assumed to be JavaScript.

1.  Even though a resource is a singular concept that is similar to an object instance or database record, you should not use your `table_name` for a resource name and `column_name` resource property.

    _Why:_

    > ⌦ Because your intention is to expose Resources, not your database schema details.

1.  Again, only use nouns in your URL when naming your resources and don’t try to explain their functionality.

    _Why:_

    > ⌦ Only use nouns in your resource URLs, avoid endpoints like `/addNewUser` or `/updateUser` . Also avoid sending resource operations as a parameter.

1.  Explain the CRUD functionalities using HTTP methods:

    _How:_

    > `GET`: Retrieve a representation of a resource.
    >
    > `POST`: Create new resources and sub-resources.
    >
    > `PUT`: Replace existing resources.
    >
    > `PATCH`: Update existing resources. It only updates the fields that were supplied, leaving the others alone.
    >
    > `DELETE`: Delete existing resources.

1.  For nested resources, use the relation between them in the URL. For instance, using `id` to relate an employee to a company.

    _Why:_

    > ⌦ This is a natural way to make resources explorable.
    >
    > _How:_
    >
    > `GET /schools/2/students` , should get the list of all students from school 2.
    >
    > `GET /schools/2/students/31` , should get the details of student 31, which belongs to school 2.
    >
    > `DELETE /schools/2/students/31` , should delete student 31, which belongs to school 2.
    >
    > `PUT /schools/2/students/31` , should update info of student 31, Use PUT on resource-URL only, not collection.
    >
    > `POST /schools` , should create a new school and return the details of the new school created. Use POST on collection-URLs.

1.  Use a simple ordinal number for a version with a `v` prefix (v1, v2). Move it all the way to the left in the URL so that it has the highest scope:

    ```http
    http://api.domain.com/v1/schools/3/students
    ```

    _Why:_

    > ⌦ When your APIs are public for other third parties, upgrading the APIs with some breaking change would also lead to breaking the existing products or services using your APIs. Using versions in your URL can prevent that from happening. [read more...](https://apigee.com/about/blog/technology/restful-api-design-tips-versioning)

1.  Response messages must be self-descriptive. A good error message response might look something like this:

    ```json
    {
      "code": 404,
      "level": "ERROR",
      "logger": "[http-logger]",
      "message":
        "No resource found at URL /archetypes/v1/locales/iso-country-codes/BS",
      "timestamp": 1504878062000
    }
    ```

    or for validation errors:

    ```json
    {
      "code": 400,
      "logger": "[registration-form-logger]",
      "level": "ERROR",
      "timestamp": 1504878062000,
      "message": "Validation Failed",
      "stack": [
        {
          "code": 1233,
          "field": "email",
          "message": "Invalid email"
        },
        {
          "code": 1234,
          "field": "password",
          "message": "No password provided"
        }
      ]
    }
    ```

    _Why:_

    > ⌦ Developers depend on well-designed errors at the critical times when they are troubleshooting and resolving issues after the applications they've built using your APIs are in the hands of their users.

    ---

    _![alert][octicon-alert] **Keep security exception messages as generic as possible.**_ For instance, instead of saying ‘incorrect password’, you can reply back saying ‘invalid username or password’ so that we don’t unknowingly inform user that username was indeed correct and only the password was incorrect.

    ---

1.  Use only these 8 status codes to send with you response to describe whether **everything worked**,
    The **client app did something wrong\*1. or The **API did something wrong\*\*.

    _Which ones:_

    > `200 OK` response represents success for `GET`, `PUT` or `POST` requests.
    >
    > `201 Created` for when new instance is created. Creating a new instance, using `POST` method returns `201` status code.
    >
    > `304 Not Modified` response is to minimize information transfer when the recipient already has cached representations.
    >
    > `400 Bad Request` for when the request was not processed, as the server could not understand what the client is asking for.
    >
    > `401 Unauthorized` for when the request lacks valid credentials and it should re-request with the required credentials.
    >
    > `403 Forbidden` means the server understood the request but refuses to authorize it.
    >
    > `404 Not Found` indicates that the requested resource was not found.
    >
    > `500 Internal Server Error` indicates that the request is valid, but the server could not fulfill it due to some unexpected condition.

    _Why:_

    > ⌦ Most API providers use a small subset HTTP status codes. For example, the Google GData API uses only 10 status codes, Netflix uses 9, and Digg, only 8. Of course, these responses contain a body with additional information.There are over 70 HTTP status codes. However, most developers don't have all 70 memorized. So if you choose status codes that are not very common you will force application developers away from building their apps and over to wikipedia to figure out what you're trying to tell them. [read more...](https://apigee.com/about/blog/technology/restful-api-design-what-about-errors)

1.  Provide total numbers of resources in your response.
1.  Accept `limit` and `offset` parameters.

1.  The amount of data the resource exposes should also be taken into account. The API consumer doesn't always need the full representation of a resource.Use a fields query parameter that takes a comma separated list of fields to include:

    ```http
    GET /student?fields=id,name,age,class
    ```

1.  Pagination, filtering, and sorting don’t need to be supported from start for all resources. Document those resources that offer filtering and sorting.

### 8.2 **API security**

These are some basic security best practices:

1.  Don't use basic authentication unless over a secure connection (HTTPS). Authentication tokens must not be transmitted in the URL: `GET /users/123?token=asdf....`

    _Why:_

    > ⌦ Because Token, or user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. [read more...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

1.  Tokens must be transmitted using the Authorization header on every request: `Authorization: Bearer xxxxxx, Extra yyyyy`.

1.  Authorization Code should be short-lived.

1.  Reject any non-TLS requests by not responding to any HTTP request to avoid any insecure data exchange. Respond to HTTP requests by `403 Forbidden`.

1.  Consider using Rate Limiting.

    _Why:_

    > ⌦ To protect your APIs from bot threats that call your API thousands of times per hour. You should consider implementing rate limit early on.

1.  Setting HTTP headers appropriately can help to lock down and secure your web application. [read more...](https://github.com/helmetjs/helmet)

1.  Your API should convert the received data to their canonical form or reject them. Return 400 Bad Request with details about any errors from bad or missing data.

1.  All the data exchanged with the ReST API must be validated by the API.

1.  Serialize your JSON.

    _Why:_

    > ⌦ A key concern with JSON encoders is preventing arbitrary JavaScript remote code execution within the browser... or, if you're using node.js, on the server. It's vital that you use a proper JSON serializer to encode user-supplied data properly to prevent the execution of user-supplied input on the browser.

1.  Validate the content-type and mostly use `application/*json` (Content-Type header).

    _Why:_

    > ⌦ For instance, accepting the `application/x-www-form-urlencoded` mime type allows the attacker to create a form and trigger a simple POST request. The server should never assume the Content-Type. A lack of Content-Type header or an unexpected Content-Type header should result in the server rejecting the content with a `4XX` response.

### 8.3 **API documentation**

1.  Fill the \**API*1. section in the README for API.
1.  Describe API authentication methods with a code sample.
1.  Explaining The URL Structure (path only, no root URL) including The request type (Method). For each endpoint explain:

1.  URL Params If URL Params exist, specify them in accordance with name mentioned in URL section:

    ```http
    Required: id=[integer]
    Optional: photo_id=[alphanumeric]
    ```

1.  If the request type is POST, provide working examples. URL Params rules apply here too. Separate the section into Optional and Required.

1.  \**Success Responses.*1. What should be the status code and is there any return data? This is useful when people need to know what their callbacks should expect:

    ```http
    Code: 200
    Content: { id : 12 }
    ```

1.  \**Error Responses.*1. Most endpoints have many ways to fail. From unauthorized access to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made. For example:


    1. **HTTP status code**

        ```http
        404 Not Found
        ```

    1. **Response body**

        ```json
        {
          "code": 404,
          "level": "ERROR",
          "logger": "[http-logger]",
          "message":
            "No resource found at URL /archetypes/v1/locales/iso-country-codes/BS",
          "timestamp": 1504878062000
        }
        ```

    1. **Response headers**

        ```http
        accept-ranges: bytes
        access-control-allow-headers: Authorization
        access-control-allow-methods: GET, HEAD, OPTIONS
        access-control-allow-origin: *
        cache-control: public, no-transform, must-revalidate
        connection: keep-alive
        content-encoding: gzip
        content-language: en-US
        content-length: 149
        content-type: application/json
        date: Fri, 08 Sep 2017 06:41:02 GMT
        last-modified: Tue, 1 Oct 2014 10:10:10 GMT
        server: nginx/1.12.1
        vary: Accept-Encoding
        ```

1.  Use API design tools, There are lots of open source tools for good documentation such as [API Blueprint](https://apiblueprint.org/) and [Swagger](https://swagger.io/).

## 9. **Licensing**

![Licensing][osi-logo-image]

Make sure you use resources that you have the rights to use. If you use libraries, remember to look for MIT, Apache or BSD but if you modify them, then take a look into license details. Copyrighted images and videos may cause legal problems.

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
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[tech-stack-image]: ./assets/img/icons8/icon-package-filled.png

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
