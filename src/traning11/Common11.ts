/**
 * 引数の数値を3で割った時の余りを返却する
 * 引数の数:1
 * 引数の型:number
 * 戻り値の型:string
 * @param inNum1 除算対象の数値
 * @returns 第一引数の数値3で割った時の余り
 */
export function inNumOutStr(inNum1: number): string {

    if (inNum1 === undefined) {
        return "計算できませんでした"
    }

    const ans:number = inNum1 % 3

    return `${inNum1}を3で割った時の余りは${ans}です`
    
}

/**
 * 第一引数の数値を第二引数の数値で割った時の余りを計算結果として文字列で返却する
 * 引数の数:2
 * 引数の型:number
 * 戻り値の型:string
 * @param inNum1 除算対象の数値
 * @param inNum2 除算する時の数値
 * @returns 第一引数の数値を第二引数の数値で割った時の余り
 */
 export function inNum2OutStr(inNum1: number, inNum2: number): string {

    if (inNum1 === undefined || inNum2 === undefined) {
        return "計算できませんでした"
    }

    if (inNum2 === 0) {
        return "0では除算できません"
    }

    const ans:number = inNum1 % inNum2

    return `${inNum1}を${inNum2}で割った時の余りは${ans}です`
    
}

/**
 * 第一引数の文字列の長さを返却する
 * 
 * 引数の数:1
 * 引数の型:string
 * 戻り値の型:number
 * @param inStr1 文字列長確認対象
 * @returns 第一引数の文字列の長さ
 */
 export function inStrOutNum(inStr1: string): number {

    if (inStr1 === undefined) {
        return 0
    }
    const ans:number = inStr1.length

    return ans
    
}

/**
 * 第一引数の文字列の長さと第二引数の文字列の長さを加算して返却する
 * 
 * 引数の数:2
 * 引数の型:string
 * 戻り値の型:number
 * @param inStr1 文字列長確認対象
 * @returns 第一引数の文字列の長さと第二引数の文字列の長さ
 */
 export function inStr2OutNum(inStr1: string, inStr2: string): number {

    if (inStr1 === undefined || inStr2 === undefined) {
        return 0
    }
    const ans:number = inStr1.length + inStr2.length

    return ans
    
}

/**
 * 第一引数と第二引数の社員の平均年齢を返却する
 * @param inCe1 社員1
 * @param inCe2 社員2
 * @returns 平均年齢
 */
  type CompanyEmployee = {
    name: string;
    age: number;
    gender: string;
  }

export function inCompanyEmployee2OutNum(inCe1: CompanyEmployee,inCe2: CompanyEmployee): number {
    //社員1の年齢+社員2の年齢 ÷ 人数
    return (inCe1.age + inCe2.age) / 2
}

/**
 * 第一引数の社員の中から第二引数の年齢よりも若い社員を返却する
 * @param inCe1[] 社員の集団
 * @param tgtAge 抽出基準となる年齢
 * @returns 抽出基準を満たした社員の集団
 */
 export function inCompanyEmployeesNumberOutCompanyEmployees(inCe1: CompanyEmployee[],tgtAge: number): CompanyEmployee[] {
    const ret: CompanyEmployee[] = []

    for (let ce of inCe1) {
        if (ce.age < tgtAge) {
            ret.push(ce)
        }
    }
    return ret
}


/*※1 「Ctrl + @」でターミナルを開き以下を実行
  yarn tsc 
  node dist/traning11/Practice11.js
 */