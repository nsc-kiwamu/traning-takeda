/*
 繰り返し

 <実施内容1>
 Sample05.tsを参考に作成し、practice06Map01～04に値を設定する。(値は任意で良いが3つ以上設定すること)
 設定した値をfor文でループさせながらターミナルに出力する。
 */

 // 4つのMapを設定
 const sampleMap01 = new Map<string, string>()
 const sampleMap02 = new Map<string, string>()
 const sampleMap03 = new Map<string, string>()
 const sampleMap04 = new Map<string, string>()
 
 // Map01の値の設定
 sampleMap01.set("いちご", "200円")
 sampleMap01.set("ぶどう", "300円")
 sampleMap01.set("りんご", "400円")

 // Map02の値の設定
 sampleMap02.set("ライオン", "ネコ科")
 sampleMap02.set("犬", "イヌ科")
 sampleMap02.set("猫", "ネコ科")

 // Map03の値の設定
 sampleMap03.set("今日の天気", "晴れ")
 sampleMap03.set("明日の天気", "くもり")
 sampleMap03.set("明後日の天気", "雨")

 // Map04の値の設定
 sampleMap04.set("私の父", "54歳")
 sampleMap04.set("私の母", "51歳歳")
 sampleMap04.set("私", "23歳")

 // Map01の出力
 for (const [key, value] of sampleMap01) {
   console.log(`${key}は${value}です`)
 }

 // Map02の出力
 for (const [key, value] of sampleMap02) {
  console.log(`${key}は${value}です`)
}

// Map03の出力
for (const [key, value] of sampleMap03) {
  console.log(`${key}は${value}です`)
}

// Map04の出力
for (const [key, value] of sampleMap04) {
  console.log(`${key}は${value}です`)
}


 /*※1 「Ctrl + @」でターミナルを開き以下を実行
   yarn tsc 
   node dist/traning06/Practice06.js
  */