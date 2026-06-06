// js/app.js
"use strict";

const QUESTION_BANK = {
    subjects: [
        {
            id: "web-crawler",
            name: "网络信息提取与编程",
            types: {
                choice: [
                    {
                        question: "安装 Requests 库的正确 pip 命令是（ A ）",
                        options: [
                            "pip install requests",
                            "pip get requests",
                            "pip install request",
                            "pip add requests"
                        ],
                        answer: 0
                    },
                    {
                        question: "Requests 库中，用于获取网页数据的核心方法是（ B ）",
                        options: [
                            "post ()",
                            "get ()",
                            "put ()",
                            "delete ()"
                        ],
                        answer: 1
                    },
                    {
                        question: "以下哪个属性可以获取 Response 对象的 HTTP 响应状态码（ C ）",
                        options: [
                            "response.text",
                            "response.url",
                            "response.status_code",
                            "response.encoding"
                        ],
                        answer: 2
                    },
                    {
                        question: "HTTP 协议中，patch 和 put 方法的核心区别是（ B ）",
                        options: [
                            "patch 用于完整更新资源，put 用于局部更新资源",
                            "patch 用于局部更新资源，put 用于完整更新资源",
                            "两者无区别，可随意替换使用",
                            "patch 用于删除资源，put 用于新增资源"
                        ],
                        answer: 1
                    },
                    {
                        question: "Python 中捕获 Requests 库请求异常的核心语法框架是（ C ）",
                        options: [
                            "if-else",
                            "for-in",
                            "try-except",
                            "while"
                        ],
                        answer: 2
                    },
                    {
                        question: "Requests 库中，用于捕获 “请求连接超时” 的异常类型是（ B ）",
                        options: [
                            "requests.exceptions.HTTPError",
                            "requests.exceptions.ConnectTimeout",
                            "requests.exceptions.Timeout",
                            "requests.exceptions.ConnectionError"
                        ],
                        answer: 1
                    },
                    {
                        question: "以下能正确获取 Requests 库请求响应中二进制内容的方式是（ B ）",
                        options: [
                            "response.text.",
                            "response.content",
                            "response.json ().",
                            "response.encoding"
                        ],
                        answer: 1
                    },
                    {
                        question: "安装 Beautiful Soup4 库的正确 pip 命令是（ B ）",
                        options: [
                            "pip install beautifulsoup",
                            "pip install beautifulsoup4",
                            "pip install bs4",
                            "pip install soup"
                        ],
                        answer: 1
                    },
                    {
                        question: "Beautiful Soup 库解析 HTML 文档时，用于精准定位单个指定标签的方法是（ A ）",
                        options: [
                            "find ()",
                            "find_all ()",
                            "select ()",
                            "prettify ()"
                        ],
                        answer: 0
                    },
                    {
                        question: "bs4 库中，HTML 标签树的遍历方式不包括（ D ）",
                        options: [
                            "下行遍历",
                            "上行遍历",
                            "平行遍历",
                            "随机遍历"
                        ],
                        answer: 3
                    },
                    {
                        question: "用于格式化 HTML 解析结果，让代码更易读的方法是（ B ）",
                        options: [
                            "get ()",
                            "prettify ()",
                            "text ()",
                            "attrs ()"
                        ],
                        answer: 1
                    },
                    {
                        question: "以下不属于信息标记三种形式的是（ D ）",
                        options: [
                            "XML",
                            "JSON",
                            "YAML",
                            "URL"
                        ],
                        answer: 3
                    },
                    {
                        question: "使用 Beautiful Soup 提取标签中 href 属性的值，正确的写法是（ D ）",
                        options: [
                            "soup.find ('a').href",
                            "soup.find ('a').get ('href')",
                            "soup.find ('a')['href']",
                            "B 和 C 都正确"
                        ],
                        answer: 3
                    },
                    {
                        question: "若要提取标签内的所有文本内容（包含子标签文本），Beautiful Soup 的正确方法是（ A ）",
                        options: [
                            "tag.text",
                            "tag.name",
                            "tag.contents",
                            "tag.attrs"
                        ],
                        answer: 0
                    },
                    {
                        question: "以下关于 Beautiful Soup 遍历标签树的说法，正确的是（ B ）",
                        options: [
                            ".children 属性返回标签的所有直接子节点，是列表类型",
                            ".descendants 属性返回标签的所有子孙节点，是生成器类型",
                            ".parent 属性返回标签的所有父节点，是迭代器类型",
                            ".next_sibling 属性一定能获取到下一个同级标签，不会返回 None"
                        ],
                        answer: 1
                    },
                    {
                        question: "Python 中处理正则表达式的核心库是（ A ）",
                        options: [
                            "re",
                            "regex",
                            "regular",
                            "rexp"
                        ],
                        answer: 0
                    },
                    {
                        question: "正则表达式中，\\d 的含义是（ B ）",
                        options: [
                            "匹配任意非数字字符",
                            "匹配任意数字字符（0-9）",
                            "匹配任意空白字符",
                            "匹配任意字母字符"
                        ],
                        answer: 1
                    },
                    {
                        question: "re 库中，用于匹配字符串开头位置的元字符是（ B ）",
                        options: [
                            "$",
                            "^",
                            "*",
                            "?"
                        ],
                        answer: 1
                    },
                    {
                        question: "以下关于正则表达式 “贪婪匹配” 的描述，正确的是（ B ）",
                        options: [
                            "尽可能少的匹配符合条件的内容",
                            "尽可能多的匹配符合条件的内容",
                            "仅匹配一次符合条件的内容",
                            "匹配所有符合条件的内容但不重复"
                        ],
                        answer: 1
                    },
                    {
                        question: "re 库中，Match 对象的核心作用是（A）",
                        options: [
                            "存储正则匹配的结果信息",
                            "编写正则表达式",
                            "执行正则替换",
                            "遍历匹配结果"
                        ],
                        answer: 0
                    },
                    {
                        question: "正则表达式 ^hello$ 中，^ 和 $ 的作用是（ B ）",
                        options: [
                            "^ 匹配换行符，$ 匹配空格符",
                            "^ 匹配字符串开头位置，$ 匹配字符串结尾位置",
                            "^ 匹配任意非数字字符，$ 匹配任意数字字符",
                            "^ 和 $ 组合表示匹配空字符串"
                        ],
                        answer: 1
                    },
                    {
                        question: "正则表达式 a[^bcd] 中，[^bcd] 的含义是（ B ）",
                        options: [
                            "匹配以 bcd 开头的字符",
                            "匹配除了 b、c、d 之外的任意单个字符",
                            "匹配 b、c、d 中的任意一个字符",
                            "匹配空字符"
                        ],
                        answer: 1
                    },
                    {
                        question: "Scrapy 爬虫框架的核心结构被称为（ B ）",
                        options: [
                            "3+2 结构",
                            "5+2 结构",
                            "4+3 结构",
                            "6+1 结构"
                        ],
                        answer: 1
                    },
                    {
                        question: "以下不属于 Scrapy 框架核心组件的是（ D ）",
                        options: [
                            "Spider",
                            "Item Pipeline",
                            "Downloader",
                            "Requests"
                        ],
                        answer: 3
                    },
                    {
                        question: "Scrapy 框架中，用于处理爬取数据的清洗、存储的组件是（ B ）",
                        options: [
                            "Spider",
                            "Item Pipeline",
                            "Engine",
                            "Scheduler"
                        ],
                        answer: 1
                    },
                    {
                        question: "用于创建 Scrapy 爬虫工程的核心命令是（ A ）",
                        options: [
                            "scrapy startproject",
                            "scrapy createproject",
                            "scrapy newproject",
                            "scrapy initproject"
                        ],
                        answer: 0
                    },
                    {
                        question: "Scrapy 爬虫中，yield 关键字的核心作用是（ C ）",
                        options: [
                            "终止程序运行",
                            "保存数据到本地",
                            "生成迭代器，返回爬取数据",
                            "发起网络请求"
                        ],
                        answer: 2
                    }
                ],
                multiple: [],
                tf: [
                    {
                        question: "Requests 库仅支持 GET 和 POST 两种 HTTP 请求方法。",
                        answer: false
                    },
                    {
                        question: "爬取网页的通用代码框架中，加入异常捕获可以提升程序的稳定性。",
                        answer: true
                    },
                    {
                        question: "Response 对象的 text 属性和 content 属性获取的内容完全一致，可随意使用。",
                        answer: false
                    },
                    {
                        question: "Beautiful Soup 库的核心作用是解析和提取 HTML/XML 中的数据。",
                        answer: true
                    },
                    {
                        question: "信息标记的三种形式中，JSON 仅能用于存储简单的键值对数据，无法表示复杂嵌套结构。",
                        answer: false
                    },
                    {
                        question: "正则表达式中的 “.” 可以匹配包括换行符在内的任意字符。",
                        answer: false
                    },
                    {
                        question: "re 库的 search () 方法和 match () 方法功能一致，均可在字符串任意位置匹配。",
                        answer: false
                    },
                    {
                        question: "最小匹配（非贪婪匹配）可通过在限定符后加 “?” 实现，如 *?、+?。",
                        answer: true
                    },
                    {
                        question: "正则表达式中的 `.`（点）在默认模式下能匹配任意字符，包括换行符",
                        answer: false
                    },
                    {
                        question: "正则表达式 `\\b` 是单词边界匹配符，`\\B` 是非单词边界匹配符，`\\bpython\\B` 可匹配“python123”中的“python”，但不匹配“python”单独出现的情况",
                        answer: true
                    },
                    {
                        question: "Scrapy 框架是轻量级的爬虫工具，无需安装，可直接使用。",
                        answer: false
                    },
                    {
                        question: "Scrapy 框架与 Requests 库相比，更适合开发大型、高效的爬虫项目。",
                        answer: true
                    },
                    {
                        question: "Scrapy 爬虫的 Spider 组件主要负责定义爬取规则和提取目标数据。",
                        answer: true
                    }
                ],
                short: [
                    {
                        question: "什么是 user-agent?",
                        answer: "User-Agent 是 HTTP 请求头中的一个字段，用于标识发起请求的客户端程序信息，例如浏览器类型、操作系统、版本号等。爬虫发送请求时设置 User-Agent，可以模拟浏览器访问，降低被服务器直接拒绝的概率。"
                    },
                    {
                        question: "Reponses 对象都有哪些属性，并说明？",
                        answer: "Response 对象常用属性包括：status_code 表示 HTTP 响应状态码；text 表示按文本编码解码后的响应内容；content 表示二进制响应内容；encoding 表示响应编码方式；url 表示最终请求 URL；headers 表示响应头信息；cookies 表示服务器返回的 Cookie；apparent_encoding 表示根据内容分析出的编码；request 表示本次响应对应的请求对象。"
                    },
                    {
                        question: "简述 bs4 库中 find () 和 find_all () 方法的核心区别，说明各自的适用场景",
                        answer: "find () 用于查找第一个符合条件的标签，返回单个 Tag 对象，适合只需要定位一个元素的场景；find_all () 用于查找所有符合条件的标签，返回结果列表，适合批量提取多个同类元素的场景。"
                    },
                    {
                        question: "标签（Tag）的基本元素有哪些？举例说明",
                        answer: "Tag 的基本元素通常包括标签名称、属性、标签内容以及子节点。例如 <a href=\"https://example.com\">示例</a> 中，a 是标签名称，href 是属性，https://example.com 是属性值，示例 是标签文本内容。"
                    },
                    {
                        question: "举例信息标记 XML、JSON 和 YAML 三种形式？并进行比较说明。",
                        answer: "XML 示例：<book><name>Python</name></book>；JSON 示例：{\"name\":\"Python\"}；YAML 示例：name: Python。XML 结构严谨、标签成对出现，适合文档和配置交换；JSON 语法轻量，适合 Web 数据传输和接口返回；YAML 可读性强，适合配置文件，但缩进要求严格。"
                    },
                    {
                        question: "正则表达式常用符号说明（举例）",
                        answer: "常用符号包括：\\d 匹配数字，例如 \\d+ 可匹配 123；\\w 匹配字母、数字或下划线；\\s 匹配空白字符；. 默认匹配除换行符外的任意字符；* 表示前一个字符出现 0 次或多次；+ 表示出现 1 次或多次；? 表示出现 0 次或 1 次，也可用于非贪婪匹配；^ 匹配字符串开头；$ 匹配字符串结尾；[] 表示字符集合；() 表示分组。"
                    },
                    {
                        question: "Python re 模块中，re.findall(r'\\d+', '价格：99 元，折扣：8.5 折')的返回结果是？",
                        answer: "返回结果是 ['99', '8', '5']。因为 \\d+ 会连续匹配一个或多个数字，8.5 会被分别匹配为 8 和 5。"
                    },
                    {
                        question: "假设你正 在 爬 取某电商网站的商品信 息 ， 页面源 码 中商品价 格 的 HTML 片段格 式为：<span class=\"price\">¥999.99</span>（价格为浮点数，整数部分 1-5 位，小数部分固定 2 位），商品标题的 HTML 片段格式为：<h3 class=\"title\">2025 新款 XX 手机 - 旗舰版</h3>（标题以 “2025 新款” 开头，包含任意字符，以 “版” 结尾）。请补全以下正则表达式，实现对应信息的提取。\n 提取商品价格（匹配¥后紧跟的数字部分，如从¥999.99 中提取 999.99,如从¥88.99 中提取 88.99）：\n正则表达式：r'¥(\\d{ }\\.\\d{2})'\n 提取完整商品标题（匹配<h3 class=\"title\">和</h3>之间的所有内容）：\n正则表达式：r'<h3 class=\"title\">( )</h3>'",
                        "answer": "提取商品价格可补全为：r'¥(\\d{1,5}\\.\\d{2})'。其中 \\d{1,5} 匹配 1 到 5 位整数部分，\\. 匹配小数点，\\d{2} 匹配固定 2 位小数。\n提取完整商品标题可补全为：r'<h3 class=\"title\">(2025 新款.*?版)</h3>'。其中 .*? 表示非贪婪匹配任意内容，直到匹配到“版”。"
                    },
                    {
                        question: "简述 Scrapy 框架与 Requests 库的核心区别，说明各自的适用场景。",
                        answer: "① Requests 库是**轻量级的 HTTP 请求库**，仅实现网络请求功能，需配合解析库（如 bs4、re）手动实现数据提取、循环爬取等逻辑，无内置的爬虫调度、数据处理功能；② Scrapy 是**一站式的专业爬虫框架**，内置了下载器、解析器、调度器、数据管道等核心组件，支持异步爬取、分布式爬取，可实现爬虫的工程化开发和管理。"
                    }
                ],
                code: []
            }
        }
    ]
};

