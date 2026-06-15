// 声母数据
const shengmuData = [
    { pinyin: 'b', word: '爸爸', emoji: '👨' },
    { pinyin: 'p', word: '苹果', emoji: '🍎' },
    { pinyin: 'm', word: '妈妈', emoji: '👩' },
    { pinyin: 'f', word: '飞机', emoji: '✈️' },
    { pinyin: 'd', word: '大象', emoji: '🐘' },
    { pinyin: 't', word: '兔子', emoji: '🐰' },
    { pinyin: 'n', word: '牛奶', emoji: '🥛' },
    { pinyin: 'l', word: '老虎', emoji: '🐯' },
    { pinyin: 'g', word: '哥哥', emoji: '👦' },
    { pinyin: 'k', word: '可爱', emoji: '🐱' },
    { pinyin: 'h', word: '花朵', emoji: '🌸' },
    { pinyin: 'j', word: '鸡蛋', emoji: '🥚' },
    { pinyin: 'q', word: '气球', emoji: '🎈' },
    { pinyin: 'x', word: '西瓜', emoji: '🍉' },
    { pinyin: 'zh', word: '小猫', emoji: '🐱' },
    { pinyin: 'ch', word: '汽车', emoji: '🚗' },
    { pinyin: 'sh', word: '鲨鱼', emoji: '🦈' },
    { pinyin: 'r', word: '太阳', emoji: '☀️' },
    { pinyin: 'z', word: '紫色', emoji: '🟣' },
    { pinyin: 'c', word: '草莓', emoji: '🍓' },
    { pinyin: 's', word: '书包', emoji: '🎒' },
    { pinyin: 'y', word: '月亮', emoji: '🌙' },
    { pinyin: 'w', word: '乌龟', emoji: '🐢' }
];

// 韵母数据
const yunmuData = [
    // 单韵母
    { pinyin: 'a', word: '阿姨', emoji: '👩' },
    { pinyin: 'o', word: '波浪', emoji: '🌊' },
    { pinyin: 'e', word: '鹅', emoji: '🦢' },
    { pinyin: 'i', word: '衣服', emoji: '👕' },
    { pinyin: 'u', word: '乌龟', emoji: '🐢' },
    { pinyin: 'ü', word: '鱼', emoji: '🐟' },
    // 复韵母
    { pinyin: 'ai', word: '爱心', emoji: '❤️' },
    { pinyin: 'ei', word: '黑色', emoji: '⬛' },
    { pinyin: 'ui', word: '水杯', emoji: '🥤' },
    { pinyin: 'ao', word: '小猫', emoji: '🐱' },
    { pinyin: 'ou', word: '海鸥', emoji: '🐦' },
    { pinyin: 'iu', word: '六', emoji: '6️⃣' },
    { pinyin: 'ie', word: '蝴蝶', emoji: '🦋' },
    { pinyin: 'üe', word: '月亮', emoji: '🌙' },
    { pinyin: 'er', word: '耳朵', emoji: '👂' },
    // 前鼻韵母
    { pinyin: 'an', word: '天安门', emoji: '🏯' },
    { pinyin: 'en', word: '门', emoji: '🚪' },
    { pinyin: 'in', word: '心', emoji: '💗' },
    { pinyin: 'un', word: '云', emoji: '☁️' },
    { pinyin: 'ün', word: '裙子', emoji: '👗' },
    // 后鼻韵母
    { pinyin: 'ang', word: '糖果', emoji: '🍬' },
    { pinyin: 'eng', word: '风', emoji: '💨' },
    { pinyin: 'ing', word: '星星', emoji: '⭐' },
    { pinyin: 'ong', word: '龙', emoji: '🐉' }
];

// 整体认读音节
const zhengtiData = [
    { pinyin: 'zhi', word: '织毛衣', emoji: '🧶' },
    { pinyin: 'chi', word: '吃饭', emoji: '🍚' },
    { pinyin: 'shi', word: '狮子', emoji: '🦁' },
    { pinyin: 'ri', word: '太阳', emoji: '☀️' },
    { pinyin: 'zi', word: '紫色', emoji: '🟣' },
    { pinyin: 'ci', word: '刺猬', emoji: '🦔' },
    { pinyin: 'si', word: '四个', emoji: '4️⃣' },
    { pinyin: 'yi', word: '衣服', emoji: '👕' },
    { pinyin: 'wu', word: '五', emoji: '5️⃣' },
    { pinyin: 'yu', word: '鱼', emoji: '🐟' },
    { pinyin: 'ye', word: '叶子', emoji: '🍃' },
    { pinyin: 'yue', word: '月亮', emoji: '🌙' },
    { pinyin: 'yuan', word: '元宵', emoji: '🏮' },
    { pinyin: 'yin', word: '音乐', emoji: '🎵' },
    { pinyin: 'yun', word: '云朵', emoji: '☁️' },
    { pinyin: 'ying', word: '老鹰', emoji: '🦅' }
];

