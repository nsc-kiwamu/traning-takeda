/*
 条件分岐
*/

// 文字列比較
const sampleUserFirstName: string = ""
if (sampleUserFirstName === "") {
    console.log("私には名前がありません")
} else {
    console.log(`私の名前は${sampleUserFirstName}です`)
}

// 文字列比較
const sampleUserLastName: string = "田中"
if (sampleUserLastName !== "田中") {
    console.log("私の苗字は田中ではありません")
} else {
    console.log(`私の苗字は田中です`)
}

// boolean
const judge: boolean = true
if(judge) {
    console.log(`judgeには${judge}が設定されています`)
} else {
    console.log(`judgeには${judge}が設定されています`)
}

// number
const age: number = 10
if(age < 6) {
    console.log('私は小学生未満です')
} else if (6 <= age && age < 13) {
    console.log(`私は小学生です`)
} else {
    console.log(`私は小学生以上です`)
}