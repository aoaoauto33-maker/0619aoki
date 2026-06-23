class Character{
    name: string;
    private _hp: number;
    attackPower: number;


    // コンストラクタ
    constructor(name: string, hp: number, attackPower: number){
        this.name = name;
        this._hp = hp;
        this.attackPower = attackPower;
    }




    // ゲッター
    get hp(): number{
        return this._hp;
    }

    // セッター
    set hp(value: number){
        this._hp = Math.max(0, value);
        // Math.minの逆で、値が大きい方を採用してくれる
    }
    // _hpに触れられるのはセッターだけなので、他メソッドやクラス外ではhpでok
    // セッター以外のところで_hpと書くと、セッターを通さずに_hpに触れることになる





    // 相手を攻撃するメソッド
    attack(target: Character): void{
        const damage = this.attackPower;

        target.hp -= damage;
        console.log(`${this.name}の攻撃！${target.name}に${damage}ダメージ`);
        
        if(target.hp <= 0){
            console.log(`${target.name}は倒れた！`);
        }else{
            console.log(`${target.name}の残りHP： ${target.hp}`);

        }
    }

}





// クラス継承1(上書きしたいメソッドの前にoverrideと明示するとわかりやすい)
class Warrior extends Character{
    override attack(target: Character): void{
        const damage = this.attackPower*2;

        target.hp -= damage;
        console.log(`${this.name}の会心の一撃！${target.name}に${damage}ダメージ`);
        
        if(target.hp <= 0){
            console.log(`${target.name}は倒れた！`);
        }else{
            console.log(`${target.name}の残りHP： ${target.hp}`);

        }
    }
}






// クラス継承2
class Mage extends Character{
    override attack(target: Character): void{
        const damage = Math.floor(this.attackPower*1.2);
        // Math.floor = 小数点切り捨て処理

        target.hp -= damage;
        console.log(`${this.name}は呪文を唱えた！${target.name}に${damage}ダメージ`);
        
        if(target.hp <= 0){
            console.log(`${target.name}は倒れた！`);
        }else{
            console.log(`${target.name}の残りHP： ${target.hp}`);

        }
    }
}







// インスタンス化-味方サイド
const hero = new Character('勇者',100,20);
const warrior = new Warrior('戦士',120,35);
// 継承後のWarriorでインスタンス化すること
const mage = new Mage('魔法使い',80,15);


// インスタンス化-敵サイド
const slimeA = new Character('スライムA',50,10);
const slimeB = new Character('スライムB',30,5);
const slimeC = new Character('スライムC',35,6);







// パーティを組ませる
const party: Character[] =[
    hero,
    warrior,
    mage
];
// WarriorもMageもCharacter型の一種なので、Characterとして扱うことが可能



// 敵パーティ
const enemyParty: Character[] =[
    slimeA,
    slimeB,
    slimeC
];






// パーティで攻撃させる
party.forEach(character => {
    const randomIndex = Math.floor(Math.random() * enemyParty.length);
    // Math.randomは引数を受け取らず、0以上1未満の少数を返す

    character.attack(enemyParty[randomIndex]);
});


