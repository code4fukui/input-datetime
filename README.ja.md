# input-datetime

日付、時刻、ローカル日時入力用のカスタムHTML要素セット。バリデーション（検証）機能を内蔵しています。

## デモ

ライブデモはこちら: **https://github.com/code4fukui/input-datetime

## 特徴

- `<input-date>`、`<input-time>`、`<input-datetime-local>`カスタム要素を提供します。
- 標準の`<input>`要素の代わりとして簡単に導入（ドロップイン）できます。
- バリデーション機能内蔵: 無効なデータ入力を防ぐため、9999を超える年を自動的に制限します。
- `id`や`required`などの標準属性をサポートします。
- Vanilla JavaScript（ピュアなJavaScript）と簡単に統合して使用できます。
- 今後の予定: タイムゾーンをサポートする`<input-datetime>`。

## 使い方

### 1. 要素のインポート

HTMLファイルに必要な要素のスクリプトをインポートします。必要に応じて1つまたは複数をインポートできます。

```html
<!-- <input-date> 用 -->
<script type="module" src="https://code4fukui.github.io/input-datetime/input-date.js"></script>

<!-- <input-time> 用 -->
<script type="module" src="https://code4fukui.github.io/input-datetime/input-time.js"></script>

<!-- <input-datetime-local> 用 -->
<script type="module" src="https://code4fukui.github.io/input-datetime/input-datetime-local.js"></script>
```

### 2. HTMLでの使用

HTML内にカスタム要素のタグを配置します。`id`や`required`などの標準属性を使用できます。

```html
<label for="my-date">Date:</label>
<input-date id="my-date" required></input-date>

<label for="my-time">Time:</label>
<input-time id="my-time"></input-time>

<label for="my-datetime">Date & Time (Local):</label>
<input-datetime-local id="my-datetime" required></input-datetime-local>
```

### 3. JavaScriptとの連携

標準のinput要素と同じように、要素の`.value`プロパティを取得および設定できます。

```html
<script type="module">
  const myDate = document.getElementById("my-date");

  // 変更時に値を取得
  myDate.onchange = () => {
    console.log("Selected date:", myDate.value); // 例: "2023-10-27"
  };

  // 文字列で値をプログラム的に設定
  myDate.value = "2025-01-01";
</script>
```

[js.sabae.cc/DateTime.js](https://js.sabae.cc/DateTime.js)ライブラリの`Day`、`Time`、`DateTime`オブジェクトを使用して値を設定することもできます。

```html
<script type="module">
  import { DateTime, Day, Time } from "https://js.sabae.cc/DateTime.js";

  // 現在の日付、時刻、または日時を設定
  document.getElementById("my-date").value = new Day();
  document.getElementById("my-time").value = new Time();
  document.getElementById("my-datetime").value = new DateTime();
</script>
```

## バリデーション

`<input-date>`および`<input-datetime-local>`要素には、9999を超える年を防ぐバリデーターが含まれています。ユーザーが`10000`のような年を入力した場合、自動的に`9999`に修正されます。

## ライセンス

MIT

---
by [@taisukef](https://fukuno.jig.jp/3370)
