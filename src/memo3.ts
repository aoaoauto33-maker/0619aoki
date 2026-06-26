// type RouteConfig = {
//     path: string;
//     label: string;
// };


// // satisfies
// const routes = {
//     home: { path: "/", label: "Home" },
//     about: { path: "/about", label: "About" },
// } satisfies Record<string, RouteConfig>;
// // satisfiesを使うと、routesの中にどんなデータが入ってるのか見てくれる

// console.log(routes.home.label);
// // takoと入れるとエラー


// // 単なる型注釈だと
// const routes: Record<string, RouteConfig> = {
//     home: { path: "/", label: "Home" },
//     about: { path: "/about", label: "About" },
// };
// // 中身はわからない

// console.log(routes.tako);
// // takoと入れてもエラーにならない




// // パターン3 リテラル型を温存したい(あんま使わない)
// const config = {
//     env: "dev",
//     retries: 3,
// } satisfies {
//     env: "dev" | "prod";
//     retries: number;
// };
// console.log(config.env);




// // 型チェック+詳細維持
// type TireKind = 0 | 1 | 2 | 3;

// const TIRE_KIND_LABELS = {
//     0: "その他",
//     1: "夏タイヤ",
//     2: "オールシーズン",
//     3: "冬タイヤ"
// } as const satisfies Record<TireKind, string>;
// // キーにはTireKindの値しか入らないので、4:は書けない
// // as constがあると、固定の値をつけられるし、readonlyみたいになる
// // つまり、as constをつけると上書き不可になる




// // <typeof>こういう使い方はあんまやらない
// const person = {
//     name: 'Tom',
//     age: 30,
//     hobbies: ['tennis', 'cooking'],
// }
// // 既存の「変数」から型を取得してパラメータの型として指定
// function greet(p: typeof person) {
//     // personが使っている型を引数の型に使ってくださいね
//     console.log(p);
// }

// console.log(greet(person));





// // keyofとtypeofの組み合わせ
// const employee = {
//     id: 'e001',
//     name: 'Tom',
//     department: 'Engineering'
// }

// function getEmployeeDetail(key: keyof typeof employee){
//     // keyof typeof employee = 'id' | 'name' | 'department'
//     return employee[key];
// }
// console.log(getEmployeeDetail('name'));





// // ジェネリッククラス
// class DataStorage<T> {
//     private items: T[] = [];

//     add(item: T): void {
//         this.items.push(item);
//     }

//     getItem(index: number): T{
//         return this.items[index];
//     }

//     getAllItems(): T[] {
//         return [...this.items];
//     }
// }

// // インスタンス化した時に型が決まる
// let numberStorage = new DataStorage<number>();
// numberStorage.add(10);
// console.log(numberStorage.getItem(0));





// // ジェネリクス型の制約
// interface Person{
//     name: string;
//     age: number;
//     hobbies: string[];
// }

// const person: Person = {
//     name: 'Tom',
//     age: 18,
//     hobbies: ['cooking', 'tennis']
// };

// // keyof Personは 'name' | 'age' | 'hobbies'
// // 定数の型情報が欲しい場合はtypeofが必要
// function getProperty(obj: Person, key: keyof Person){
//     return obj[key];
// }

// getProperty(person, 'name');

// function getSpecificProperty<T, K extends keyof T>(obj: T, key:K){
//     return obj[key];
// }

// getSpecificProperty(person, 'name');






// // Partial<T>型
// interface User{
//     name: string;
//     email: string;
//     age?: number;
// }

// let user1: User = {
//     name: 'Tom',
//     email: 'tom@gmail.com',
//     age: 18
// };

// function updateUser(user: User, fieldsToUpdate: Partial<User>){
//     // Partial<User> = User型の一部だけ入ってる(？は入らない)
//     return { ...user, ...fieldsToUpdate};
//     // 上書きしている
// }

// user1 = updateUser(user1, {
//     email: 'abc@gmail.com'
// });

// console.log(user1);






// // tsの非同期処理
// function fetchMessage(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Hello!"), 1000);
//     });
// }

// async function main(){
//     const message = await fetchMessage();
//     console.log(message);
//     console.log("こんにちは");
// }

// main();