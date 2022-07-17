
export type gambler = {
    // 名前
    name: string
    // 所持コイン
    coin: number
    // 勝負する時値
    matchValue: number[]
}

/**
 * 第一引数以上、第二引数以下のランダムな整数を返却する
 * @param min 乱数の最低値
 * @param max 乱数の最高値
 * @returns min～maxの整数
 */
export function makeRandom(min: number, max: number) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
}

/**
 * 疑似的にサイコロを振った結果を返却する
 * @returns 1～6の整数
 */
export function dice(): number {
    return makeRandom(1, 6)
}