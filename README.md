# `readme-inspector` [![NPM version][npm-image]][npm-url]

> <img align="middle" alt="markdown" height="50" width="50"  src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg"> Inspect GitHub (and GitHub Enterprise) repositories for the presence and quality of READMEs.

[![The MIT License][license-image]][license-url]
[![FOSSA Status][fossa-image]][fossa-url]<br>
[![NSP Status][nsp-image]][nsp-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Development Dependency Status][daviddm-dev-image]][daviddm-dev-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coverage percentage][codacy-coverage-image]][codacy-url]
[![Codacy code quality][codacy-image]][codacy-url]
[![NPMS score][npms-image]][npms-url]
[![NPM downloads per month][npm-downloads-month]][npm-url]

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  * [`ScoreMe`](#scoreme)
    + [`constructor(url: string): ScoreMe`](#constructorurl-string-scoreme)
      - [Parameters](#parameters)
      - [Examples](#examples)
    + [`calculate(): Promise`](#calculate-promise)
    + [Parameters](#parameters-1)
      - [Examples](#examples-1)
    + [`score(url: String): Promise`](#scoreurl-string-promise)
      - [Parameters](#parameters-2)
      - [Examples](#examples-2)
  * [`ReadmeInspector`](#readmeinspector)
- [Version](#version)
- [Contributing](#contributing)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## Installation

> ![info][icon-octicon-info] `readme-inspector` is written in JavaScript (CommonJS) for
> [Node.js ![External link][icon-octicon-link-external]](https://nodejs.org/) versions 6 or higher.

```sh
$ npm install --save readme-inspector
```

## Usage

```js
const { ReadmeInspector } = require('readme-inspector')

const inspector = new ReadmeInspector({
  owner: 'gregswindle',
  repo: 'github-resource-converter'
})

// Recommended: authenticate to avoid rate limts
inspector.authenticate({
  token: process.env.GITHUB_ACCESS_TOKEN,
  type: 'oauth'
})

const results = await inspector.check()
// => Formatted and stringified
/*
{
  "err": null,
  "isPresent": true,
  "score": {
    "score": 100,
    "url": "https://github.com/gregswindle/github-resource-converter",
    "breakdown": {
      "cumulative_code_block_length": 10,
      "has_lists?": 10,
      "low_code_block_penalty": 0,
      "number_of_code_blocks": 40,
      "number_of_gifs": 0,
      "number_of_images": 15,
      "number_of_non_code_sections": 30
    }
  },
  "value": {
    "name": "README.md",
    "path": "README.md",
    "sha": "c4e2170a790916adefbb378f0fbb4ac458314d0e",
    "size": 61697,
    "url": "https://api.github.com/repos/gregswindle/github-resource-converter/contents/README.md?ref=master",
    "html_url": "https://github.com/gregswindle/github-resource-converter/blob/master/README.md",
    "git_url": "https://api.github.com/repos/gregswindle/github-resource-converter/git/blobs/c4e2170a790916adefbb378f0fbb4ac458314d0e",
    "download_url": "https://raw.githubusercontent.com/gregswindle/github-resource-converter/master/README.md",
    "type": "file",
    "content": "...",
    "encoding": "base64",
    "_links": {
      "self": "https://api.github.com/repos/gregswindle/github-resource-converter/contents/README.md?ref=master",
      "git": "https://api.github.com/repos/gregswindle/github-resource-converter/git/blobs/c4e2170a790916adefbb378f0fbb4ac458314d0e",
      "html": "https://github.com/gregswindle/github-resource-converter/blob/master/README.md"
    }
  }
}
*/
```

## API

### `ScoreMe`

An API proxy for [@clayallsopp ![External link][icon-octicon-link-external]](https://github.com/clayallsopp)'s [`readme-score-api` ![External link][icon-octicon-link-external]](https://github.com/clayallsopp/readme-score-api).

#### `constructor(url: string): ScoreMe`

Create a shadow (instance) of `ScoreMe.prototype`.

##### Parameters

| Name | Type   | Description                                                     |
| :--- | :----- | :-------------------------------------------------------------- |
| url  | String | The URL or slug of the repository to be evaluated for a README. |

##### Examples

* _URL:_

  > ```js
  > const { ScoreMe } = require('readme-inspector')
  > const url = 'https://github.com/gregswindle/github-resource-converter'
  >
  > const scoreMe = new ScoreMe(url)
  > ```

* _Repository slug:_

  > ```js
  > const { ScoreMe } = require('readme-inspector')
  > const slug = 'gregswindle/github-resource-converter'
  >
  > const scoreMe = new ScoreMe(slug)
  > ```

#### `calculate(): Promise<ScoreMeData>`

Returns the Promise resolution:

```js
// ScoreMeData
{
  'breakdown': {
    'cumulative_code_block_length': 0,
    'has_lists': 0,
    'low_code_block_penalty': 0,
    'number_of_code_blocks': 0,
    'number_of_gifs': 0,
    'number_of_images': 0,
    'number_of_non_code_sections': 0
  },
  'err': null,
  'score': 0,
  'url': null
}
```

#### Parameters

None.

##### Examples

* _async/await:_

  > ```js
  > const { ScoreMe } = require('readme-inspector')
  >
  > const scoreMe = new ScoreMe('gregswindle/github-resource-converter')
  >
  > try {
  >   const result = await scoreMe.calculate()
  > } catch (err) {
  >   console.error(err)
  > }
  > ```

* _Promise:_

  > ```js
  > const { ScoreMe } = require('readme-inspector')
  >
  > const scoreMe = new ScoreMe('gregswindle/github-resource-converter')
  >
  > scoreMe
  >   .calculate()
  >   .then(result => {
  >     console.log(result)
  >   })
  >   .catch(err => {
  >     console.error(err)
  >   })
  > ```

#### `score(url: String): Promise<ScoreMeData>`

##### Parameters

| Name | Type   | Description                                                     |
| :--- | :----- | :-------------------------------------------------------------- |
| url  | String | The URL or slug of the repository to be evaluated for a README. |

##### Examples

* _URL:_

  > ```js
  > const { ScoreMe } = require('readme-inspector')
  > const url = 'https://github.com/gregswindle/github-resource-converter'
  >
  > const scoreMe = new ScoreMe()
  > scoreMe
  >   .score(url)
  >   .then(result => result)
  >   .catch(err => err)
  > ```

* _Repository slug:_

  > ```js
  > const { ScoreMe } = require('readme-inspector')
  > const slug = 'gregswindle/github-resource-converter'
  >
  > const scoreMe = new ScoreMe()
  > const result = await scoreMe.score(slug)
  > ```

### `ReadmeInspector`

## Version

[![NPM version][npm-image]][npm-url]

## Contributing

[![PRs Welcome][makeapullrequest-image] ![External link][icon-octicon-link-external]][makeapullrequest-url] We welcome contributions with GitHub **issues** and **pull requests**.

---

[![Request a feature][issues-new-feat-image]][issues-new-feat-url]
[![Report a defect][issues-new-defect-image]][issues-new-defect-url]

[![Read the CONTRIBUTING guidelines][contributing-image]][contributing-url]

---

Before embarking on a significant change, please adhere to the following guidelines:

1.  **[Create an issue][issues-url]**&mdash;e.g., a [defect ("bug") report][issues-new-defect-url] or a [feature request][issues-new-feat-url]&mdash;to propose changes.

    _Exceptions:_

    > If you're working on documentation and fixing something simple like a typo or an easy bug, go ahead and make a pull request.

1.  **[Follow the CONTRIBUTING guidelines][contributing-url].**

    _Why:_

    > Standards and guidelines make communication easier. If you're willing and able to program&mdash;or want to learn how&mdash; following the guidelines will increase the likelihood of adding your changes to the software product.

1.  **[Read the Code of Conduct][code-of-conduct-url].**

    _Why:_

    > It's more fun when everybody's friendly and respectful.

1.  **[Make a pull request][pr-url]** when you're ready for other to review your changes (or you get stuck somewhere).

    _PR novices:_

    > **🙋 Never created a pull request?** No problem. [🆓 Take this free online training ![External link][icon-octicon-link-external]][makeapullrequest-url]. (It even covers most of the conventions in the [CONTRIBUTING guidelines][contributing-url]!)

## License

MIT © [commonality](https://github.com/commonality)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector?ref=badge_large)

---

[![Greenkeeper badge](https://badges.greenkeeper.io/commonality/readme-inspector.svg)](https://greenkeeper.io/)
[![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/commonality/readme-inspector)](http://clayallsopp.github.io/readme-score?url=https://github.com/commonality/readme-inspector)

<!-- ⛔️ Link References ⛔️  -->

[bunyan-format-url]: https://github.com/thlorenz/bunyan-format/#readme
[node-bunyan-url]: https://github.com/trentm/node-bunyan/#readme
[optional-param-img]: https://fakeimg.pl/60x22/757575/FFF/?text=optional&font_size=16
[rest-get-img]: https://fakeimg.pl/40x40/0e8a16/FFF/?text=GET&font_size=20
[runkit-grc-url]: https://runkit.com/commonality/readme-inspector
[toc]: #table-of-contents

<!-- ⛔️ CI Services ⛔️  -->

[notice-url]: https://app.fossa.io/reports/07123904-7d26-40a6-b6af-c74e82a53789
[appveyor-image]: https://img.shields.io/appveyor/ci/gregswindle/readme-inspector.svg?style=flat-square&logo=appveyor&label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/commonality/readme-inspector
[codacy-image]: https://img.shields.io/codacy/grade/21f517a2d5bf4304895f40c5cbb596c4.svg?style=flat-square
[codacy-coverage-image]: https://img.shields.io/codacy/coverage/21f517a2d5bf4304895f40c5cbb596c4.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/readme-inspector?utm_source=github.com&utm_medium=referral&utm_content=commonality/readme-inspector&utm_campaign=Badge_Grade
[coveralls-image]: https://img.shields.io/coveralls/github/commonality/readme-inspector/master.svg
[coveralls-url]: https://coveralls.io/r/commonality/readme-inspector
[daviddm-dev-image]: https://david-dm.org/commonality/readme-inspector/dev-status.svg?theme=shields.io&style=flat-square
[daviddm-dev-url]: https://david-dm.org/commonality/readme-inspector?type=dev
[daviddm-image]: https://david-dm.org/commonality/readme-inspector.svg?theme=shields.io&style=flat-square
[daviddm-url]: https://david-dm.org/commonality/readme-inspector
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector.svg?type=shield&style=flat-square
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector?ref=badge_shield
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[npm-downloads-month]: https://img.shields.io/npm/dm/readme-inspector.svg?style=social
[npm-image]: https://img.shields.io/npm/v/readme-inspector.svg?style=flat-square
[npm-url]: https://npmjs.org/package/readme-inspector
[npms-image]: https://badges.npms.io/readme-inspector.svg?style=flat-square
[npms-url]: https://npms.io/search?q=readme-inspector
[nsp-image]: https://nodesecurity.io/orgs/commonality/projects/a2aa0184-ae94-4307-8b87-f0e12324368a/badge
[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/a2aa0184-ae94-4307-8b87-f0e12324368a
[travis-image]: https://img.shields.io/travis/commonality/readme-inspector.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.org/commonality/readme-inspector

<!-- ⛔️ Contributing ⛔️  -->

[code-of-conduct-url]: https://github.com/commonality/readme-inspector/blob/master/.github/CODE_OF_CONDUCT.md
[contributing-image]: https://img.shields.io/badge/read-CONTRIBUTING%20Guidelines-yellow.svg?style=for-the-badge&label=read+the
[contributing-url]: https://github.com/commonality/readme-inspector/blob/master/.github/CONTRIBUTING.md
[issues-new-defect-image]: https://img.shields.io/badge/report-defect-lightgrey.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: https://github.com/commonality/readme-inspector/issues/new?title=defect%28scope%29%3A+defect-summary&labels=priority%3a+medium%2cstatus%3a+review+needed%2ctype%3a+defect&template=defect-report.md
[issues-new-feat-image]: https://img.shields.io/badge/request-feature-blue.svg?style=for-the-badge&label=request+a
[issues-new-feat-url]: https://github.com/commonality/readme-inspector/issues/new?title=feat%28scope%29%3A+change-proposal-summary&labels=priority%3a+medium%2cstatus%3a+review+needed%2ctype%3a+feature&template=feature-request.md
[issues-url]: https://github.com/commonality/readme-inspector/issues
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[pr-url]: https://github.com/commonality/readme-inspector/pulls

<!-- ⛔️ Octicon img references ⛔️  -->

[icon-octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[icon-octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[icon-octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[icon-octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[icon-octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[icon-octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[icon-octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[icon-octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[icon-octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[icon-octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[icon-octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[icon-octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[icon-octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[icon-octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[icon-octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[icon-octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[icon-octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[icon-octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[icon-octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[icon-octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[icon-octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[icon-octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[icon-octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[icon-octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[icon-octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[icon-octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[icon-octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[icon-octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[icon-octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[icon-octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[icon-octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[icon-octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[icon-octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[icon-octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[icon-octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[icon-octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[icon-octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[icon-octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[icon-octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[icon-octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[icon-octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[icon-octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[icon-octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[icon-octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[icon-octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[icon-octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[icon-octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[icon-octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[icon-octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[icon-octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[icon-octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[icon-octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[icon-octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[icon-octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[icon-octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[icon-octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[icon-octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[icon-octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[icon-octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[icon-octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[icon-octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[icon-octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[icon-octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[icon-octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[icon-octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[icon-octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[icon-octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[icon-octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[icon-octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[icon-octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[icon-octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[icon-octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[icon-octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[icon-octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[icon-octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[icon-octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[icon-octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[icon-octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[icon-octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[icon-octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[icon-octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[icon-octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[icon-octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[icon-octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[icon-octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[icon-octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[icon-octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[icon-octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[icon-octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[icon-octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[icon-octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[icon-octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[icon-octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[icon-octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[icon-octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[icon-octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[icon-octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[icon-octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[icon-octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[icon-octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[icon-octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[icon-octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[icon-octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[icon-octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[icon-octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[icon-octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[icon-octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[icon-octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[icon-octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[icon-octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[icon-octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[icon-octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[icon-octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[icon-octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[icon-octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[icon-octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[icon-octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[icon-octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[icon-octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[icon-octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[icon-octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[icon-octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[icon-octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[icon-octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[icon-octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[icon-octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[icon-octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[icon-octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[icon-octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[icon-octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[icon-octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[icon-octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[icon-octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[icon-octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[icon-octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[icon-octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[icon-octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[icon-octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[icon-octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[icon-octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[icon-octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[icon-octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[icon-octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[icon-octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[icon-octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[icon-octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[icon-octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[icon-octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[icon-octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[icon-octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[icon-octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[icon-octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[icon-octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[icon-octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[icon-octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[icon-octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[icon-octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[icon-octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[icon-octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[icon-octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[icon-octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[icon-octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[icon-octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[icon-octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[icon-octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[icon-octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[icon-octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[icon-octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
