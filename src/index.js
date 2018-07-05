const whiggle = require('./whiggle')
const { msleep } = require('sleep');

while(true) {
  whiggle.map(line => {
    console.log(line)
    msleep(19)
  })
}
