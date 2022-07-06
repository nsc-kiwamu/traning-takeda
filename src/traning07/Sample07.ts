/*
 MAPと配列
*/

// 所属を管理するMAP
const sample07MngMap = new Map<string, string>([
    ['白井', '第二システム統括部'],
    ['佐藤', '第二システム統括部システム第1部'],
    ['清野', '第二システム統括部システム第1部1課'],
    ['遠藤', '第二システム統括部システム第2部'],
    ['永池', '第二システム統括部システム第3部'],
])

// 所属を確認したいメンバー一覧
const sample07memberList: Array<string> = ['白井','遠藤','佐藤', '竹田']

// 所属の確認
for (const member of sample07memberList) {
    console.log(`所属を確認したいのは${member}さんです`)

    // mapから所属を取得する
    const div = sample07MngMap.get(member)

    // 所属の取得有無でメッセージを変更する
    if (div !== undefined) {
        console.log(`>>>${member}さんの所属は${div}です`)
    } else {
        console.log(`>>>${member}さんは所属が見つかりませんでした`)
    }
}