import { Animal, filterType, selectCatType } from "./Common10.js";

// Animal型の変数をいくつか作成する
const animals: Animal[] = [{name: 'ぺんぎん', type: 'bird'},{name: 'ライオン', type: 'cat'},{name: '猫', type: 'cat'}]
console.log('猫科の動物を探します')
const cats: string[] = selectCatType(animals)
for (let cat of cats) {
    console.log(cat)
}
console.log('猫科の動物は以上です。\r\n')



const animals2: Animal[] = [{name: 'ぺんぎん', type: 'bird'},{name: 'ライオン', type: 'cat'},{name: '猫', type: 'cat'}]
const animalMap = filterType(animals2)
for (const [key, value] of animalMap) {

    console.log("タイプ:"+key)
    if (value !== undefined) {
        for (const animal of value) {
            console.log(animal.name)
        }
    }

}