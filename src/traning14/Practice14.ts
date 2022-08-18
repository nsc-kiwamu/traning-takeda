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

    for(let i=0; i < num.length; i++){ // iが2以上の時num(100)まで繰り返す。
      let ans = judgeSosuu(i) // judgeSosuuに素数判断したい値を渡す
// console.log(i + 'テスト')

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
  for(let i=2; i < target; i++){
        if(target%i == 0){ // target(受け取った値）÷iの余りがなければ、
              break; // 終了
        }
    if(target == i) { // target(受け取った値）とiが同じであれば、素数
    }
  }
  return retNum
}

/*
  2. 要素数10個で値域が1～50までのランダムな値をもつnumber型の配列を作成し、素数をコンソール出力するプログラムを作成する
*/
 
//  console.log('=====問題2=====')
//  const sample = makeRandomList(10,1,50)
//  console.log(`素数を出力する前:${sample}`)

//  function sampleSosu() {
//       // let i=2; i < sample.length; i++　元
//      for(let i=0; i < sample.length; i++){ // sampleが2以上の時は、繰り返す
//        let ans = judgeSosuu(i)
// // console.log(i + 'テスト')

//        if (typeof ans === 'number') {
//         console.log(`${ans}は素数です`)
//        }
//      }
//  }

//  sampleSosu();



/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning14/Practice14.js
 */