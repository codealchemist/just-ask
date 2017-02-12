'use strict'
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Ask passed question on the command line.
 * Return a promise.
 * The promise is resolved with the given answer.
 *
 * @param  {string} question
 * @return {promise}
 */
function ask (question) {
  return new Promise((resolve, reject) => {
    rl.question(`${question} `, (response) => {
      resolve(response)
    })
  })
}

module.exports = ask
