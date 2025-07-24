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
        text: "Reactで副作用の処理に使うフックは？",
        answer: [
            { text: "useEffect", isCorrect: true },
            { text: "useLayout", isCorrect: false },
            { text: "useState", isCorrect: false },
            { text: "useRender", isCorrect: false },
        ],
        explanation: "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        text: "Reactでイベントハンドラに使う属性名は？",
        answer: [
            { text: "onClick", isCorrect: true },
            { text: "onclick", isCorrect: false },
            { text: "click", isCorrect: false },
            { text: "handleClick", isCorrect: false }
        ],
        explanation: "ReactではキャメルケースのonClick属性を使ってイベントを設定します。通常のHTMLのonclickとは異なります。"
    },
    {
        text: "Reactでフォームの入力値を状態に保存する方法は？",
        answer: [
            { text: "useStateで状態を管理し、onChangeで更新する", isCorrect: true },
            { text: "inputタグにvalueだけ指定する", isCorrect: false },
            { text: "document.getElementByIdを使う", isCorrect: false },
            { text: "window.inputValueで取得する", isCorrect: false }
        ],
        explanation: "ReactではuseStateフックで状態を定義し、onChangeイベントで値を更新します。"
    },
    {
        text: "Reactでコンポーネントを作成する正しい関数の定義方法は？",
        answer: [
            { text: "function コンポーネント名() { return (...) }", isCorrect: true },
            { text: "const コンポーネント名 = <>...</>", isCorrect: false },
            { text: "React.createElement('div')", isCorrect: false },
            { text: "function() => { return div }", isCorrect: false }
        ],
        explanation: "Reactでは関数コンポーネントとしてfunctionまたはアロー関数で定義するのが基本です。"
    },
    {
        text: "propsはどのように使われる？",
        answer: [
            { text: "親コンポーネントから子コンポーネントに値を渡すため", isCorrect: true },
            { text: "コンポーネント間で状態を共有するため", isCorrect: false },
            { text: "APIを呼び出すため", isCorrect: false },
            { text: "スタイルを適用するため", isCorrect: false }
        ],
        explanation: "propsは親から子にデータを渡す手段で、再利用性の高いコンポーネントを作る鍵となります。"
    },
    {
        text: "Reactでフォーム送信時のデフォルト動作を防ぐには？",
        answer: [
            { text: "event.preventDefault()を使う", isCorrect: true },
            { text: "formタグにstop属性をつける", isCorrect: false },
            { text: "return falseを返す", isCorrect: false },
            { text: "useStopDefault()を使う", isCorrect: false }
        ],
        explanation: "Reactではフォーム送信時のページリロードを防ぐため、event.preventDefault()を使用します。"
    },
    {
        text: "Reactでコンポーネントの名前はどのように書くべき？",
        answer: [
            { text: "大文字で始める", isCorrect: true },
            { text: "小文字で始める", isCorrect: false },
            { text: "アンダースコアで始める", isCorrect: false },
            { text: "数字で始める", isCorrect: false },
        ],
        explanation: "Reactのコンポーネントは大文字で始める必要があります。小文字で始めると通常のHTMLタグとして解釈されてしまいます。"
    },
    {
        text: "Reactでのイベントハンドラの書き方は？",
        answer: [
            { text: "onClick={handleClick}", isCorrect: true },
            { text: "onclick=\"handleClick()\"", isCorrect: false },
            { text: "onClick=\"handleClick()\"", isCorrect: false },
            { text: "click=handleClick", isCorrect: false },
        ],
        explanation: "Reactではキャメルケース（onClick）を使い、値には関数を渡します。HTMLのような文字列は使いません。"
    },
    {
        text: "stateを更新する正しい方法は？",
        answer: [
            { text: "setState関数を使う", isCorrect: true },
            { text: "stateを直接変更する", isCorrect: false },
            { text: "state.push()で追加する", isCorrect: false },
            { text: "state = 新しい値", isCorrect: false },
        ],
        explanation: "Reactではstateを直接変更せず、必ずuseStateから得たset関数を使って更新します。"
    },
    {
        text: "propsの特徴として正しいのはどれ？",
        answer: [
            { text: "親から子にデータを渡すための仕組み", isCorrect: true },
            { text: "コンポーネント内で更新可能", isCorrect: false },
            { text: "ローカルな状態管理に使う", isCorrect: false },
            { text: "Reduxで使う", isCorrect: false },
        ],
        explanation: "propsは親コンポーネントから子コンポーネントへ情報を渡すために使います。基本的に読み取り専用です。"
    },
    {
        text: "フラグメント（<></>）を使う理由は？",
        answer: [
            { text: "余計なDOMノードを追加しないため", isCorrect: true },
            { text: "CSSを当てるため", isCorrect: false },
            { text: "ループ処理をするため", isCorrect: false },
            { text: "イベントを処理するため", isCorrect: false },
        ],
        explanation: "フラグメントは複数の要素を1つのコンポーネント内で返すために使い、余分なdivなどを作らずに済みます。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (6)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (7)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (8)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (9)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (10)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (11)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (12)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (13)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (14)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (15)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (16)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (17)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (18)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (19)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (20)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (21)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (22)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (23)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (24)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (25)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (26)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (27)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (28)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (29)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (30)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (31)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (32)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (33)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (34)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (35)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (36)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (37)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (38)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (39)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (40)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (41)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (42)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (43)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (44)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (45)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (46)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (47)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (48)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (49)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (50)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (51)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (52)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (53)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (54)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (55)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (56)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (57)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (58)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (59)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (60)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (61)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (62)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (63)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (64)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (65)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (66)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (67)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (68)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (69)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (70)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (71)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (72)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (73)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (74)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (75)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (76)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (77)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (78)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (79)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (80)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (81)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (82)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (83)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    },
    {
        "text": "useStateの戻り値は？ (84)",
        "answer": [
            { "text": "配列", "isCorrect": true },
            { "text": "オブジェクト", "isCorrect": false },
            { "text": "数値", "isCorrect": false },
            { "text": "文字列", "isCorrect": false }
        ],
        "explanation": "useStateは、状態の値とその更新関数を含む配列を返します。"
    },
    {
        "text": "Reactでイベントを扱う方法は？ (85)",
        "answer": [
            { "text": "JSXでイベントハンドラを指定する", "isCorrect": true },
            { "text": "HTML属性を使う", "isCorrect": false },
            { "text": "CSSで定義する", "isCorrect": false },
            { "text": "サーバーで処理する", "isCorrect": false }
        ],
        "explanation": "Reactでは、JSXの中でonClickなどのイベントハンドラを定義してイベントを処理します。"
    },
    {
        "text": "Reactで副作用の処理に使うフックは？ (86)",
        "answer": [
            { "text": "useEffect", "isCorrect": true },
            { "text": "useLayout", "isCorrect": false },
            { "text": "useState", "isCorrect": false },
            { "text": "useRender", "isCorrect": false }
        ],
        "explanation": "useEffectは、Reactコンポーネントで副作用（データの取得、DOMの操作、タイマー設定など）を処理するためのフックです。コンポーネントのライフサイクルに合わせて動作します。"
    },
    {
        "text": "Reactの仮想DOMの利点は？ (87)",
        "answer": [
            { "text": "パフォーマンスの向上", "isCorrect": true },
            { "text": "HTML生成の簡略化", "isCorrect": false },
            { "text": "API呼び出し", "isCorrect": false },
            { "text": "CSSの管理", "isCorrect": false }
        ],
        "explanation": "仮想DOMは、差分だけを実DOMに反映することで描画の効率を高め、パフォーマンスを向上させます。"
    },
    {
        "text": "propsとは何ですか？ (88)",
        "answer": [
            { "text": "親コンポーネントから子へ渡すデータ", "isCorrect": true },
            { "text": "内部状態", "isCorrect": false },
            { "text": "CSSのプロパティ", "isCorrect": false },
            { "text": "関数の戻り値", "isCorrect": false }
        ],
        "explanation": "propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。読み取り専用です。"
    }
];