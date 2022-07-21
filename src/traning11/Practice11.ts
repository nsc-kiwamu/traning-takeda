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
 const inStr2 = '1234567' // 13桁だから「13」と出力される
 const inStr3 = '890123'
 const return5 = (inStr2OutNum(inStr2,inStr3))
 console.log(`${return5}`)


/*
  6. inCompanyEmployee2OutNumを実行し、結果は以下となるように引数を設定すること
  　22
*/
 const userY: CompanyEmployee = {name:'田中', age:22, gender:'女性'}
 const userX: CompanyEmployee = {name:'山田', age:22, gender:'男性'}
 console.log(inCompanyEmployee2OutNum(userY,userX))


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

 const userA: CompanyEmployee = {name:'田中', age:22, gender:'女性'}
 const userB: CompanyEmployee = {name:'山田', age:24, gender:'男性'}
 const userC: CompanyEmployee = {name:'鈴木', age:45, gender:'女性'}
 const userD: CompanyEmployee = {name:'林', age:50, gender:'男性'}
 const userList: CompanyEmployee[] = [userA, userB, userC, userD] // 第一引数
 const age = 25 // 第二引数
 const users: CompanyEmployee[] = inCompanyEmployeesNumberOutCompanyEmployees(userList,age)
 for (let user of users) {
      console.log(`年齢が25歳以下の社員は${user.name}さんでした`)
 }

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning11/Practice11.js
 */

  