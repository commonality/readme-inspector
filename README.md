# readme-inspector [![NPM version][npm-image]][npm-url] [![GitHub release][github-release-image]][github-release-url]

> <img align="middle" alt="markdown" height="50" width="50"  src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg"> Inspect GitHub (Enterprise) repositories for the presence and quality of READMEs.

[![The MIT License][license-image]][license-url]
[![FOSSA Status][fossa-image]][fossa-url]
[![NSP Status][nsp-image]][nsp-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]<br>
[![Dependency Status][daviddm-image]][daviddm-url]
[![Development Dependency Status][daviddm-dev-image]][daviddm-dev-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coverage percentage][codacy-coverage-image]][codacy-url]
[![Codacy code quality][codacy-image]][codacy-url]
![Maintenance][maintenance-image]<br>
[![NPMS score][npms-image]][npms-url]
[![NPM downloads per month][npm-downloads-month]][npm-url]

## Table of contents

<!-- 🚫 AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Installation](#1-installation)
- [2. Configuration](#2-configuration)
- [2. Usage](#2-usage)
- [3. API](#3-api)
  * [3.1. `authenticate({token, type, key})`](#31-authenticatetoken-type-key)
    + [3.1.1. Parameters](#311-parameters)
    + [3.1.2. Returns `void`](#312-returns-void)
    + [3.1.3. Example](#313-example)
  * [3.2. `check({ower, repo, ref})`](#32-checkower-repo-ref)
    + [3.2.1. Parameters](#321-parameters)
    + [3.2.2. Returns `Promise`](#322-returns-promise)
    + [3.2.3. Examples](#323-examples)
  * [3.3. `getInfo({owner, repo, ref})`](#33-getinfoowner-repo-ref)
    + [3.3.1. Parameters](#331-parameters)
    + [3.3.2. Returns `Promise`](#332-returns-promise)
    + [3.3.3. Examples](#333-examples)
  * [3.4. `getAppraisal(url)`](#34-getappraisalurl)
  * [3.5. `ReadmeAppraisal`](#35-readmeappraisal)
    + [3.5.1. `for(url): Promise`](#351-forurl-promise)
      - [3.5.1.1. Parameters](#3511-parameters)
      - [3.5.1.2. Returns `Promise`](#3512-returns-promise)
      - [3.5.1.3. Examples](#3513-examples)
- [4. Version](#4-version)
- [5. Contributing](#5-contributing)
- [6. License](#6-license)
<!-- 🚫 AUTO-GENERATED-CONTENT:END -->

## 1. Installation

`readme-inspector` is written in JavaScript (CommonJS) for [Node.js ![External link][octicon-link-external]](https://nodejs.org/) versions 7.6.0 or higher (for `async/await` support).

```bash
$ npm install --save readme-inspector
```

## 2. Configuration

The `commonality/readme-inspector` module combines the mediator, proxy, and factory design patterns to simplify:

* README detection with the `readmeInfo` object, and
* Quality assessment with the `readmeInfo.appraisal` object.

Since both of these features invoke Web services to return information, they both use `.env` variables
that require configuration:

```properties
# 🔹 OPTIONAL env vars

# API endpoint for the readme-score-api (with default value)
API_ENDPOINT_README_SCORE="http://readme-score-api.herokuapp.com/score.json?url=&human_breakdown=false&force=false"

# Google Analytics trackingCode (with default value)
GA_README_INSPECTOR="UA-117338111-1"

# 🔸 GitHub token variables to extend GitHub API rate limits
#    from 60 requests per minute to 5,000 requests per minute:
GH_TOKEN=
GITHUB_ACCESS_TOKEN=
```

> ![light-bulb][octicon-light-bulb] **To avoid rate-limiting**, you should [create a personal access token ![External link][octicon-link-external]](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and save your personal access token in an environment variable called `GH_TOKEN`.

---

<details><summary>Click here for detailed <samp>.env</samp> variable initialization instructions.</summary><p>

> [![info][octicon-info] View **dotenv-extended**'s README ![External link][octicon-link-external]](https://github.com/keithmorris/node-dotenv-extended#readme) for detailed `.env` variable set up instructions.

<h4><img align="bottom" alt="file" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg"> <samp>.env.schema</samp></h4>

Defines a schema of what variables should be defined in the combination of
<samp>.env</samp> and <samp>.env.defaults</samp>.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./.env.schema&syntax=properties) -->
<!-- The below code snippet is automatically added from ./.env.schema -->
```properties
# .env.schema, committed to repo

## See https://github.com/keithmorris/node-dotenv-extended/#readme
## ⛔️
## 🚫  DO NOT COMMIT YOUR ACTUAL .env file to version control.
## 🚫  It should only include environment-specific values such
## 🚫  as database passwords or API keys.
## 🚫  Your production database should have a different password
## 🚫  than your development database.

# ENV VARS required for readme-inspector
## Add values to these ENV VARs and save to
## {your-project-root-directory}/.env

# 🔹 OPTIONAL env vars:
API_ENDPOINT_README_SCORE=
BITBUCKET_API_BASE_URL=
GA_README_INSPECTOR=
GITHUB_API_BASE_URL=
README_SCORE_API_BASE_URL=

# 🔸 RECOMMENDED vars (to extend API rate limits)
BITBUCKET_ACCESS_TOKEN=
BITBUCKET_AUTH_PASSWORD=
BITBUCKET_AUTH_USERNAME=
GH_TOKEN=
GITHUB_ACCESS_TOKEN=
```
<!-- AUTO-GENERATED-CONTENT:END -->

<h4><img align="bottom" alt="file" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg"> <samp>.env.defaults</samp></h4>

<samp>.env.defaults</samp> provides common configuration defaults across all
environments (commited to source control). This contains overall app
configuration values that would be common across environments. The
<samp>.env.defaults</samp> file is loaded first; then the <samp>.env</samp>
file is loaded and will overwrite any values from the <samp>.env.defaults</samp>
file.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./.env.defaults&syntax=properties) -->
<!-- The below code snippet is automatically added from ./.env.defaults -->
```properties
# .env.defaults, committed to repo

## See https://github.com/keithmorris/node-dotenv-extended/#readme
## ⛔️
## 🚫  DO NOT COMMIT YOUR ACTUAL .env file to version control.
## 🚫  It should only include environment-specific values such
## 🚫  as database passwords or API keys.
## 🚫  Your production database should have a different password
## 🚫  than your development database.

# ENV VARS defaults for readme-inspector:

# ReadmeAppraisal
API_ENDPOINT_README_SCORE="http://readme-score-api.herokuapp.com/score.json?url=&human_breakdown=false&force=false"

# Bitbucket REST API v1.0 and v2.0 base url. Modify this if you're using
# on-premise, company-hosted Bitbucket servers.
BITBUCKET_API_BASE_URL="https://api.bitbucket.org"

## Google Analytics trackingCode
GA_README_INSPECTOR="UA-117338111-1"

# GitHub REST API v3 baseUrl. Modify this if you're using GitHub Enterprise.
GITHUB_API_BASE_URL="https://api.github.com"

# readme-score-api base url. Modify this if you're using it
# behind a company firewall.
README_SCORE_API_BASE_URL="http://readme-score-api.herokuapp.com"
```
<!-- AUTO-GENERATED-CONTENT:END -->

<h4><img align="bottom" alt="file" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg"> <samp>.env</samp></h4>

The environment-specific file (not committed to source control).
This file will have sensitive information such as usernames, passwords,
api keys, etc. These would be specific to each environment and **should
not be committed to source control**.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./.env&syntax=properties) -->
<!-- The below code snippet is automatically added from ./.env -->
```properties
# BITBUCKET_ACCESS_TOKEN=
# BITBUCKET_API_BASE_URL=
# BITBUCKET_AUTH_PASSWORD=
# BITBUCKET_AUTH_USERNAME=
# GA_README_INSPECTOR="UA-117338111-1"
# GITHUB_API_BASE_URL=
# README_SCORE_API_BASE_URL=
API_ENDPOINT_README_SCORE="http://readme-score-api.herokuapp.com/score.json?url=&human_breakdown=false&force=false"
GH_TOKEN=$(echo $GH_TOKEN)
GITHUB_ACCESS_TOKEN=$(echo $GH_TOKEN)
```
<!-- AUTO-GENERATED-CONTENT:END -->

</pre></details>

---

## 2. Usage

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./.github/assets/examples/usage.js) -->
<!-- The below code snippet is automatically added from ./.github/assets/examples/usage.js -->
```js
// Load all .env variables before anything else.

const dotenvExtended = require('dotenv-extended')
const envConfig = dotenvExtended.config()

// Import readme-inspector.

const readmeInspector = require('readme-inspector')

// Recommended: authenticate to avoid rate limts.

readmeInspector.authenticate({
  token: envConfig.GH_TOKEN,
  type: 'oauth'
})

// Verify that the repository with the slug
// gregswindle/github-resource-converter
// 1. Has a README, and
// 2. Score the README for quality.

const info = await readmeInspector.check(
  'gregswindle',
  'github-resource-converter'
)

// Display the resulting readmeInfo as a
// JSON string.

const WHITESPACE = 2
console.log(JSON.stringify(results, null, WHITESPACE))
// =>
/*
{
  "appraisal": {
    "breakdown": {
      "cumulativeCodeBlockLength": 0,
      "hasLists": 0,
      "lowCodeBlockPenalty": 0,
      "numberOfCodeBlocks": 0,
      "numberOfGifs": 0,
      "numberOfImages": 0,
      "numberOfNonCodeSections": 0
    },
    "error": null,
    "score": 0,
    "url": null
  },
  "error": null,
  "isPresent": true,
  "value": {
    "name": "README.md",
    "path": "README.md",
    "sha": "4769744aad57ff3e9aac2df603795c4d10fcdc31",
    "size": 36877,
    "url": "https://api.github.com/repos/commonality/readme-inspector/contents/README.md?ref=master",
    "html_url": "https://github.com/commonality/readme-inspector/blob/master/README.md",
    "git_url": "https://api.github.com/repos/commonality/readme-inspector/git/blobs/4769744aad57ff3e9aac2df603795c4d10fcdc31",
    "download_url": "https://raw.githubusercontent.com/commonality/readme-inspector/master/README.md",
    "type": "file",
    "content": "{base64-encoding-of-readme-markdown}",
    "encoding": "base64",
    "_links": {
      "self": "https://api.github.com/repos/commonality/readme-inspector/contents/README.md?ref=master",
      "git": "https://api.github.com/repos/commonality/readme-inspector/git/blobs/4769744aad57ff3e9aac2df603795c4d10fcdc31",
      "html": "https://github.com/commonality/readme-inspector/blob/master/README.md"
    }
  }
}
*/
```
<!-- AUTO-GENERATED-CONTENT:END -->

## 3. API

> [![beaker][octicon-beaker] Test `readme-inspector` in your Web browser ![link-external][octicon-link-external]][runkit-readme-inspector-url].
>
> [![gear][octicon-gear] View the full API docs for details ![link-external][octicon-link-external]][api-docs-url].

The `readmeInspector` module detects whether or not a README document exists at the root of a GitHub or GitHub Enterprise repository. If a README exists, it can evaluate the README's quality and provide a numerical score from 0 to 100, where 0 is the lowest quality and 100 is the highest.

### 3.1. `authenticate({token, type, key})`

> ![Info][octicon-info] Most GitHub API calls don't require authentication. Rules of thumb:
>
> 1.  If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API.
> 1.  If you want to change data, you have to be authenticated.
>
> Note: authenticate is synchronous because it only sets the credentials for the following requests.
>
> octokit/rest.js. (2018). GitHub. Retrieved 21 March 2018, from <https://github.com/octokit/rest.js#authentication> ![link-external][octicon-link-external]

#### 3.1.1. Parameters

| Name     | Type          | Description                                 |
| :------- | :------------ | :------------------------------------------ |
| key      | String        | `type=oauth` Client identifier              |
| token    | String        | `type=[integration|token]` Unique value     |
| type     | Enum.<String> | `basic`, `oauth`, `token`, or `integration` |
| username | String        | `type=basic` Basic authentication username  |
| password | String        | `type=basic` Basic authentication password  |

#### 3.1.2. Returns `void`

`authenticate` does not return a value.

#### 3.1.3. Example

> ```javascript
> // Token (https://github.com/settings/tokens)
> // Load your GH_TOKEN or GITHUB_ACCESS_TOKEN from
> // environment variables:
> const dotenvExtended = require('dotenv-extended')
> const envConfig = dotenvExtended.config()
>
> const readmeInspector = require('readme-inspector')
>
> readmeInspector.authenticate({
>   token: envConfig.GH_TOKEN,
>   type: 'token'
> })
> ```

### 3.2. `check({ower, repo, ref})`

A convenience method that

* Attempts to <samp>GET</samp> a repository's root-level README, and, if found,
* Scores the README.

![GET][rest-get-img]

```http
/repos/:owner/:repo/readme
```

#### 3.2.1. Parameters

<table>
  <thead>
    <tr>
    <th style="width: 30%">Field</th>
      <th style="width: 10%">Type</th>
      <th style="width: 60%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><samp>owner</samp></td>
        <td>
          String
        </td>
      <td> </td>
    </tr>
    <tr>
      <td><samp>repo</samp></td>
        <td>
          String
        </td>
      <td> </td>
    </tr>
    <tr>
      <td><samp>ref</samp> <img align="right" alt="optional" src="https://fakeimg.pl/60x22/757575/FFF/?text=optional&font_size=16" height="22" width="60"></td>
        <td>
          String
        </td>
      <td>The name of the commit/branch/tag. Default: the repository’s default branch (usually master).</td>
    </tr>
  </tbody>
</table>

#### 3.2.2. Returns `Promise<ReadmeInfo>`

`ReadmeInfo's` interface (as a `NullObject`):

```js
{
  'err': null,
  'isPresent': null,
  'appraisal': {
    'breakdown': {
      'cumulativeCodeBlockLength': 0,
      'hasLists': 0,
      'lowCodeBlockPenalty': 0,
      'numberOfCodeBlocks': 0,
      'numberOfGifs': 0,
      'numberOfImages': 0,
      'numberOfNonCodeSections': 0
    },
    'err': null,
    'score': 0,
    'url': null
  },
  'value': null
}
```

#### 3.2.3. Examples

* _async/await:_

  > ```js
  > const readmeInfo = await readmeInspector.check({
  >   owner: 'commonality',
  >   ref: 'GH-1-feat-inspect-readmes',
  >   repo: 'readme-inspector'
  > })
  > ```

* _Promise:_

  > ```js
  > readmeInspector
  >   .check({
  >     owner: 'commonality',
  >     ref: 'GH-1-feat-inspect-readmes',
  >     repo: 'readme-inspector'
  >   })
  >   .then(readmeInfo => {})
  >   .catch(err => {})
  > ```

### 3.3. `getInfo({owner, repo, ref})`

Retrieves README information _without_ any `AppraisalData`.

![GET][rest-get-img]

```http
/repos/:owner/:repo/readme
```

#### 3.3.1. Parameters

<table>
  <thead>
    <tr>
    <th style="width: 30%">Field</th>
      <th style="width: 10%">Type</th>
      <th style="width: 60%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><samp>owner</samp></td>
        <td>
          String
        </td>
      <td> </td>
    </tr>
    <tr>
      <td><samp>repo</samp></td>
        <td>
          String
        </td>
      <td> </td>
    </tr>
    <tr>
      <td><samp>ref</samp> <img align="right" alt="optional" src="https://fakeimg.pl/60x22/757575/FFF/?text=optional&font_size=16" height="22" width="60"></td>
        <td>
          String
        </td>
      <td>The name of the commit/branch/tag. Default: the repository’s default branch (usually master).</td>
    </tr>
  </tbody>
</table>

#### 3.3.2. Returns `Promise<ReadmeInfo>`

`ReadmeInfo's` interface (as a `NullObject`):

```js
{
  'err': null,
  'isPresent': null,
  'appraisal': {
    'breakdown': {
      'cumulativeCodeBlockLength': 0,
      'hasLists': 0,
      'lowCodeBlockPenalty': 0,
      'numberOfCodeBlocks': 0,
      'numberOfGifs': 0,
      'numberOfImages': 0,
      'numberOfNonCodeSections': 0
    },
    'err': null,
    'score': 0,
    'url': null
  },
  'value': null
}
```

#### 3.3.3. Examples

* _async/await:_

  > ```js
  > const readmeInfo = await readmeInspector.getInfo({
  >   owner: 'commonality',
  >   ref: 'GH-1-feat-inspect-readmes',
  >   repo: 'readme-inspector'
  > })
  > ```

* _Promise:_

  > ```js
  > readmeInspector
  >   .getInfo({
  >     owner: 'commonality',
  >     ref: 'GH-1-feat-inspect-readmes',
  >     repo: 'readme-inspector'
  >   })
  >   .then(readmeInfo => {})
  >   .catch(err => {})
  > ```

### 3.4. `getAppraisal(url)`

A convenience wrapper that calls the `ReadmeAppraisal.prototype.for` method.

### 3.5. `ReadmeAppraisal`

`ReadmeAppraisal` is an API proxy for [@clayallsopp ![External link][octicon-link-external]](https://github.com/clayallsopp)'s [`readme-score-api` ![External link][octicon-link-external]](https://github.com/clayallsopp/readme-score-api).

> ![quote][octicon-quote] ScoreMe gives you a numerical score from 0 to 100 for your Github-style README. The intention is to measure complexity, which is a generally correlated with quality.
>
> It won't measure if one README is absolutely better than another, but it will give you a good idea if the README is high-quality, needs more work, or somewhere inbetween.
>
> ScoreMe. (2018). Clayallsopp.github.io. Retrieved 10 April 2018, from <http://clayallsopp.github.io/readme-score/>

#### 3.5.1. `for(url): Promise<AppraisalData>`

Evaluate the README at the root of a GitHub repository.

##### 3.5.1.1. Parameters

| Name | Type   | Description                                                      |
| :--- | :----- | :--------------------------------------------------------------- |
| url  | String | The URL, or slug of the repository to be evaluated for a README. |

##### 3.5.1.2. Returns `Promise<AppraisalData>`

* `AppraisalData` as a `NullObject` (see <samp>[lib/appraisal-data](lib/appraisal-data.js)</samp>):<br>

  > ```js
  > {
  >   breakdown: {
  >     cumulativeCodeBlockLength: 0
  >     hasLists: 0
  >     lowCodeBlockPenalty: 0
  >     numberOfCodeBlocks: 0
  >     numberOfGifs: 0
  >     numberOfImages: 0
  >     numberOfNonCodeSections: 0
  >   },
  >   err: null,
  >   score: 0
  >   url: null
  > }
  > ```

##### 3.5.1.3. Examples

* _URL:_

  > ```js
  > const { ReadmeAppraisal } = require('readme-inspector')
  > const readmeAppraisal = new ReadmeAppraisal()
  > const url = 'https://github.com/gregswindle/github-resource-converter'
  >
  > const appraisal = readmeAppraisal.for(url)
  > /** =>
  >  * {
  >  *   breakdown: {
  >  *    cumulativeCodeBlockLength: 10
  >  *    hasLists: 10
  >  *    lowCodeBlockPenalty: 0
  >  *    numberOfCodeBlocks: 40
  >  *    numberOfGifs: 0
  >  *    numberOfImages: 15
  >  *    numberOfNonCodeSections: 30
  >  *  },
  >  *  err: null,
  >  *  score: 100
  >  *  url: 'https://github.com/gregswindle/github-resource-converter'
  >  * }
  >  */
  > ```

* _Repository slug:_

  > ```js
  > const { ReadmeAppraisal } = require('readme-inspector')
  > const readmeAppraisal = new ReadmeAppraisal()
  > const url = 'gregswindle/github-resource-converter'
  >
  > const appraisal = readmeAppraisal.for(url)
  > ```

## 4. Version

[![NPM version][npm-image]][npm-url]

View the [Change Log](CHANGELOG.md) and [Releases](https://github.com/commonality/readme-inspector/releases) for details.

## 5. Contributing

[![PRs Welcome][makeapullrequest-image] ![External link][octicon-link-external]][makeapullrequest-url] We welcome contributions with GitHub **issues** and **pull requests**.

---

[![Request a feature][issues-new-feat-image]][issues-new-feat-url]
[![Report a defect][issues-new-defect-image]][issues-new-defect-url]

[![Read the CONTRIBUTING guidelines][contributing-image]][contributing-url]

---

Before embarking on a significant change, please follow these guidelines:

1.  **[Create an issue][issues-url]**&mdash;e.g., a [defect ("bug") report][issues-new-defect-url] or a [feature request][issues-new-feat-url]&mdash;to propose changes.

    _Exceptions:_

    > If you're working on documentation and fixing something simple like a typo or an easy bug, go ahead and make a pull request.

1.  **[Follow the CONTRIBUTING guidelines][contributing-url].**

    _Why:_

    > Standards and guidelines make communication easier. If you're willing and able to program&mdash;or want to learn how&mdash; following the guidelines will increase the likelihood of having your changes added to `readme-inspector`.

1.  **[Read the Code of Conduct][code-of-conduct-url].**<br>

1.  **[Make a pull request][pr-url]** when you're ready for other to review your changes (or you get stuck somewhere).

    _Never created a pull request?_

    > No problem: [this free online training ![External link][octicon-link-external]][makeapullrequest-url] covers most of the conventions in the [CONTRIBUTING guidelines][contributing-url].)

## 6. License

[MIT ![link-external][octicon-link-external]][license-url] © [commonality ![link-external][octicon-link-external]](https://github.com/commonality)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector?ref=badge_large)

---

[![Greenkeeper badge](https://badges.greenkeeper.io/commonality/readme-inspector.svg)](https://greenkeeper.io/)
[![Readme ReadmeAppraisal](http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/commonality/readme-inspector)](http://clayallsopp.github.io/readme-score?url=https://github.com/commonality/readme-inspector)

<!-- ⛔️ Do not remove this comment or anything under it ⛔️ -->

<!-- 🔗 link references 🔗 -->

[api-docs-url]: https://commonality.github.io/readme-inspector/api/readme-inspector/2.0.1/ReadmeAppraisal.html
[bunyan-format-url]: https://github.com/thlorenz/bunyan-format/#readme
[node-bunyan-url]: https://github.com/trentm/node-bunyan/#readme
[optional-param-img]: https://fakeimg.pl/60x22/757575/FFF/?text=optional&font_size=16
[rest-get-img]: https://fakeimg.pl/40x30/0e8a16/FFF/?text=GET&font_size=20
[runkit-readme-inspector-url]: https://runkit.com/gregswindle/5acc09bde794d70011a136e5
[toc]: #table-of-contents

<!-- 🔗 ci services 🔗 -->

[appveyor-image]: https://img.shields.io/appveyor/ci/gregswindle/readme-inspector.svg?style=flat-square&logo=appveyor&label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/gregswindle/readme-inspector
[codacy-coverage-image]: https://img.shields.io/codacy/coverage/21f517a2d5bf4304895f40c5cbb596c4.svg?style=flat-square
[codacy-image]: https://img.shields.io/codacy/grade/21f517a2d5bf4304895f40c5cbb596c4.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/readme-inspector?utm_source=github.com&utm_medium=referral&utm_content=commonality/readme-inspector&utm_campaign=Badge_Grade
[coveralls-image]: https://img.shields.io/coveralls/github/commonality/readme-inspector/master.svg
[coveralls-url]: https://coveralls.io/r/commonality/readme-inspector
[daviddm-dev-image]: https://david-dm.org/commonality/readme-inspector/dev-status.svg?theme=shields.io&style=flat-square
[daviddm-dev-url]: https://david-dm.org/commonality/readme-inspector?type=dev
[daviddm-image]: https://david-dm.org/commonality/readme-inspector.svg?theme=shields.io&style=flat-square
[daviddm-url]: https://david-dm.org/commonality/readme-inspector
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector.svg?type=shield&style=flat-square
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector?ref=badge_shield
[github-release-image]: https://img.shields.io/github/release/commonality/readme-inspector.svg?style=flat-square
[github-release-url]: https://github.com/commonality/readme-inspector/releases/latest
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[maintenance-image]: https://img.shields.io/maintenance/readme-inspector/2018.svg?style=flat-square
[notice-url]: https://app.fossa.io/reports/07123904-7d26-40a6-b6af-c74e82a53789
[npm-downloads-month]: https://img.shields.io/npm/dm/readme-inspector.svg?style=social
[npm-image]: https://img.shields.io/npm/v/readme-inspector.svg?style=flat-square
[npm-url]: https://npmjs.org/package/readme-inspector
[npms-image]: https://badges.npms.io/readme-inspector.svg?style=flat-square
[npms-url]: https://npms.io/search?q=readme-inspector
[nsp-image]: https://nodesecurity.io/orgs/commonality/projects/a2aa0184-ae94-4307-8b87-f0e12324368a/badge
[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/a2aa0184-ae94-4307-8b87-f0e12324368a
[travis-image]: https://img.shields.io/travis/commonality/readme-inspector.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.org/commonality/readme-inspector
[vulnerabilities-image]: https://snyk.io/test/github/commonality/readme-inspector/badge.svg?style=flat-square&targetFile=package.json
[vulnerabilities-url]: https://snyk.io/test/github/commonality/readme-inspector?targetFile=package.json

<!-- 🔗 contributing link references 🔗 -->

[code-of-conduct-url]: https://github.com/commonality/readme-inspector/blob/master/.github/CODE_OF_CONDUCT.md
[contributing-image]: https://img.shields.io/badge/read-CONTRIBUTING%20Guidelines-yellow.svg?style=for-the-badge&label=read+the
[contributing-url]: https://github.com/commonality/readme-inspector/blob/master/.github/CONTRIBUTING.md
[issues-new-defect-image]: https://img.shields.io/badge/report-defect-F5CB5C.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: https://github.com/commonality/readme-inspector/issues/new?title=defect%28scope%29%3A+defect-summary&labels=priority%3a+medium%2cstatus%3a+review+needed%2ctype%3a+defect&template=defect-report.md
[issues-new-feat-image]: https://img.shields.io/badge/request-feature-c1ccc6.svg?style=for-the-badge&label=request+a
[issues-new-feat-url]: https://github.com/commonality/readme-inspector/issues/new?title=feat%28scope%29%3A+change-proposal-summary&labels=priority%3a+medium%2cstatus%3a+review+needed%2ctype%3a+feature&template=feature-request.md
[issues-url]: https://github.com/commonality/readme-inspector/issues
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[pr-url]: https://github.com/commonality/readme-inspector/pulls

<!-- 🔗 octicon img references 🔗 -->

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
