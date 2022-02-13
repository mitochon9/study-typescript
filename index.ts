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
