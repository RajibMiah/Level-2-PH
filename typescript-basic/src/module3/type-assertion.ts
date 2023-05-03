let assertion: any;

assertion = "Next level web development";
(assertion as string).length;

// NOTE:: ANGEL BRACKET SYNTEXT
<string>assertion.length;
console.log(assertion);

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param == "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is: ${value} grem`;
  }
  if (typeof param === "number") {
    const value = param * 100;
    return value;
  }
}

const resultTobeNumber = <number>kgToGram(1000);
const reusltTobeString = kgToGram("1000") as string;

type customeErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as customeErrorType).message);
}
