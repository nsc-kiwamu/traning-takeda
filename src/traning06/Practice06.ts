/*
 繰り返し

 <実施内容1>
 Sample05.tsを参考に作成し、practice06Map01～04に値を設定する。(値は任意で良いが3つ以上設定すること)
 設定した値をfor文でループさせながらターミナルに出力する。
 */

 // MAPの宣言と値の設定(key:string, value:string)
 const practice06Map01  = new Map<string, string>()
 const practice06Map02  = new Map<number, string>()
 const practice06Map03  = new Map<string, number>()
 const practice06Map04  = new Map<number, number>()

 // 値の設定(key:string, value:string)
  practice06Map01.set('課題01', '簡単')
  practice06Map01.set('課題02', '簡単')
  practice06Map01.set('課題03', 'やや難しい')


 // 値の設定(key:number, value:string)
  practice06Map02.set(2020, '春')
  practice06Map02.set(2021, '夏')
  practice06Map02.set(2022, '冬')

 
 // 値の設定(key:string, value:number)
  practice06Map03.set('絵本', 1200)
  practice06Map03.set('ノート', 100)
  practice06Map03.set('色鉛筆', 300)


 // 値の設定(key:number, value:number)
  practice06Map04.set(1, 30)
  practice06Map04.set(3, 50)
  practice06Map04.set(5, 70)


 // ヒント
 for (const [key, value] of practice06Map01) {
  //  console.log(`${key}は${key}です`)
  //  console.log(`${value}は${value}です`)
   console.log(`${key}は${value}です`)
   console.log(`${value}は${key}です`)
   console.log(`${practice06Map01.get(key)}は${practice06Map01.get(key)}です`)
 }

 for (const [key, value] of practice06Map02) {
  // console.log(`${key}は${key}です`)
  // console.log(`${value}は${value}です`)
  console.log(`${key}は${value}です`)
  console.log(`${value}は${key}です`)
  console.log(`${practice06Map02.get(key)}は${practice06Map02.get(key)}です`)
}

for (const [key, value] of practice06Map03) {
  // console.log(`${key}は${key}です`)
  // console.log(`${value}は${value}です`)
  console.log(`${key}は${value}です`)
  console.log(`${value}は${key}です`)
  console.log(`${practice06Map03.get(key)}は${practice06Map03.get(key)}です`)
}

for (const [key, value] of practice06Map04) {
  // console.log(`${key}は${key}です`)
  // console.log(`${value}は${value}です`)
  console.log(`${key}は${value}です`)
  console.log(`${value}は${key}です`)
  console.log(`${practice06Map04.get(key)}は${practice06Map04.get(key)}です`)
}

 /*※1 「Ctrl + @」でターミナルを開き以下を実行
   yarn tsc 
   node dist/traning06/Practice06.js
  */
 
 
 
 /*
 <実施内容2>
 arraySample06Numberについて、for文でループさせながら以下の条件でターミナルに出力する。
 ・値が7の場合
 　「今日は7日なので良いことがありそうだ」と出力
 ・値が13の場合
 　「今日は13日なので悪いことがありそうだ」と出力
 ・値が4,14,24の場合
 　「今日は4がつく日なので悪いことが無いように気を付けよう」と出力
 ・上記以外で値が10未満の場合
 　「今月は〇日なのでまだはじまったばかりだ」と出力
 　※〇は1～10が入る
 ・上記以外で値が11～20の場合
 　「今月は〇日なので中だるみしないように気を付けよう」と出力
 　※〇は11～20が入る
 ・上記以外で値が21以上の場合
 　「今月は〇日なので最後まで気を引き締めよう」と出力
 　※〇は21～31が入る
 */
 const arraySample06Number: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
 for(let i = 0; i <= 31; i++){ // 初期値を0にすると成功した
  if(arraySample06Number[i] === 7) { // 7の場合1回出力.OK
    console.log('今日は７日なので良いことがありそうだ');
  }
   else if(arraySample06Number[i] === 13){ // 13の場合「1回出力」.OK
    console.log('今日は１３日なので悪いことがありそうだ');
  } 
   else if(arraySample06Number[i] === 4){ // 4日の場合「1回出力」.OK
    console.log('今日は４がつく日なので悪いことがないように気を付けよう');
  }
   else if(arraySample06Number[i] === 14){ // 14日の場合「1回出力」.OK
    console.log('今日は４がつく日なので悪いことがないように気を付けよう');
  }
   else if (arraySample06Number[i] === 24){ // 24日の場合「1回出力」.OK
    console.log('今日は４がつく日なので悪いことがないように気を付けよう');
  }
   else if(1 <= arraySample06Number[i] && arraySample06Number[i] <= 10){ // 10日未満の場合「8回出力 .OK
    console.log(`今月は１～１０日なのでまだはじまったばかりだ`);
  }
   else if(11 <= arraySample06Number[i] && arraySample06Number[i] <= 20){ // 11~20日の場合「8回出力」.OK
    console.log(`今月は１１～２０日なので中だるみしないように気を付けよう`);
  }
   else if(21 <= arraySample06Number[i]){ // 21日以上の場合「10回出力」.OK
    console.log(`今月は２１～３１日なので最後まで気を引き締めよう`);
  }

}


 

 /*※1 「Ctrl + @」でターミナルを開き以下を実行
   yarn tsc 
   node dist/traning06/Practice06.js
  */