const TYPE_LABELS = {
    choice: "单选题",
    multiple: "多选题",
    tf: "判断题",
    fill: "填空题",
    short: "简答题",
    code: "编程题",
    all: "终极测试"
};

const TYPE_ORDER = ["choice", "multiple", "tf", "fill", "short", "code"];
const STORAGE_KEY = "exam_self_test_mistakes_v1";
const RETRY_KEY = "__mistake_retry__";
const SUBJECT_INDEX_URL = "/data/subjects.json";

let subjectIndexCache = null;
const subjectDataCache = new Map();

const $ = (selector, root = document) => root.querySelector(selector);

function bootApp() {
    initApp();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootApp);
} else {
    bootApp();
}

function initApp() {
    if ($("#subjectList") && $("#subjectCount") && $("#mistakeCount") && $("#mistakeBookBtn")) {
        renderIndexPage().catch(error => {
            console.error("首页渲染失败", error);
        });
        return;
    }

    if ($("#subjectName") && $("#subjectMeta") && $("#typeList") && $("#finalTestBtn")) {
        renderSubjectPage().catch(error => {
            console.error("科目详情页渲染失败", error);
        });
        return;
    }

    if ($("#examStage") && $("#progress") && $("#examBackLink")) {
        renderExamPage().catch(error => {
            console.error("考试页渲染失败", error);
        });
        return;
    }

    console.warn("未识别当前页面，请检查 HTML 中的 id 是否正确。", {
        path: window.location.pathname,
        page: getCurrentPage()
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    let page = path.substring(path.lastIndexOf("/") + 1);

    if (!page) return "index.html";

    page = page.split("?")[0].split("#")[0];

    return page;
}

function getParams() {
    return new URLSearchParams(window.location.search);
}

async function fetchJSON(url) {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
        throw new Error(`读取 JSON 失败：${url}，状态码：${response.status}`);
    }

    return response.json();
}

async function loadSubjectIndex() {
    if (subjectIndexCache) return subjectIndexCache;

    try {
        const data = await fetchJSON(SUBJECT_INDEX_URL);

        if (!data || !Array.isArray(data.subjects)) {
            throw new Error("subjects.json 格式错误：缺少 subjects 数组");
        }

        subjectIndexCache = data;
        return subjectIndexCache;
    } catch (error) {
        console.warn("未能读取 data/subjects.json，已使用 app.js 内置题库作为备用。", error);
        subjectIndexCache = {
            subjects: QUESTION_BANK.subjects.map(subject => ({
                id: subject.id,
                name: subject.name,
                inline: true
            }))
        };
        return subjectIndexCache;
    }
}

async function getSubjects() {
    const index = await loadSubjectIndex();
    return index.subjects;
}

async function getSubjectById(id) {
    const subjects = await getSubjects();
    const meta = subjects.find(subject => subject.id === id);

    if (!meta) return null;

    if (meta.inline) {
        return QUESTION_BANK.subjects.find(subject => subject.id === id) || null;
    }

    if (meta.types) {
        return meta;
    }

    if (subjectDataCache.has(id)) {
        return subjectDataCache.get(id);
    }

    const file = meta.file || `${id}.json`;

    try {
        const data = await fetchJSON(`/data/${file}`);
        const subject = normalizeSubjectData(data, id);

        if (!subject) {
            throw new Error(`题库文件 /data/${file} 中找不到科目：${id}`);
        }

        subjectDataCache.set(id, subject);
        return subject;
    } catch (error) {
        console.warn(`未能读取外部题库 /data/${file}，尝试使用 app.js 内置题库作为备用。`, error);
        const fallbackSubject = QUESTION_BANK.subjects.find(subject => subject.id === id) || null;

        if (fallbackSubject) {
            subjectDataCache.set(id, fallbackSubject);
            return fallbackSubject;
        }

        return null;
    }
}

function normalizeSubjectData(data, expectedId) {
    if (!data || typeof data !== "object") return null;

    if (data.id === expectedId && data.types) {
        return data;
    }

    if (Array.isArray(data.subjects)) {
        return data.subjects.find(subject => subject.id === expectedId) || null;
    }

    return null;
}

function getTypeCount(subject, type) {
    return Array.isArray(subject.types?.[type]) ? subject.types[type].length : 0;
}

function getTotalCount(subject) {
    return TYPE_ORDER.reduce((sum, type) => sum + getTypeCount(subject, type), 0);
}

async function renderIndexPage() {
    const subjectCount = document.querySelector("#subjectCount");
    const mistakeCount = document.querySelector("#mistakeCount");
    const mistakeBookBtn = document.querySelector("#mistakeBookBtn");

    if (subjectCount) {
        subjectCount.textContent = "2";
    }

    if (mistakeCount) {
        mistakeCount.textContent = String(countAllMistakes());
    }

    if (mistakeBookBtn && !mistakeBookBtn.dataset.bound) {
        mistakeBookBtn.dataset.bound = "true";
        mistakeBookBtn.addEventListener("click", () => {
            window.location.href = `exam.html?subj=${encodeURIComponent(RETRY_KEY)}&type=mistakes`;
        });
    }
}

async function renderSubjectPage() {
    const params = getParams();
    const subjectId = params.get("subj") || "";
    const subject = await getSubjectById(subjectId);

    const subjectName = $("#subjectName");
    const subjectMeta = $("#subjectMeta");
    const typeList = $("#typeList");
    const finalTestBtn = $("#finalTestBtn");

    if (!subjectName || !subjectMeta || !typeList || !finalTestBtn) {
        console.error("科目详情页缺少必要元素", {
            subjectName: Boolean(subjectName),
            subjectMeta: Boolean(subjectMeta),
            typeList: Boolean(typeList),
            finalTestBtn: Boolean(finalTestBtn)
        });
        return;
    }


    if (!subject) {
        subjectName.textContent = "未找到科目";
        subjectMeta.textContent = "请返回首页重新选择。";
        typeList.innerHTML = `<div class="empty-state">科目不存在。</div>`;
        finalTestBtn.disabled = true;
        return;
    }

    subjectName.textContent = subject.name;
    subjectMeta.textContent = `当前题库共 ${getTotalCount(subject)} 道题`;
    typeList.innerHTML = "";


    TYPE_ORDER.forEach(type => {
        const count = getTypeCount(subject, type);
        const card = document.createElement(count > 0 ? "a" : "div");
        card.className = `type-card${count <= 0 ? " disabled" : ""}`;

        if (count > 0) {
            card.href = `exam.html?subj=${encodeURIComponent(subject.id)}&type=${encodeURIComponent(type)}`;
        }

        card.innerHTML = `
      <div>
        <h3>${getTypeEmoji(type)} ${TYPE_LABELS[type]}</h3>
        <p>${count} 道题</p>
      </div>
      <p>${count > 0 ? "开始练习 →" : "暂无题目"}</p>
    `;
        typeList.appendChild(card);
    });

    finalTestBtn.addEventListener("click", () => {
        if (getTotalCount(subject) <= 0) return;
        window.location.href = `exam.html?subj=${encodeURIComponent(subject.id)}&type=all`;
    });
}

async function renderExamPage() {
    const params = getParams();
    const subjectId = params.get("subj") || "";
    const type = params.get("type") || "all";
    const progress = $("#progress");
    const stage = $("#examStage");
    const backLink = $("#examBackLink");

    if (!progress || !stage || !backLink) return;

    let subject = await getSubjectById(subjectId);
    let questions = [];

    if (type === "mistakes" || subjectId === RETRY_KEY) {
        questions = loadAllMistakeQuestions();
        backLink.href = "index.html";
    } else {
        if (!subject) {
            renderEmptyExam(stage, progress, "未找到科目，请返回首页重新选择。");
            return;
        }
        backLink.href = `subject.html?subj=${encodeURIComponent(subject.id)}`;
        questions = collectQuestions(subject, type);
    }

    questions = prepareQuestions(questions);

    if (questions.length === 0) {
        renderEmptyExam(stage, progress, type === "mistakes" ? "错题本为空。" : "当前题型暂无题目。");
        return;
    }

    const state = {
        subject,
        subjectId,
        type,
        questions,
        index: 0,
        locked: false,
        timer: null
    };

    renderCurrentQuestion(state);
}

function collectQuestions(subject, type) {
    const selectedTypes = type === "all" ? TYPE_ORDER : [type];
    const result = [];

    selectedTypes.forEach(questionType => {
        const list = Array.isArray(subject.types?.[questionType]) ? subject.types[questionType] : [];
        list.forEach((item, index) => {
            result.push({
                ...deepClone(item),
                id: buildQuestionId(subject.id, questionType, index, item.question),
                subjectId: subject.id,
                subjectName: subject.name,
                type: questionType
            });
        });
    });

    return result;
}

function prepareQuestions(questions) {
    const cloned = questions.map(q => deepClone(q));
    fisherYates(cloned);

    cloned.forEach(question => {
        if (question.type === "choice") shuffleChoiceOptions(question);
        if (question.type === "multiple") shuffleMultipleOptions(question);
    });

    return cloned;
}

function renderCurrentQuestion(state) {
    clearTimeout(state.timer);

    const stage = $("#examStage");
    const progress = $("#progress");
    const question = state.questions[state.index];

    state.locked = false;
    progress.textContent = `${state.index + 1} / ${state.questions.length}`;

    stage.innerHTML = `
    <div class="question-type">${escapeHTML(TYPE_LABELS[question.type] || "题目")}</div>
    <h2 class="question-text">${escapeHTML(question.question)}</h2>
    <div id="questionBody"></div>
    <div id="feedback"></div>
    <div id="actions" class="actions"></div>
  `;

    if (question.type === "choice") renderChoiceQuestion(state, question);
    else if (question.type === "multiple") renderMultipleQuestion(state, question);
    else if (question.type === "tf") renderTFQuestion(state, question);
    else if (question.type === "fill") renderFillQuestion(state, question);
    else if (question.type === "short" || question.type === "code") renderAnswerQuestion(state, question);
    else renderUnsupportedQuestion(state);
}

function renderChoiceQuestion(state, question) {
    const body = $("#questionBody");
    body.innerHTML = `<div class="options"></div>`;
    const options = $(".options", body);
    const groupName = `choice-${state.index}-${Date.now()}`;

    question.options.forEach((option, index) => {
        const id = `${groupName}-${index}`;
        const label = document.createElement("label");
        label.className = "option-label";
        label.setAttribute("for", id);
        label.innerHTML = `
      <input id="${id}" type="radio" name="${groupName}" value="${index}" />
      <span>${escapeHTML(option)}</span>
    `;

        const input = $("input", label);
        input.addEventListener("change", () => {
            if (state.locked) return;
            submitChoice(state, Number(input.value));
        });

        options.appendChild(label);
    });
}

function submitChoice(state, selectedIndex) {
    const question = state.questions[state.index];
    const isCorrect = selectedIndex === question.answer;
    state.locked = true;
    disableInputs();

    const labels = document.querySelectorAll(".option-label");
    labels.forEach((label, index) => {
        if (index === question.answer) label.classList.add("correct");
        if (index === selectedIndex && !isCorrect) label.classList.add("wrong");
    });

    if (isCorrect) {
        removeMistake(question);
        showFeedback(true, "回答正确！");
        autoNext(state);
    } else {
        saveMistake(question);
        showFeedback(false, `回答错误。正确答案：${escapeHTML(question.options[question.answer])}`);
        showNextButton(state);
    }
}

function renderMultipleQuestion(state, question) {
    const body = $("#questionBody");
    const actions = $("#actions");
    const groupName = `multiple-${state.index}-${Date.now()}`;

    body.innerHTML = `<div class="options"></div>`;
    const options = $(".options", body);

    question.options.forEach((option, index) => {
        const id = `${groupName}-${index}`;
        const label = document.createElement("label");
        label.className = "option-label";
        label.setAttribute("for", id);
        label.innerHTML = `
      <input id="${id}" type="checkbox" name="${groupName}" value="${index}" />
      <span>${escapeHTML(option)}</span>
    `;
        options.appendChild(label);
    });

    const submitBtn = document.createElement("button");
    submitBtn.className = "submit-btn";
    submitBtn.type = "button";
    submitBtn.disabled = true;
    submitBtn.textContent = "提交本题";
    actions.appendChild(submitBtn);

    const inputs = Array.from(document.querySelectorAll(`input[name="${groupName}"]`));

    inputs.forEach(input => {
        input.addEventListener("change", () => {
            const checkedCount = inputs.filter(item => item.checked).length;
            submitBtn.disabled = checkedCount < 2;
        });
    });

    submitBtn.addEventListener("click", () => {
        if (state.locked || submitBtn.disabled) return;

        const selected = inputs
            .filter(input => input.checked)
            .map(input => Number(input.value));

        submitMultiple(state, selected);
    });
}

function submitMultiple(state, selectedIndexes) {
    const question = state.questions[state.index];
    const correctAnswers = [...question.answers].sort((a, b) => a - b);
    const selected = [...selectedIndexes].sort((a, b) => a - b);
    const isCorrect = arraysEqual(correctAnswers, selected);

    state.locked = true;
    disableInputs();
    const submitBtn = $(".submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    const labels = document.querySelectorAll(".option-label");
    labels.forEach((label, index) => {
        if (correctAnswers.includes(index)) label.classList.add("correct");
        if (selected.includes(index) && !correctAnswers.includes(index)) label.classList.add("wrong");
    });

    if (isCorrect) {
        removeMistake(question);
        showFeedback(true, "回答正确！");
        autoNext(state);
    } else {
        saveMistake(question);
        const answerText = correctAnswers.map(index => question.options[index]).join("；");
        showFeedback(false, `回答错误。正确答案：${escapeHTML(answerText)}`);
        showNextButton(state);
    }
}

function renderTFQuestion(state, question) {
    const body = $("#questionBody");
    body.innerHTML = `
    <div class="tf-grid">
      <button class="tf-btn" type="button" data-value="true" aria-label="对">✅</button>
      <button class="tf-btn" type="button" data-value="false" aria-label="错">❌</button>
    </div>
  `;

    document.querySelectorAll(".tf-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (state.locked) return;
            submitTF(state, btn.dataset.value === "true");
        });
    });
}

