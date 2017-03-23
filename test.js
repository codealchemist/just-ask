const ask = require('./index')

ask('- What is your name?').then((answer) => {
  console.log(`- Hi "${answer}"! Nice to meet you!`)

  ask('- Now that we know each other, try writing a password:', '*').then((answer) => {
    console.log(`- Your password is "${answer}". Thanks for trusting me!`)
  })
})
