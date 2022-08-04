import { inNumOutStr, inNum2OutStr, inStrOutNum, inStr2OutNum, inCompanyEmployee2OutNum, inCompanyEmployeesNumberOutCompanyEmployees} from "./Common11.js";

/*
 色々な引数と戻り値

  <実施内容>
  1. inNumOutStrを実行し、結果は以下となるように引数を設定すること .OK
  　10を3で割った時の余りは1です
*/
  const number = 10
  console.log(inNumOutStr(number))

/*
  2. inNum2OutStrを実行し、結果は以下となるように引数を設定すること .OK
  　0では除算できません
*/
 const number2 = 7
 const number3 = 0
 console.log(inNum2OutStr(number2,number3))

/*
  3. inNum2OutStrを実行し、結果は以下となるように引数を設定すること .OK
  　15を3で割った時の余りは0です
*/
 const number4 = 15
 const number5 = 3
 console.log(inNum2OutStr(number4,number5))

/*
  4. inStrOutNumを実行し、結果は以下となるように引数を設定すること .OK
  　5
*/
 const sampleString = "ありがとう"
 console.log(inStrOutNum(sampleString))

/*
  5. inStr2OutNumを実行し、結果は以下となるように引数を設定すること .OK
  　13
*/ 
 const sampleString02 = "今日は"
 const sampleString03 = "ピクニック日和ですね"
 console.log(inStr2OutNum(sampleString02,sampleString03))

/*
  6. inCompanyEmployee2OutNumを実行し、結果は以下となるように引数を設定すること
  　22
*/

 const menber: CompanyEmployee = {name: "田中", age: 22, gender: "女性"}
 const menber2: CompanyEmployee = {name: "鈴木", age: 22, gender: "男性"}
 console.log(inCompanyEmployee2OutNum(menber,menber2))



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
 const menber3: CompanyEmployee = {name: "田中", age: 22, gender: "女性"}
 const menber4: CompanyEmployee = {name: "鈴木", age: 22, gender: "男性"}
 const menber5: CompanyEmployee = {name: "林", age: 32, gender: "男性"}
 const menber6: CompanyEmployee = {name: "高橋", age: 45, gender: "女性"}
 const menberList: CompanyEmployee[] = [menber3,menber4,menber5,menber6]
 const age = 25
 const menbers: CompanyEmployee[] = inCompanyEmployeesNumberOutCompanyEmployees(menberList,age)
 for (let menber of menbers) {
  console.log(`年齢が25歳以下の社員は${menber.name}さんでした`)
 }



/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning11/Practice11.js
 */

  