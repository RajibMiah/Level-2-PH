type GenericArray<T> = Array<T>;
type GenericToupls<X, Y> = [X, Y];

const relation: GenericToupls<string, string> = ["rajib", "ahmed"];

type person = {
  name: string;
  salary: number;
};

interface IPerson {
  name: string;
  salary: number;
}

const relationWithSalary: GenericToupls<IPerson, string> = [
  {
    name: "rajib",
    salary: 200,
  },
  "ahmed",
];

const rollNumber: GenericArray<number> = [1, 2, 3];
const rollNumber2: GenericArray<string> = ["44", "12", "4"];
const rollNumber3: GenericArray<boolean> = [true, false];

/*
 OBJECT TYPE GENERIC ARRAY
*/
type nameRollType = {
  name: string;
  roll: number;
};
const userNameAndRollNumber: GenericArray<nameRollType> = [
  {
    name: "MR. X",
    roll: 1,
  },
  {
    name: "MR. X",
    roll: 2,
  },
  {
    name: "MR. X",
    roll: 3,
  },
];
