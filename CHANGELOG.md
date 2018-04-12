# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.0"></a>

# 1.0.0 (2018-04-12)

### Features

* **module:readme-inspector:** Verify the existence—and assess the quality—of README files

  > ![quote][icon-octicon-quote] READMEs do more than explain how to use your project. They also
  > explain why your project matters, and what your users can do with it.
  >
  > In your README, try to answer the following questions:
  >
  > What does this project do?
  > Why is this project useful?
  > How do I get started?
  > Where can I get more help, if I need it?
  >
  > You can use your README to answer other questions, like how you handle
  > contributions, what the goals of the project are, and information about
  > licenses and attribution. If you don’t want to accept contributions, or
  > your project is not yet ready for production, write this information down.
  >
  > "Starting An Open Source Project." Open Source Guides.
  > N. p., 2018. Web. 12 Apr. 2018.

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

[icon-octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
