
let privateCounter: number = 0

/**
 * 自身が呼び出されたことをコンソールに出力する OK
 */
export function printCall(): void {
    console.log('printCallが呼ばれました\r\n')
}

/**
 * 引数で受け取った名前をコンソールに出力する OK
 * @param name 名前
 */
 export function printName(name: string): void {
    console.log('printNameが呼ばれました')
    console.log(`パラメータで受け取った名前は${name}です\r\n`)
}

/**
 * 自身が呼び出された回数を返却する ×
 */
 export function callCounter(): number {
    console.log('callCounterが呼ばれました')
    privateCounter++
    return privateCounter
}

/**
 * 引数で受け取った文字列の前後を「*」でくくって返却する OK
 * @param target 対象文字列
 */
export function wrapSide(target: string): string {
    console.log('wrapSideが呼ばれました')    
    return `*${target}*`
}

/**
 * 引数で受け取った数の配列を作成し返却する  OK
 * 配列の要素は0～サイズ-1の数値を設定する
 * @param size 作成対象の配列のサイズ
 * @returns 作成した配列
 */
export function makeList(size: number): number[] {
    let retList: number[] = []

    // 引数の数だけ繰り返す
    for (let i = 0; i < size; i++) {
        retList.push(i)
    }

    return retList
}

/**
 * 引数で受け取った配列からMapを作成して返却する  OK
 * 第一引数がMapのkey、第二引数がMapのvalueとなる
 * @param names Mapのkeyとなる配列
 * @param devs Mapのvalueとなる配列
 * @returns 作成した配列
 */
 export function makeMap(names: string[], divs: string[]): Map<string, string> {
    let retMap = new Map<string, string>

    // 第一引数と第二引数の数が合わない場合、エラーとする
    if (names.length !== divs.length) {
        console.log(`第一引数と第二引数の要素数を合わせて下さい。第一引数の要素数:${names.length}、第二引数の要素数:${divs.length}`)
    }

    // 第一引数をkey、第二引数をvalueとしてMapを作成
    for (let i = 0; i < names.length; i++) {
        retMap.set(names[i], divs[i])
    }

    return retMap
}


/* 8. Common08.tsに以下の条件を満たす関数を作成し、Practice08から呼び出すこと　×
    引数:number、戻り値:number
    引数で受け取った数値側の値を2倍にして返却する
*/

 export function praMap8 (num1: number[], num2: number[]): Map<number, number> {
    let retMap2 = new Map<number, number>

    // 第一引数と第二引数の数が合わない場合、エラーとする
    if (num1.length !== num2.length) {
        console.log(`第一引数の要素数:${num1.length}、第二引数の要素数:${num2.length}`)
    }

    // 第一引数をkey、第二引数をvalueとしてMapを作成
    for (let i = 0; i < num1.length; i++) {
        retMap2.set(num1[i], num2[i])
    }

    return retMap2
}


/* 9. Common08.tsに以下の条件を満たす関数を作成し、Practice08から呼び出すこと
 　　引数:string[]、戻り値:number
     引数で受け取った配列の要素数を返却する
*/

export function praMap9 (num3: string[], num4: number[]): Map<string, number> {
    let retMap3 = new Map<string, number>

    // 第一引数と第二引数の数が合わない場合、エラーとする
    if (num3.length !== num4.length) {
        console.log(`第一引数の要素数:${num3.length}、第二引数の要素数:${num4.length}`)
    }

    // 第一引数をkey、第二引数をvalueとしてMapを作成
    for (let i = 0; i < num3.length; i++) {
        retMap3.set(num3[i], num4[i])
    }

    return retMap3
}

