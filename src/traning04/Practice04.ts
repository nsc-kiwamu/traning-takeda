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
 すいか:0個
 */

 // 調べてもどのように書けばいいかわかりませんでした
 // 配列の中身を表示 for文でのループ(string)
const chaSampleStr: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも','すいか']
const chaSampleNum: number[] = [3, 2, 1, 2, 0] // 個数
for (let i = 0; i < chaSampleStr.length; i++){
    if ([0] === chaSampleNum){ // 配列の中身(string)と個数(number)が等しいければ
    console.log( chaSampleStr[0] + chaSampleNum + '：個' ) // 配列名と個数を表示する  // [0]とは、配列での「りんご」の順の番号
    }
    else if ([1] === chaSampleNum ){
    console.log( chaSampleStr[1] + chaSampleNum + '：個' ) // [1]とは、配列での「いちご」の順の番号
    }
    else if ([3] === chaSampleNum ){
    console.log( chaSampleStr[3] + chaSampleNum + '：個' ) // [3]とは、配列での「ぶどう」の順の番号
    }
    else if ([4] === chaSampleNum ){
    console.log( chaSampleStr[4] + chaSampleNum + '：個' ) // [4]とは、配列での「もも」の順の番号
    }
    else if ([8] === chaSampleNum ){
    console.log( chaSampleStr[8] + chaSampleNum + '：個' ) // [8]とは、配列での「すいか」の順の番号
    }


}

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning04/Practice04.js
 */
