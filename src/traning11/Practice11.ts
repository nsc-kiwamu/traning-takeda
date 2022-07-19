import { inNumOutStr, inNum2OutStr, inStrOutNum, inStr2OutNum, inCompanyEmployee2OutNum, inCompanyEmployeesNumberOutCompanyEmployees} from "./Common11.js";

/*
 色々な引数と戻り値

  <実施内容>
  1. inNumOutStrを実行し、結果は以下となるように引数を設定すること .OK
  　10を3で割った時の余りは1です
*/
 const inNum1 = 10
 const return1 = (inNumOutStr(inNum1))
 console.log(`${return1}`)

/*
  2. inNum2OutStrを実行し、結果は以下となるように引数を設定すること .OK
  　0では除算できません
*/
 const inNum2 = 0
 const inNum3 = 0
 const return2 = (inNum2OutStr(inNum2,inNum3))
 console.log(`${return2}`)


/*
  3. inNum2OutStrを実行し、結果は以下となるように引数を設定すること .OK
  　15を3で割った時の余りは0です
*/
 const inNum4 = 15
 const inNum5 = 3
 const return3 = (inNum2OutStr(inNum4,inNum5))
 console.log(`${return3}`)


/*
  4. inStrOutNumを実行し、結果は以下となるように引数を設定すること .OK
  　5
*/
 const inStr1 = '10000' // 5桁だから「5」と出力される
 const return4 = (inStrOutNum(inStr1))
 console.log(`${return4}`)



/*
  5. inStr2OutNumを実行し、結果は以下となるように引数を設定すること .OK
  　13
*/
 const inStr2 = '1000000000000' // 13桁だから「13」と出力される
 const return5 = (inStrOutNum(inStr2))
 console.log(`${return5}`)


/*
  6. inCompanyEmployee2OutNumを実行し、結果は以下となるように引数を設定すること
  　22
*/
//  const age = 11
//  const age2 = 2
//  const return6 = (inCompanyEmployee2OutNum(age,age2)) // パラメータで割り当てられないと表示されるのですがなぜでしょうか？
//  console.log(`${return6}`)


/*
  7. inCompanyEmployeesNumberOutCompanyEmployeesを実行し、以下の結果とすること
  　・第一引数:要素数4とする
  　・第二引数:25とする
  　・戻り値で返却される配列の要素数は2となること
  　・戻り値を受け取り、for文でループさせながら名前と年齢を出力する
  　　出力例)「${名前}」の欄は引数で設定した任意の名前で良い
  　　　年齢が25歳以下の社員は${名前}さんでした
  　　　年齢が25歳以下の社員は${名前}さんでした
*/

const inCe1 = ['鈴木','山田','田中','林']
const tgtAge = 25
const return7 = inCompanyEmployeesNumberOutCompanyEmployees(inCe1,tgtAge)
console.log(`${return7}`)

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning11/Practice11.js
 */