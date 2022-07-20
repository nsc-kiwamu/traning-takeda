import { dice, gambler} from "./Common12.js";
/*
 アルゴリズム

  <実施内容>
  1. サンプルを参考に以下の条件を満たすように呼び出しをすること。 .OK
  　対戦者:2名
  　勝負方法:サイコロを1回振って大きな数値の出た方の勝ち
  　勝負結果:「～さんの負けです」か「引き分けです」を出力する
*/
/*
 サイコロの大小で勝負する、対戦者は2名で勝負は3回実施する
*/
// 対戦者の作成
const users:gambler[] = [{name:'白井', coin:0, matchValue:[1]}, {name:'遠藤', coin:0, matchValue:[1]}]
// サイコロを振って結果を格納する
for (let user of users) {
    // サイコロを振る
    const value = dice()
    console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
    // 結果を格納する
    user.matchValue = [value]
}
// サイコロを振って結果で勝負する
if (users[1].matchValue > users[0].matchValue) {
    console.log(`${users[0].name}さんの勝ちです\r\n`)
} else if (users[1].matchValue < users[0].matchValue) {
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
const users2:gambler[] = [{name:'白井', coin:2, matchValue:[1]}, {name:'遠藤', coin:2, matchValue:[1]}] // coin:「２」としたから、２回振ることになる？
// サイコロを振って結果を格納する
for (let user of users2) {
    // サイコロを振る
    const value = dice()
    console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
    // 結果を格納する
    user.matchValue = [value]
}
// サイコロを振って結果で勝負する
if (users2[1].matchValue > users2[0].matchValue) {
    console.log(`${users2[0].name}さんの勝ちです\r\n`)
} else if (users2[1].matchValue < users2[0].matchValue) {
    console.log(`${users2[0].name}さんの勝ちです\r\n`)
} else {
    console.log('引き分けです\r\n')
}

/*
  3. サンプルを参考に以下の条件を満たすように呼び出しをすること。
  　対戦者:2名
  　勝負方法:サイコロを3回振って1回目～3回目をそれぞれ比較し、大きな数値を多く出した方の勝ち
  　　例)Aさんのサイコロの結果 1回目:2 2回目:2 3回目6
  　　   Bさんのサイコロの結果 1回目:3 2回目:4 3回目1
　　　　　※この場合、Aさんの勝利
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
*/

// 対戦者の作成
const users3:gambler[] = [{name:'白井', coin:3, matchValue:[1]}, {name:'遠藤', coin:3, matchValue:[1]}] 
// サイコロを振って結果を格納する
for (let user of users3) {
    // サイコロを振る
    const value = dice()
    console.log(`${user.name}さんのサイコロの結果、1回目:${value} 2回目:${value} 3回目:${value}`)
    // 結果を格納する
    user.matchValue = [value]
}
// サイコロを振って結果で勝負する
if (users3[0].matchValue > users2[0].matchValue) {
    console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else if (users3[0].matchValue < users3[0].matchValue) {
    console.log(`${users3[0].name}さんの勝ちです\r\n`)
} else {
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
// // 対戦者の作成
// const users4:gambler[] = [{name:'白井', coin:0, matchValue:[0]}, {name:'遠藤', coin:0, matchValue:[0]},
//                           {name:'鈴木', coin:0, matchValue:[0]},{name:'山田', coin:0, matchValue:[0]}]
// // サイコロを振って結果を格納する
// for (let user of users4) {
//     // サイコロを振る
//     const value = dice()
//     console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
//     // 結果を格納する
//     user.matchValue = [value]
// }
// // サイコロを振って結果で勝負する
// if (users4[0].matchValue > users4[1].matchValue) {
//     console.log(`${users4[0].name}さんの勝ちです\r\n`)
// } else if (users4[0].matchValue < users4[1].matchValue) {
//     console.log(`${users4[1].name}さんの勝ちです\r\n`)
// } else if (users4[0].matchValue < users4[1].matchValue) {
//     console.log(`${users4[1].name}さんの勝ちです\r\n`)
// } else if (users4[0].matchValue < users4[1].matchValue) {
//     console.log(`${users4[1].name}さんの勝ちです\r\n`)
// } else {

//     console.log('引き分けです\r\n')
// }



/*
  5. サンプルを参考に以下の条件を満たすように呼び出しをすること。
  　対戦者:2名
  　勝負方法:カードを1枚めくり大きな数値の出た人の勝ち
  　勝負結果:「～さんの勝ちです」か「引き分けです」を出力する
  　※関数diceを参考に1-13の値をランダムで返却する関数cardを作成し、使用すること
*/
// const users5:gambler[] = [{name:'白井', coin:0, matchValue:[0]}, {name:'遠藤', coin:0, matchValue:[0]}]
// // サイコロを振って結果を格納する
// for (let user of users5) {
//     // サイコロを振る
//     const value = dice()
//     console.log(`${user.name}さんがサイコロを振った結果は${value}です`)
//     // 結果を格納する
//     user.matchValue = [value]
// }
// // サイコロを振って結果で勝負する
// if (users5[0].matchValue > users5[1].matchValue) {
//     console.log(`${users5[0].name}さんの勝ちです\r\n`)
// } else if (users5[0].matchValue < users5[1].matchValue) {
//     console.log(`${users5[1].name}さんの勝ちです\r\n`)
// } else {
//     console.log('引き分けです\r\n')
// }

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning12/Practice12.js
 */