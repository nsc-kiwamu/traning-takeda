/*
 MAP
*/

// MAPの宣言と値の設定(key:string, value:string)
const sample05Map  = new Map<string, string>()
sample05Map.set('課題01', '簡単')
sample05Map.set('課題02', '簡単')
sample05Map.set('課題03', 'やや難しい')
sample05Map.set('課題04', '難しい')
sample05Map.set('課題05', 'よくわからない')

// MAPの中身を表示(keyが特定できる場合)
console.log(`課題01は${sample05Map.get('課題01')}です`)
console.log(`課題02は${sample05Map.get('課題02')}です`)
console.log(`課題03は${sample05Map.get('課題03')}です`)
console.log(`課題04は${sample05Map.get('課題04')}です`)
console.log(`課題05は${sample05Map.get('課題05')}です`)


// MAPの中身を表示(keyが特定できない場合)
for (const [key, value] of sample05Map) {
    console.log(`${key}は${value}です`)
}
