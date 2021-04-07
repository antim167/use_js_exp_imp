// named import
//import {something} from somelibarary;
import { fileA } from './a.js';
var a = fileA();
console.log(a);


///default import 
//import something from somelibaray
import fileB from './b.js';
var b = fileB();
console.log(b);


// named import
//import {something} from somelibarary;
import { FileC } from './c.js';
//create an ecternal of the class
let obj = new FileC();
//access member fun of the class
let c = obj.getnum();
console.log(c);


///default import 
//import something from somelibaray
import filed from './d.js';
const d = filed[0].geta();
console.log(d);

//default import
//import something from somelibary
import filee from './e.js';
//create an ecternal of the class
let obj1 = new filee();
//access member fun of the class
let u = obj1.get();
console.log(u);


//addition

console.log(`addition is ${a+b+c+d+u}`);