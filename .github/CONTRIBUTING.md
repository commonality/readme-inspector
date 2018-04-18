# Contributing<br>to `readme-inspector`

[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] We welcome contributors, issues, and pull requests.

<blockquote>
<dfn><strong>Contributions</strong> start with <strong>community conversations</strong> that lead to <strong>positive change.</strong></dfn> <code>readme-inspector's</code> open source collaboration model has five steps:

<dl>
  <dt>1. <dfn>Issues</dfn></dt>
  <dd>Start community conversations that determine whether proposed changes add value and should be made.</dd>
  <dt>2. <dfn>Pull Requests (PRs)</dfn></dt>
  <dd>Inform and manage community code reviews for approved changes in-progress.</dd>
  <dt>3. <dfn>Merges</dfn></dt>
  <dd>Incorporate approved PR changes into the product.</dd>
  <dt>4. <dfn>Releases</dfn></dt>
  <dd>Make changes available for community consumption.</dd>
  <dt>5. <dfn>Support</dfn></dt>
  <dd>Improves the product with refactorings and defect fixes.</dd>
</dl>
</blockquote>

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Issues](#1-issues)
  * [1.1. Create Issues for feature requests and defects.](#11-create-issues-for-feature-requests-and-defects)
  * [1.2. Format titles with **`type(scope): subject`**.](#12-format-titles-with-typescope-subject)
  * [1.3. Fill out the issue template.](#13-fill-out-the-issue-template)
  * [1.4. Label the issue (optional).](#14-label-the-issue-optional)
  * [1.5. Monitor your issue for questions.](#15-monitor-your-issue-for-questions)
  * [1.6. Your issue will be either accepted for work, or declined.](#16-your-issue-will-be-either-accepted-for-work-or-declined)
- [2. **Git**](#2-git)
  * [2.1. **Rules**](#21-rules)
    + [2.1.1. Makes changes in a topic branch.](#211-makes-changes-in-a-topic-branch)
    + [2.1.2. Favor the topic branch naming convention `GH-{ISSUE_NUMBER}-type-scope`.](#212-favor-the-topic-branch-naming-convention-gh-issue_number-type-scope)
    + [2.1.3. Branch out from `master`.](#213-branch-out-from-master)
    + [2.1.4. **_Never_** push into the `master` branch. **_Always_** submit a Pull Request.](#214-_never_-push-into-the-master-branch-_always_-submit-a-pull-request)
    + [2.1.5. Submit a Pull Request as soon as possible.](#215-submit-a-pull-request-as-soon-as-possible)
    + [2.1.6. Rebase your local `master` branch before you ask for PR approvals.](#216-rebase-your-local-master-branch-before-you-ask-for-pr-approvals)
    + [2.1.7. Resolve rebase conflicts before Pull Request reviews.](#217-resolve-rebase-conflicts-before-pull-request-reviews)
    + [2.1.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.](#218-add-reviewers-and-the-label-status-needs-review-when-the-topic-branch-is-ready)
    + [2.1.9. Delete local and remote topic branches after merging.](#219-delete-local-and-remote-topic-branches-after-merging)
    + [2.1.10. Protect your `master` branch.](#2110-protect-your-master-branch)
  * [2.2. **Feature-branch-workflow**](#22-feature-branch-workflow)
    + [2.2.1. Initialize a Git repository in the product directory (_for new repositories only_).](#221-initialize-a-git-repository-in-the-product-directory-_for-new-repositories-only_)
    + [2.2.2. Checkout a new `feat`ure or `fix` branch.](#222-checkout-a-new-feature-or-fix-branch)
    + [2.2.3. Make Changes.](#223-make-changes)
    + [2.2.4. Follow the Conventional Commits Specification for commit messages.](#224-follow-the-conventional-commits-specification-for-commit-messages)
    + [2.2.5. Sync with remote to get changes you’ve missed.](#225-sync-with-remote-to-get-changes-youve-missed)
    + [2.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.](#226-update-your-topic-branch-with-the-latest-changes-from-master-by-interactive-rebase)
    + [2.2.7. Resolve conflicts (if any occur), and continue rebase.](#227-resolve-conflicts-if-any-occur-and-continue-rebase)
    + [2.2.8. Push your branch with the `-f` flag (if necessary).](#228-push-your-branch-with-the--f-flag-if-necessary)
    + [2.2.9. Submit a Pull Request.](#229-submit-a-pull-request)
    + [2.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.](#2210-once-accepted-the-pull-request-will-be-merged-closed-and-deleted-by-an-administrator)
    + [2.2.11. Remove your local topic branch if you're done.](#2211-remove-your-local-topic-branch-if-youre-done)
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
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Issues

<img align="bottom" alt="issues" height="80" width="80" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg">

* **Collaboration starts with _Issues_. Changes happen through _Pull Requests_.**

  View `readme-inspector's` collaboration and contribution flowcharts:

  ---

  <details>

    <summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg" alt="Help" align="middle" height="48" width="48"> Toggle view of the <strong>Issue workflow</strong> flowchart.</summary>

  ![Issue flowchart][contribution-lifecycle-issues-image]

  </details>

  ---

  <details>

    <summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg" alt="Help" align="middle" height="48" width="48"> Toggle view of the <strong>Pull Request workflow</strong> flowchart.</summary>

  ![Pull Request flowchart][contribution-lifecycle-pr-image]

  </details>

  ---

* ### 1.1. Create Issues for feature requests and defects.

  _Why:_

  > ⌦ `readme-inspector` follows an issue-driven product delivery model.
  > Before any work is done, create an Issue, first. This starts a
  > conversation about features, defects ("bugs"), refactoring, product
  > delivery improvements, etc.

  Go ahead! Get started now:

  * [![Request a feature][issues-new-feat-image]][issues-new-feat-url]

  * [![Report a defect][issues-new-defect-image]][issues-new-defect-url]

  * [Review all open issues][issues-url]

* ### 1.2. Format titles with **`type(scope): subject`**.

  _Why:_

  > ⌦`type` categorizes product changes. Valid types are:
  >
  > * `build`: Changes that affect the build system or external dependencies.
  > * `ci`: Changes related to continuous integration, delivery, and deployment tasks.
  > * `docs`: Documentation changes.
  > * `feat`: A new feature.
  > * `fix`: Defect (bug) repair.
  > * `perf`: Performance enhancements.
  > * `refactor`: Source code design improvements that don't affect product behavior.
  > * `style`: Changes involving graphics, typography, etc., as well as source code beautification.
  > * `test`: Tests added to increase code coverage, or corrected due to errors.

* ### 1.3. Fill out the issue template.

  _Why:_

  > ⌦It keeps communication consistent and unambiguous.

* ### 1.4. Label the issue (optional).

  _Why:_

  > ⌦ We use [`git-labelmaker`][gh-git-labelmaker-url] to categorize Issues (and Pull Requests) consistently. There are four label categories:
  >
  > * `type`: the "kind" of product change.
  > * `status`: the state of a change.
  > * `priority`: the importance and value of a change.

* ### 1.5. Monitor your issue for questions.

  _Why:_

  > ⌦ The team might need more clarification.

* ### 1.6. Your issue will be either accepted for work, or declined.

  _Why:_

  > ⌦ It's up to the Product Owner to agree to proposed changes. If they believe your issue add value, the issue will be approved, and we'll ask someone to volunteer to do the work.
  >
  > Otherwise, your issue will be politely declined.

## 2. **Git**

![Git Logo][icon-git-logo-image]

* ### 2.1. **Rules**

  `readme-inspector` manages contributions with the [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow).

* #### 2.1.1. Makes changes in a topic branch.

  _Why:_

  > ⌦ Use an isolated topic branch for parallel product development. Topic branches allow you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. The `readme-inspector` team uses:
  >
  > * [Feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow) for small-ish codebases, or
  > * [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) for large applications and monoliths

* #### 2.1.2. Favor the topic branch naming convention `GH-{ISSUE_NUMBER}-type-scope`.

  _Why:_

  > ⌦ Although not required, our team prefixes branches with the GitHub issue number, followed by the type of change being introduced, followed by the scope of changes.
  >
  > **Examples:**
  >
  > * **feat**: a new feature, e.g., `GH-1-feat-cli-add-authz`.
  > * **fix**: a defect/bug repair, e.g., `GH-2-fix-api-logging-error`.
  > * **build**: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm), e.g., `GH-8-build-add-markdown-toc`.
  > * **chore**: changes that don't modify src or test files, e.g., `GH-10-remove-unused-files`.
  > * **ci**: changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs), e.g., `GH-9-ci-travis-deploy-semantic-release`.
  > * **docs**: documentation changes, e.g., `GH-3-docs-readme-revise-api`.
  > * **perf**: change that improves performance `GH-6-perf-quicksort`.
  > * **refactor**: code changes that improve design, but neither fixes a bug nor adds a feature, e.g., `GH-5-refactor-extract-class`.
  > * **revert**: reverts a previous commit, e.g., `GH-11-revert-7f87cc2`.
  > * **style**: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc), e.g., `GH-4-style-lint`.
  > * **test**: add missing tests or correct existing tests, e.g., `GH-7-test-complete-coverage`.

* #### 2.1.3. Branch out from `master`.

  _Why:_

  > ⌦ `readme-inspector` follows the feature-branch-workflow.

* #### 2.1.4. **_Never_** push into the `master` branch. **_Always_** submit a Pull Request.

  _Why:_

  > ⌦ It notifies team members whenever changes occur and allows the community to review your changes at any time..
  >
  > It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

* #### 2.1.5. Submit a Pull Request as soon as possible.

  _Why:_

  > ⌦ Pull Requests declare work in progress. Frequent pushes to a Pull Request notify your team members about change, and gives them the opportunity to provide feedback more often.
  >
  > Pull Request pushes also trigger automated CI-services, which help you fail fast and assess quality.

* #### 2.1.6. Rebase your local `master` branch before you ask for PR approvals.

  _Why:_

  > ⌦ Rebasing will merge in the requested branch (`master` or `develop`) and apply the commits that you have made locally to the top of the history without creating a merge commit (assuming there were no conflicts). This results in a nice and clean history.

* #### 2.1.7. Resolve rebase conflicts before Pull Request reviews.

  _Why:_

  > ⌦ Rebasing will merge in the `master` branch and apply the commits that you have made locally to the top of it.

* #### 2.1.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.

  _Why:_

  > ⌦ When you add a Reviewer, GitHub (or Bitbucket) notifies teammates that your topic branch meets all Acceptance Criteria and is ready to be merged into `master`.
  >
  > Add the label "Status: Review Needed" formally declares the status of your topic branch, and helps teams filter through issues.

* #### 2.1.9. Delete local and remote topic branches after merging.

  _Why:_

  > ⌦ Topic branches should only exist while work is in-progress. Merged topic branches clutter up your list of branches with dead branches. Topic branch deletion also insures that you only ever merge back into `master`.

* #### 2.1.10. Protect your `master` branch.

  _Why:_

  > ⌦ Branch protection prevents production-ready branches from incorporating unexpected and irreversible changes. Learn more about
  >
  > * [GitHub protected branches](https://help.github.com/articles/about-protected-branches/) and
  > * [Bitbucket protected branches](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html).

* ### 2.2. **Feature-branch-workflow**

  We use the [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow). We _recommend_ [interactive rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), too, but that's not required.

- #### 2.2.1. Initialize a Git repository in the product directory (_for new repositories only_).

  For subsequent features and changes, this step should be ignored.

  ```sh
  cd <product-repo-directory>
  git init
  ```

- #### 2.2.2. Checkout a new `feat`ure or `fix` branch.

  ```sh
  # For a new feature branch:
  git checkout -b GH-<issueId>-feat-scope-of-change

  # For branches that address defects:
  git checkout -b GH-<issueId>-fix-scope-of-change
  ```

- #### 2.2.3. Make Changes.

  ```sh
  git add
  git commit -a
  ```

  _Why:_

  > ⌦ `git commit -a` will start an editor which lets you separate the subject from the body. Read more about it in _section 1.3_.

- #### 2.2.4. Follow the Conventional Commits Specification for commit messages.

  This project enforces [AngularJS Git Commit Guidelines][git-commit-guidelines-url] (which is now an extension of the [Conventional Commits Specfication][conventional-commits-url]) with [`commitplease`][commitplease-url] pre-commit hooks.

  _Why:_

  > Consistent, legible Git logs not only facilitate communication, but also enable automated `CHANGELOG` generation and semantic versioning with [`standard-version`][standard-version-url].

  * **`build` commit messages**

    Issues related to product builds.

    ```
    build(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`chore` commit messages**

    Issues related to miscellaneous non-functional changes (usually "maintenance" changes).

    ```
    chore(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`ci` commit messages**

    Issues related to continuous integration, delivery, and deployment tasks.

    ```
    ci(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`docs` commit messages**

    Issues related to documentation.

    ```
    docs(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`feat` (feature) commit messages**

    New feature or enhancement requests.

    ```
    feat(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`fix` commit messages**

    Defect (bug) repair issues.

    ```
    fix(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`perf` (performance) commit messages**

    Performance improvement issues.

    ```
    perf(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`refactor` commit messages**

    Source code design **improvements that do not affect product behavior**.

    ```
    refactor(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`revert` commit messages**

    Tasks that revert to a previous commit hash. Your message should begin with `revert:`, followed by the header of the reverted commit.

    In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

    ```
    revert: <hash>
    <BLANK LINE>
    This reverts commit <hash>.
    <BLANK LINE>
    <footer>
    ```

  * **`style` commit messages**

    Issues related to style guideline compliance, especially `ESLint` errors and warnings.

    ```
    style(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * **`test` commit messages**

    Test coverage tasks.

    ```
    test(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

- #### 2.2.5. Sync with remote to get changes you’ve missed.

  ```sh
  git checkout master
  git pull
  ```

  _Why:_

  > ⌦ This will give you a chance to deal with conflicts on your machine while rebasing(later) rather than creating a Pull Request that contains conflicts.

- #### 2.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.

  ```sh
  git checkout <branchname>
  git rebase -i --autosquash master
  ```

  _Why:_

  > ⌦ You can use `--autosquash` to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch.
  >
  > [Learn more about autosquashing Git commits][autosquashing-git-commits-url].

- #### 2.2.7. Resolve conflicts (if any occur), and continue rebase.

  ```sh
  git add <file1> <file2> ...
  git rebase --continue
  ```

  [Learn more about resolving conflicts][git-resolve-conflicts-url].

- #### 2.2.8. Push your branch with the `-f` flag (if necessary).

  Rebase changes history, so you might need to force changes into the `remote` branch with the `-f` flag. If someone else is working on your branch, use the less destructive `--force-with-lease`.

  ```sh
  git push -f
  ```

  _Why:_

  > ⌦ When you do a rebase, you are changing the history on your topic branch. As a result, Git will reject normal `git push`. Instead, you'll need to use the -f or --force flag.
  >
  > [Learn more about `--force-with-lease`][force-with-lease-url].

- #### 2.2.9. Submit a Pull Request.

- #### 2.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.

- #### 2.2.11. Remove your local topic branch if you're done.

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

* ### 3.1. Use the Standard JS Style.

  `readme-inspector` follows the [Standard JS Style][standard-js-url].

* ### 3.2. Use ESLint to analyze source code.

  _Why:_

  > ⌦ [ESLint][eslint-url] evaluates JavaScript code (and `--fix`es what it can) whenever `npm test` runs. You can run ESLint directly with:

  ```shell
  npm run lint:js
  ```

  >

  View [`readme-inspector's` ESLint rules][eslint-rules-table-url] and their enforcement.

## 4. **Unit testing**

[![Jest JavaScript Testing][jest-logo-image]][jest-url]

* ### 4.1. Write Jest tests.

  _Why:_

  > ⌦ Behavior-driven development specifications are executable documentation.

  * **Put test files in the \*\*test\*\* directory.**

  * **Use the `.spec.js` suffix for all tests.**

* ### 4.2. Reach 100% code coverage.

  _Why:_

  > ⌦ Full coverage makes automated dependency drift updates safer.

  * View a test coverage summary in the Terminal:

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

  * Open `/coverage/lcov-report/index.html` in a Web browser to view detailed coverage reports.

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
 | [camelcase-keys@4.2.0](https://github.com/sindresorhus/camelcase-keys#readme) | Convert object keys to camelCase | 4.2.0 | MIT | production | 
 | [dotenv@5.0.1](https://github.com/motdotla/dotenv#readme) | Loads environment variables from .env file | 5.0.1 | BSD-2-Clause | production | 
 | [dotenv-extended@2.0.2](https://github.com/keithmorris/node-dotenv-extended#readme) | A module for loading .env files and optionally loading defaults and a schema for validating all values are present. | 2.0.2 | MIT | production | 
 | [got@8.3.0](https://github.com/sindresorhus/got#readme) | Simplified HTTP requests | 8.3.0 | MIT | production | 
 | [insight@0.10.1](https://github.com/yeoman/insight#readme) | Understand how your tool is being used by anonymously reporting usage metrics to Google Analytics or Yandex.Metrica | 0.10.1 | BSD-2-Clause | production | 
 | [lodash.camelcase@4.3.0](https://lodash.com/) | The lodash method `_.camelCase` exported as a module. | 4.3.0 | MIT | production | 
 | [lodash.isstring@4.0.1](https://lodash.com/) | The lodash method `_.isString` exported as a module. | 4.0.1 | MIT | production | 
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
 | [@semantic-release/git@4.0.1](https://github.com/semantic-release/git#readme) | Set of semantic-release plugins to publish to a git repository | 4.0.1 | MIT | dev | 
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

* ### 8.1 **API design**

  _Why:_

  > ⌦ Because we try to enforce development of sanely constructed RESTful interfaces, which team members and clients can consume simply and consistently.

  _Why:_

  > ⌦ Lack of consistency and simplicity can massively increase integration and maintenance costs. Which is why `API design` is included in this document.

- We mostly follow resource-oriented design. It has three main factors: resources, collection, and URLs.

  * A resource has data, gets nested, and there are methods that operate against it.
  * A group of resources is called a collection.
  * URL identifies the online location of resource or collection.

  _Why:_

  > ⌦ This is a very well-known design to developers (your main API consumers). Apart from readability and ease of use, it allows us to write generic libraries and connectors without even knowing what the API is about.

- Use kebab-case for URLs.
- Use camelCase for parameters in the query string or resource fields.
- Use plural kebab-case for resource names in URLs.

- Always use a plural nouns for naming a url pointing to a collection: `/users`.

  _Why:_

  > ⌦ Basically, it reads better and keeps URLs consistent. [read more...](https://apigee.com/about/blog/technology/restful-api-design-plural-nouns-and-concrete-names)

- In the source code convert plurals to variables and properties with a List suffix.

  _Why_:

  > ⌦ Plural is nice in the URL but in the source code, it’s just too subtle and error-prone.

- Always use a singular concept that starts with a collection and ends to an identifier:

  ```
  /students/245743
  /airports/kjfk
  ```

- Avoid URLs like this:

  ```
  GET /blogs/:blogId/posts/:postId/summary
  ```

  _Why:_

  > ⌦ This is not pointing to a resource but to a property instead. You can pass the property as a parameter to trim your response.

- Keep verbs out of your resource URLs.

  _Why:_

  > ⌦ Because if you use a verb for each resource operation you soon will have a huge list of URLs and no consistent pattern which makes it difficult for developers to learn. Plus we use verbs for something else.

- Use verbs for non-resources. In this case, your API doesn't return any resources. Instead, you execute an operation and return the result. These **are not** CRUD (create, retrieve, update, and delete) operations:

  ```
  /translate?text=Hallo
  ```

  _Why:_

  > ⌦ Because for CRUD we use HTTP methods on `resource` or `collection` URLs. The verbs we were talking about are actually `Controllers`. You usually don't develop many of these. [read more...](https://byrondover.github.io/post/restful-api-guidelines/#controller)

- The request body or response type is JSON then please follow `camelCase` for `JSON` property names to maintain the consistency.

  _Why:_

  > ⌦ This is a JavaScript project guideline, Where Programming language for generating JSON as well as Programming language for parsing JSON are assumed to be JavaScript.

- Even though a resource is a singular concept that is similar to an object instance or database record, you should not use your `table_name` for a resource name and `column_name` resource property.

  _Why:_

  > ⌦ Because your intention is to expose Resources, not your database schema details.

- Again, only use nouns in your URL when naming your resources and don’t try to explain their functionality.

  _Why:_

  > ⌦ Only use nouns in your resource URLs, avoid endpoints like `/addNewUser` or `/updateUser` . Also avoid sending resource operations as a parameter.

- Explain the CRUD functionalities using HTTP methods:

  _How:_

  > `GET`: Retrieve a representation of a resource.

  > `POST`: Create new resources and sub-resources.

  > `PUT`: Replace existing resources.

  > `PATCH`: Update existing resources. It only updates the fields that were supplied, leaving the others alone.

  > `DELETE`: Delete existing resources.

* For nested resources, use the relation between them in the URL. For instance, using `id` to relate an employee to a company.

  _Why:_

  > ⌦ This is a natural way to make resources explorable.

  _How:_

  > `GET /schools/2/students` , should get the list of all students from school 2.

  > `GET /schools/2/students/31` , should get the details of student 31, which belongs to school 2.

  > `DELETE /schools/2/students/31` , should delete student 31, which belongs to school 2.

  > `PUT /schools/2/students/31` , should update info of student 31, Use PUT on resource-URL only, not collection.

  > `POST /schools` , should create a new school and return the details of the new school created. Use POST on collection-URLs.

* Use a simple ordinal number for a version with a `v` prefix (v1, v2). Move it all the way to the left in the URL so that it has the highest scope:

  ```
  http://api.domain.com/v1/schools/3/students
  ```

  _Why:_

  > ⌦ When your APIs are public for other third parties, upgrading the APIs with some breaking change would also lead to breaking the existing products or services using your APIs. Using versions in your URL can prevent that from happening. [read more...](https://apigee.com/about/blog/technology/restful-api-design-tips-versioning)

* Response messages must be self-descriptive. A good error message response might look something like this:

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

  _Note: Keep security exception messages as generic as possible. For instance, Instead of saying ‘incorrect password’, you can reply back saying ‘invalid username or password’ so that we don’t unknowingly inform user that username was indeed correct and only the password was incorrect._

* Use only these 8 status codes to send with you response to describe whether **everything worked**,
  The **client app did something wrong** or The **API did something wrong**.

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

- Provide total numbers of resources in your response.
- Accept `limit` and `offset` parameters.

- The amount of data the resource exposes should also be taken into account. The API consumer doesn't always need the full representation of a resource.Use a fields query parameter that takes a comma separated list of fields to include:
  ```
  GET /student?fields=id,name,age,class
  ```
- Pagination, filtering, and sorting don’t need to be supported from start for all resources. Document those resources that offer filtering and sorting.

- ### 8.2 **API security**

  These are some basic security best practices:

  * Don't use basic authentication unless over a secure connection (HTTPS). Authentication tokens must not be transmitted in the URL: `GET /users/123?token=asdf....`

    _Why:_

    > ⌦ Because Token, or user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. [read more...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

  * Tokens must be transmitted using the Authorization header on every request: `Authorization: Bearer xxxxxx, Extra yyyyy`.

  * Authorization Code should be short-lived.

  * Reject any non-TLS requests by not responding to any HTTP request to avoid any insecure data exchange. Respond to HTTP requests by `403 Forbidden`.

  * Consider using Rate Limiting.

    _Why:_

    > ⌦ To protect your APIs from bot threats that call your API thousands of times per hour. You should consider implementing rate limit early on.

  * Setting HTTP headers appropriately can help to lock down and secure your web application. [read more...](https://github.com/helmetjs/helmet)

  * Your API should convert the received data to their canonical form or reject them. Return 400 Bad Request with details about any errors from bad or missing data.

  * All the data exchanged with the ReST API must be validated by the API.

  * Serialize your JSON.

    _Why:_

    > ⌦ A key concern with JSON encoders is preventing arbitrary JavaScript remote code execution within the browser... or, if you're using node.js, on the server. It's vital that you use a proper JSON serializer to encode user-supplied data properly to prevent the execution of user-supplied input on the browser.

  * Validate the content-type and mostly use `application/*json` (Content-Type header).

    _Why:_

    > ⌦ For instance, accepting the `application/x-www-form-urlencoded` mime type allows the attacker to create a form and trigger a simple POST request. The server should never assume the Content-Type. A lack of Content-Type header or an unexpected Content-Type header should result in the server rejecting the content with a `4XX` response.

- ### 8.3 **API documentation**

  * Fill the `API Reference` section in [README.md template](./README.sample.md) for API.
  * Describe API authentication methods with a code sample.
  * Explaining The URL Structure (path only, no root URL) including The request type (Method).

  For each endpoint explain:

  * URL Params If URL Params exist, specify them in accordance with name mentioned in URL section:

    ```
    Required: id=[integer]
    Optional: photo_id=[alphanumeric]
    ```

  * If the request type is POST, provide working examples. URL Params rules apply here too. Separate the section into Optional and Required.

  * **Success Responses.** What should be the status code and is there any return data? This is useful when people need to know what their callbacks should expect:

    ```
    Code: 200
    Content: { id : 12 }
    ```

  * **Error Responses.** Most endpoints have many ways to fail. From unauthorized access to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made. For example:

    * **HTTP status code**

      ```
      404 Not Found
      ```

    * **Response body**

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

    * **Response headers**
      ```
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

  * Use API design tools, There are lots of open source tools for good documentation such as [API Blueprint](https://apiblueprint.org/) and [Swagger](https://swagger.io/).

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
[git-commit-guidelines-url]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit
[git-resolve-conflicts-url]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
[icon-bitbucket-20-image]: ./assets/img/icons8/icon-bitbucket-20.png
[icon-git-logo-image]: ./assets/img/icons8/git-logo.png
[icon-github-20-image]: ./assets/img/icons8/icon-github-filled-20.png
[icon-info-image]: ./assets/img/icons8/icon-info-50.png
[icon-issue-image]: ./assets/img/icons8/icon-issues.png
[icon-pr-image]: ./assets/img/icons8/icon-pr.png
[icon-rest-api-image]: ./assets/img/icons8/icon-rest-api.png
[issues-new-defect-image]: https://img.shields.io/badge/report---defect---lightgrey.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: /commonality/readme-inspector.git/issues/new?title=defect%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-defect-url]: https://github.com/commonality/readme-inspector/issues/new?title=defect%28scope%29%3A+summary-of-problem&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-image]: https://img.shields.io/badge/request---feature---blue.svg?style=for-the-badge&label=request+a
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

<!-- ⛔️ Octicon img references ⛔️  -->

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
