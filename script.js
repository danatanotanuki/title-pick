// --- 1. データの準備 ---
// まずはここに直接データを書きます。これが簡易的なデータベースです。
// 必要に応じてこの配列にオブジェクトを追加・編集してください。
const dataStore = [
    
    {
        id: 4,
        title: "触れて、消えて",
        description: "",
        text: "### 🔻触れて、消えて｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ncfc6663dfe44"
    },
    {
        id: 5,
        title: "可能性は無限大！AIアートの幅を広げるアートスタイルについて",
        description: "",
        text: "### 🔻可能性は無限大！AIアートの幅を広げるアートスタイルについて｜【狸の挑戦】",
        url: "https://note.com/danatanotanuki/n/naa6cf71a617d"
    },
    {
        id: 6,
        title: "胃袋のブラック企業",
        description: "",
        text: "### 🔻胃袋のブラック企業｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n78403f7b2adf"
    },
    {
        id: 7,
        title: "僕痛む、故に僕あり",
        description: "",
        text: "### 🔻僕痛む、故に僕あり｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n9d3084c257a1"
    },
    {
        id: 8,
        title: "熱のせい",
        description: "",
        text: "### 🔻熱のせい｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n73d645c1588c"
    },
    {
        id: 9,
        title: "【祝100本！】note投稿と共同運営マガジンが100本になりました！感謝を込めてメンバーさん記事をご紹介",
        description: "",
        text: "### 🔻【祝100本！】note投稿と共同運営マガジンが100本になりました！感謝を込めてメンバーさん記事をご紹介｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n73c4415d3a71"
    },
    {
        id: 10,
        title: "損切りできない回転寿司",
        description: "",
        text: "### 🔻損切りできない回転寿司｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ne2148b4342b5"
    },
    {
        id: 11,
        title: "ジ・ガ",
        description: "",
        text: "### 🔻ジ・ガ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n6b8eedb78cd9"
    },
    {
        id: 12,
        title: "顔面取引市場",
        description: "",
        text: "### 🔻顔面取引市場｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nec85605fed5d"
    },
    {
        id: 13,
        title: "製造番号2587",
        description: "",
        text: "### 🔻製造番号2587｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n65f9deb582db"
    },
    {
        id: 14,
        title: "いやになる、あいうえお",
        description: "",
        text: "### 🔻いやになる、あいうえお｜【狸の話】",
        url: "https://note.com/danatanotanuki/n/n6f16284a3cbc"
    },
    {
        id: 15,
        title: "理由のない気持ち",
        description: "",
        text: "### 🔻理由のない気持ち｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n0c2f4127feb4"
    },
    {
        id: 16,
        title: "(770 + 1) ÷ 2",
        description: "",
        text: "### 🔻(770 + 1) ÷ 2 ｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/ncd5bdfe824a4"
    },
    {
        id: 17,
        title: "UN-lockers",
        description: "",
        text: "### 🔻UN-lockers｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n4adb680bcbff"
    },
    {
        id: 18,
        title: "片道きっぷのユニコーン",
        description: "",
        text: "### 🔻片道きっぷのユニコーン｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n09f26228398e"
    },
    {
        id: 19,
        title: "腹減った",
        description: "",
        text: "### 🔻腹減った｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n2fe2a9c5d24d"
    },
    {
        id: 20,
        title: "賢者の時間",
        description: "",
        text: "### 🔻賢者の時間｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb5dacf03b3d5"
    },
    {
        id: 21,
        title: "銀色のエクスタシー",
        description: "",
        text: "### 🔻銀色のエクスタシー｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/nb7c8f0af87c2"
    },
    {
        id: 22,
        title: "全員不幸になればいい",
        description: "",
        text: "### 🔻全員不幸になればいい｜【狸の短編小説】",
        url: "https://note.com/danatanotanuki/n/n395535869c4f"
    },
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
