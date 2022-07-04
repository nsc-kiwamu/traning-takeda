/*
 変数への値の代入とコンソール出力

 <実施内容>
 Sample01.tsを参考に(変数名は変更すること)作成し、コンパイル・実行(※1)した際にターミナル上で
 以下が出力されるように作成すること
 */

 // Hello world(string)
 const sample01: String = 'Hello World(string)'
 console.log(sample01)

 // Hello world(string連結)
 const samplefirst: string = 'Hello'
 const samplelatter: string = 'World(string連結)'
 console.log(samplefirst + samplelatter)

 // Hello world(string再代入)
 let stringsami: string = 'Hello'
 stringsami = stringsami + 'World(string再代入)'
 console.log(stringsami)

 // Hello world(number)1回目
 let samplenumber: number = 1
 console.log("Hello World(number)" + samplenumber + "回目")

 // Hello world(number)2回目
 samplenumber += 1
 console.log("Hello World(number)" + samplenumber + "回目")

 // Hello world(number)3回目
 samplenumber += 1
 console.log(`Hello World(number)${samplenumber}回目`)

 
 /*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning01/Practice01.js
 */