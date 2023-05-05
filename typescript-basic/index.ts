// a type is dependent on another type
type a1 = null;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

type CheckTypeProperty<T, k> = k extends keyof T ? true : false;

type checkWife = CheckTypeProperty<Sheikh, "wife2">;

type friendsType = "Monika" | "Rachel" | "Pheobe";

type removeFriend1<T> = T extends "Rachel" ? never : T;

type checkFriend = removeFriend1<friendsType>;

type genericRemoveFriends<T, K> = T extends K ? never : T;

type checkFriendGenericWay = genericRemoveFriends<friendsType, "Pheobe">;
