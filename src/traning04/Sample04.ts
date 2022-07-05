/*
 MAP
*/

// 配列の中身を表示 for-of文でのループ(number)
const arraySample04Number: number[] = [1,2,3,4,5,6,7,8,9,10]
for (const num of arraySample04Number) {
    console.log(num)
}

// 配列の中身を表示 通常のfor文(string)
const arraySample04String: string[] = ['りんご','いちご','りんご','ぶどう','もも','りんご','いちご','もも']
for (let i = 0; i < arraySample04String.length; i++) {
    console.log(arraySample04String[i])
}
