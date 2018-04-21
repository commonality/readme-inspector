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
  let index = 0
  let paths = ['**/*.md', '../CONTRIBUTING.md', '../../docs/**/*.md']

  paths.forEach(filePath => {
    markdownPath = path.join(__dirname, filePath)
    markdownMagic(markdownPath, config)
  })
}

main()
