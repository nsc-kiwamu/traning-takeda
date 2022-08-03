/*
 変数への値の代入とコンソール出力

 <実施内容>
 Sample01.tsを参考に(変数名は変更すること)作成し、コンパイル・実行(※1)した際にターミナル上で
 以下が出力されるように作成すること
 */

 // Hello world(string連結)
 const stringSample: string = 'Hello world(String)'
 console.log(stringSample)

// Hello world(string連結)
 const stringSample2: string = "Hello"
 const stringSample3: string = "world(string連結)"
 console.log(stringSample2 + stringSample3)

 // Hello world(string再代入)
 let stringSample4: string = "Hello"
 stringSample4 = stringSample4 + "world(string再代入)"
 console.log(stringSample4)

 // Hello world(number)1回目
 let numberSample: number = 1
 console.log("Hello world(number)" + numberSample + "回目")

 // Hello world(number)2回目
 numberSample +=1
 console.log("Hello world(number)" + numberSample + "回目")

 // Hello world(number)3回目
 numberSample +=1
 console.log(`Hello world(number)${numberSample}回目`)

 
 /*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning01/Practice01.js
 */