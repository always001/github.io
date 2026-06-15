// ==================== 语音播放模块 ====================
class SpeechHelper {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voice = null;
        this.ready = false;
        this.loadVoice();
    }

    loadVoice() {
        const loadVoices = () => {
            const voices = this.synth.getVoices();
            // 优先选择中文女声
            this.voice = voices.find(v => v.lang === 'zh-CN' && /female|woman|女/i.test(v.name)) ||
                         voices.find(v => v.lang === 'zh-CN') ||
                         voices.find(v => v.lang.startsWith('zh')) ||
                         voices[0];
            this.ready = true;
            console.log('✅ 语音引擎已就绪:', this.voice ? this.voice.name : '默认');
        };

        if (this.synth.getVoices().length > 0) {
            loadVoices();
        } else {
            this.synth.onvoiceschanged = loadVoices;
        }
    }

    // ===== 核心：拼音→中文读法映射 =====
    // 每个拼音都用对应的汉字"逼"出正确的中文发音
    getChineseReading(pinyin) {
        const map = {
            // ===== 声母 =====
            'b': '玻', 'p': '坡', 'm': '摸', 'f': '佛',
            'd': '得', 't': '特', 'n': '讷', 'l': '勒',
            'g': '哥', 'k': '科', 'h': '喝',
            'j': '鸡', 'q': '七', 'x': '西',
            'zh': '知', 'ch': '吃', 'sh': '诗', 'r': '日',
            'z': '资', 'c': '次', 's': '思',
            'y': '医', 'w': '屋',
            
            // ===== 单韵母 =====
            'a': '啊', 'o': '哦', 'e': '鹅',
            'i': '衣', 'u': '乌', 'ü': '鱼',
            
            // ===== 复韵母 =====
            'ai': '哀', 'ei': '诶', 'ui': '威', 'ao': '熬',
            'ou': '欧', 'iu': '忧', 'ie': '耶', 'üe': '约',
            'er': '儿',
            
            // ===== 前鼻韵母 =====
            'an': '安', 'en': '恩', 'in': '因', 'un': '温', 'ün': '晕',
            
            // ===== 后鼻韵母 =====
            'ang': '肮', 'eng': '鞥', 'ing': '英', 'ong': '翁',
            
            // ===== 整体认读音节 =====
            'zhi': '知', 'chi': '吃', 'shi': '诗', 'ri': '日',
            'zi': '资', 'ci': '次', 'si': '思',
            'yi': '一', 'wu': '五', 'yu': '鱼',
            'ye': '耶', 'yue': '约', 'yuan': '圆',
            'yin': '因', 'yun': '晕', 'ying': '英'
        };
        return map[pinyin] || pinyin;
    }

    // ===== 声调符号处理 =====
    // 把带声调的拼音转成对应汉字，例如 "bā" → "八"
    getToneWord(pinyin) {
        // 去掉声调符号，得到纯拼音
        const base = pinyin.toLowerCase().replace(/[āáǎà]/g, 'a')
                                       .replace(/[ōóǒò]/g, 'o')
                                       .replace(/[ēéěè]/g, 'e')
                                       .replace(/[īíǐì]/g, 'i')
                                       .replace(/[ūúǔù]/g, 'u')
                                       .replace(/[ǖǘǚǜ]/g, 'v');
        
        // 判断声调
        let tone = 0;
        if (/[āōēīūǖ]/.test(pinyin)) tone = 1;
        else if (/[áóéíúǘ]/.test(pinyin)) tone = 2;
        else if (/[ǎǒěǐǔǚ]/.test(pinyin)) tone = 3;
        else if (/[àòèìùǜ]/.test(pinyin)) tone = 4;
        else if (base === 'le' || base === 'de') tone = 5; // 轻声
        
        // 常用字映射
        const toneMap = {
            'ba1': '八', 'ba2': '拔', 'ba3': '把', 'ba4': '爸',
            'pa1': '趴', 'pa2': '爬', 'pa3': '啪', 'pa4': '怕',
            'ma1': '妈', 'ma2': '麻', 'ma3': '马', 'ma4': '骂',
            'fa1': '发', 'fa2': '罚', 'fa3': '法', 'fa4': '发',
            'da1': '搭', 'da2': '达', 'da3': '打', 'da4': '大',
            'ta1': '他', 'ta2': '塔', 'ta3': '踏', 'ta4': '踏',
            'na1': '拿', 'na2': '拿', 'na3': '哪', 'na4': '那',
            'la1': '拉', 'la2': '拉', 'la3': '拉', 'la4': '辣',
            'ga1': '嘎', 'ga2': '嘎', 'ga3': '嘎', 'ga4': '尬',
            'ka1': '咖', 'ka2': '卡', 'ka3': '卡', 'ka4': '卡',
            'ha1': '哈', 'ha2': '蛤', 'ha3': '哈', 'ha4': '哈',
            'bi1': '逼', 'bi2': '鼻', 'bi3': '比', 'bi4': '必',
            'pi1': '批', 'pi2': '皮', 'pi3': '匹', 'pi4': '屁',
            'mi1': '眯', 'mi2': '迷', 'mi3': '米', 'mi4': '密',
            'di1': '低', 'di2': '敌', 'di3': '底', 'di4': '地',
            'ti1': '梯', 'ti2': '提', 'ti3': '体', 'ti4': '替',
            'ni1': '妮', 'ni2': '泥', 'ni3': '你', 'ni4': '逆',
            'li1': '哩', 'li2': '离', 'li3': '李', 'li4': '力',
            'ji1': '鸡', 'ji2': '及', 'ji3': '挤', 'ji4': '记',
            'qi1': '七', 'qi2': '齐', 'qi3': '起', 'qi4': '气',
            'xi1': '西', 'xi2': '习', 'xi3': '洗', 'xi4': '喜',
            'du1': '都', 'du2': '读', 'du3': '肚', 'du4': '度',
            'tu1': '突', 'tu2': '图', 'tu3': '土', 'tu4': '兔',
            'nu1': '奴', 'nu2': '奴', 'nu3': '努', 'nu4': '怒',
            'lu1': '噜', 'lu2': '炉', 'lu3': '鲁', 'lu4': '路',
            'gu1': '姑', 'gu2': '骨', 'gu3': '古', 'gu4': '故',
            'ku1': '哭', 'ku2': '苦', 'ku3': '苦', 'ku4': '裤',
            'hu1': '乎', 'hu2': '湖', 'hu3': '虎', 'hu4': '户',
            'he1': '喝', 'he2': '和', 'he3': '贺', 'he4': '贺',
            'ta1': '他', 'de1': '得', 'le1': '了', 'bo1': '波',
            'po1': '坡', 'po2': '婆', 'mo1': '摸', 'mo2': '模',
            'po4': '破', 'mo3': '抹', 'mo4': '默',
            'huo1': '豁', 'huo2': '活', 'huo3': '火', 'huo4': '货',
            'bai1': '掰', 'bai2': '白', 'bai3': '百', 'bai4': '败',
            'pai1': '拍', 'pai2': '排', 'pai3': '排', 'pai4': '派',
            'mai1': '埋', 'mai2': '埋', 'mai3': '买', 'mai4': '卖',
            'dai1': '呆', 'dai2': '逮', 'dai3': '逮', 'dai4': '带',
            'tai1': '胎', 'tai2': '台', 'tai3': '太', 'tai4': '太',
            'nai1': '奶', 'nai2': '奶', 'nai3': '乃', 'nai4': '耐',
            'lai1': '来', 'lai2': '来', 'lai3': '来', 'lai4': '赖',
            'gai1': '该', 'gai2': '该', 'gai3': '改', 'gai4': '盖',
            'kai1': '开', 'kai2': '开', 'kai3': '凯', 'kai4': '慨',
            'hai1': '咳', 'hai2': '还', 'hai3': '海', 'hai4': '害',
            'tian1': '天', 'ti2': '提', 'tian2': '田', 'tian3': '舔', 'tian4': '甜',
            'di1': '低', 'di2': '笛', 'di3': '底', 'di4': '地',
            'shu1': '书', 'shu2': '熟', 'shu3': '鼠', 'shu4': '树',
            'hua1': '花', 'hua2': '华', 'hua3': '话', 'hua4': '画',
            'xue2': '学', 'xue3': '雪', 'xue1': '靴', 'xue4': '血',
            'shang1': '商', 'shang2': '裳', 'shang3': '晌', 'shang4': '上',
            'xia1': '虾', 'xia2': '霞', 'xia3': '夏', 'xia4': '下',
            'ren2': '人', 'ren3': '忍', 'ren4': '认',
            'ri4': '日', 'yue4': '月', 'tai4': '太',
            'yi1': '一', 'yi2': '一', 'yi3': '以', 'yi4': '一',
            'er': '而', 'yuan1': '冤', 'yuan2': '元', 'yuan3': '远', 'yuan4': '院',
            'ying1': '英', 'ying2': '营', 'ying3': '影', 'ying4': '硬',
            'shu3': '数'
        };
        
        const key = base + tone;
        return toneMap[key] || this.getChineseReading(base);
    }

    // ===== 播放拼音 =====
    speakPinyin(pinyin) {
        // 如果是带声调的拼音（如 "bā"），使用 toneMap
        if (/[āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ]/.test(pinyin)) {
            const word = this.getToneWord(pinyin);
            this.speak(word, 0.6, 1.0);
        } else {
            // 纯拼音（如 "b", "a"），用汉字"逼"出读音
            const reading = this.getChineseReading(pinyin);
            this.speak(reading, 0.7, 1.1);
        }
    }

    // ===== 播放词语（汉字） =====
    speakWord(text) {
        this.speak(text, 0.9, 1.0);
    }

    // ===== 播放句子 =====
    speakSentence(text) {
        this.speak(text, 1.0, 0.95);
    }

    // ===== 播放字母表的声母/韵母 =====
    speakInitial(pinyin) {
        // 声母用"波坡摸佛"那套
        this.speak(this.getChineseReading(pinyin), 0.6, 1.1);
    }

    // ===== 通用播放方法 =====
    speak(text, rate = 1.0, pitch = 1.0) {
        if (!this.synth) {
            console.warn('浏览器不支持语音合成');
            return;
        }

        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = 1.0;

        if (this.voice) {
            utterance.voice = this.voice;
        }

        this.synth.speak(utterance);
    }

    // ===== 停止 =====
    stop() {
        if (this.synth) {
            this.synth.cancel();
        }
    }
}

// 创建全局实例
const speech = new SpeechHelper();