function submitTF(state, selectedValue) {
    const question = state.questions[state.index];
    const isCorrect = selectedValue === question.answer;
    const explanation = question.explanation || question.analysis || "暂无解析";

    state.locked = true;
    document.querySelectorAll(".tf-btn").forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        removeMistake(question);
        showFeedback(true, `回答正确！解析：${escapeHTML(explanation)}`);
        autoNext(state);
    } else {
        saveMistake(question);
        showFeedback(false, `回答错误。正确答案：${question.answer ? "对" : "错"}。解析：${escapeHTML(explanation)}`);
        showNextButton(state);
    }
}

function renderFillQuestion(state, question) {
    const body = $("#questionBody");
    const actions = $("#actions");

    body.innerHTML = `
    <button id="showAnswerBtn" class="answer-btn" type="button">显示答案</button>
    <div id="answerBox" class="answer-box">${escapeHTML(question.answer || "暂无参考答案")}</div>
  `;

    const showAnswerBtn = $("#showAnswerBtn");
    const answerBox = $("#answerBox");

    showAnswerBtn.addEventListener("click", () => {
        answerBox.classList.add("show");
        showAnswerBtn.disabled = true;

        const nextBtn = document.createElement("button");
        nextBtn.className = "next-btn";
        nextBtn.type = "button";
        nextBtn.textContent = "下一题";
        nextBtn.addEventListener("click", () => goNext(state));
        actions.appendChild(nextBtn);
    });
}

