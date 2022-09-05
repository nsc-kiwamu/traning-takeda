import { makeRandomList } from "../traning13/Common13";
/*
 アルゴリズム(素数判定)

  <実施内容>
  1. 1～100までの数値のうち、素数をコンソール出力するプログラムを作成する
*/
// https://noumenon-th.net/programming/2018/04/30/prime01/
// 上記サイトを参考にしました。

console.log('=====問題1=====')
function getPrime(){
    let num = new Array(100);

    for(let i=2; i < num.length; i++){ // iが2以上の時num(100)まで繰り返す。
      let ans = judgeSosuu(i) // judgeSosuuに素数判断したい値を渡す

      if (typeof ans === 'number') { // さっき代入した値を型判定する
        console.log(`${ans}は素数です`)
      }
    }
}

 getPrime(); // 上記の処理、関数を呼び出す

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
  for(let i=2; i < target; i++){ // 2から渡された数まで繰り返す。
        if(target % i == 0){ // target(受け取った値）÷iの余りがなければ、
          return(retNum)   
    }
  }
  return target
}


// 元
// function judgeSosuu(target: number):number | undefined {
//   let retNum:number | undefined

//   // 素数判定の処理を追加する
//   for(let i=2; i < target; i++){ // 2から渡された数まで繰り返す。
//         if(target % i == 0){ // target(受け取った値）÷iの余りがなければ、
//               break; // 終了
//         }
//     if(target % i === 0) { // target(受け取った値）
//     }
//     else if(retNum){
//     }
//   }
//   return target
// }

 /**
  * 素数の判断をする
  * 素数の場合はコンソール出力する
  * @param target 素数判定したい値
  */
  function judgeSosuuVoid(target: number) {
    // 0と1が渡された場合は素数ではないため処理終了
    if (target === 0 || target === 1) {
      return
    }
  
    // 素数判定の処理を追加する
    for (let i=2; i < target; i++) {
      if (target % i === 0) {
        return
      }
    }

    // 最後まで割り切れなくて残ったので素数
    console.log(`${target}は素数です`)
  }
  

/*
  2. 要素数10個で値域が1～50までのランダムな値をもつnumber型の配列を作成し、素数をコンソール出力するプログラムを作成する
*/
 
 console.log('=====問題2=====')
 function getSosuu() {
 const sample = makeRandomList(10,1,50)

     for(let i=2; i < sample.length; i++){ // sampleが2以上の時は、繰り返す
         let ans = judgeSosuu(i)

       if (typeof ans === 'number') {
        console.log(`${ans}は素数です`)
       }
     }
  }
 
 getSosuu();





/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning14/Practice14.js
 */