
/*
 type型と繰り返し
*/

// Common08にCompanyEmployeeを作成したので社員を作成する
const userA:CompanyEmployee = {name:'佐藤',age:43, gender:'男性'}
console.log(userA)
console.log(`${userA.name}さんは${userA.age}歳の${userA.gender}です`)

// 社員を2名作る
const userB:CompanyEmployee = {name:'白井',age:45, gender:'男性'}
const userC:CompanyEmployee = {name:'今埜',age:24, gender:'女性'}

// 配列に格納し、for文で確認する
const userList:CompanyEmployee[] = [userA, userB, userC]
for (const user of userList) {
    console.log(`${user.name}さんは${user.age}歳の${user.gender}です`)
}