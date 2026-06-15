// ==================== 状态管理 ====================
let currentPage = 'shengmu';
let currentIndex = 0;
let score = parseInt(localStorage.getItem('pinyin_score') || '0');
let currentTestIndex = 0;

document.getElementById('score').textContent = score;

// ==================== 菜单切换 ====================
// 修改菜单点击，让 renderPage 传递类型
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPage = btn.dataset.page;
        currentIndex = 0;
        renderPage();
    });
});

// ==================== 页面渲染 ====================
function renderPage() {
    const main = document.getElementById('mainContent');
    
    switch(currentPage) {
        case 'shengmu': renderCardGrid(shengmuData, '声母', 'shengmu'); break;
        case 'yunmu': renderCardGrid(yunmuData, '韵母', 'yunmu'); break;
        case 'zhengti': renderCardGrid(zhengtiData, '整体认读音节', 'zhengti'); break;
        case 'shengdiao': renderShengdiao(); break;
        case 'pinpin': renderPinpin(); break;
        case 'hanzi': renderHanzi(); break;
        case 'test': renderTest(); break;
    }
}

// ==================== 卡片网格（声母/韵母/整体认读） ====================
function renderCardGrid(data, title, type = 'shengmu') {
    const main = document.getElementById('mainContent');
    main.innerHTML = `
        <h2 style="text-align:center; color:white; font-size:32px; margin-bottom:20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            ${title} - 点击卡片听发音 🎵
        </h2>
        <div class="card-grid">
            ${data.map((item, i) => `
                <div class="card" onclick="playCard('${item.pinyin}', '${item.word}', '${type}')">
                    <button class="sound-btn" onclick="event.stopPropagation(); playCard('${item.pinyin}', '${item.word}', '${type}')">🔊</button>
                    <div class="pinyin">${item.pinyin}</div>
                    <span class="emoji">${item.emoji}</span>
                    <div class="word">${item.word}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// 智能播放：声母韵母用中文读法，词语正常读
function playCard(pinyin, word, type) {
    if (type === 'shengmu' || type === 'yunmu' || type === 'zhengti') {
        // 先读拼音（用中文汉字"逼"出读音）
        speech.speakInitial(pinyin);
        // 停顿一下再读词语
        setTimeout(() => speech.speakWord(word), 900);
    } else {
        speech.speakWord(word);
    }
    addScore(1);
}

function playItem(pinyin, word) {
    speech.speakPinyin(pinyin);
    setTimeout(() => speech.speakWord(word), 800);
    addScore(1);
}

// ==================== 声调学习 ====================
function renderShengdiao() {
    const tones = [
        { symbol: 'ā', name: '第一声', desc: '高高平又平', color: '#ff6b6b' },
        { symbol: 'á', name: '第二声', desc: '从低往上升', color: '#feca57' },
        { symbol: 'ǎ', name: '第三声', desc: '先降再扬起', color: '#48dbfb' },
        { symbol: 'à', name: '第四声', desc: '高处降到低', color: '#a29bfe' }
    ];
    
    const main = document.getElementById('mainContent');
    main.innerHTML = `
        <h2 style="text-align:center; color:white; font-size:32px; margin-bottom:20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            声调 - 拼音的音调 🎵
        </h2>
        <div class="study-area">
            <div class="big-character" id="toneChar">ā</div>
            <div id="toneName" style="font-size:28px; color:#6c5ce7; font-weight:bold;">第一声</div>
            <div id="toneDesc" style="font-size:20px; color:#636e72; margin:10px 0;">高高平又平</div>
            <button class="action-btn sound" onclick="playCurrentTone()">🔊</button>
            <div class="nav-btns">
                <button class="action-btn" onclick="changeTone(-1)">⬅️ 上一声</button>
                <button class="action-btn" onclick="changeTone(1)">下一声 ➡️</button>
            </div>
        </div>
        <div class="card-grid" style="margin-top:30px;">
            ${tones.map(t => `
                <div class="card" onclick="jumpToTone(${tones.indexOf(t)})" style="border: 4px solid ${t.color};">
                    <div class="pinyin" style="color:${t.color};">${t.symbol}</div>
                    <div class="word">${t.name}</div>
                </div>
            `).join('')}
        </div>
    `;
}

let currentTone = 0;
const tonesList = [
    { symbol: 'ā', name: '第一声', desc: '高高平又平', base: 'a' },
    { symbol: 'á', name: '第二声', desc: '从低往上升', base: 'a' },
    { symbol: 'ǎ', name: '第三声', desc: '先降再扬起', base: 'a' },
    { symbol: 'à', name: '第四声', desc: '高处降到低', base: 'a' }
];

function changeTone(dir) {
    currentTone = (currentTone + dir + 4) % 4;
    updateToneDisplay();
}

function jumpToTone(idx) {
    currentTone = idx;
    updateToneDisplay();
}

function updateToneDisplay() {
    const t = tonesList[currentTone];
    document.getElementById('toneChar').textContent = t.symbol;
    document.getElementById('toneName').textContent = t.name;
    document.getElementById('toneDesc').textContent = t.desc;
    playCurrentTone();
}

// 🎵 修复后的声调函数
function playCurrentTone() {
    const t = tonesList[currentTone];
    // 用"啊"加上当前声调对应的汉字来读
    const toneWords = {
        0: '啊',  // 第一声
        1: '啊',  // 占位
        2: '啊',  // 占位
        3: '啊'   // 占位
    };
    // 实际：用对应声调的"阿"字
    const examples = {
        0: '阿',  // ā
        1: '啊',  // á  
        2: '啊',  // ǎ
        3: '啊'   // à
    };
    
    // 简化处理：直接播放一个带声调的汉字
    const toneChars = ['阿(第一声)', '啊(第二声)', '啊(第三声)', '啊(第四声)'];
    // 用对应的实际汉字发音
    const realChars = {
        0: '腌',  // yān 第一声
        1: '牙',  // yá 第二声
        2: '雅',  // yǎ 第三声
        3: '亚'   // yà 第四声
    };
    
    speech.speak(realChars[currentTone], 0.8, 1.0);
    addScore(1);
}


// ==================== 拼一拼 ====================
function renderPinpin() {
    if (currentIndex >= pinpinData.length) {
        currentIndex = 0;
        showReward('🎉 全部完成！真厉害！');
    }
    
    const item = pinpinData[currentIndex];
    const main = document.getElementById('mainContent');
    
    // 生成4个选项
    const allResults = pinpinData.map(p => p.result);
    const options = [item.result];
    while (options.length < 4) {
        const random = allResults[Math.floor(Math.random() * allResults.length)];
        if (!options.includes(random)) options.push(random);
    }
    options.sort(() => Math.random() - 0.5);
    
    main.innerHTML = `
        <h2 style="text-align:center; color:white; font-size:32px; margin-bottom:20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            拼一拼 (${currentIndex + 1}/${pinpinData.length})
        </h2>
        <div class="pinyin-board">
            <div style="font-size:24px; color:#636e72;">请把声母和韵母拼起来：</div>
            <div class="syllable-display">
                <span style="color:#ff6b6b;">${item.sm}</span>
                <span>+</span>
                <span style="color:#48dbfb;">${item.ym}</span>
                <span>=</span>
                <span class="blank">?</span>
            </div>
            <button class="action-btn sound" onclick="playPinYin()">🔊</button>
            <div class="options" id="optionsContainer">
                ${options.map((opt, i) => `
                    <button class="option-btn" onclick="checkAnswer('${opt}', '${item.result}', this)">${opt}</button>
                `).join('')}
            </div>
            <div class="nav-btns">
                <button class="action-btn" onclick="prevPinpin()">⬅️ 上一题</button>
                <button class="action-btn" onclick="nextPinpin()">下一题 ➡️</button>
            </div>
        </div>
    `;
    
    // 自动播放
    setTimeout(() => playPinYin(), 500);
}

function playPinYin() {
    const item = pinpinData[currentIndex];
    // 1. 读声母
    speech.speakInitial(item.sm);
    // 2. 停顿读韵母
    setTimeout(() => speech.speakInitial(item.ym), 800);
    // 3. 拼读出结果（用汉字读法）
    setTimeout(() => speech.speakPinyin(item.result), 1700);
    // 4. 读汉字
    setTimeout(() => speech.speakWord(item.word), 2400);
}


function checkAnswer(selected, correct, btn) {
    if (selected === correct) {
        btn.classList.add('correct');
        speech.speakWord('太棒了');
        addScore(10);
        showReward('✅ 正确！');
        setTimeout(() => nextPinpin(), 1500);
    } else {
        btn.classList.add('wrong');
        speech.speakWord('再试试');
        setTimeout(() => btn.classList.remove('wrong'), 800);
    }
}

function nextPinpin() {
    currentIndex = (currentIndex + 1) % pinpinData.length;
    renderPinpin();
}

function prevPinpin() {
    currentIndex = (currentIndex - 1 + pinpinData.length) % pinpinData.length;
    renderPinpin();
}

// ==================== 汉字学习 ====================
function renderHanzi() {
    if (currentIndex >= hanziData.length) currentIndex = 0;
    const item = hanziData[currentIndex];
    const main = document.getElementById('mainContent');
    
    main.innerHTML = `
        <h2 style="text-align:center; color:white; font-size:32px; margin-bottom:20px; text-shadow: 2px 2px 4px rgba(0,0,0,0);">
            汉字学习 (${currentIndex + 1}/${hanziData.length})
        </h2>
        <div class="hanzi-card">
            <div class="hanzi-display">${item.char}</div>
            <div class="hanzi-pinyin">${item.pinyin}</div>
            <button class="action-btn sound" onclick="playHanzi()">🔊</button>
            <div class="hanzi-info">
                <div>📖 意思：${item.meaning}</div>
            </div>
            <div class="hanzi-info" style="background:#a29bfe; color:white;">
                <div>💬 例句：${item.example}</div>
            </div>
            <div style="font-size:80px; margin:20px 0;">${item.emoji}</div>
            <div class="nav-btns">
                <button class="action-btn" onclick="prevHanzi()">⬅️ 上一字</button>
                <button class="action-btn" onclick="nextHanzi()">下一字 ➡️</button>
            </div>
        </div>
    `;
    
    setTimeout(() => playHanzi(), 500);
}

function playHanzi() {
    const item = hanziData[currentIndex];
    speech.speakPinyin(item.pinyin);
    setTimeout(() => speech.speakWord(item.char), 800);
    setTimeout(() => speech.speakSentence(item.example), 1800);
}

function nextHanzi() {
    currentIndex = (currentIndex + 1) % hanziData.length;
    renderHanzi();
}

function prevHanzi() {
    currentIndex = (currentIndex - 1 + hanziData.length) % hanziData.length;
    renderHanzi();
}

// ==================== 小测验 ====================
function renderTest() {
    if (currentTestIndex >= testData.length) {
        showReward('🏆 测验完成！得分：' + score);
        currentTestIndex = 0;
        return;
    }
    
    const item = testData[currentTestIndex];
    const main = document.getElementById('mainContent');
    
    main.innerHTML = `
        <h2 style="text-align:center; color:white; font-size:32px; margin-bottom:20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            小测验 (${currentTestIndex + 1}/${testData.length})
        </h2>
        <div class="test-area">
            <div class="test-question">${item.question}</div>
            <div class="options">
                ${item.options.map((opt, i) => `
                    <button class="option-btn" onclick="checkTestAnswer(${i}, ${item.answer}, this)">${opt}</button>
                `).join('')}
            </div>
            <button class="action-btn" onclick="skipTest()" style="margin-top:20px;">跳过 ⏭️</button>
        </div>
    `;
}

function checkTestAnswer(selected, correct, btn) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((b, i) => {
        b.style.pointerEvents = 'none';
        if (i === correct) b.classList.add('correct');
        if (i === selected && i !== correct) b.classList.add('wrong');
    });
    
    if (selected === correct) {
        speech.speakWord('真聪明');
        addScore(20);
        showReward('🎉 答对啦！');
    } else {
        speech.speakWord('没关系');
    }
    
    setTimeout(() => {
        currentTestIndex++;
        renderTest();
    }, 2000);
}

function skipTest() {
    currentTestIndex++;
    renderTest();
}

// ==================== 工具函数 ====================
function addScore(n) {
    score += n;
    document.getElementById('score').textContent = score;
    localStorage.setItem('pinyin_score', score.toString());
}

function showReward(text) {
    const reward = document.getElementById('reward');
    reward.textContent = text;
    reward.classList.remove('hidden');
    setTimeout(() => reward.classList.add('hidden'), 1500);
}

// ==================== 初始化 ====================
renderPage();

// 首次访问提示
setTimeout(() => {
    if (score === 0) {
        speech.speakWord('欢迎来到快乐语文');
    }
}, 500);
