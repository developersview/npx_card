#!/usr/bin/env node
 // 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
}

// Text + chalk definitions
const data = {
    name: chalk.white('Pranoy Chakraborty'),
    handle: chalk.cyan('@developersview'),
    labelWork: chalk.white.bold('      Work:'),
    work: chalk.white('Software Engineer'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    twitter: chalk.cyan('https://twitter.com/ig_pranoy'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    github: chalk.cyan('https://github.com/developersview'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    linkedin: chalk.cyan('https://linkedin.com/in/pranoy-chakraborty'),
    labelWeb: chalk.white.bold('Instagram:'),
    web: chalk.cyan('https://instagram.com/ig_pranoy'),
    labelCard: chalk.white.bold('      Card:'),
    npx: chalk.white('npx pranoy'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
    heading +
    newline +
    newline +
    working +
    newline +
    twittering +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    newline +
    carding

console.log(chalk.green(boxen(output, options)))