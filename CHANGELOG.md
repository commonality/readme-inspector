# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.2"></a>

## [1.0.2](https://github.com/commonality/readme-inspector/compare/v1.0.1...v1.0.2) (2018-04-17)

### Bug Fixes

* **null-readme-score:** add url to search ([49d4065](https://github.com/commonality/readme-inspector/commit/49d4065)), closes [#18](https://github.com/commonality/readme-inspector/issues/18) [#19](https://github.com/commonality/readme-inspector/issues/19)

  > [`ReadmeScore.for`](https://github.com/commonality/readme-inspector/blob/master/lib/readme-score.js#L60)&mdash;and consequently, [`readmeInspector.getReadmeScore`](https://github.com/commonality/readme-inspector/blob/master/lib/index.js#L150)&mdash;returning `nullScoreData`, i.e., scores for READMEs that should have high marks.
  >
  > Refactor `readmeScoreApiClientOptions` with a single property called `apiEndpoint: URL` in order to set the `url` query parameter explicitly, and call `apiEndpoint.toString()` for a serialized URL string.

<a name="1.0.1"></a>

## [1.0.1](https://github.com/commonality/readme-inspector/compare/v1.0.0...v1.0.1) (2018-04-16)

### Bug Fixes

* **config:** add default .env var values ([7a71637](https://github.com/commonality/readme-inspector/commit/7a71637)), closes [#11](https://github.com/commonality/readme-inspector/issues/11) [#10](https://github.com/commonality/readme-inspector/issues/10).

  Replaced [`dotenv`][dotenv-url] with [`dotenv-extended`][dotenv-extended-url] in order to load default values.

<a name="1.0.0"></a>

## 1.0.0 (2018-04-12)

### Features

* **module:readme-inspector:** Verify the existence—and assess the quality—of README files

  > ![quote][octicon-quote] READMEs do more than explain how to use your project. They also
  > explain why your project matters, and what your users can do with it.
  >
  > In your README, try to answer the following questions:
  >
  > * What does this project do?
  > * Why is this project useful?
  > * How do I get started?
  > * Where can I get more help, if I need it?
  >
  > You can use your README to answer other questions, like how you handle
  > contributions, what the goals of the project are, and information about
  > licenses and attribution. If you don’t want to accept contributions, or
  > your project is not yet ready for production, write this information down. <sup><a href="#ref-1" title="View reference.">[1]</a></sup>

  **Public API**

  _Methods_

  * `authenticate` - Sets GitHub credentials for all subsequent requests.
  * `check` - Attempts to GET and assess a README at a repo-root directory.
  * `getReadmeInfo` - Attempt to GET a README without assessing it.
  * `getReadmeScore` - Assess the quality of a README.

  _Properties_

  * `ReadmeScore` - An API proxy wrapper for the readme-score-api.
  * `api` - A configurable Octokit instance.

  _Documentation_

  Visit <https://github.com/commonality/readme-inspector/#readme> for
  more information about installation, usage, API, version,
  contributing guidelines, and licenses.

  _Commit_

  ([e04a07a](https://github.com/commonality/readme-inspector/commit/e04a07a)), closes [#1](https://github.com/commonality/readme-inspector/issues/1)

## References

<a name="ref-1"></a>
**[1]** _Starting an Open Source Project._ (2018). _Open Source Guides._ Retrieved 15 April 2018, from <https://opensource.guide/starting-a-project/#writing-a-readme>

[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[dotenv-url]: https://github.com/motdotla/dotenv
[dotenv-extended-url]: https://github.com/keithmorris/node-dotenv-extended
