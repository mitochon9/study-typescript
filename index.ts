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
export function getFirstLetter(str: number) {
  return (str as unknown as string).charAt(0);
}
