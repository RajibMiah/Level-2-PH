class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I make sound ");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  barking() {
    console.log("I make sound bark");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  mewaing() {
    console.log("I make sound meawing");
  }
}

const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};

const getAnimalSound = (animal: Animal) => {
  if (isDog(animal)) {
    animal.barking();
  } else if (animal instanceof Cat) {
    animal.mewaing();
  } else {
    animal.makeSound();
  }
};

const dog = new Dog("dog", "german shepard");
const cat = new Cat("cat", "billu");

getAnimalSound(cat);

type normalUser = {
  name: string;
};
type adminUserType = {
  name: string;
  role: "admin";
};

const getUserType = (user: normalUser | adminUserType): string => {
  if ("role" in user) {
    return `this role is admin and my role is ${user.role}`;
  } else {
    return `I am a normal user ${user.name}`;
  }
};
const normalUser1: normalUser = { name: "rajib" };
const normalUser2: adminUserType = { name: "rajib", role: "admin" };

console.log(getUserType(normalUser1));
console.log(getUserType(normalUser2));
