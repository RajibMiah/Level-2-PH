interface CrushInterface<T, U = null | undefined, v = undefined | null> {
  name: string;
  husband: T;
  Wifi?: U;
  other?: v;
}

interface Person {
  name: string;
  age: number;
}

const crush4: CrushInterface<Person, Person> = {
  name: "kate",
  husband: {
    name: "rajib",
    age: 30,
  },
  Wifi: {
    name: "winslet",
    age: 40,
  },
};

const crush1: CrushInterface<boolean> = {
  name: "MR. X",
  husband: true,
};

const crush2: CrushInterface<string> = {
  name: "MR. X",
  husband: "rajib",
};

interface IHusband {
  name: string;
  salary: number;
}
const crush3: CrushInterface<IHusband> = {
  name: "kate winslet",
  husband: {
    name: "rajib",
    salary: 200,
  },
};
