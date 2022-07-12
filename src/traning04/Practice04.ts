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
 string型の配列('りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも','すいか')を
 for文でループし、以下の結果が出力されるように作成すること
 りんご:3個
 いちご:2個
 ぶどう:1個
 もも:2個
 すいか:1個
 */

 // 調べてもどのように書けばいいかわかりませんでした
 // 配列の中身を表示 for文でのループ(string)

const chaSampleStr: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも','すいか']
let chaSampleNum01: number = 0 // りんご
let chaSampleNum02: number = 0 // いちご
let chaSampleNum03: number = 0 // ぶどう
let chaSampleNum04: number = 0 // もも
let chaSampleNum05: number = 0 // すいか
for (let i = 0; i < chaSampleStr.length; i++){

 if (chaSampleStr[i] === 'りんご' ){
    chaSampleNum01 = chaSampleNum01 + 1
 }
  else if(chaSampleStr[i] === 'いちご'){
    chaSampleNum02 = chaSampleNum02 + 1
 }
  else if(chaSampleStr[i] === 'ぶどう'){
    chaSampleNum03 = chaSampleNum03 + 1
 }
  else if(chaSampleStr[i] === 'もも'){
    chaSampleNum04 = chaSampleNum04 + 1
 }
  else if(chaSampleStr[i] === 'すいか'){
    chaSampleNum05 = chaSampleNum05 + 1 
 }



}

console.log('りんご：' + chaSampleNum01 + '個')
console.log('いちご：' + chaSampleNum02 + '個')
console.log('ぶどう：' + chaSampleNum03 + '個')
console.log('もも：' + chaSampleNum04 + '個')
console.log('すいか：' + chaSampleNum05 + '個')

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning04/Practice04.js
 */
