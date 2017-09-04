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
    setTimeout (() => clearInterval(this.start)); //espero a ejecutar por el setTimeout pero puedo ponerlo sin él.
  }

  update() {
    this.log()
   }

  //
  // _passengersEnter() { }
  //
  // _passengersLeave() { }
  //
  floorUp() {
    if(this.floor === this.MAXFLOOR) {
      console.log("noooooo")
    } else {
      this.floor += 1
    }

  }

  floorDown() {
    if(this.floor === 0) {
      console.log("no puedes bajar más")
    } else {
      this.floor -= 1
    }
  }

  // call() { }
  //

  log() {
    console.log(this.floor, this.direction);
   }
}

module.exports = Elevator;
