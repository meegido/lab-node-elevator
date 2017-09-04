class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.start = setInterval(() => this.update(), 1000)

    }

  stop() {
    setTimeout (() => clearInterval(this.start), 2000);
  }

  update() {
    elevator.log()
   }
  //
  // _passengersEnter() { }
  //
  // _passengersLeave() { }
  //
  // floorUp() { }
  //
  // floorDown() { }
  //
  // call() { }
  //
  log() {
    console.log(this.floor, this.direction);
   }
}


const elevator = new Elevator();

module.exports = Elevator;
