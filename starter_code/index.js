const Elevator = require('./elevator.js');
const Person = require('./person.js');


const elevator = new Elevator();

elevator.start();

elevator.floorUp()
let espera = setTimeout(()=> elevator.floorUp(),1000)
let espera1 = setTimeout(()=> elevator.floorUp(),2000)
let espera2 = setTimeout(()=> elevator.floorUp(),3000)
let espera3 = setTimeout(()=> elevator.floorUp(),4000)
let espera4 = setTimeout(()=> elevator.floorUp(),5000)
