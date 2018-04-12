# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.0"></a>

# 1.0.0 (2018-04-12)

### Features

* **module:readme-inspector:** Verify the existence—and assess the quality—of README files<br><br>

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

  1.  Methods
      1.1. `authenticate` - Sets GitHub credentials for all subsequent requests.
      1.2. `check` - Attempts to GET and assess a README at a repo-root directory.
      1.3. `getReadmeInfo` - Attempt to GET a README without assessing it.
      1.4. `getReadmeScore` - Assess the quality of a README.

  2.  Properties
      2.1. `ReadmeScore` - An API proxy wrapper for the readme-score-api.
      2.2. `api` - A configurable Octokit instance.

  **README.md**

  Visit <https://github.com/commonality/readme-inspector/#readme> for
  installation, usage, API, version, contributing guidelines, and licenses.

  ([e04a07a](https://github.com/commonality/readme-inspector/commit/e04a07a)), closes [#1](https://github.com/commonality/readme-inspector/issues/1)

[icon-octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
