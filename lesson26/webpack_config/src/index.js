import './scss/main.scss';

import $ from "jquery";


import User from './User.js';
import {multThree, multTwo} from './functions';
import {growth, waning} from './array-utils';

let arrNumber = [5, 2, 1, -10, 8];
let newArrNumber = [...arr];

newArrNumber.sort(growth);
// newArrNumber.sort(waning);

console.log(arrNumber);
console.log(newArrNumber);

console.log('hello word');

const foo = (name) => {
    console.log(`hello ${name}`);
}

foo('asdad');
foo('Test');


const layout = `<div class='items'>
    <div class='item'>item</div>
    <div class='item'>item</div>
    <div class='item'>item</div>
</div>`

$('#app').html(layout);




const john = new User('John');

john.printName();

console.log(multThree(3));
console.log(multTwo(5));

