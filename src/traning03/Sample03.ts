/*
 繰り返し
*/

// 1～10を加算
let ansSample03: number = 0
for (let i = 0; i <= 10; i++) {
    ansSample03 += i
}
console.log(`1～10の加算結果は${ansSample03}です`)

// 1～10の偶数のみを加算
ansSample03 = 0
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue
    }
    ansSample03 += i
}
console.log(`1～10の偶数の加算結果は${ansSample03}です`)
