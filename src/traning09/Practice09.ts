/*
 type型と繰り返し

  <実施内容>
  1. サンプルを参考にCompanyEmployee型のuserXを一人作り、以下をconsoleに表示させる
  　竹田さんは23歳の女性です
*/
 const userX:CompanyEmployee = {name:'竹田',age:23, gender:'女性'}
 console.log(userX)
 console.log(`${userX.name}さんは${userX.age}歳の${userX.gender}です\r\n`)

 // 2. サンプルを参考にCompanyEmployee型のuserYとuserZを作りfor文でループさせる
 const userY:CompanyEmployee = {name:'白井',age:45, gender:'男性'}
 const userZ:CompanyEmployee = {name:'今埜',age:24, gender:'女性'}

 const userList2:CompanyEmployee[] = [userY, userZ]
 for (const user of userList2) {
     console.log(`${user.name}さんは${user.age}歳の${user.gender}です\r\n`)
 }

/* 3. Common09を参考に以下の要素を持つ、typeであるFruitを作成する
     type名：Fruit
     要素：name:string、color:string

     ちなみに、作成済のCompanyEmployeeは以下である
     type名：CompanyEmployee
     要素：name: string、 age: number、gender: string
*/
/*   4.Fruit型の変数appleを作成し、以下をconsoleに表示させる
   　りんごは赤いです
*/
 const apple:Fruit = {name:'りんご',color:'赤い'}
 console.log(apple)
 console.log(`${apple.name}は${apple.color}です\r\n`)


 /*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning09/Practice09.js
 */
