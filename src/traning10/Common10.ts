export type Animal = {
    name: string
    type: string
}



/**
 * 引数で受けとった年月日を〇年〇月〇日と表示する
 * @param year 年
 * @param month 月
 * @param day 日
 */
export function formatDate(year:number, month:number, day:number): string {

    // 月が1～12以外だったらエラーを返却する
    if (!(1 <= month && month <= 12)) {
        return `月の指定が不正です:${month} 1～12を指定して下さい`
    }

    // 日が1～31以外だったエラーを返却する
    if (!(1 <= day && day <= 31)) {
        return `日の指定が不正です:${day} 1～31を指定して下さい`
    }

    return `${year}年${month}月${day}日`
}

/**
 * 猫科の動物の名称一覧を返却する
 * @param animals 動物一覧
 */
export function selectCatType(animals: Animal[]): string[] {
    let cats: string[] = []

    for (const animal of animals) {
        if (animal.type === 'cat') {
            cats.push(animal.name)
        }

    }
    return cats
}

/**
 * 犬科の動物の名称一覧を返却する //竹田追記
 * @param animals 動物一覧
 */
 export function selectDogType(animals: Animal[]): string[] {
    let dogs: string[] = []

    for (const animal of animals) {
        if (animal.type === 'dog') {
            dogs.push(animal.name)
        }

    }
    return dogs
}



/**
 * 第二引数で受け取った動物の名称一覧を返却する
 * @param type 動物の種類
 * @param animals2 動物一覧
 */
 export function selectAnyType(animals2: Animal[], type: string ): string[] {
    let selects: string[] = []

    // ここに処理を追加する
    for (const animal2 of animals2) {
        if (animal2.type === 'cat') {
            selects.push(animal2.type)
            selects.push(animal2.name)
        }

    }


    return selects
}

/**
 * 第一引数で取得した動物一覧をタイプ毎にまとめてmapで返却する
 * @param animals 動物一覧
 */
export function filterType(animals: Animal[]): Map<string, Animal[]> {
    const retMap = new Map<string, Animal[]>

    for (let animal of animals) {
        // タイプを取得する
        const type = animal.type
        // mapからタイプをキーに動物一覧を取得する
        const animalList = retMap.get(type)
        // 取得したリストが空であれば新規作成、すでに存在していれば追加する
        if (animalList === undefined) {
            retMap.set(type, [animal])
        } else {
            animalList.push(animal)
            retMap.set(type, animalList)
        }
    }
    return retMap
}