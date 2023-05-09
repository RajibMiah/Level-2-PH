type ArrayType = {
  name: string;
  age: number;
};

const objectArray: Array<ArrayType> = [
  { name: "ratul", age: 10 },
  { name: "farhan", age: 18 },
  { name: "khattappa", age: 50 },
  { name: "susma", age: 20 },
  { name: "ashis", age: 15 },
];

const filteredOutput = objectArray.filter((data: ArrayType) => data.age >= 18);

console.log(filteredOutput);
