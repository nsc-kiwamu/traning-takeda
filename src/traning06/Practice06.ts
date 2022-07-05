/*
 繰り返し

 <実施内容1>
 Sample05.tsを参考に作成し、practice06Map01～03に値を設定する。(値は任意で良いが3つ以上設定すること)
 設定した値をfor文でループさせながらターミナルに出力する。
 */

 // MAPの宣言と値の設定(key:string, value:string)
const practice06Map01  = new Map<string, string>()

// MAPの宣言と値の設定(key:number, value:string)
const practice06Map02  = new Map<number, string>()

// MAPの宣言と値の設定(key:string, value:number)
const practice06Map03  = new Map<string, number>()

// MAPの宣言と値の設定(key:number, value:number)
const practice06Map04  = new Map<number, number>()

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

