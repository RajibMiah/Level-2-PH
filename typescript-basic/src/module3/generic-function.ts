const createArray = <T>(param: T): T[] => {
  return [param];
};

const createTuples = <X, Y>(para1: X, para2: Y): [X, Y] => {
  return [para1, para2];
};

type PersonalType = {
  name: string;
  age: number;
};

type TouplesType = [number, string];

const reuslt1 = createArray<string>("bangladesh");
const reuslt2 = createArray<boolean>(true);
const reuslt3 = createArray<PersonalType>({ name: "rajib", age: 20 });
const getTopuls: TouplesType = createTuples<number, string>(1, "banana");

interface IPersonalInfo {
  name: string;
  age: number;
  salary: number;
}

const myCrush = "Mariya";

const PersonalInfo: IPersonalInfo = {
  name: "rajib miah",
  age: 25,
  salary: 1000010,
};

const newInfo = { ...PersonalInfo, myCrush };

const getMeInsideMyCrushHeart = <T>(data: T) => {
  const crush = "mariya";

  return { ...data, crush };
};

const getAnswer = getMeInsideMyCrushHeart(PersonalInfo);
console.log(getAnswer.crush);
