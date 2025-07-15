export const questions = [
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "ファイルを読み込むため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false },
        ],
        explanation: "コンポーネントは、UIを小さな部品に分けて再利用しやすくするための仕組みです。同じUIを複数箇所で使いたいときや、コードを整理して保守しやすくするのに役立ちます。"
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "関数の配列", isCorrect: false },
            { text: "HTMLファイル", isCorrect: false },
            { text: "複数の値", isCorrect: false },
        ],
        explanation: "Reactのコンポーネントは、JSXで記述された1つの要素、または複数の要素を1つにまとめたグループ（例: フラグメント）を返します。必ず1つのまとまった要素を返す必要があり、複数の要素を返す場合は親要素で囲む必要があります。"
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "ReactのAPI", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
        ],
        explanation: "JSX（JavaScript XML）は、JavaScript内でHTMLのような構文を記述できるReactの拡張構文です。見た目はHTMLに似ていますが、実際にはJavaScriptに変換されて実行されます。これにより、UIを構造的に分かりやすく記述できます。"
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "contextを使う", isCorrect: false },
            { text: "emitを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
        ],
        explanation: "Reactでは、親コンポーネントから子コンポーネントにデータを渡すときに `props` を使います。propsは読み取り専用の値で、コンポーネントの属性のように設定し、子コンポーネントはそれを受け取って表示や処理に使います。"
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
        ],
        explanation: "useEffectの第2引数に空配列（[]）を渡すと、そのエフェクトはコンポーネントのマウント時（初回レンダリング時）に1回だけ実行されます。依存する値がないことを意味し、更新や再レンダリングでは再実行されません。"
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useLayout", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useState", isCorrect: false },
        ],
        explanation: "副作用（データ取得やDOMの直接操作など）の処理には、ReactのuseEffectフックを使います。コンポーネントのライフサイクルに応じて処理を実行するために設計されています。"
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
        ],
        explanation: "useStateはReactのフックのひとつで、コンポーネント内に状態を持たせるために使います。useState(初期値) のように初期値を引数に渡すことで、その状態の初期値が設定されます。"
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useEffect", isCorrect: false },
            { text: "useVar", isCorrect: false },
        ],
        explanation: "Reactで状態管理を行うためには、useStateフックを使います。useStateは、値の保存と更新ができ、UIの再描画にも連動します。"
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
            { text: "CSSフレームワーク", isCorrect: false },
        ],
        explanation: "Reactは、ユーザーインターフェース（UI）を構築するためのJavaScriptライブラリです。コンポーネントを使って再利用可能なUI部品を作成でき、効率的な開発が可能になります。"
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "server.js", isCorrect: false },
            { text: "App.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
        ],
        explanation: "Reactアプリは通常、index.js（またはViteではmain.jsx）がエントリーポイントです。ここからReactのルートコンポーネント（Appなど）をDOMにレンダリングします。"
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "スタイルを適用するため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "ファイルを読み込むため", isCorrect: false },
        ],
        explanation: "コンポーネントは、UIを小さな部品に分けて再利用しやすくするための仕組みです。同じUIを複数箇所で使いたいときや、コードを整理して保守しやすくするのに役立ちます。"
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "contextを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
            { text: "emitを使う", isCorrect: false },
        ],
        explanation: "Reactでは、親コンポーネントから子コンポーネントへデータを渡す際に props（プロップス）を使います。propsはコンポーネントの引数のようなもので、子コンポーネントで受け取って利用することができます。"
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
        ],
        explanation: "useStateはReactのフックで、コンポーネントの状態を管理するために使います。初期値は useState(初期値) のように関数の引数として渡して設定します。"
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "毎回実行される", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
        ],
        explanation: "useEffectの第二引数に空配列（[]）を渡すと、そのエフェクトはコンポーネントのマウント時に一度だけ実行されます。再レンダリング時には実行されません。"
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useEffect", isCorrect: false },
            { text: "useVar", isCorrect: false },
        ],
        explanation: "useStateはReactで状態（state）を管理するためのフックです。コンポーネント内で状態を定義し、状態の変更に応じてUIを更新することができます。"
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "HTMLファイル", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
            { text: "複数の値", isCorrect: false },
        ],
        explanation: "Reactのコンポーネントは、1つの要素または要素を含んだグループ（例えばフラグメント）を返す必要があります。複数の要素を返したい場合は、1つの親要素にラップするか、React.Fragmentを使います。"
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "データベース言語", isCorrect: false },
            { text: "ReactのAPI", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
        ],
        explanation: "JSX（JavaScript XML）は、JavaScript内でHTMLのような構文を使うための記法です。ReactでUIを記述する際に直感的に要素を表現でき、コードの可読性と保守性が向上します。"
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useLayout", isCorrect: false },
            { text: "useState", isCorrect: false },
            { text: "useRender", isCorrect: false },
        ],
    explanation: "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフ    
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "main.html", isCorrect: false },
            { text: "App.js", isCorrect: false },
            { text: "server.js", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "stateを使う", isCorrect: false },
            { text: "emitを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "スタイルを適用するため", isCorrect: false },
            { text: "ファイルを読み込むため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useState", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useLayout", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "server.js", isCorrect: false },
            { text: "App.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
            { text: "Pythonライブラリ", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "アンマウント時だけ実行される", isCorrect: false },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "データベース言語", isCorrect: false },
            { text: "ReactのAPI", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "関数の配列", isCorrect: false },
            { text: "HTMLファイル", isCorrect: false },
            { text: "複数の値", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useVar", isCorrect: false },
            { text: "useEffect", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "new State(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
            { text: "state.init(初期値)", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "HTMLファイル", isCorrect: false },
            { text: "複数の値", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "スタイルを適用するため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "ファイルを読み込むため", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "データベース言語", isCorrect: false },
            { text: "ReactのAPI", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "emitを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "server.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
            { text: "App.js", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useLayout", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useState", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useVar", isCorrect: false },
            { text: "useEffect", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "stateを使う", isCorrect: false },
            { text: "emitを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "ファイルを読み込むため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "App.js", isCorrect: false },
            { text: "server.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "アンマウント時だけ実行される", isCorrect: false },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "HTMLファイル", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
            { text: "複数の値", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "ReactのAPI", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useVar", isCorrect: false },
            { text: "useEffect", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "Pythonライブラリ", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useState", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useLayout", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "複数の値", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
            { text: "HTMLファイル", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
            { text: "CSSフレームワーク", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "server.js", isCorrect: false },
            { text: "App.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "useState = 初期値", isCorrect: false },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "stateを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
            { text: "emitを使う", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "ReactのAPI", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "スタイルを適用するため", isCorrect: false },
            { text: "ファイルを読み込むため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useEffect", isCorrect: false },
            { text: "useVar", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useState", isCorrect: false },
            { text: "useLayout", isCorrect: false },
            { text: "useRender", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "ファイルを読み込むため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useState", isCorrect: false },
            { text: "useLayout", isCorrect: false },
            { text: "useRender", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "server.js", isCorrect: false },
            { text: "App.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useEffect", isCorrect: false },
            { text: "useClass", isCorrect: false },
            { text: "useVar", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "ReactのAPI", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "emitを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "複数の値", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
            { text: "HTMLファイル", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "ファイルを読み込むため", isCorrect: false },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "一度も実行されない", isCorrect: false },
            { text: "毎回実行される", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useClass", isCorrect: false },
            { text: "useVar", isCorrect: false },
            { text: "useEffect", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "HTMLファイル", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
            { text: "複数の値", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "Pythonライブラリ", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "CSS記法", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
            { text: "ReactのAPI", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "new State(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
            { text: "state.init(初期値)", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useState", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useLayout", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "emitを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "App.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
            { text: "server.js", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "emitを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
            { text: "contextを使う", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "ReactのAPI", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
            { text: "アンマウント時だけ実行される", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false },
            { text: "ファイルを読み込むため", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useVar", isCorrect: false },
            { text: "useClass", isCorrect: false },
            { text: "useEffect", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "main.html", isCorrect: false },
            { text: "server.js", isCorrect: false },
            { text: "App.js", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useLayout", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useState", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "useState = 初期値", isCorrect: false },
            { text: "new State(初期値)", isCorrect: false },
            { text: "state.init(初期値)", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "複数の値", isCorrect: false },
            { text: "HTMLファイル", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
            { text: "CSSフレームワーク", isCorrect: false },
        ]
    },
    {
        text: "JSXとは何ですか？",
        answer: [
            { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
            { text: "ReactのAPI", isCorrect: false },
            { text: "データベース言語", isCorrect: false },
            { text: "CSS記法", isCorrect: false },
        ]
    },
    {
        text: "Reactで状態管理に使うフックは？",
        answer: [
            { text: "useState", isCorrect: true },
            { text: "useEffect", isCorrect: false },
            { text: "useVar", isCorrect: false },
            { text: "useClass", isCorrect: false },
        ]
    },
    {
        text: "useStateの初期値はどうやって設定する？",
        answer: [
            { text: "useState(初期値)", isCorrect: true },
            { text: "new State(初期値)", isCorrect: false },
            { text: "state.init(初期値)", isCorrect: false },
            { text: "useState = 初期値", isCorrect: false },
        ]
    },
    {
        text: "コンポーネントは何のために使う？",
        answer: [
            { text: "UIを部品化して再利用可能にするため", isCorrect: true },
            { text: "APIを呼ぶため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false },
            { text: "ファイルを読み込むため", isCorrect: false },
        ]
    },
    {
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useLayout", isCorrect: false },
            { text: "useRender", isCorrect: false },
            { text: "useState", isCorrect: false },
        ]
    },
    {
        text: "Reactで親から子へデータを渡す方法は？",
        answer: [
            { text: "propsを使う", isCorrect: true },
            { text: "contextを使う", isCorrect: false },
            { text: "emitを使う", isCorrect: false },
            { text: "stateを使う", isCorrect: false },
        ]
    },
    {
        text: "useEffectの第二引数に空配列を渡すと？",
        answer: [
            { text: "マウント時に一度だけ実行される", isCorrect: true },
            { text: "アンマウント時だけ実行される", isCorrect: false },
            { text: "毎回実行される", isCorrect: false },
            { text: "一度も実行されない", isCorrect: false },
        ]
    },
    {
        text: "Reactとは何ですか？",
        answer: [
            { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
            { text: "CSSフレームワーク", isCorrect: false },
            { text: "Pythonライブラリ", isCorrect: false },
            { text: "HTMLテンプレートエンジン", isCorrect: false },
        ]
    },
    {
        text: "Reactで1つのコンポーネントは何を返す？",
        answer: [
            { text: "1つの要素または要素のグループ", isCorrect: true },
            { text: "複数の値", isCorrect: false },
            { text: "関数の配列", isCorrect: false },
            { text: "HTMLファイル", isCorrect: false },
        ]
    },
    {
        text: "Reactアプリのエントリーポイントは？",
        answer: [
            { text: "index.js", isCorrect: true },
            { text: "server.js", isCorrect: false },
            { text: "App.js", isCorrect: false },
            { text: "main.html", isCorrect: false },
        ]
    },
];