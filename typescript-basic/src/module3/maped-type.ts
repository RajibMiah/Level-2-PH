const arrayOfNumbers = [1, 2, 3];

const convertNumToString = arrayOfNumbers.map((num) => {
  return num.toString();
});

type volume = {
  areaName: string;
  height: number;
  width: number;
  depth: number;
};

type Area = {
  [key in keyof volume]: volume[key];
};

type Area1<T> = {
  readonly [key in keyof T]: T[key];
};
const area1: Area1<{ name: string; age: number }> = { name: "rajib", age: 25 };
console.log(convertNumToString);
