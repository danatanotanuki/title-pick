// --- 1. データの準備 ---
// まずはここに直接データを書きます。これが簡易的なデータベースです。
// 必要に応じてこの配列にオブジェクトを追加・編集してください。
const dataStore = [
    
    {
        id: 4,
        title: "はかる",
        description: "", // ←後からキーワードを追加できます
        text: "### 🔻はかる｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n88f55962e858"
    },
    {
        id: 5,
        title: "舞う君へ",
        description: "",
        text: "### 🔻舞う君へ｜【狸のジャ・ジャーマニー】",
        url: "https://note.com/danatanotanuki/n/n115340dbedb6"
    },
    {
        id: 6,
        title: "求めるもの",
        description: "",
        text: "### 🔻求めるもの｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nfbe4e6789527"
    },
    {
        id: 7,
        title: "盲目の善意",
        description: "",
        text: "### 🔻盲目の善意｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n4ad1587d5101"
    },
    {
        id: 8,
        title: "剥がれ落ちた泥",
        description: "",
        text: "### 🔻剥がれ落ちた泥｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nee25f63d9683"
    },
    {
        id: 9,
        title: "空き地からの眺め",
        description: "",
        text: "### 🔻空き地からの眺め｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n56662c0ed149"
    },
    {
        id: 10,
        title: "希望の猛毒",
        description: "",
        text: "### 🔻希望の猛毒｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n144ba1d2f970"
    },
    {
        id: 11,
        title: "空白の盗難",
        description: "",
        text: "### 🔻空白の盗難｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n69f2b17d1724"
    },
    {
        id: 12,
        title: "終焉庭園の螺旋",
        description: "",
        text: "### 🔻終焉庭園の螺旋｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n555082dc31e8"
    },
    {
        id: 13,
        title: "泡沫の輪郭線",
        description: "",
        text: "### 🔻泡沫の輪郭線｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n641a608e5697"
    },
    {
        id: 14,
        title: "赦しは無音の中に",
        description: "",
        text: "### 🔻赦しは無音の中に｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0080ddcdf7eb"
    },
    {
        id: 15,
        title: "偶像人形は空転する",
        description: "",
        text: "### 🔻偶像人形は空転する｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n30aa20568156"
    },
    {
        id: 16,
        title: "静寂のオーバードーズ",
        description: "",
        text: "### 🔻静寂のオーバードーズ｜【狸の掌編】",
        url: "https://note.com/danatanotanuki/n/nd4a0ee267c37"
    },
    {
        id: 17,
        title: "星は脇の下で輝く",
        description: "",
        text: "### 🔻星は脇の下で輝く｜【狸の掌編】",
        url: "https://note.com/danatanotanuki/n/n98e76d8a21d7"
    },
    {
        id: 18,
        title: "夏の・夏の大三角",
        description: "",
        text: "### 🔻夏の・夏の大三角｜【狸の掌編】",
        url: "https://note.com/danatanotanuki/n/n68cdd9b9621d"
    }
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
