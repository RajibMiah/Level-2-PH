interface IPrintFunc {
  (txt: string, times?: number): void;
}
const printFunc: IPrintFunc = (txt: string, times: number = 3) => {
  while (times--) {
    console.log(txt);
  }
};

printFunc("I LOVE YOU", 5);
