type normalUser = {
  name: string;
};
type adminUserType = {
  name: string;
  role: "admin";
};

const getUserType = (user: normalUser | adminUserType): string => {
  if ("role" in user) {
    return `this role is admin and my role is ${user.role}`;
  } else {
    return `I am a normal user ${user.name}`;
  }
};
const normalUser1: normalUser = { name: "rajib" };
const normalUser2: adminUserType = { name: "rajib", role: "admin" };

console.log(getUserType(normalUser1));
console.log(getUserType(normalUser2));
