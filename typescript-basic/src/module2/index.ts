type noobDeveloper = {
  name: string;
};

// type juniorDeveloper = {
//     name:string;
//     expertise:string;
//     experience:number;
// }
type juniorDeveloper = noobDeveloper & {
  name: string;
  expertise: string;
  experience: number;
};

const newDeveloper: noobDeveloper | juniorDeveloper = {
  name: "Rajib Miah",
  expertise: "javascript",
  experience: 1,
};

enum level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type nextLevelDeveloper = juniorDeveloper & {
  leadershipexperience: number;
  level: level;
};

const developer: nextLevelDeveloper = {
  name: "rajib miah",
  expertise: "Typescript",
  experience: 2,
  leadershipexperience: 1,
  level: level.mid,
};
