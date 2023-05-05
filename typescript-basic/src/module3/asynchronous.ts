type dataType = {
  data: {
    name: string;
  };
};
interface IDataType {
  data: {
    name: string;
  };
}
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData;

const makePromise = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = {
      data: {
        name: "rajib",
      },
    };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data !");
    }
  });
};
const getPromiseData = async (): Promise<dataType> => {
  const data = await makePromise();
  return data;
};
// promise<string> | promise<boolean> | promise<object>;
