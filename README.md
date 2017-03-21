## PostCSSとは

>PostCSSとは、JavaScriptで書かれた次世代CSSを変換するためのツールです。
 PostCSSは、ES2015を現行のJavaScriptにトランスポートする「Babel」と同じで、未来のcssを現行のcssに翻訳してくれます。
 PostCSS自体は、はあくまで変換するツールで、必要な機能をプラグインとして自分で取捨選択し、機能拡張していきます。
 
 [未来を先取るPostCSS | CodeCode](http://codecodeweb.com/blog/199)

## IntelliJのError問題

拡張子を.pcssにすると解決

## postcss-simple-varsのError問題

## 使ったプラグイン

### autoprefixer

説明不要

### postcss-calc

calc関数

### postcss-nested

ネスト

### postcss-import

インポートできるようにする

### postcss-custom-media

メディアクエリの定義を変数化

### postcss-custom-properties

変数

### postcss-color-function

プラグインは新しいcolor()関数

### cssnano

CSSの最適化

### postcss-simple-vars

$の変数，mixin専用にしておいた

### postcss-mixins

mixinができる





## 参考

[PostCSSとcssnextで最新CSS仕様を先取り！ | HTML5Experts.jp](https://html5experts.jp/t32k/17235/)

[そうならないようにPostCSSで使う プリプロセッサ系のプラグイン は「cssnextに記載されたプラグインだけ使う」などのルールを決めたほうが良いでしょう。](http://qiita.com/howdy39/items/1029e3df24ac42c7bd49)

[:root {   --myColor: red; }  div {   background-color: var(--myColor) }](http://qiita.com/howdy39/items/92a7de771bbea99dbc7c)

[cssnext](https://blog.kazu69.net/2015/06/15/develop-latest-css-syntax-using-cssnext/)

[初心者歓迎！ 話題のPostCSSの導入方法からおすすめプラグインまで - WPJ](https://www.webprofessional.jp/7-postcss-plugins-to-ease-you-into-postcss/)


[PostCSS とは何か \- SSSSLIDE](http://sssslide.com/speakerdeck.com/jmblog/postcss-tohahe-ka)

[postcss-cssnext features](http://cssnext.io/features/)



## stylelint

[SCSSもだいたい使える](http://qiita.com/inuscript/items/ff4f6972c988afbec3a8)

[CSSのLintをstylelintにする \- Qiita](http://qiita.com/makotot/items/c266ed11ada1423cb96e)

[ここがすごいぞ！ stylelint！ \- Qiita](http://qiita.com/inuscript/items/ff4f6972c988afbec3a8)