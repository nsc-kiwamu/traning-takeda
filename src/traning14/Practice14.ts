import { makeRandomList } from "../traning13/Common13";
/*
 アルゴリズム(素数判定)

  <実施内容>
  1. 1～100までの数値のうち、素数をコンソール出力するプログラムを作成する
*/
// https://noumenon-th.net/programming/2018/04/30/prime01/
// 上記サイトを参考にしました。

// function getPrime(){
//     let n,i;
//     const num = 100;

//     for(n=2; n < num; n++){ // nが2以上の時num(100)まで繰り返す。
//         for(i=2; i<n; i++){
//             if(n%i == 0) // n÷iの余りがなければ、
//                   break; // 終了
//             }
//         if(n == i) // nとiが同じであれば、console.logに出力する
//             console.log(n);
//     }
// }

//  getPrime(); // 上記の処理、関数を呼び出す

 /**
  * 素数の判断をする
  * 素数の場合は引数で受け取った値を返却
  * 素数でない場合はundedefindを返却
  * @param target 素数判定したい値
  * @return 素数判定結果
  */
 function judgeSosuu(target: number):number | undefined {
  let retNum:number | undefined

  // 素数判定の処理を追加する
 let n,i;
 target = 100;

  for(n=2; n < target; n++){ // nが2以上の時num(100)まで繰り返す。
      for(i=2; i<n; i++){
          if(n%i == 0) // n÷iの余りがなければ、
                break; // 終了
          }
      if(n == i) // nとiが同じであれば、console.logに出力する
          console.log(n);
  }

  return retNum
 }

 judgeSosuu(0);


/*
  2. 要素数10個で値域が1～50までのランダムな値をもつnumber型の配列を作成し、素数をコンソール出力するプログラムを作成する
*/
 
console.log('====== 問題2 ======')

const retNum = makeRandomList(10,1,50)
let n,i;

for(n=2; n < retNum.length; n++){ // nが2以上の時num(100)まで繰り返す。
  for(i=2; i<n; i++){
      if(n%i == 0) // n÷iの余りがなければ、
            break; // 終了
      }
  if(n == i) // nとiが同じであれば、console.logに出力する
      console.log(n);

 return retNum

}

judgeSosuu(0);

//  let n,i;
//  const sample = makeRandomList(10,1,50)
//  console.log(`素数を出力する前:${sample}`)

//  function judgeSosuu() {
//  for(n=2; n < sample.length; n++){
//     for(i=2; i<n; i++){
//         if(n%i == 0) // n÷iの余りがなければ、
//                break; // 終了
//        }
//     if(n == i) // nとiが同じであれば、console.logに出力する
//         console.log(n);
//       }
//     }

//     judgeSosuu();



/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning14/Practice14.js
 */