'use strict'
const read = require('read')

/**
 * Ask passed question on the command line.
 * Return a promise.
 * The promise is resolved with the given answer.
 * If charReplacer is provided replaces each input character
 * with passed one.
 *
 * @param  {string} question
 * @param  {string} charReplacer
 * @return {promise}
 */
function ask (question, charReplacer) {
  return new Promise((resolve, reject) => {
    let options = {
      prompt: question,
      input: process.stdin
    }

    if (charReplacer) {
      options.silent = true
      options.replace = charReplacer
    }

    read(options, (err, response) => {
      if (err) return reject(err)
      resolve(response)
    })
  })
}

module.exports = ask
