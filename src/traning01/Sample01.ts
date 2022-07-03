/*
 変数への値の代入とコンソール出力
*/

// string型
const stringSample01Msg: string = 'Hello world(string)'
console.log(stringSample01Msg)

// string型の連結
const stringSample01MsgPre: string = 'Hello'
const stringSample01MsgAft: string = ' world(string連結)'
console.log(stringSample01MsgPre + stringSample01MsgAft)

// string型の再代入可能宣言(letで宣言)
let stringSample01MsgLet: string = 'Hello'
stringSample01MsgLet = stringSample01MsgLet + ' world(string再代入)'
console.log(stringSample01MsgLet)

// number型
let numberSample01Msg: number = 1
console.log("Hello world(number)" + numberSample01Msg + "回目")

// number型(加算)
numberSample01Msg += 1
console.log("Hello world(number)" + numberSample01Msg + "回目")

// number型(加算してバッククォートでまとめて出力)
numberSample01Msg += 1
console.log(`Hello world(number)${numberSample01Msg}回目`)
