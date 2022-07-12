import { callCounter, makeList, makeMap, printCall, printName, wrapSide, praMap8, praMap9 } from "./Common08.js";
/*
 MAPと配列

 <実施内容>
　※1～7の対応時にはCommon08.tsは修正ないこと
*/


 // 1. 関数printCallを呼び出し、コンソールに「printCallが呼ばれました」と出力されるように作成する .OK
 printCall()
 
 // 2. 関数printNameを呼び出し、コンソールに「パラメータで受け取った名前は竹田です」と出力されるように作成する .OK
 printName("竹田")

 /* 3. 関数callCounterをfor文を使用して3回呼び出し、コンソールに以下が出力されるように作成する .OK
    callCounterから1が返却されました
    callCounterから2が返却されました
    callCounterから3が返却されました
 */
 
 for(let i = 1; i <= 3; i++){
 console.log(`callCounterから${callCounter()}が返却されました\r\n`) 
 }

 // 4. 関数wrapSideを呼び出し、コンソールに「*ラップ対象文字列*」が出力されるように作成する.OK
 const targetStr = 'ラップ対象文字列'
 const retStr = wrapSide(targetStr)
 console.log(`「*${targetStr}*」\r\n`)


 
 // 5. 関数makeListを呼び出し、コンソールに「makeListに「10」を渡したら配列「0,1,2,3,4,5,6,7,8,9」が返却されました」が出力されるように作成する.OK
 const size = 10
 const retList = makeList(size)
 console.log(`makeListに「${size}」を渡したら配列「${retList}」が返却されました\r\n`)


 /* 6. 関数makeMapを呼び出し、コンソールに以下が出力されるように作成する .OK
    makeMapに「白井,竹田,佐藤,清野,市川」と「第二システム統括部,第二システム統括部システム第1部1課,第二システム統括部システム第1部,第二システム統括部システム第1部1課,第二システム統括部システム第1部1課」を渡したら以下のMapが返却されました
    key:白井,value:第二システム統括部
    key:竹田,value:第二システム統括部システム第1部1課
    key:佐藤,value:第二システム統括部システム第1部
    key:清野,value:第二システム統括部システム第1部1課
    key:市川,value:第二システム統括部システム第1部1課
 */
 const keyList = ['白井','竹田','佐藤','清野','市川']
 const valList = ['第二システム統括部','第二システム統括部システム第1部1課','第二システム統括部システム第1部','第二システム統括部システム第1部1課','第二システム統括部システム第1部1課']
 const retMap = makeMap(keyList, valList)
 console.log(`makeMapに「${keyList}」と「${valList}」を渡したら以下のMapが返却されました`)
 for (const [key, value] of retMap) {
     console.log(`key:${key},value:${value}\r\n`)
 }

 /* 7. 関数MakeMapを呼び出し、コンソールに以下が出力されるように作成する
    第一引数と第二引数の要素数を合わせて下さい。第一引数の要素数:3、第二引数の要素数:2.OK
 */ 
 const names = [3]
 const divs = [2]
 console.log(`第一引数と第二引数の要素数を合わせて下さい。第一引数の要素数:${names}、第二引数の要素数:${divs}\r\n`)
 



 /* 8. Common08.tsに以下の条件を満たす関数を作成し、Practice08から呼び出すこと .OK
    引数:number、戻り値:number
    引数で受け取った数値側の値を2倍にして返却する
 */
 const practice8 = 5
 const returnMap = praMap8(practice8)
 console.log(`(2倍)にして返却する：${returnMap}\r\n`)
 


 /* 9. Common08.tsに以下の条件を満たす関数を作成し、Practice08から呼び出すこと .OK
 　　引数:string[]、戻り値:number
     引数で受け取った配列の要素数を返却する
 */
 const practice9 = ['りんご','いちご','ぶどう']
 const returnMap2 = praMap9(practice9)
 console.log(`praMap9に「${returnMap2}」以下のMapが返却されました`)

/*※1 「Ctrl + @」でターミナルを開き以下を実行
 yarn tsc
 node dist/traning08/Practice08.js
*/ 