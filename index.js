class Animal {
    constructor(name, backbone, blooded) {
      this.name = name;
      this.backbone = backbone;
      this.blooded = blooded;
    }
  
    // Encapsulation: Getter methods to access properties
    getName() {
      return this.name;
    }
  
    hasBackbone() {
      return this.backbone;
    }
  
    isWarmBlooded() {
      return this.blooded === 'warm';
    }
  
    // Abstraction: Display basic information about the animal
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Has Backbone: ${this.backbone}`);
      console.log(`Blooded: ${this.blooded}`);
    }
  
    // Polymorphism: Method eat() can be overridden in subclasses
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Subclasses inheriting from Animal
  class Arthropoda extends Animal {
    constructor(name) {
      super(name, false, 'cold');
    }
  }
  
  class Fish extends Animal {
    constructor(name) {
      super(name, true, 'cold');
    }
  }
  
  class Amphibia extends Animal {
    constructor(name) {
      super(name, true, 'cold');
    }
  }
  
  class Reptile extends Animal {
    constructor(name) {
      super(name, true, 'cold');
    }
  }
  
  class Aves extends Animal {
    constructor(name) {
      super(name, true, 'warm');
    }
  }
  
  class Mammals extends Animal {
    constructor(name) {
      super(name, true, 'warm');
    }
  
    // Override eat() method
    eat() {
      console.log(`${this.name} is drinking milk.`);
    }
  }
  
  // Instantiate objects
  const butterfly = new Arthropoda('Butterfly');
  const salmon = new Fish('Salmon');
  const frog = new Amphibia('Frog');
  const tortoise = new Reptile('Tortoise');
  const eagle = new Aves('Eagle');
  const cat = new Mammals('Cat');
  
  // Display basic information
  butterfly.displayInfo();
  salmon.displayInfo();
  frog.displayInfo();
  tortoise.displayInfo();
  eagle.displayInfo();
  cat.displayInfo();
  
  cat.eat();   