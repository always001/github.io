/* ============================================
   📚 kb.js - 数学知识库系统（完整版）
   功能：50+ 知识 · 关键词高亮 · 点击重问 · 趋势统计
   ============================================ */

// =============== 默认知识库（50+ 条）===============
const DEFAULT_KB = [
  // 一、基础概念
  "凑十法是把一个数拆开，让另一个数先凑成 10，再加剩下的部分。",
  "破十法是个位不够减时，从十位借 1 当 10 来用。",
  "相邻数是指前后差 1 的连续整数，比如 5、6、7。",
  "相邻两个数的差是 1，相邻三个数的和是中间数乘以 3。",
  "进位是个位满 10 向十位加 1。",
  "借位是个位不够减时从十位借 1 变 10 再减。",
  "找规律填数要看相邻两个数的差或比值。",
  "比大小用大于号小于号，开口对大数尖头对小数。",
  "0 表示一个也没有，0 加任何数还得原数。",
  "10 以内的加减法是基础，要熟练掌握。",
  
  // 二、加减法
  "加法是把两个或多个数合并成一个数的运算。",
  "减法是已知两个加数的和与其中一个加数，求另一个加数的运算。",
  "加法交换律：两个数相加，交换位置和不变，如 3+5=5+3。",
  "加法结合律：三个数相加，先算前两个或后两个和不变。",
  "减法的性质：a-b-c 等于 a-(b+c)，比如 10-3-2=10-5=5。",
  "求总数用加法：原有加又有等于总数。",
  "求剩余用减法：总数减拿走等于剩余。",
  "求部分用减法：总数减部分等于另一部分。",
  "比多比少：大数减小数等于多的部分。",
  "加减混合运算从左到右依次计算，有括号的先算括号里。",
  
  // 三、凑十破十专项
  "凑十法口诀：一九一九好朋友，二八二八手拉手，三七三七真亲密，四六四六一起走，五五凑成一双手。",
  "凑十法适合 11-18 的进位加法，比如 9+5=9+1+4=10+4=14。",
  "破十法适合 11-18 的退位减法，比如 13-7=10+3-7=3+3=6。",
  "凑十法要把小数拆开，拆出的数和大的数凑成 10。",
  "破十法要把被减数拆成 10 加几，先用 10 减减数再加剩下的。",
  "9 加几用 1 凑十：9 加几等于 10 加几减 1。",
  "8 加几用 2 凑十：8 加几等于 10 加几减 2。",
  "11 减几用 1 借位：11 减几等于 10 加 1 减几。",
  "12 减几用 2 借位：12 减几等于 10 加 2 减几。",
  "凑十法看大数，拆小数；破十法看减数，拆被减数。",
  
  // 四、图形算式
  "图形算式是用图形代替数字，要先找出能确定的数。",
  "图形算式的解法：先找只出现一次的图形，用已知和减去它求其他数。",
  "图形算式中相同的图形代表相同的数。",
  "图形算式要利用加减法的互逆关系来求。",
  "图形算式两边图形相同时可以约掉。",
  "多个图形相加时，先观察哪个图形最特殊。",
  "图形算式答案要代入检验确保正确。",
  "求图形代表的数：先求只有一个的图形，再求其他的。",
  
  // 五、算式树 / 数字分解
  "算式树是把一个数分解成两部分或三部分的图形。",
  "树的顶部是总数，下面是分支的数。",
  "算式树从下往上算：先把下面的数加起来等于上面的数。",
  "数字分解：一个数可以分成两个或多个数，加起来等于原数。",
  "8 可以分成 1 和 7、2 和 6、3 和 5、4 和 4 等。",
  "凑十法用到的就是数字分解思想。",
  
  // 六、竖式计算
  "竖式计算要从个位开始算起。",
  "加减法竖式要把相同数位对齐。",
  "进位要在横线上写小 1 表示进到十位。",
  "借位要在被借位上方点一个小点表示借走。",
  "竖式计算要检查：相同数位是否对齐，进位借位是否正确。",
  "减法竖式被减数位数不够时要补 0。",
  
  // 七、单位
  "1 时等于 60 分，1 分等于 60 秒。",
  "1 米等于 100 厘米，1 厘米等于 10 毫米。",
  "1 元等于 10 角，1 角等于 10 分。",
  "1 千克等于 1000 克，1 吨等于 1000 千克。",
  "钟面上长针是分针短针是时针，时针走一大格是 1 小时。",
  
  // 八、应用题
  "应用题要先读题，找已知条件和问题。",
  "求总数用加法：原有数量加又来数量等于总数。",
  "求剩余用减法：原有数量减拿走数量等于剩余。",
  "比多比少：大数减小数等于多多少或少多少。",
  "应用题最后要写出答：答：xxx。",
  
  // 九、通用百科
  "1 加 1 等于 2。",
  "圆的面积公式是 π 乘以半径的平方。",
  "圆周率约等于 3.1415926。",
  "北京是中国的首都，人口约 2100 万。",
  "Python 是易学的编程语言。"
];

