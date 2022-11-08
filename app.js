const { arg } = require('mathjs');
const { Crefi}= require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// console.log(process.argv);console.log('base: yargs', argv.base);console.log(argv);const [,,arg3='base=5']=process.argv;const [,base=5]=arg3.split('=');console.log(arg3);console.log(base);

const base = 5;

Crefi(argv.b, argv.l, argv.h)
.then(FName => console.log(FName.rainbow, 'creado'))
.catch(err=>console.log(err));

