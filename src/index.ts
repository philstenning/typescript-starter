import { of } from 'rxjs';
console.log('\n\nhello, thing are working as they should.\n\n');



//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));