// 关键词（加权用）
const KB_KEYWORDS = [
  "凑十","破十","相邻","进位","借位","找规律","比大小","交换律","结合律",
  "加法","减法","乘法","除法","算式","括号","等式","运算","计算",
  "图形","三角形","圆形","正方","算式树","竖式","数位","对齐",
  "时间","长度","重量","单位","钟面","时针","分针",
  "应用题","读题","条件","问题","答","原有","剩下","比多","比少",
  "深圳","上海","北京","广州","杭州","成都","西安",
  "腾讯","华为","阿里","百度","python","人工智能"
];

// =============== 全局状态 ===============
let KB_DATA = [];
let KB_HITS = 0;
let KB_MISSES = 0;
let KB_LOGS = [];

// =============== 初始化 ===============
function initKB() {
  try {
    const saved = localStorage.getItem('mathPark_kb');
    if (saved) {
      const data = JSON.parse(saved);
      if (Array.isArray(data) && data.length > 0) {
        KB_DATA = data;
        loadKBStats();
        return;
      }
    }
  } catch(e) {}
  KB_DATA = [...DEFAULT_KB];
  loadKBStats();
}

function saveKB() {
  try {
    localStorage.setItem('mathPark_kb', JSON.stringify(KB_DATA));
  } catch(e) {}
}

function loadKBStats() {
  try {
    const saved = localStorage.getItem('mathPark_kb_stats');
    if (saved) {
      const s = JSON.parse(saved);
      KB_HITS = s.hits || 0;
      KB_MISSES = s.misses || 0;
    }
  } catch(e) {}
}

function saveKBStats() {
  try {
    localStorage.setItem('mathPark_kb_stats', JSON.stringify({
      hits: KB_HITS,
      misses: KB_MISSES
    }));
  } catch(e) {}
}

// =============== 分词 ===============
function kbTokenize(text) {
  const clean = text.replace(/[，。！？；:\s\n　,.!?？]/g, '').toLowerCase();
  const tokens = [];
  let i = 0;
  while (i < clean.length) {
    const c = clean[i];
    if (/[0-9+\-*/=().×÷π]/.test(c)) {
      let expr = '';
      while (i < clean.length && /[0-9+\-*/=().×÷π]/.test(clean[i])) {
        expr += clean[i];
        i++;
      }
      if (expr) tokens.push(expr);
      continue;
    }
    if (/[a-z]/.test(c)) {
      let word = '';
      while (i < clean.length && /[a-z0-9]/.test(clean[i])) {
        word += clean[i];
        i++;
      }
      if (word) tokens.push(word);
      continue;
    }
    if (/[\u4e00-\u9fa5]/.test(c)) {
      if (i + 2 <= clean.length) {
        tokens.push(clean.substr(i, 2));
        i += 2;
      } else {
        tokens.push(c);
        i++;
      }
      continue;
    }
    i++;
  }
  return tokens.filter(t => t.length >= 2);
}

// =============== 相似度 ===============
function kbSimilarity(a, b) {
  const ta = kbTokenize(a);
  const tb = kbTokenize(b);
  if (ta.length === 0 || tb.length === 0) return 0;
  
  const sa = {}, sb = {};
  for (const x of ta) sa[x] = (sa[x] || 0) + 1;
  for (const x of tb) sb[x] = (sb[x] || 0) + 1;
  
  let common = 0;
  for (const k in sa) {
    if (sb[k]) {
      common += Math.min(sa[k], sb[k]);
      if (KB_KEYWORDS.includes(k)) common += 3;
    }
  }
  return common / (ta.length + tb.length + 1);
}

