# just-ask
Ask a question on the command line, get the answer in a promise.

# Install
`npm install --save just-ask`

# Usage

```
const ask = require('just-ask')
ask('Would you like to get a promise?').then((answer) => {
  console.log(`Your answer: ${answer}`)
})
```

# Why?

I wanted a dead simple and super lightweight module to get data from the user on the command line which works with promises.
This is it.
