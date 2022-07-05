/*
 繰り返し

 <実施内容>
 Sample03.tsを参考に作成し、コンパイル・実行した際にターミナル上で
 以下が出力されるように作成すること
 1～100の加算結果は5050です
 1～10の奇数の加算結果は25です
*/

// 
let sampleadd: number = 0
for (let i = 0; i <= 10; i++) {
    sampleadd += 1
}
console.log(`1～10の加算結果は${sampleadd}です`)


// 1～10の偶数のみを加算
sampleadd = 0
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue
    }
    sampleadd += i
}
console.log(`1～10の偶数の加算結果は${sampleadd}です`)


/* <チャレンジ問題>
 上記ができたら以下が出力されるように作成すること

 ・条件
 1～15まで繰り返す
 3の倍数でなく、5の倍数でもない場合は値をそのまま出力する
 3の倍数であり、5の倍数でないときは「Fizz」を出力する
 3の倍数でなく、5の倍数であるときは「Buzz」を出力する
 3の倍数であり、5の倍数でもあるときは「FizzBuzz」を出力する

 上記を満たした結果、ターミナル上で以下が出力されること
 1
 2
 Fizz
 4
 Buzz
 Fizz
 7
 8
 Fizz
 Buzz
 11
 Fizz
 13
 14
 FizzBuzz
 */

 /*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning03/Practice03.js
 */