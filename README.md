# traning-takeda

- フォルダ構成は以下となる
```
  traning-takeda
    │  .gitignore git連携対象外の定義
    │  package.json 実行時の設定や許容するライブラリのバージョン情報
    │  README.md 本ファイル
    │  tsconfig.json プロジェクトの定義ファイル
    │  yarn.lock 実行時のライブラリのバージョン情報
    │
    ├─dist ビルドされたjavascriptを格納するディレクトリ
    │
    ├─node_modules インストールしたライブら頼を格納するディレクトリ
    │
    └─src
        │
        └─traningNN 課題の格納ディレクトリ
                PracticeNN.ts 実施する課題内容が記載されているファイル
                SampleNN.ts 課題を実施する際のサンプル
```