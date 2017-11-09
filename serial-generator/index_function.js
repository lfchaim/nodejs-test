var SerialGenerator = require('./serial_function.js');
var sgA = new SerialGenerator();
var sgB = new SerialGenerator();
console.log(sgA === sgB);
console.log(sgA.generate() + '::' +sgB.generate());