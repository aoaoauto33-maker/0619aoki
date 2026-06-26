// // <typeof>
// const num : number = 10;
// console.log(typeof num);

// const person ={
//     name: "Taro",
//     age: 20,
// };
// type Person = typeof person;
// // personの型をコピーして、型エイリアスであるPersonの型を決めてる
// // いちいち型を書くのは面倒なので、変数から型をコピーした方が楽

// function add(a: number, b: number){
//     return a + b;
// }
// type AddType = typeof add;
// // 関数にも使える
// // type AddType = (a: number, b: number) => number;になる





// <instanceof>
class Person{
    name = "Taro";
}
const p = new Person();
console.log(p instanceof Person);