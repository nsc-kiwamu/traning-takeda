/*
 繰り返し

 <実施内容>
 Sample03.tsを参考に作成し、コンパイル・実行した際にターミナル上で
 以下が出力されるように作成すること
 1～100の加算結果は5050です
 1～10の奇数の加算結果は25です
 */

// 1～100の加算結果は、5050ですと表示

let Sample: number = 0
for (let i = 1; i <= 100; i++) {


    Sample += i
}
console.log(`1～100の加算結果は${Sample}です`)

// 1～10の奇数の加算結果は25です
Sample = 0

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 1) {

        continue
    }
    Sample += i
}
console.log(`1～10の奇数の加算結果は${Sample}です`)

/*
 <チャレンジ問題>
 上記ができたら以下が出力されるように作成すること

 ・条件
 1～15まで繰り返す
 3の倍数でなく、5の倍数でもない場合は値をそのまま出力する
 3の倍数であり、5の倍数でないときは「Fizz」を出力する
 3の倍数でなく、5の倍数であるときは「Buzz」を出力する
 3の倍数であり、5の倍数でもあるときは「FizzBuzz」を出力する
 */

// 3でも5の倍数でもない場合は、数字が出力
// 3の倍数「Fizz」
// 5の倍数「Buzz」
// 3の倍数であり、5の倍数でもある「FizzBuzz」
for(let i = 1; i <= 15; i++){

 if(i % 15 === 0){ // 15まで繰り返す
  console.log('FizzBuzz');
 } 
 else if(i % 3 === 0){ // 3の倍数ならば
  console.log('Fizz');
 }
 else if(i % 5 === 0){ // 5の倍数ならば
  console.log('Buzz');
 }
 else {
  console.log(i);
 }
}




/*
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