// --- 1. データの準備 ---
// まずはここに直接データを書きます。これが簡易的なデータベースです。
// 必要に応じてこの配列にオブジェクトを追加・編集してください。
const dataStore = [
    {
        id: 1,
        title: "Google検索",
        description: "汎用検索エンジン",
        text: "調べたいこと",
        url: "https://www.google.com/"
    },
    {
        id: 2,
        title: "GitHubリポジトリ",
        description: "文字数カウンターのコード",
        text: "文字数カウンター",
        url: "https://github.com/danatanotanuki/Danata" // あなたのリポジトリURLなど
    },
    {
        id: 3,
        title: "DeepL翻訳",
        description: "高精度な翻訳サイト",
        text: "翻訳したい文章",
        url: "https://www.deepl.com/translator"
    }
    // { ... }, { ... } のように、必要なだけデータを追加できます。
];

// --- 2. HTML要素の取得 ---
const searchBox = document.getElementById('search-box');
const resultsList = document.getElementById('results-list');
const feedback = document.getElementById('feedback');

// --- 3. クリップボードにコピーする関数 ---
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        
        // フィードバックを表示
        feedback.classList.remove('feedback-hidden');
        
        // 1.5秒後にフィードバックを非表示にする
        setTimeout(() => {
            feedback.classList.add('feedback-hidden');
        }, 1500);

    } catch (err) {
        console.error('クリップボードへのコピーに失敗しました', err);
        alert('コピーに失敗しました。');
    }
}


// --- 4. 検索結果を描画（表示）する関数 ---
function renderResults(results) {
    // まずリストを空にする
    resultsList.innerHTML = '';

    if (results.length === 0) {
        resultsList.innerHTML = '<p>該当する項目がありません。</p>';
        return;
    }

    results.forEach(item => {
        // 各アイテムのHTML要素を作成
        const li = document.createElement('li');
        li.className = 'result-item';

        li.innerHTML = `
            <div class="item-content">
                <p><strong>${item.title}</strong></p>
                <p><span class="label">文字列:</span> ${item.text}</p>
                <p><span class="label">URL:</span> ${item.url}</p>
            </div>
            <div class="item-buttons">
                <button class="copy-button" data-type="text">文字列をコピー</button>
                <button class="copy-button" data-type="url">URLをコピー</button>
            </div>
        `;
        
        // 作成した要素をリストに追加
        resultsList.appendChild(li);

        // 各ボタンにイベントリスナーを設定
        const buttons = li.querySelectorAll('.copy-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const type = button.getAttribute('data-type');
                if (type === 'text') {
                    copyToClipboard(item.text, button);
                } else if (type === 'url') {
                    copyToClipboard(item.url, button);
                }
            });
        });
    });
}

// --- 5. 検索を実行する関数 ---
function performSearch() {
    const query = searchBox.value.toLowerCase(); // 検索語を小文字に統一

    // 検索語が空なら全件表示
    if (!query) {
        renderResults(dataStore);
        return;
    }

    // フィルタリング
    const filteredResults = dataStore.filter(item => {
        // title, description, text, url のいずれかにキーワードが含まれていればOK
        return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.text.toLowerCase().includes(query) ||
            item.url.toLowerCase().includes(query)
        );
    });

    renderResults(filteredResults);
}

// --- 6. イベントリスナーの設定 ---
// 検索ボックスに入力があるたびに検索を実行
searchBox.addEventListener('input', performSearch);

// 最初にページが読み込まれたときに全データを表示
document.addEventListener('DOMContentLoaded', () => {
    performSearch();
});
