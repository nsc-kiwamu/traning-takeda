import { formatDate, selectDogType, Animal, selectAnyType } from "./Common10.js";

/*
 色々な型と繰り返し

  <実施内容>結果は以下となるように引数を設定すること .OK
  　2022年7月12日
*/
 const year = 2022
 const month = 7
 const day = 12
 console.log(formatDate(year,month,day))

/*
  2. formatDateを実行し、その結果をコンソールに出力する。結果は以下となるように引数を設定すること .OK
  　月の指定が不正です:XX 1～12を指定して下さい
  　※XXは任意の値で良い
*/
 const year2 = 2022
 const month2 = 13
 const day2 = 12
 console.log(formatDate(year2,month2,day2))


/*
  3. formatDateを実行し、その結果をコンソールに出力する。結果は以下となるように引数を設定すること .OK
  　日の指定が不正です:XX 1～31を指定して下さい
  　※XXは任意の値で良い
*/
 const year3 = 2022
 const month3 = 7
 const day3 = 32
 console.log(formatDate(year3,month3,day3))


/*
  4. selectCatTypeを参考に関数selectDogTypeを作成する
  　Animal型を使用し犬科の動物と犬科以外の動物を作成し、配列に格納する
  　作成した配列をselectDogTypeの引数として渡し実行する
  　実行した結果をコンソールに出力する
*/
// Animal型の変数をいくつか作成する
const animals: Animal[] = [{name: 'ぺんぎん', type: 'bird'},{name: 'ライオン', type: 'cat'},{name: '犬', type: 'dog'}]
console.log('犬科の動物を探します')
const dogs: string[] = selectDogType(animals)
for (let dog of dogs) {
    console.log(dog)
}
console.log('犬科の動物は以上です。\r\n')



/*
  5. 以下の条件を満たすようにselectAnyTypeに処理を追加する .OK
  　　第一引数は動物の配列(selectCatTypeやselectDogTypeと同じ)
  　　第二引数は取得した動物の種類を設定する
*/
/*
  6. 作成したselectAnyTypeについて、以下の引数を渡して実行する
  　　第一引数はSampleで作成していたanimalsと同じもの
  　　第二引数は'cat'
  　　サンプルの実行結果と同じになること
*/

const animals2: Animal[] = [{name: 'ぺんぎん', type: 'bird'},{name: 'ライオン', type: 'cat'},{name: '猫', type: 'cat'}]
const type1 = 'cat'
console.log('猫科の動物を探します')
const cats: string[] = selectAnyType(animals2,type1)
for (let cat of cats) {
    console.log(cat)
}
console.log('猫科の動物は以上です。\r\n')



/*
  7. 作成したselectAnyTypeについて、以下の引数を渡して実行する
  　　第一引数は4で使用していた配列と同じもの
  　　第二引数は'dog'
  　　課題4の実行結果と同じになること
*/
const animals3: Animal[] = [{name: 'ぺんぎん', type: 'bird'},{name: 'ライオン', type: 'cat'},{name: '犬', type: 'dog'}]
const type2 = 'dog'
console.log('犬科の動物を探します')
const dogs2: string[] = selectAnyType(animals3, type2)
for (let dog of dogs2) {
    console.log(dog)
}
console.log('犬科の動物は以上です。\r\n')

/*
  8. filterTypeの内容を確認し、処理内容を理解する
*/

/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning10/Practice10.js
 */
