/*
 条件分岐

 <実施内容>
 Sample02.tsを参考に作成し、コンパイル・実行した際にターミナル上で
 以下が出力されるように作成すること
*/

// 私の名前は○○です
// ※○○は自分のトレーニーの名前とする
const sampleName: string = "彩乃"
if (sampleName === ""){
  console.log("私には名前がありません")
} else {
  console.log(`私の名前は${sampleName}です`)
}


// 私の苗字は田中ではありません
const sampleName2: string = "竹田"
if (sampleName2 !== '田中'){
  console.log("私の苗字は田中ではありません")
} else {
  console.log("私の苗字は田中です")
}

// judgeにはfalseが設定されています
const sampleGudge: boolean = false
if(sampleGudge) {
  console.log(`judgeには${sampleGudge}が設定されています`)
} else {
  console.log(`judgeには${sampleGudge}が設定されています`)
}

// 私は小学生未満です
const sampleAge: number = 3
if (sampleAge < 6) {
  console.log("私は小学生未満です")
} else if (6 <= sampleAge && sampleAge < 13) {
  console.log("私は小学生です")
} else {
  console.log("私は小学生以上です")
}
 



/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning02/Practice02.js
 */