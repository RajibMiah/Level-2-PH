<<<<<<< HEAD
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
=======
type UserType = {
    social_class:"high";
    name:string;
    age:number;
    money:number
    addBalance(num:number):number;
}

const user : UserType = {
    social_class:"high",
    name: "mariya",
    age: 25,
    money: 10,
    addBalance(newValance:number):number{
        this.money += newValance;
        console.log(`user balance is updated\
        new balance is ${this.money}`);
        return this.money;
    }
}

console.log(user.addBalance(50));

type AddArray = (num1:number , num2:number)=>number;
const addArray:AddArray = (num1 , num2) => {
    return num1 + num2
}
const result = addArray(1 , 2);
console.log(result)

const numArray:number[] = [1,2,3,4];

const squreArray:Array<number> = numArray.map((num:number)=>{
    return num * num;
});

console.log(squreArray);
type TypeLevel = {
    junior:string,
    mid:string,
    senior:string,

}
enum Level{
    junior="junior",
    mid = "mid",
    senior = "senior"
}

console.log(Level.junior);
let cityDescription : any;
cityDescription = "The city is so beautiful";

interface IAddNumbers{
    (num1: number , num2:number ) : number;
}

interface IRollNumbers{
    [index: number] : number;
}

const addNumber:IAddNumbers =  (num1 , num2)=> num1 + num2;

const rollNumber:IRollNumbers = [1,4,5,6];

interface ICrush < T  , Y= null> {
    crush:X,
    husband: boolean;
    sister?: Y;
}
type ObjectType={
    name:string;
    age:number;
}
const crush1:ICrush<boolean> = {crush:'kate winslet' , husband:true} 
const crush2:ICrush<string> ={crush:'kate winslet' , husband:false}
const crush3:ICrush<boolean , boolean> = {crush:'kate winslet' , husband:true , sister:false}

const crush4:ICrush<ObjectType , ObjectType> = { crush:{name:'kate winslet' , age:25} , husband:false ,
 sister:{name:'sister' , age:18}};
>>>>>>> af1f5f224959cbcfd3a5b487be98a9146ca182bf
