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





// // <instanceof>
// class Person{
//     name = "Taro";
// }
// const p = new Person();
// console.log(p instanceof Person);






// // <タグ付きユニオンによる絞り込み>
// type Dog = {
//     type: "dog";
//     name: string;
// };

// type Cat = {
//     type: "cat";
//     age: number;
// };

// type Animal = Dog | Cat;

// function speak(animal: Animal) {
//     switch (animal.type) {
//         case "dog":
//             console.log(animal.name);
//             break;

//         case "cat":
//             console.log(animal.age);
//             break;
//     }
// }

// // 動作確認
// const dog: Dog = {
//     type: "dog",
//     name: "Pochi",
// };
// // 変数の中にタグを入れることで、speakの中でタグを判定してくれる

// speak(dog);





// // satisfiesはどんな時に使う？ 設定ファイルを書くときに使う
// type Config = {
//     host: string;
//     port: number;
// };
// const config = {
//     host: "localhost",
//     port: 3000,
// }satisfies Config;