function renderAnswerQuestion(state, question) {
    const body = $("#questionBody");
    const actions = $("#actions");

    body.innerHTML = `
    <button id="showAnswerBtn" class="answer-btn" type="button">显示答案</button>
    <div id="answerBox" class="answer-box">${escapeHTML(question.answer || "暂无参考答案")}</div>
  `;

    const showAnswerBtn = $("#showAnswerBtn");
    const answerBox = $("#answerBox");

    showAnswerBtn.addEventListener("click", () => {
        answerBox.classList.add("show");
        showAnswerBtn.disabled = true;
    });

    const nextBtn = document.createElement("button");
    nextBtn.className = "next-btn";
    nextBtn.type = "button";
    nextBtn.textContent = "下一题";
    nextBtn.addEventListener("click", () => goNext(state));
    actions.appendChild(nextBtn);
}

function renderUnsupportedQuestion(state) {
    const body = $("#questionBody");
    body.innerHTML = `<div class="empty-state">暂不支持该题型。</div>`;
    showNextButton(state);
}

function showFeedback(success, text) {
    const feedback = $("#feedback");
    if (!feedback) return;
    feedback.innerHTML = `<div class="feedback ${success ? "success" : "error"}">${text}</div>`;
}

function showNextButton(state) {
    const actions = $("#actions");
    if (!actions) return;
    const nextBtn = document.createElement("button");
    nextBtn.className = "next-btn";
    nextBtn.type = "button";
    nextBtn.textContent = "下一题";
    nextBtn.addEventListener("click", () => goNext(state));
    actions.appendChild(nextBtn);
}

