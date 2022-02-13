// ダウンキャスト

// export const color = "red";

// const theme = {
//   color: "red",
//   backgroundColor: "blue",
// } as const;

// theme.color = "red";

// export const color = "red" as const;
// let x = color;

// function foo() {
//   return { foo: "foo" } as const;
// }
// const y = foo();

//

// アップキャスト（型の抽象度を上げるものなのであまり使うべきではない）

// Non null assertion（危険なコード、余り使うべきではない）
// export function getFirstLetter(str?: string) {
//   // 対処法はundefinedのときにreturnさせる
//   if (str!) {
//     return;
//   }
//   return str?.charAt(0);
// }

//double assertion（あまり使うべきではない）
// export function getFirstLetter(str: number) {
//   return (str as unknown as string).charAt(0);
// }

// インデックスシグネチャー（あまり多用しないほうがいい）
// export type User = {
//   name: string;
//   age: number;
//   [key: string]: string | number | undefined;
// };

// const user: User = {
//   name: "shinji",
//   age: 20,
//   account: "mitochon",
//   job: "Software Engineer",
// };

// user.account;

// Mapped Types（）
// export type User = {
//   name: string;
// } & Required<PersonalData>;

// type PersonalData = {
//   height: number;
//   weight: number;
//   realName: string;
//   // [K in "height" | "weight"]?: number | string;
// };

// type RequirePersonalData = {
//   [K in keyof PersonalData]-?: PersonalData[K];
//   // height?: number|undefined;
//   // weight?: number|undefined;
// };

// const user: User = {
//   name: "shinji",
//   height: 174,
//   weight: 60,
// };

// Type Guard
// typeofを使った型ガード
// export const foo = (value: string | number | boolean) => {
//   if (typeof value === "string") {
//     return value;
//   }
//   if (typeof value === "number") {
//     return value;
//   }
//   return value;
// };

// 演算子を使った型ガード
// export const foo = (value: string | string[]) => {
//   if (Array.isArray(value)) {
//     return value;
//   }
//   return value;
// };

// export const foo = (value?: string) => {
//   if (!value) {
//     return;
//   }
//   return value;
// };

// type UserA = {
//   name: string;
// };
// type UserB = {
//   name: string;
//   nickName: string;
// };

// export const foo = (value: UserA | UserB) => {
//   if ("nickName" in value) {
//     return value;
//   }
//   return value;
// };

// type UserA = {
//   name: string;
//   lang: "ja";
// };
// type UserB = {
//   name: string;
//   lang: "en";
// };
// type UserC = {
//   name: string;
//   lang: "fr";
// };

// export const foo = (value: UserA | UserB | UserC) => {
//   switch (value.lang) {
//     case "ja": {
//       return value;
//     }
//     case "en": {
//       return value;
//     }
//     case "fr": {
//       return value;
//     }
//     default: {
//       throw Error("lang is not defined!");
//     }
//   }

// if (value.lang === "ja") {
//   return value;
// }
// return value;
// };

type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "ja";
};
const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === "en";
};

// export const foo = (value: any) => {
//   if (isUserA(value)) {
//     return value;
//   }
//   if (isUserB(value)) {
//     return value;
//   }
//   return value;
// };

// export const foo = async () => {
//   const res = await fetch("");
//   const json = await res.json();
//   if (isUserA(json)) {
//     return json.lang;
//   }
// };

// const users: (UserA | UserB)[] = [
//   { name: "たなか", lang: "ja" },
//   { name: "やまだ", lang: "ja" },
//   { name: "ジョニー", lang: "en" },
// ];

// const japanese = users.filter(isUserA);
// const notJapanese = users.filter(isUserB);

// Generics（型の決定を遅延できるもの）
// export type User<T> = {
//   name: string;
//   state: T;
// };

// type Japanese = User<"東京都" | "大阪府">;
// type American = User<"CA" | "NY">;

// const user1: Japanese = {
//   name: "田中",
//   state: "東京都",
// };

// const user2: American = {
//   name: "Johnny",
//   state: "CA",
// };

// export type Foo<T extends string | number = string> = {
//   value: T;
// };

// const foo1: Foo = {
//   value: "",
// };
// const foo2: Foo<number> = {
//   value: 111,
// };

// const foo = <T extends string | number>(arg: T) => {
//   if (typeof arg === "string") {
//     return {
//       value: arg.toUpperCase(),
//     };
//   }
//   return { value: arg.toFixed() };
// };

// const foo1 = foo<string>("");
// const foo2 = foo(1);
// const foo3 = foo([false]);
