import { makeRandom } from "../traning12/Common12.js"
import { makeRandomList } from "../traning14/Practice14.js"



/**
 * 引数で受け取った要素数の配列を値をランダムで作成する。
 * ランダムで作成する値域は1～30とする。
 * @param size 要素数
 * @returns 引数で指定された要素数で値はランダム(1～30)の配列
 */
export function makeRandomListDefault(size: number): number[] {
    return makeRandomList(size, 1, 30)
}

/**
 * 引数で受け取った要素数の配列を値をランダムで作成する。
 * ランダムで作成する値域は第二引数～第三引数とする。
 * @param size 要素数
 * @param min ランダム値の最小
 * @param max ランダム値の最大
 * @returns 引数で指定された要素数で値はランダム
 */
export function makeRandomList(size: number, min:number, max:number): number[] {
    const retList:number[] = []

    for (let i = 0; i < size; i++) {
        retList.push(makeRandom(min, max))
    }

    return retList
}

