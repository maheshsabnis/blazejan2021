import {
    array,
    operation
} from './exportcode.js';

array.print();
let name = 'The Demo String';
console.log(`Length of ${name} is = ${operation.getLength(name)}`);
console.log(`Upper Case of ${name} is = ${operation.upper(name)}`);