// =============== 查知识库 ===============
function searchKB(question) {
  let best = null, bestScore = 0, matchedWords = [];
  
  for (const k of KB_DATA) {
    const s = kbSimilarity(question, k);
    if (s > bestScore) { 
      bestScore = s; 
      best = k; 
      const qTokens = new Set(kbTokenize(question));
      matchedWords = Array.from(qTokens).filter(t => 
        kbTokenize(k).includes(t) && t.length >= 2
      );
    }
  }
  
  const found = bestScore > 0.10;
  if (found) KB_HITS++; else KB_MISSES++;
  
  KB_LOGS.unshift({
    q: question,
    hit: found,
    score: bestScore,
    answer: best ? best.substring(0, 30) : '无',
    matchedWords,
    time: new Date().toLocaleTimeString('zh-CN', {hour12: false}),
    date: new Date().toISOString().slice(0, 10)
  });
  if (KB_LOGS.length > 50) KB_LOGS.pop();
  
  saveKBStats();
  
  return { answer: best, score: bestScore, found, matchedWords };
}

// =============== 关键词高亮 ===============
function highlightMatches(text, matchedWords) {
  if (!matchedWords || matchedWords.length === 0) return text;
  let result = text;
  const sorted = [...matchedWords].sort((a, b) => b.length - a.length);
  for (const word of sorted) {
    if (word.length < 2) continue;
    const re = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(re, `<span style="color:#d63031;font-weight:bold;background:#fff3cd;padding:0 2px;border-radius:3px">${word}</span>`);
  }
  return result;
}

