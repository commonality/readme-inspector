/* eslint global-require: "off" */
/* eslint node/no-unpublished-require: "off" */
const markdownMagic = require('markdown-magic')
const markdownMagicDependencyTable = require('markdown-magic-dependency-table')
const markdownMagicPackageScripts = require('markdown-magic-package-scripts')
const path = require('path')

const config = {
  DEBUG: false,
  transforms: {
    DEPENDENCYTABLE: markdownMagicDependencyTable,
    SCRIPTS: markdownMagicPackageScripts
  }
}

const main = () => {
  let markdownPath = path.join(__dirname, '**/*.md')
  markdownMagic(markdownPath, config)

  markdownPath = path.join(__dirname, '..', 'CONTRIBUTING.md')
  console.log(markdownPath)
  markdownMagic(markdownPath, config)
}

main()
