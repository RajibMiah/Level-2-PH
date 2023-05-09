const reverseArray = <T>(...rest: T[]): Array<T> => rest.reverse();

const nameArray: Array<string> = ["kajol", "probal", "shahadin", "rajib"];
const numArray: Array<number> = [1, 2, 3, 4, 5];
console.log(reverseArray(...nameArray));
console.log(reverseArray(...numArray));
