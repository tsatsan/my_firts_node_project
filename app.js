var sum = require('./operations/sum.js')
var mult = require('./operations/multiplication.js')
var division = require('./operations/division.js')
var substraction = require('./operations/substraction.js')
var moment = require('moment')

console.log('the sum of 3 & 7 is: '+ sum(3, 7))
console.log('the multiplication of 3 & 7 is: ' + mult(3, 7))
console.log('the division of 3 & 7 is: ' + division(3, 7))
console.log('the substraction of 3 & 7 is: ' + substraction(3, 7))

var today = moment
console.log(today().format('dddd, MMMM Do YYYY, hh:mm:ss a'))

