const age: number = 18;
const isAdult = age >= 18 ? "Yes" : "no";
console.log(isAdult);

const isAuthenticate = null;

// NULLISH COALESNACE OPERATOR USED ONLYY (NULL AND UNDEFINED TYPE)
const userName = isAuthenticate ?? "Guest";
console.log(userName);
