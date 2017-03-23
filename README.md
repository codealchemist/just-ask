# just-ask
Ask a question on the command line, get the answer in a promise.


# Install
`npm install --save just-ask`


# Usage

Ask a question (chars shown on screen as user types):

```
const ask = require('just-ask')
ask('Would you like to get a promise?').then((answer) => {
  console.log(`Your answer: ${answer}`)
})
```

Ask for a password (chars replaced by set char as user types):

```
const ask = require('just-ask')
ask('What is your password?', '*').then((answer) => {
  console.log(`Your password: ${answer}`)
})
```

Note that you can use any char you want, or even an empty space:

`ask('What is your password?', ' ')`


# Why?

I wanted a dead simple and super lightweight module to get data from the user on the command line which works with promises.
This is it.