// 一年级汉字数据
const hanziData = [
    { char: '天', pinyin: 'tiān', meaning: '天空', example: '蓝蓝的天', emoji: '☀️' },
    { char: '地', pinyin: 'dì', meaning: '土地', example: '大地', emoji: '🌍' },
    { char: '人', pinyin: 'rén', meaning: '人类', example: '中国人', emoji: '🧑' },
    { char: '你', pinyin: 'nǐ', meaning: '第二人称', example: '你好', emoji: '👉' },
    { char: '我', pinyin: 'wǒ', meaning: '第一人称', example: '我是学生', emoji: '🙋' },
    { char: '他', pinyin: 'tā', meaning: '第三人称', example: '他是谁', emoji: '👤' },
    { char: '一', pinyin: 'yī', meaning: '数字1', example: '一个苹果', emoji: '1️⃣' },
    { char: '二', pinyin: 'èr', meaning: '数字2', example: '两个人', emoji: '2️⃣' },
    { char: '三', pinyin: 'sān', meaning: '数字3', example: '三角形', emoji: '3️⃣' },
    { char: '上', pinyin: 'shàng', meaning: '位置高', example: '上山', emoji: '⬆️' },
    { char: '下', pinyin: 'xià', meaning: '位置低', example: '下雨', emoji: '⬇️' },
    { char: '口', pinyin: 'kǒu', meaning: '嘴巴', example: '口水', emoji: '👄' },
    { char: '耳', pinyin: 'ěr', meaning: '耳朵', example: '耳目', emoji: '👂' },
    { char: '目', pinyin: 'mù', meaning: '眼睛', example: '目标', emoji: '👁️' },
    { char: '手', pinyin: 'shǒu', meaning: '手部', example: '小手', emoji: '✋' },
    { char: '足', pinyin: 'zú', meaning: '脚', example: '足球', emoji: '🦶' },
    { char: '日', pinyin: 'rì', meaning: '太阳', example: '日出', emoji: '☀️' },
    { char: '月', pinyin: 'yuè', meaning: '月亮', example: '月儿', emoji: '🌙' },
    { char: '水', pinyin: 'shuǐ', meaning: '水', example: '喝水', emoji: '💧' },
    { char: '火', pinyin: 'huǒ', meaning: '火焰', example: '火车', emoji: '🔥' },
    { char: '山', pinyin: 'shān', meaning: '山', example: '高山', emoji: '⛰️' },
    { char: '石', pinyin: 'shí', meaning: '石头', example: '石碑', emoji: '🪨' },
    { char: '田', pinyin: 'tián', meaning: '田地', example: '稻田', emoji: '🌾' },
    { char: '禾', pinyin: 'hé', meaning: '禾苗', example: '禾苗', emoji: '🌱' },
    { char: '好', pinyin: 'hǎo', meaning: '良好', example: '你好', emoji: '👍' },
    { char: '学', pinyin: 'xué', meaning: '学习', example: '学生', emoji: '📚' },
    { char: '习', pinyin: 'xí', meaning: '练习', example: '学习', emoji: '✏️' },
    { char: '大', pinyin: 'dà', meaning: '小的反义', example: '大象', emoji: '🐘' },
    { char: '小', pinyin: 'xiǎo', meaning: '大的反义', example: '小猫', emoji: '🐱' },
    { char: '多', pinyin: 'duō', meaning: '数量多', example: '很多', emoji: '➕' },
    { char: '少', pinyin: 'shǎo', meaning: '数量少', example: '少数', emoji: '➖' }
];

// 拼读练习组合
const pinpinData = [
    { sm: 'b', ym: 'a', result: 'bā', tone: 1, word: '八' },
    { sm: 'p', ym: 'a', result: 'pá', tone: 2, word: '爬' },
    { sm: 'm', ym: 'a', result: 'mā', tone: 1, word: '妈' },
    { sm: 'd', ym: 'a', result: 'dà', tone: 4, word: '大' },
    { sm: 't', ym: 'a', result: 'tā', tone: 1, word: '他' },
    { sm: 'n', ym: 'a', result: 'ná', tone: 2, word: '拿' },
    { sm: 'b', ym: 'o', result: 'bō', tone: 1, word: '波' },
    { sm: 'p', ym: 'o', result: 'pó', tone: 2, word: '婆' },
    { sm: 'm', ym: 'o', result: 'mò', tone: 4, word: '默' },
    { sm: 'h', ym: 'e', result: 'hē', tone: 1, word: '喝' },
    { sm: 'd', ym: 'e', result: 'dé', tone: 2, word: '得' },
    { sm: 'l', ym: 'e', result: 'le', tone: 5, word: '了' },
    { sm: 'b', ym: 'i', result: 'bǐ', tone: 3, word: '笔' },
    { sm: 'm', ym: 'i', result: 'mǐ', tone: 3, word: '米' },
    { sm: 'd', ym: 'i', result: 'dì', tone: 4, word: '地' },
    { sm: 't', ym: 'i', result: 'tí', tone: 2, word: '提' },
    { sm: 'n', ym: 'i', result: 'nǐ', tone: 3, word: '你' },
    { sm: 'l', ym: 'i', result: 'lǐ', tone: 3, word: '李' },
    { sm: 'd', ym: 'u', result: 'dú', tone: 2, word: '读' },
    { sm: 't', ym: 'u', result: 'tú', tone: 2, word: '图' },
    { sm: 'n', ym: 'u', result: 'nǔ', tone: 3, word: '努' },
    { sm: 'l', ym: 'u', result: 'lù', tone: 4, word: '路' },
    { sm: 'g', ym: 'u', result: 'gǔ', tone: 3, word: '古' },
    { sm: 'h', ym: 'u', result: 'hú', tone: 2, word: '湖' }
];

// 测验题目
const testData = [
    { type: 'shengmu', question: 'b 的样子像什么？', options: ['一个门洞', '一根棍子', '一只耳朵', '一个嘴巴'], answer: 0 },
    { type: 'yunmu', question: '单韵母 a 的读音是？', options: ['啊', '哦', '鹅', '衣'], answer: 0 },
    { type: 'image', question: '🐱 这个图片的拼音是？', options: ['māo', 'gǒu', 'niǎo', 'yú'], answer: 0 },
    { type: 'hanzi', question: '"人" 的拼音是？', options: ['rén', 'rěn', 'rèn', 'rēn'], answer: 0 },
    { type: 'tone', question: '"天" 的声调是？', options: ['第一声', '第二声', '第三声', '第四声'], answer: 0 }
];
