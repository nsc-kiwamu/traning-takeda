import { makeRandomList } from "./Common13.js"
/*
 アルゴリズム(バブルソート)

  <実施内容>
  1. サンプルを参考に、要素数20、値域1～50のランダムの要素をもつ配列を作成しバブルソートで並び替えを実施する。昇順
*/
// 並び変えをするために値がランダムの配列を作成する。

const sampleTgtList = makeRandomList(20,1,50)
console.log(`並び変え前のリスト:${sampleTgtList}`)

for (let i = sampleTgtList.length -1; i >= 0; i--) {
  // 隣り合う要素を比較
  for (let j = 0; j < i; j++) {
      let tmpVal: number
      // 左の要素　＞　右の要素となる場合、値を入れ替える
      if (sampleTgtList[j] > sampleTgtList[j + 1]) {
        // 右の要素をtmpvalに代入
          tmpVal = sampleTgtList[j + 1]
        // 右の要素に左の要素を代入する
          sampleTgtList[j + 1] = sampleTgtList[j]
        // 右の要素を代入したtmpvalに左の要素を代入する
          sampleTgtList[j] = tmpVal
      }
  }
}

console.log(`並び変え後のリスト:${sampleTgtList}\r\n`)


/*
  2. サンプルを参考に値を降順で並び変えるバブルソートで並び替えを実施する。(サンプルのものは昇順)
*/

const sampleTgtList2 = makeRandomList(20,1,50)
console.log(`並び変え前のリスト:${sampleTgtList2}`)

for (let i = sampleTgtList2.length -1; i >= 0; i--) {
  // 隣り合う要素を比較
  for (let j = 0; j < i; j++) {
      let tmpVal: number
      // 左の要素　＜　右の要素となる場合、値を入れ替える
      if (sampleTgtList2[j] < sampleTgtList2[j + 1]) {
        // 右の要素をtmpvalに代入
          tmpVal = sampleTgtList2[j + 1]
        // 右の要素に左の要素を代入する
          sampleTgtList2[j + 1] = sampleTgtList2[j]
        // 左の要素に右の要素を代入したtmpvalを代入する
          sampleTgtList2[j] = tmpVal
      }
  }
}

console.log(`並び変え後のリスト:${sampleTgtList2}\r\n`)

/*
  <参考サイト>
  https://www.youtube.com/watch?v=kmPZOPXSpkQ
  https://www.youtube.com/watch?v=IHFBb0wYBR0
*/



/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning13/Practice13.js
 */