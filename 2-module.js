// Modules
// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour')
console.log(data);
sayHi.sayHi('Yuvraj');
sayHi.sayHi(names.yuvraj);
sayHi.sayHi(names.soni);
// console.log(sayHi)
// console.log(names);