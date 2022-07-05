/*
 繰り返し

 <実施内容>
 Sample05.tsを参考に作成し、practice05Mapに値を設定する。(値は任意で良いが3つ以上設定すること)
 設定した値をfor文でループさせながらターミナルに出力する。
 */

 // MAPの宣言と値の設定(key:string, value:string)
const practice05Map  = new Map<string, string>()
practice05Map.set('絵本', '1200円')
practice05Map.set('ノート', '100円')
practice05Map.set('色鉛筆', '300円')


// MAPの中身を表示(keyが特定できる場合)
console.log(`絵本${practice05Map.get('絵本')}です`)
console.log(`ノート${practice05Map.get('ノート')}です`)
console.log(`色鉛筆${practice05Map.get('色鉛筆')}です`)


// MAPの中身を表示(keyが特定できない場合)
for (const [key, value] of practice05Map) {
    console.log(`${key}は${value}です`)
}


/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning05/Practice05.js
 */