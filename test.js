const ask = require('./index')

ask('- What is your name?')
.then((answer) => {
  console.log(`- Hi "${answer}"! Nice to meet you!`)
  return ask('- Now that we know each other, try writing a password:', '*')
})
.then((password) => {
  console.log(`- Your password is "${password}". Thanks for trusting me!`)
})
