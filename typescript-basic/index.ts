class Person {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  getDetails(): string {
    return `The person name is: ${this._name} and the age is: ${this._age}`;
  }
}

class Student extends Person {
  private _grade: number;
  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this._grade = grade;
  }

  getGrade(): string {
    return `The student grade is ${this._grade}`;
  }
}

const person = new Person("shahadin mahmud", 20);
const student = new Student("Rajib Miah", 25, 3.35);
console.log(person.getDetails());
console.log(student.getGrade());
