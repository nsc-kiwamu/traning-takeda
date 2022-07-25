import { dice, gambler, card} from "./Common12.js";
/*
 アルゴリズム

  <実施内容>
  1. サンプルを参考に以下の条件を満たすように呼び出しをすること。 .OK
  　対戦者:2名
  　勝負方法:サイコロを1回振って大きな数値の出た方の勝ち
  　勝負結果:「～さんの負けです」か「引き分けです」を出力する
*/

// 対戦者の作成
console.log('問題1')
const users: gambler[] = [{name:'白井', coin:0, matchValue:[1]}, {name:'遠藤', coin:0, matchValue:[1]}]
// サイコロを振って結果を格納する
for (let user of users) {
    // サイコロを振る
    const value = dice()
    console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
    // 結果を格納する
    user.matchValue = [value]
}
// サイコロを振って結果で勝負する
if (users[0].matchValue < users[1].matchValue) {
    console.log(`${users[1].name}さんの勝ちです\r\n`)
} else if (users[0].matchValue > users[1].matchValue) {
    console.log(`${users[0].name}さんの勝ちです\r\n`)
} else {
    console.log('引き分けです\r\n')
}


/*
  2. サンプルを参考に以下の条件を満たすように呼び出しをすること。 .OK
  　対戦者:2名
  　勝負方法:サイコロを2回振って合計が大きな数値の出た方の勝ち
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
*/

// 対戦者の作成
console.log('問題2')
const users2:gambler[] = [{name:'山田', coin:0, matchValue:[1,2]}, {name:'鈴木', coin:0, matchValue:[1,2]}]
// サイコロを振って結果を格納する
for (let user of users2) {
    // サイコロを振る
    const value = dice()
    const value2 = dice()
    console.log(`${user.name}さんがサイコロを2回振った合計の結果は${value + value2}です`)
   // console.log(`${user.name}さんがサイコロを振った結果は${value2}です`)
    // 結果を格納する
    user.matchValue = [value + value2]
}
// サイコロを振って結果で勝負する
if (users2[0].matchValue[0] > users2[1].matchValue[0]) {
    console.log(`${users2[0].name}さんの勝ちです\r\n`)
} else if (users2[0].matchValue[0] < users2[1].matchValue[0]) {
    console.log(`${users2[1].name}さんの勝ちです\r\n`)
} 

  else {
    console.log('引き分けです\r\n')
}

/*
  3. サンプルを参考に以下の条件を満たすように呼び出しをすること。.OK
  　対戦者:2名
  　勝負方法:サイコロを3回振って1回目～3回目をそれぞれ比較し、大きな数値を多く出した方の勝ち
  　　例)Aさんのサイコロの結果 1回目:2 2回目:2 3回目6
  　　   Bさんのサイコロの結果 1回目:3 2回目:4 3回目1
　　　　　※この場合、Aさんの勝利
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
*/

// 対戦者の作成
console.log('問題3')
const users3:gambler[] = [{name:'田中', coin:0, matchValue:[1,2,3]}, {name:'林', coin:0, matchValue:[1,2,3]}] 
// サイコロを振って結果を格納する
for (let user of users3) {
    // サイコロを振る
    const value = dice()
    const value2 = dice()
    const value3 = dice()
    console.log(`${user.name}さんのサイコロの結果、1回目:${value} 2回目:${value2} 3回目:${value3}`)
    // 結果を格納する
    user.matchValue = [value,value2,value3]
}


