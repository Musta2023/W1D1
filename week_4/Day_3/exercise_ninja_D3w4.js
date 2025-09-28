class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");  // Runs whenever a Bird (or subclass) is constructed
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");   // Runs first inside Flamingo constructor
    super();                       // Calls the parent (Bird) constructor
  }
}

const pet = new Flamingo();

// I'm pink. 🌸
// I'm a bird. 🦢
