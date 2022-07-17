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
