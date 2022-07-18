import { makeRandomList } from "./Common13.js"

/*
 バブルソート
*/
// 並び変えをするために値がランダムの配列を作成する。
const sampleTgtList = makeRandomList(10,1,30)
console.log(`並び変え前のリスト:${sampleTgtList}`)

/*
  比較の終了地点を決めるための繰り返し
  例) 配列の要素が[4][2][3][1]とあった場合
  　　1週目の1回目は下記の*の比較で入れ替えなし
       [4][2][3][1]→[2][4][3][1]
        *  *
  　　1週目の2回目は下記の*の比較で入れ替え
       [2][4][3][1]→[2][3][4][1]
           *  *
  　　1週目の3回目は下記の*の比較で入れ替え
       [2][3][4][1]→[2][3][1][4]
              *  *
  　　2週目の1回目は下記の*の比較で入れ替えなし
       [2][3][1][4]→[2][3][1][4]
        *  *
  　　2週目の2回目は下記の*の比較で入れ替え
       [2][3][1][4]→[2][1][3][4]
           *  *
  　　2週目の3回目は下記の*の比較となるが1週目の時点で配列の一番右は一番大きな値が
  　　入っているため、比較の必要が無い。
  　　※1回目は全要素比較、2回目は全要素-1の比較。。。となるのでこれをコントロールするためのループ
       [2][1][3][4]
              *  *
 */
for (let i = sampleTgtList.length -1; i >= 0; i--) {
    // 隣り合う要素を比較
    for (let j = 0; j < i; j++) {
        let tmpVal: number
        // 左の要素　＞　右の要素となる場合、値を入れ替える
        if (sampleTgtList[j] > sampleTgtList[j + 1]) {
            tmpVal = sampleTgtList[j + 1]
            sampleTgtList[j + 1] = sampleTgtList[j]
            sampleTgtList[j] = tmpVal
        }
    }
}

console.log(`並び変え後のリスト:${sampleTgtList}`)
