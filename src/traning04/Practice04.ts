/*
 繰り返し

 <実施内容>
 Sample04.tsを参考に作成し、コンパイル・実行した際にターミナル上で
 Sample04.tsと同様の結果が出力されるように作成すること
 ・条件
 　number型の配列は通常のfor文でループさせる
 　string型の配列はfor-of文でループさせる
*/

// 配列の中身を表示 for文でのループ(number)
const arraySampleNum: number[] = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < arraySampleNum.length; i++){
    console.log(arraySampleNum[i])
}


// 配列の中身を表示 通常のfor-of文(string)
const arraySampleStr: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも']
for (const str of arraySampleStr) {
    console.log(str)
}

// ここまでは完成


/*
 <チャレンジ問題>
 string型の配列('りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも')を
 for文でループし、以下の結果が出力されるように作成すること
 りんご:3個
 いちご:2個
 ぶどう:1個
 もも:2個
 すいか:0個
 */

 // 調べてもどのように書けばいいかわかりませんでした
 // 配列の中身を表示 for文でのループ(string)
const chaSampleNum: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも']
for (let i = 0; i < chaSampleNum.length; i++){
    console.log()
}

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning04/Practice04.js
 */
