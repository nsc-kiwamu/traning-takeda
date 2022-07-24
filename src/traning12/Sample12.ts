import { dice, gambler} from "./Common12.js";

/*
 色々な型と繰り返しと関数呼び出し
*/

/*
 サイコロの大小で勝負する、対戦者は2名で勝負は3回実施する
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
    console.log(`${users[0].name}さんの勝ちです`)
} else if (users[0].matchValue < users[1].matchValue) {
    console.log(`${users[1].name}さんの勝ちです`)
} else {
    console.log('引き分けです')
}

/*
　問題3の回答例
  3. サンプルを参考に以下の条件を満たすように呼び出しをすること。.OK
  　対戦者:2名
  　勝負方法:サイコロを3回振って1回目～3回目をそれぞれ比較し、大きな数値を多く出した方の勝ち
  　　例)Aさんのサイコロの結果 1回目:2 2回目:2 3回目6
  　　   Bさんのサイコロの結果 1回目:3 2回目:4 3回目1
　　　　　※この場合、Aさんの勝利
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
*/
console.log('問題3 回答例')
const users3:gambler[] = [{name:'田中', coin:0, matchValue:[]}, {name:'林', coin:0, matchValue:[]}] 
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

// ダイスの結果を比較し勝ち:1点、負け:-1点、引き分け:0点とする
let pointA:number = 0
let pointB:number = 0
for (let diceValue = 0; diceValue < users3[0].matchValue.length; diceValue++) {
    // Aの勝ち
    if (users3[0].matchValue[diceValue] > users3[1].matchValue[diceValue]) {
        pointA += 1
        pointB -= 1
    // Bの勝ち
    } else if (users3[0].matchValue[diceValue] < users3[1].matchValue[diceValue]) {
        pointA -= 1
        pointB += 1
    }
}

// 結果判定
if (pointA > pointB) {
    console.log(`${users3[0].name}さんの勝ち`)
} else if (pointA < pointB) {
    console.log(`${users3[1].name}さんの勝ち`)
} else {
    console.log('引き分け')
}
