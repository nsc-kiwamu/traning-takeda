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
const sampleArrayNumber: number[] = [1,2,3,4,5,6,7,8,9,10]
for (const num of sampleArrayNumber) {
  console.log(num)
}

// 配列の中身を表示 通常のfor-of文(string)
const sampleArrayString: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも']
for (let i = 0; i < sampleArrayString.length; i++) {
  console.log(sampleArrayString[i])
}




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

 const sampleFruit: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも','すいか']
 let Fruit1: number = 0 // りんご
 let Fruit2: number = 0 // いちご
 let Fruit3: number = 0 // ぶどう
 let Fruit4: number = 0 // もも
 let Fruit5: number = 0 // すいか

 for (let i = 0; sampleFruit.length; i++){
  if (sampleFruit[i] === "りんご"){
    Fruit1 = Fruit1 + 1
  } else if (sampleFruit[i] === "いちご"){
    Fruit2 = Fruit2 + 1
  } else if (sampleFruit[i] === "ぶどう"){
    Fruit3 = Fruit3 + 1
  } else if (sampleFruit[i] === "もも"){
    Fruit4 = Fruit4 + 1
  } else if (sampleFruit[i] === "すいか"){
    Fruit5 = Fruit5 + 1
  } 
}

 console.log("りんご：" + Fruit1 + "個")
 console.log("いちご：" + Fruit2 + "個")
 console.log("ぶどう：" + Fruit3 + "個")
 console.log("もも：'" + Fruit4 + "個")
 console.log("すいか：" + Fruit5 + "個")

 

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning04/Practice04.js
 */
