type keyType = "name" | "age" | "salary";

const a: keyType = "salary";

type personType = {
  name: string;
  age: number;
  salary: number;
};

type personKeyType = keyof personType;

const personProperty = {
  name: "rajib",
  age: 25,
};

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};
const property = getProperty(personProperty, "age");

const addMyGfName = <T extends myInfoType>(myInfo: T) => {
  const gfName = "kate winslet";
  return { ...myInfo, gfName };
};
type myInfoType = {
  name: string;
  age: number;
  salary: number;
  address: string;
};

const myInfo: myInfoType = {
  name: "rajib",
  age: 25,
  salary: 200000,
  address: "shibgonj",
};

const addedResult = addMyGfName<myInfoType>(myInfo);
