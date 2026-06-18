// // <関数での型指定>
// function calculateTotal(price: number, quantity: number): number{
//     return price * quantity;
// }

// const result: number = calculateTotal(100,5);

// // 配列を受け取る関数
// function printNames(names: string[]): void {
//     names.forEach(name => console.log(name));
//     // for(const name of names){
//     //     console.log(name);
//     // }　　これも使えるー！
// }

// printNames(["田中", "佐藤", "鈴木"]);





// // <型の混在した配列>
// // 複数の型を入れたい場合
// const mixed: (string | number)[] = ["hello", 42, "world", 100];

// // 型を作ることもできる
// interface User{
//     name: string;
//     age: number;
// }

// const users: User[] = [
//     {name: "太郎", age: 25},
//     {name: "花子", age: 28}
// ];





// // 型注釈によるリテラル型
// let adultAge: 18;   // 18というリテラル型、:numberにすればエラーが治る
// adultAge = 20;
// // これをコンソール上で出力できるのは、jsに変更すると型指定が無視されるから





// // 型エイリアス
// type Role = number | string;
// type EventType = 'click' | 'hover' | 'keydown';

// let firstRole: Role;
// let lastRole: Role;





// // 過剰プロパティチェック
// type Person = {
//     name: string;
//     age: number;
// };

// // OK
// const tom: Person = {
//     name: 'TOM',
//     age: 20
// };

// // NG
// const bob: Person = {
//     name: 'Bon',
//     age: 30,
//     gender: 'female'
// };

// // OK
// const bo = {
//     name: 'Bob',
//     age: 30,
//     gender: 'female'
// };

// const bobAsPerson: Person = bo; // OK
// // boはPerson型として使えるか？



// // any型
// let value1: any = 1;
// value1 = 'noTypeCheck';
// value1.nocheck();
// let value2 = [1,2,3];
// let value3 = value1 + value2;



// // unknown型
// let value1: unknown = 1;

// let value2: number = value1;  //NG

// let value3: unknown = 10;
// if (typeof value3 === 'number') {
//     console.log(value3 + 1);
// }




// // 関数型(自分で書いたやつ)
// let myFunction: (arg1: number, arg2: number) => number;
// // はじめに関数の引数の型と戻り値の型を作る


// myFunction = (arg1,arg2) => {
//     return arg1 + arg2;
// };
// // 実際にどういう処理をするのか書く

// console.log(myFunction(5,10));
// // 実行




// // 型エイリアスに関数の型を入れる
// type Calc = (a: number, b: number) => number;
// const func1: Calc = (a,b) => a+b;
// const func2: Calc = (a,b) => a-b;
// const func3: Calc = (a,b) => a*b;
// const func4: Calc = (a,b) => a/b;
// const func5: Calc = (a,b) => a%b;

// console.log(func1(3,4));
// console.log(func2(8,2));
// console.log(func3(5,6));
// console.log(func4(9,3));
// console.log(func5(5,3));




// // インデックスシグニチャ
// interface FruitStock{
//     [i: string]: number;
// }

// const fruit: FruitStock = {};
// fruit.apple = 3;
// fruit.orange = 5;
// fruit.banana = 'many'; //エラー




// // オプショナルプロパティと読み取り専用プロパティ
// class Person {
//     readonly name: string;
//     age: number;
//     hobbies?: string[];

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     greet(greeting: string): void{
//         console.log(`Hello ${greeting}.`);
//     }
// }

// let tom: Person;
// tom = new Person('TOM', 30);
// tom.age = 31;
// tom.hobbies = ['basketball','soccer'];
// console.log(tom.age);




// // ゲッターセッター
// class Circle{
//     private _radius: number;

//     constructor(radius: number){
//         this._radius = radius;
//     }

// get radius(): number{
//     console.log('半径を取得')
//     return this._radius;
// }

// set radius(value: number){
//     if(value <= 0){
//         throw new Error('不正な値です');
//     }
//     console.log('半径を設定');
//     this._radius = value;
// }
// }






// // staticプロパティとメソッド
// class Circle{
//     static PI: number = 3.14;
//     // staticが付いているものはインスタンス化する必要がない
//     radius: number;

//     constructor(radius: number){
//         this.radius = radius;
//     }

//     getArea(): number{
//         return Circle.PI * this.radius * this.radius;
//     }
// }
// console.log(Circle.PI);

// const circleA = new Circle(5);
// console.log(circleA.getArea());

// const circleB = new Circle(10);
// console.log(circleB.getArea());






// 抽象クラス
abstract class Animal{
    abstract makeSound(): void;

    move(): void{
        console.log('Tge animal is moving');
    }
}

class Dog extends Animal{
    makeSound(): void{
        console.log("ワンワン！");
    }
}

const dog = new Dog();
dog.move();
dog.makeSound();