function autoNext(state) {
    state.timer = window.setTimeout(() => {
        goNext(state);
    }, 1000);
}

function goNext(state) {
    clearTimeout(state.timer);

    if (state.index + 1 >= state.questions.length) {
        renderFinish(state);
        return;
    }

    state.index += 1;
    renderCurrentQuestion(state);
}

function renderFinish(state) {
    const stage = $("#examStage");
    const progress = $("#progress");
    progress.textContent = `${state.questions.length} / ${state.questions.length}`;

    stage.innerHTML = `
    <div class="finish-card">
      <h2>完成练习</h2>
      <p>本轮共完成 ${state.questions.length} 道题。</p>
      <div class="actions">
        <button id="againBtn" class="submit-btn" type="button">再练一轮</button>
        <button id="homeBtn" class="next-btn" type="button">返回首页</button>
      </div>
    </div>
  `;

    $("#againBtn").addEventListener("click", () => {
        window.location.reload();
    });

    $("#homeBtn").addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

function renderEmptyExam(stage, progress, message) {
    progress.textContent = "0 / 0";
    stage.innerHTML = `
    <div class="empty-state">
      <p>${escapeHTML(message)}</p>
      <div class="actions">
        <button class="next-btn" type="button" onclick="window.location.href='index.html'">返回首页</button>
      </div>
    </div>
  `;
}

function disableInputs() {
    document.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });
}

