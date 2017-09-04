class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
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

  _passengersEnter(person) {
    if(this.floor === person.originFloor) {
      this.passengers.push(person);
      this.waitingList.pop();
      this.requests.push(person.destinationFloor);
      console.log(`${person.name} has enter the elevator`);
      }
    }

  _passengersLeave(person) {
    if(this.floor === person.destinationFloor) {
      this.request.pop();
      console.log(`${person.name} has left the elevator`);
    }
  }

  floorUp() {
    if(this.floor === this.MAXFLOOR) {
      console.log("noooooo")
    } else {
      this.direction = "up"
      this.floor += 1
    }

  }

  floorDown() {
    if(this.floor === 0) {
      console.log("no puedes bajar más")
    } else {
      this.direction = "down"
      this.floor -= 1
    }
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    this._passengersEnter(person);
    this._passengersLeave(person);

  }


  log() {
    console.log(this.floor, this.direction);
   }
}

module.exports = Elevator;
