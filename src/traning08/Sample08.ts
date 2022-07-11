import { callCounter, makeList, makeMap, printCall, printName, wrapSide } from "./Common08.js";


// 引数なし、戻り値なしの関数呼び出し
printCall()

// 引数あり、戻り値なしの関数呼び出し
printName('佐藤')

// 引数なし、戻り値ありの関数呼び出し
const retNum = callCounter()
console.log(`callCounterから${retNum}が返却されました`) // 関数の戻り値を一旦変数に格納してから出力
console.log(`callCounterから${callCounter()}が返却されました\r\n`) // 関数の戻り値をそのまま出力

// 引数あり、戻り値ありの関数呼び出し
const targetStr = '対象文字列'
const retStr = wrapSide(targetStr)
console.log(`wrapSideに「${targetStr}」を渡したら「${retStr}」が返却されました\r\n`)

// 引数あり、戻り値ありの関数呼び出し
const size = 9
const retList = makeList(size)
console.log(`makeListに「${size}」を渡したら配列「${retList}」が返却されました\r\n`)

// 引数あり、戻り値ありの関数呼び出し
const keyList = ['白井','佐藤','清野','市川']
const valList = ['第二システム統括部','第二システム統括部システム第1部','第二システム統括部システム第1部1課','第二システム統括部システム第1部1課']
const retMap = makeMap(keyList, valList)
console.log(`makeMapに「${keyList}」と「${valList}」を渡したら以下のMapが返却されました`)
for (const [key, value] of retMap) {
    console.log(`key:${key},value:${value}`)
}
