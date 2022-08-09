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
 const users:gambler[] = [{name:'白井', coin:0, matchValue:[0]}, {name:'遠藤', coin:0, matchValue:[0]}]
 // サイコロを振って結果を格納する
 for (let user of users) {
     // サイコロを振る
     const value = dice()
     console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
     // 結果を格納する
     user.matchValue = [value]
 }
 // サイコロを振って結果で勝負する
 if (users[0].matchValue > users[1].matchValue) {
     console.log(`${users[0].name}さんの勝ちです\r\n`)
 } else if (users[0].matchValue < users[1].matchValue) {
     console.log(`${users[1].name}さんの勝ちです\r\n`)
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
const users2:gambler[] = [{name:'白井', coin:0, matchValue:[1,2]}, {name:'遠藤', coin:0, matchValue:[1,2]}]
// サイコロを振って結果を格納する
for (let user of users2) {
    // サイコロを振る
    const value = dice()
    const value2 = dice()
    console.log(`${user.name}さんがサイコロを振った結果は${value + value2}です`)
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

const users3:gambler[] = [{name:'鈴木', coin:0, matchValue:[1,2,3]}, {name:'上野', coin:0, matchValue:[1,2,3]}] 
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

if (users3[0].matchValue[0] > users3[1].matchValue[0] &&
    users3[0].matchValue[1] > users3[1].matchValue[1]){
      console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] > users3[1].matchValue[0] &&
           users3[0].matchValue[2] > users3[1].matchValue[2]){
      console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[1] > users3[1].matchValue[1] &&
           users3[0].matchValue[2] > users3[1].matchValue[2]){
      console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] > users3[1].matchValue[2]){
      console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] > users3[1].matchValue[1] &&
           users3[0].matchValue[2] == users3[1].matchValue[2]){
      console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] > users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] == users3[1].matchValue[2]){
      console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] < users3[1].matchValue[0] &&
           users3[0].matchValue[1] < users3[1].matchValue[1] ){
      console.log(`${users3[1].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] < users3[1].matchValue[0] &&
           users3[0].matchValue[2] < users3[1].matchValue[2]){
      console.log(`${users3[1].name}さんの勝ちです\r\n`)                                       
} else if (users3[0].matchValue[1] < users3[1].matchValue[1] &&
           users3[0].matchValue[2] < users3[1].matchValue[2]){
      console.log(`${users3[1].name}さんの勝ちです\r\n`)
}  else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] < users3[1].matchValue[2]){
      console.log(`${users3[1].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] == users3[1].matchValue[0] &&
           users3[0].matchValue[1] < users3[1].matchValue[1] &&
           users3[0].matchValue[2] == users3[1].matchValue[2]){
      console.log(`${users3[1].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue[0] < users3[1].matchValue[0] &&
           users3[0].matchValue[1] == users3[1].matchValue[1] &&
           users3[0].matchValue[2] == users3[1].matchValue[2]){
      console.log(`${users3[1].name}さんの勝ちです\r\n`)
} 

else {
  console.log('引き分けです\r\n')
}



/*
  4. サンプルを参考に以下の条件を満たすように呼び出しをすること。
  　対戦者:4名
  　勝負方法:サイコロを1回振って大きな数値の出た人の勝ち
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
  　　例)Aさん:1、Bさん:1、Cさん:5、Dさん5 →　「Cさんの勝ちです」「Dさんの勝ちです」と出すか「CさんとDさんの勝ちです」と出す
  　　　　全員が同じ値になった場合のみ「引き分けです」を出す
*/
const users4:gambler[] = [{name:'鈴木', coin:0, matchValue:[0]}, {name:'上野', coin:0, matchValue:[0]},
                          {name:'田中', coin:0, matchValue:[0]}, {name:'岡田', coin:0, matchValue:[0]}] 
// max値を設定
let max: number = 0

for (let user of users4) {
  // 1回だけ振る
  const value = dice()
  // 結果の表示
  console.log(`${user.name}さんのサイコロの結果は、${value}です。`)
  // 結果の格納
  user.matchValue = [value]

  // maxよりも大きければ、maxに値を代入する
  if (max < value){
    max = value
    user.matchValue = [max]
  }
}
 console.log(`サイコロの最大値は${max}`)

 // 引き分けの処理
if (users4[0].matchValue[0] === users4[1].matchValue[0] &&
    users4[0].matchValue[0] === users4[2].matchValue[0] &&
    users4[0].matchValue[0] === users4[3].matchValue[0] ) {
  console.log(`引き分けです\r\n`)
 }
  else {

 // 勝ち負けを判定する
 // 最大値maxと同じであれば勝つ
for (let i = 0; i < users4.length; i++){
  if(users4[i].matchValue[0] === max){
    console.log(`${users4[i].name}さんの勝ちです\r\n`)
  }
 }
}


/*
  5. サンプルを参考に以下の条件を満たすように呼び出しをすること。.OK
  　対戦者:2名
  　勝負方法:カードを1枚めくり大きな数値の出た人の勝ち
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
  　※関数diceを参考に1-13の値をランダムで返却する関数cardを作成し、使用すること
*/

// 対戦者の作成
const users5:gambler[] = [{name:'白井', coin:0, matchValue:[0]}, {name:'遠藤', coin:0, matchValue:[0]}]
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