// =============== 趋势图 ===============
function renderKBTrend(days = 7, returnHTML = false) {
  const today = new Date();
  const dateMap = {};
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const label = `${d.getMonth() + 1}/${d.getDate()}`;
    dateMap[key] = { label, hits: 0, total: 0 };
  }
  KB_LOGS.forEach(log => {
    if (dateMap[log.date]) {
      dateMap[log.date].total++;
      if (log.hit) dateMap[log.date].hits++;
    }
  });
  const entries = Object.values(dateMap);
  const maxTotal = Math.max(1, ...entries.map(e => e.total));
  const chartWidth = 320, chartHeight = 120;
  const barWidth = (chartWidth - 20) / entries.length - 4;
  let bars = '';
  entries.forEach((e, i) => {
    const x = 10 + i * ((chartWidth - 20) / entries.length) + 2;
    const totalH = (e.total / maxTotal) * (chartHeight - 30);
    const hitH = e.total > 0 ? (e.hits / e.total) * totalH : 0;
    const totalY = chartHeight - 20 - totalH;
    const hitY = chartHeight - 20 - hitH;
    bars += `<rect x="${x}" y="${totalY}" width="${barWidth}" height="${totalH}" fill="#e5e7eb" rx="3"><title>${e.label}: ${e.hits}/${e.total}</title></rect>`;
    if (e.hits > 0) {
      const color = e.hits / Math.max(1, e.total) >= 0.7 ? '#00b894' 
                  : e.hits / Math.max(1, e.total) >= 0.4 ? '#fdcb6e' 
                  : '#ff7675';
      bars += `<rect x="${x}" y="${hitY}" width="${barWidth}" height="${hitH}" fill="${color}" rx="3"></rect>`;
    }
    if (e.total > 0) {
      bars += `<text x="${x + barWidth/2}" y="${totalY - 2}" text-anchor="middle" font-size="9" fill="#374151" font-weight="bold">${e.total}</text>`;
    }
    bars += `<text x="${x + barWidth/2}" y="${chartHeight - 5}" text-anchor="middle" font-size="8" fill="#6b7280">${e.label}</text>`;
  });
  const totalHits = entries.reduce((s, e) => s + e.hits, 0);
  const totalTotal = entries.reduce((s, e) => s + e.total, 0);
  const periodRate = totalTotal > 0 ? (totalHits / totalTotal * 100).toFixed(0) : 0;
  const html = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div style="font-size:13px">📊 近 ${days} 天: <b style="color:#d63031">${periodRate}%</b> <span style="color:#888">(${totalHits}/${totalTotal})</span></div>
      <div style="font-size:11px;color:#888">
        <span style="display:inline-block;width:8px;height:8px;background:#00b894;border-radius:2px;margin-right:2px"></span>高
        <span style="display:inline-block;width:8px;height:8px;background:#fdcb6e;border-radius:2px;margin:0 2px 0 8px"></span>中
        <span style="display:inline-block;width:8px;height:8px;background:#ff7675;border-radius:2px;margin:0 2px 0 8px"></span>低
      </div>
    </div>
    <svg width="${chartWidth}" height="${chartHeight}" style="background:#fafafa;border-radius:6px;display:block;margin:0 auto">${bars}</svg>
    <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:11px;color:#888">
      <span>总计 ${totalTotal} 次查询</span>
      <span>${totalTotal === 0 ? '暂无数据' : `日均 ${(totalTotal / days).toFixed(1)} 次`}</span>
    </div>`;
  if (returnHTML) return html;
  document.querySelectorAll('.trend-btn').forEach(btn => {
    const d = parseInt(btn.dataset.days);
    if (d === days) {
      btn.style.background = '#4a90e2';
      btn.style.color = '#fff';
    } else {
      btn.style.background = '#e5e7eb';
      btn.style.color = '#374151';
    }
  });
  document.getElementById('kbTrendChart').innerHTML = html;
}

// =============== 日志列表（高亮 + 点击填入）===============
function renderKBLogs() {
  if (KB_LOGS.length === 0) {
    return '<p style="color:#999;text-align:center;padding:20px">还没有查询记录<br>去问问问题试试~</p>';
  }
  return KB_LOGS.map(log => {
    const icon = log.hit ? '✅' : '❌';
    const color = log.hit ? '#00b894' : '#ff7675';
    const bg = log.hit ? '#e8f8f5' : '#fff5f5';
    const answerPreview = log.matchedWords && log.matchedWords.length > 0
      ? highlightMatches(log.answer + '...', log.matchedWords)
      : (log.answer + '...');
    const safeQ = log.q.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return `
      <div onclick="fillQuestion('${safeQ}')" style="
        padding:8px 10px;margin:6px 0;background:${bg};
        border-left:3px solid ${color};border-radius:6px;
        cursor:pointer;transition:transform .15s,box-shadow .15s;
      " onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,.1)'"
         onmouseout="this.style.transform='';this.style.boxShadow=''">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:bold">${icon} ${log.q}<span style="font-size:10px;color:#4a90e2;margin-left:4px">↩️ 点击重问</span></span>
          <span style="color:#888;font-size:10px">${log.time}</span>
        </div>
        <div style="color:#666;font-size:11px;margin-top:4px;line-height:1.5">📊 ${log.score.toFixed(3)} → ${answerPreview}</div>
        ${log.matchedWords && log.matchedWords.length > 0 ? `
          <div style="margin-top:4px">
            ${log.matchedWords.slice(0, 5).map(w => 
              `<span style="display:inline-block;background:#fff3cd;color:#d63031;padding:1px 6px;border-radius:8px;font-size:10px;margin:2px 2px 0 0">${w}</span>`
            ).join('')}
            ${log.matchedWords.length > 5 ? `<span style="font-size:10px;color:#888">+${log.matchedWords.length - 5}</span>` : ''}
          </div>` : ''}
      </div>`;
  }).join('');
}

// =============== 点击日志 → 自动填入 ===============
function fillQuestion(question) {
  const input = document.getElementById('userInput');
  if (!input) {
    alert('❌ 找不到聊天输入框（请先进入 AI 调难度页面）');
    return;
  }
  input.value = question;
  input.focus();
  input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  input.style.transition = 'all .3s';
  input.style.background = '#fff3cd';
  input.style.borderColor = '#d63031';
  setTimeout(() => {
    input.style.background = '';
    input.style.borderColor = '';
  }, 800);
  if (typeof App !== 'undefined' && App.go) App.go('aiDifficulty');
}

// =============== 编辑界面 ===============
function renderKBEditor() {
  let container = document.getElementById('kbEditorContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'kbEditorContainer';
    const aiBody = document.getElementById('aiDifficultyBody');
    if (aiBody) aiBody.appendChild(container);
  }
  const total = KB_HITS + KB_MISSES;
  const hitRate = total > 0 ? (KB_HITS / total * 100).toFixed(0) : 0;
  const avgScore = KB_LOGS.length > 0 
    ? (KB_LOGS.reduce((s, l) => s + l.score, 0) / KB_LOGS.length).toFixed(3)
    : '0.000';
  container.innerHTML = `
    <div class="stat-card" style="background:linear-gradient(135deg,#00b894,#00cec9);color:#fff">
      <h3 style="color:#fff">📚 知识库统计</h3>
      <div style="display:flex;justify-content:space-between;align-items:center;margin:8px 0">
        <div>
          <div style="font-size:32px;font-weight:bold">${hitRate}%</div>
          <div style="font-size:12px;opacity:.9">命中率</div>
        </div>
        <div style="text-align:right;font-size:12px">
          <div>✅ 命中 <b>${KB_HITS}</b> 次</div>
          <div>❌ 未中 <b>${KB_MISSES}</b> 次</div>
          <div>📦 共 <b>${KB_DATA.length}</b> 条知识</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.3);height:8px;border-radius:4px;overflow:hidden;margin-top:6px">
        <div style="background:#fff;height:100%;width:${hitRate}%;transition:width .5s"></div>
      </div>
      <div style="font-size:11px;margin-top:4px;opacity:.9">平均相似度: <b>${avgScore}</b> · 阈值: 0.10</div>
    </div>
    <div class="stat-card">
      <h3>📈 命中率趋势</h3>
      <div style="display:flex;gap:6px;margin-bottom:10px">
        <button class="trend-btn active" data-days="7" onclick="renderKBTrend(7)" style="flex:1;padding:8px;background:#4a90e2;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px">📅 近 7 天</button>
        <button class="trend-btn" data-days="30" onclick="renderKBTrend(30)" style="flex:1;padding:8px;background:#e5e7eb;color:#374151;border:none;border-radius:8px;cursor:pointer;font-size:13px">📅 近 30 天</button>
      </div>
      <div id="kbTrendChart">${renderKBTrend(7, true)}</div>
    </div>
    <div class="stat-card">
      <h3>✏️ 编辑知识库</h3>
      <p style="font-size:12px;color:#888">每行一条知识，共 <b id="kbLineCount">${KB_DATA.length}</b> 条</p>
      <textarea id="kbEditor" style="width:100%;height:180px;padding:8px;border:1px solid #d1d5db;border-radius:8px;font-family:monospace;font-size:13px;margin-top:8px;resize:vertical">${KB_DATA.join('\n')}</textarea>
      <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
        <button class="difficulty-badge" style="background:#00b894" onclick="saveKBEditor()">💾 保存</button>
        <button class="difficulty-badge" style="background:#4a90e2" onclick="addKBLines()">➕ 加 5 行</button>
        <button class="difficulty-badge" style="background:#a29bfe" onclick="exportKB()">📤 导出</button>
        <button class="difficulty-badge" style="background:#ff7675" onclick="importKB()">📥 导入</button>
        <button class="difficulty-badge" style="background:#6b7280" onclick="resetKB()">🔄 恢复默认</button>
        <button class="difficulty-badge" style="background:#d63031" onclick="clearKBStats()">📊 清零统计</button>
      </div>
    </div>
    <div class="stat-card">
      <h3>📜 最近查询（点击 ⬇️ 可重问）</h3>
      <p style="font-size:11px;color:#888">💡 点击问题可自动填入聊天框</p>
      <div id="kbLogList" style="max-height:350px;overflow-y:auto;font-size:12px">${renderKBLogs()}</div>
    </div>`;
}

function saveKBEditor() {
  const text = document.getElementById('kbEditor').value;
  const lines = text.split('\n').map(s => s.trim()).filter(s => s);
  if (lines.length === 0) { alert('❌ 知识库不能为空！'); return; }
  KB_DATA = lines;
  saveKB();
  document.getElementById('kbLineCount').textContent = KB_DATA.length;
  alert(`✅ 已保存 ${lines.length} 条知识！`);
  renderKBEditor();
}

function addKBLines() {
  const ta = document.getElementById('kbEditor');
  ta.value += '\n\n\n\n\n';
  ta.focus();
}

function exportKB() {
  const text = KB_DATA.join('\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `知识库_${new Date().toISOString().slice(0,10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function importKB() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.txt';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const lines = ev.target.result.split('\n').map(s => s.trim()).filter(s => s);
      if (lines.length === 0) { alert('❌ 文件为空'); return; }
      if (confirm(`将导入 ${lines.length} 条知识，是否替换当前知识库？`)) {
        KB_DATA = lines;
        saveKB();
        renderKBEditor();
        alert('✅ 导入成功！');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetKB() {
  if (!confirm('确定要恢复默认知识库吗？')) return;
  KB_DATA = [...DEFAULT_KB];
  saveKB();
  renderKBEditor();
  alert(`🔄 已恢复默认，共 ${KB_DATA.length} 条`);
}

function clearKBStats() {
  if (!confirm('确定要清零命中率统计吗？')) return;
  KB_HITS = 0;
  KB_MISSES = 0;
  KB_LOGS = [];
  try { localStorage.removeItem('mathPark_kb_stats'); } catch(e) {}
  renderKBEditor();
}

// ⭐ 页面加载时自动初始化
initKB();