function shuffleChoiceOptions(question) {
    if (!Array.isArray(question.options)) return;

    const mapped = question.options.map((text, oldIndex) => ({
        text,
        wasCorrect: oldIndex === question.answer
    }));

    fisherYates(mapped);

    question.options = mapped.map(item => item.text);
    question.answer = mapped.findIndex(item => item.wasCorrect);
}

function shuffleMultipleOptions(question) {
    if (!Array.isArray(question.options) || !Array.isArray(question.answers)) return;

    const oldAnswers = new Set(question.answers);
    const mapped = question.options.map((text, oldIndex) => ({
        text,
        wasCorrect: oldAnswers.has(oldIndex)
    }));

    fisherYates(mapped);

    question.options = mapped.map(item => item.text);
    question.answers = mapped
        .map((item, newIndex) => item.wasCorrect ? newIndex : -1)
        .filter(index => index !== -1);
}

function fisherYates(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((value, index) => value === b[index]);
}

function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
}

function buildQuestionId(subjectId, type, index, questionText) {
    return `${subjectId}__${type}__${index}__${hashString(questionText)}`;
}

function hashString(input) {
    let hash = 0;
    const text = String(input);

    for (let i = 0; i < text.length; i += 1) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash |= 0;
    }

    return Math.abs(hash).toString(36);
}

