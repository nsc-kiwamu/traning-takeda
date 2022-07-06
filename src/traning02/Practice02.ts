/*
 条件分岐

 <実施内容>
 Sample02.tsを参考に作成し、コンパイル・実行した際にターミナル上で
 以下が出力されるように作成すること
 私の名前は○○です
 ※○○は自分のトレーニーの名前とする
 私の苗字は田中ではありません
 judgeにはfalseが設定されています
 私は小学生未満です

 */

// 「私の名前は○○です」と表示
const samplename: string = "彩乃"
if (samplename === "") { // 名前が入力されない場合の処理
    console.log("私には名前がありません。")
}
else { // 名前が入力された場合
    console.log(`私の名前は${samplename}です`)
}

// 「私の苗字は田中ではありません」と表示
const samplename2: string = ""
if (samplename2 !== "田中") { // 田中じゃない場合の処理
    console.log("私の苗字は田中ではありません")
}
else { // 名前が田中の場合
    console.log(`私の苗字は田中です`)
}

// 「judgeにはfalseが設定されています」と表示
const samplejudge: boolean = false
if(samplejudge) {
    console.log(`judgeには${samplejudge}が設定されています`)
}
else {
    console.log(`judgeには${samplejudge}が設定されています`)
}

// 「私は小学生未満です」と表示
const sampleage: number = 5
if (sampleage < 6) {
    console.log(`私は小学生未満です`) // ６歳以下ならば
} else if (6 <= sampleage && sampleage < 13) { // ６歳以上13歳未満であれば
    console.log(`私は小学生です`)
}else {
    console.log(`私は小学生以上です`) //それ以上ならば
}

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning02/Practice02.js
 */