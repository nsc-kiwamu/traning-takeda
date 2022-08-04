/*
 繰り返し

 <実施内容>
 Sample05.tsを参考に作成し、practice05Mapに値を設定する。(値は任意で良いが3つ以上設定すること)
 設定した値をfor文でループさせながらターミナルに出力する。
 */
 const sampleMap  = new Map<string, string>()
 sampleMap.set('りんご', '赤い')
 sampleMap.set('ぶどう', '紫色')
 sampleMap.set('バナナ', '黄色')


 // MAPの中身を表示(keyが特定できない場合)
for (const [key, value] of sampleMap) {
  console.log(`${key}は${value}です`)
}
 /*※1 「Ctrl + @」でターミナルを開き以下を実行
   yarn tsc 
   node dist/traning05/Practice05.js
  */