function readMistakes() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : {};
        return data && typeof data === "object" ? data : {};
    } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
        return {};
    }
}

function writeMistakes(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveMistake(question) {
    if (!question || !question.subjectId || !question.id) return;

    const data = readMistakes();
    if (!Array.isArray(data[question.subjectId])) {
        data[question.subjectId] = [];
    }

    const cleanQuestion = deepClone(question);
    delete cleanQuestion._retry;

    const existingIndex = data[question.subjectId].findIndex(item => item.id === question.id);

    if (existingIndex >= 0) {
        data[question.subjectId][existingIndex] = cleanQuestion;
    } else {
        data[question.subjectId].push(cleanQuestion);
    }

    writeMistakes(data);
}

function removeMistake(question) {
    if (!question || !question.subjectId || !question.id) return;

    const data = readMistakes();
    if (!Array.isArray(data[question.subjectId])) return;

    data[question.subjectId] = data[question.subjectId].filter(item => item.id !== question.id);

    if (data[question.subjectId].length === 0) {
        delete data[question.subjectId];
    }

    writeMistakes(data);
}

function countAllMistakes() {
    const data = readMistakes();
    return Object.values(data).reduce((sum, list) => {
        return sum + (Array.isArray(list) ? list.length : 0);
    }, 0);
}

function loadAllMistakeQuestions() {
    const data = readMistakes();
    const result = [];

    Object.keys(data).forEach(subjectId => {
        const list = Array.isArray(data[subjectId]) ? data[subjectId] : [];
        list.forEach(item => {
            result.push({
                ...deepClone(item),
                _retry: true
            });
        });
    });

    return result;
}

function getTypeEmoji(type) {
    const emojis = {
        choice: "🔘",
        multiple: "☑️",
        tf: "✅",
        fill: "🧩",
        short: "✍️",
        code: "💻",
        all: "🔥"
    };

    return emojis[type] || "📌";
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