// サイコロを振って結果で勝負する
if (users3[0].matchValue[0] > users3[1].matchValue[0] &&
    users3[0].matchValue[1] > users3[1].matchValue[1] &&
    users3[0].matchValue[2] > users3[1].matchValue[2]){   //AAA
    console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] > users3[1].matchValue[0] &&
           users3[0].matchValue[1] < users3[1].matchValue[1] &&
           users3[0].matchValue[2] > users3[1].matchValue[2]){    //ABA
        console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] > users3[1].matchValue[2]){ //--A
        console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] < users3[1].matchValue[0] &&
           users3[0].matchValue[1] < users3[1].matchValue[1] &&
           users3[0].matchValue[2] < users3[1].matchValue[2]){ //BBB
        console.log(`${users3[1].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] < users3[1].matchValue[0] &&
           users3[0].matchValue[1] < users3[1].matchValue[1] &&
           users3[0].matchValue[2] > users3[1].matchValue[2]){ //BBA
        console.log(`${users3[1].name}さんの勝ちです\r\n`)                                 
} else if (users3[0].matchValue[0] < users3[1].matchValue[0] &&
           users3[0].matchValue[1] < users3[1].matchValue[1] &&
           users3[0].matchValue[2] == users3[1].matchValue[2]){ //BB-
        console.log(`${users3[1].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] < users3[1].matchValue[2]){  //--B
        console.log(`${users3[1].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] == users3[1].matchValue[2]){  // ---
        console.log(`引き分けです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] > users3[1].matchValue[1] &&
           users3[0].matchValue[2] < users3[1].matchValue[2]){ // -AB
        console.log(`引き分けです\r\n`)
} 


/*
  4. サンプルを参考に以下の条件を満たすように呼び出しをすること。
  　対戦者:4名
  　勝負方法:サイコロを1回振って大きな数値の出た人の勝ち
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
  　　例)Aさん:1、Bさん:1、Cさん:5、Dさん5 →　「Cさんの勝ちです」「Dさんの勝ちです」と出すか「CさんとDさんの勝ちです」と出す
  　　　　全員が同じ値になった場合のみ「引き分けです」を出す
*/
// 対戦者の作成
console.log('問題4')
const users4:gambler[] = [{name:'上野', coin:0, matchValue:[0]}, {name:'高橋', coin:0, matchValue:[0]},
                          {name:'山本', coin:0, matchValue:[0]},{name:'中村', coin:0, matchValue:[0]}]
// number型の変数を定義
let max: number = 0 // サイコロの最大値は6だから

 // サイコロを振って結果を格納する
for (let user of users4) {  
    // サイコロを振る
    const value = dice()
    console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
    user.matchValue = [value]

    // 振って出た値（value）を最大値（max）と比較する
    if (max < value){ // maxよりもvalueの方が値が大きければ、最大値をvalueに入れる
        max = value
       // 結果を格納する
    user.matchValue = [max]
    }
}
    console.log(`4人の中で、一番大きかった数は${max}です`)
//ここまでOK（最大値も取れている）


// 勝ち負け判定
for (let i = 0; i < users4.length; i++) { // 4人分繰り返す
    if (users.length === max){ // 最大値と同じであれば勝ち
     console.log(`${users4[].name}さんの勝ちです\r\n`) // 一人勝ちの場合
    }

    else{
     console.log('引き分けです\r\n')
    }
}

/*
  5. サンプルを参考に以下の条件を満たすように呼び出しをすること。.OK
  　対戦者:2名
  　勝負方法:カードを1枚めくり大きな数値の出た人の勝ち
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
  　※関数diceを参考に1-13の値をランダムで返却する関数cardを作成し、使用すること
*/
console.log('問題5')
const users5:gambler[] = [{name:'小林', coin:0, matchValue:[1]}, {name:'井上', coin:0, matchValue:[1]}]
// サイコロを振って結果を格納する
for (let user of users5) {
    // サイコロを振る
    const value = card()
    console.log(`${user.name}さんがカードをめくった結果は${value}です`)
    // 結果を格納する
    user.matchValue = [value]
}
// サイコロを振って結果で勝負する
if (users5[0].matchValue[0] > users5[1].matchValue[0]) {
    console.log(`${users5[0].name}さんの勝ちです\r\n`)
} else if (users5[0].matchValue[0] < users5[1].matchValue[0]) {
    console.log(`${users5[1].name}さんの勝ちです\r\n`)
} else {
    console.log('引き分けです\r\n')
}

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning12/Practice12.js
 */