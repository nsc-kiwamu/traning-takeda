import { makeRandomList } from "./Common13.js"

/*
 アルゴリズム(素数判定)

  <実施内容>
  1. 1～100までの数値のうち、素数をコンソール出力するプログラムを作成する
*/
// https://noumenon-th.net/programming/2018/04/30/prime01/
// 上記サイトを参考にしました。

function getPrime(){
    let n,i;
    const num = 100;

    for(n=2; n < num; n++){ // nが2以上の時num(100)まで繰り返す。
        for(i=2; i<n; i++){
            if(n%i == 0) // n÷iの余りがなければ、
                  break; // 終了
            }
        if(n == i) // nとiが同じであれば、console.logに出力する
            console.log(n);
    }
}

 getPrime(); // 上記の処理、関数を呼び出す



/*
  2. 要素数10個で値域が1～50までのランダムな値をもつnumber型の配列を作成し、素数をコンソール出力するプログラムを作成する
*/

function randomNumber(){
  const SampleRandom = makeRandomList(10,1,50)  // number[10]とすることで、要素数を指定？

    for(let i = SampleRandom.length; i < 2; i++){ // SampleRandomの配列が2より小さくなるまで？
        for(i=2; i<n; i++){
            if(n%i == 0) 
                  break; 
      }
    if( == i)
        console.log();
    }
}

randomNumber();



/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning14/Practice14.js
 */