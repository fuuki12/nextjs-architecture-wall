# Next.js アーキテクチャ壁打ち

Next.js におけるコンポーネント設計やアーキテクチャパターンの比較・検討を行うためのリポジトリです。

## 目的

- Next.js/React アプリケーションの様々な設計パターンを検討する
- 異なるアプローチのメリット・デメリットを比較する
- プロジェクトに最適な設計指針を得る

## 対象としている設計パターン

1. **Atomic Design**

   - atoms
   - molecules
   - organisms
   - templates
   - pages

2. **Feature-First（機能ベース）設計**

   - 機能ごとにコンポーネント、ロジック、型定義などをグループ化

3. **その他検討パターン**
   - レイヤード・アーキテクチャ
   - ドメイン駆動設計

## ディレクトリ構造

```
src
├── app                          # Next.js App Router
├── features                     # 機能ベース設計のコンポーネント・ロジック
│   └── todo                     # Todo機能の例
│       ├── api                  # API関連
│       ├── components           # UIコンポーネント
│       ├── hooks                # カスタムフック
│       └── types                # 型定義
└── lib                          # 共通ユーティリティ
    ├── components               # 共通コンポーネント
    │   ├── ui                   # Atomic Designパターンのコンポーネント
    │   └── layout               # レイアウト関連コンポーネント
    ├── hooks                    # 共通カスタムフック
    ├── services                 # サービス層
    ├── stores                   # 状態管理
    └── styles                   # グローバルスタイル
```

## 主な技術スタック

- Next.js (App Router)
- TypeScript
- SCSS Modules (スタイリング)
- Bun (パッケージマネージャー)
- Vitest + Testing Library (テスト)
- Playwright (E2E テスト)

## 壁打ちの方法

このリポジトリでは、GitHub Discussions を活用して設計に関する議論を行います。

1. 「Discussions」タブから「新しい Discussion」を作成
2. 「壁打ち」カテゴリを選択
3. テンプレートに従って議論したいトピックを記述

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone <repository-url>

# 依存関係のインストール
bun install

# 開発サーバーの起動
bun dev

# テストの実行
bun test

# E2Eテストの実行
bun test:e2e
```

## 貢献方法

1. 新しいブランチを作成（`feature/新機能名` or `pattern/設計パターン名`）
2. 変更を加える
3. テストを追加または更新
4. Pull Request を作成
5. コードレビューを経て、マージ

## ライセンス

MIT
