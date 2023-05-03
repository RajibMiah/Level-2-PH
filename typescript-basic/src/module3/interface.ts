type User = {
  name: string;
  age: number;
};

/*---------------------------------------------- 
    NOTE:: EXTENDED AND UNION INTERFACEA AND TYPE ALIAS EXAMPLES
 ------------------------------------*/
interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const user: IExtendedUser = {
  name: "omanuish",
  age: 200,
  role: "unknown",
};

type extendedUser = User & {
  role: string;
};

const userWithTypeAlias: extendedUser = {
  name: "type alias",
  age: 20,
  role: "unknown",
};

const userWithInterface: IUser = {
  name: "type interface",
  age: 20,
};

/*---------------------------------------------- 
 NOTE:: FUNCTION'S INTERFACE AND TYPE ALIEAS , IT IS RECOMANDED THAT FOR FUNCTION IS 
 IS MORE CONVINIENT TO USE TYPE ALIAS
 ------------------------------------*/

type addNumberType = (num1: number, num2: number) => number;

interface IAddNumber {
  (num1: number, num2: number): number;
}

const addNumber: IAddNumber = (num1, num2) => num1 + num2;

/*---------------------------------------------- 
    NOTE::ARRAY INTERFACE AND TYPE ALIAS
 ------------------------------------*/

type rollNumberType = number[];

interface IRollNumber {
  [index: number]: number;
}

const rollNumber: rollNumberType = [1, 4, 5];
