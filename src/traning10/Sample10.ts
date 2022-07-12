import { Animal, selectCatType } from "./Common10.js";

// Animal型の変数をいくつか作成する
const animals: Animal[] = [{name: 'ぺんぎん', type: 'bird'},{name: 'ライオン', type: 'cat'},{name: '猫', type: 'cat'}]
console.log('猫科の動物を探します')
const cats: string[] = selectCatType(animals)
for (let cat of cats) {
    console.log(cat)
}
console.log('猫科の動物は以上です。\r\n')
