/*
 繰り返し

 <実施内容1>
 Sample05.tsを参考に作成し、practice06Map01～04に値を設定する。(値は任意で良いが3つ以上設定すること)
 設定した値をfor文でループさせながらターミナルに出力する。
 */

 // MAPの宣言と値の設定(key:string, value:string)
 const practice06Map01  = new Map<string, string>()
 practice06Map01.set('課題01', '簡単')
 practice06Map01.set('課題02', '簡単')
 practice06Map01.set('課題03', 'やや難しい')
 
 // MAPの中身を表示(keyが特定できる場合)
 console.log(`課題01は${practice06Map01.get('課題01')}です`)
 console.log(`課題02は${practice06Map01.get('課題02')}です`)
 console.log(`課題03は${practice06Map01.get('課題03')}です`)
 
 
 // MAPの宣言と値の設定(key:number, value:string)
 const practice06Map02  = new Map<number, string>()
 practice06Map02.set(2020, '春')
 practice06Map02.set(2021, '夏')
 practice06Map02.set(2022, '冬')
 
 // MAPの中身を表示(keyが特定できる場合)
 console.log(`2022${practice06Map02.get(2020)}です`)
 console.log(`2021${practice06Map02.get(2021)}です`)
 console.log(`2022${practice06Map02.get(2022)}です`)
 
 // MAPの宣言と値の設定(key:string, value:number)
 const practice06Map03  = new Map<string, number>()
 practice06Map03.set('絵本', 1200)
 practice06Map03.set('ノート', 100)
 practice06Map03.set('色鉛筆', 300)
 
 // MAPの中身を表示(keyが特定できる場合)
 console.log(`絵本${practice06Map03.get('絵本')}です`)
 console.log(`ノート${practice06Map03.get('ノート')}です`)
 console.log(`色鉛筆${practice06Map03.get('色鉛筆')}です`)
 
 // MAPの宣言と値の設定(key:number, value:number)
 const practice06Map04  = new Map<number, number>()
 practice06Map04.set(1, 1)
 practice06Map04.set(3, 3)
 practice06Map04.set(5, 5)
 
 // MAPの中身を表示(keyが特定できる場合)
 console.log(`1${practice06Map04.get(1)}です`)
 console.log(`3${practice06Map04.get(3)}です`)
 console.log(`5${practice06Map04.get(5)}です`)
 
 
 // MAPの中身を表示(keyが特定できない場合)
 for (const [key, value] of practice06Map04) {
     console.log(`${key}は${value}です`)
 }
 
 
 
 
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
 
 for(let i = 1; i <= 31; i++){
    if(i <= 7) { // 7の場合
         console.log('今日は7日なので良いことがありそうだ');
    }
    else if(i <= 13){ // 13の場合
        console.log('今日は13日なので悪いことがありそうだ');
    }
    else if(i <= 4){ // 4,14,24の場合
         console.log('今日は４がつく日なので悪いことがないように気を付けよう');
    }
    else if(i >= 10){ // 10日未満の場合
         console.log(`今月は${arraySample06Number}日なのでまだはじまったばかりだ`);
    }
    else if(i <= 20){ // 11~20日の場合
        console.log(`今月は${arraySample06Number}日なので中だるみしないように気を付けよう`);
    }
    else if(i <= 21){ // 21日以上の場合
         console.log(`今月は${arraySample06Number}日なので最後まで気を引き締めよう`);
    }
 
}
 
 /*※1 「Ctrl + @」でターミナルを開き以下を実行
   yarn tsc 
   node dist/traning06/Practice06.js
  */