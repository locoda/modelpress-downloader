const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});


// news.mynavi.jp
test("Test news.mynavi.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://news.mynavi.jp/article/20200404-minamisara/",
        "news.mynavi.jp-article-20200404-minamisara-/",
        ["https://news.mynavi.jp/article/20200404-minamisara/images/001l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/002l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/003l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/004l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/005l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/006l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/007l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/008l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/009l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/010l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/011l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/012l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/013l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/014l.jpg",
            "https://news.mynavi.jp/article/20200404-minamisara/images/015l.jpg"],
        {
            preinject: async function (page) {
                try {
                    await page.goto("https://news.mynavi.jp/article/20200404-minamisara/", {timeout: 10000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
                } catch (ignored) {}
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test news.mynavi.jp image gallery", async () => {
    await testDirectDownload(
        browser,
        "https://news.mynavi.jp/photo/article/20190612-842046/images/001l.jpg",
        "news.mynavi.jp-photo-article-20190612-842046-images-001l.jpg/",
        ["https://news.mynavi.jp/article/20190612-842046/images/001l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/002l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/003l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/004l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/005l.jpg"].concat(dummyItems(12)));
});

test("Test news.mynavi.jp article with only inline image", async () => {
    await testDirectDownload(
        browser,
        "https://news.mynavi.jp/article/20200201-965589/",
        "news.mynavi.jp-article-20200201-965589-/",
        ["https://news.mynavi.jp/article/20200201-965589/index_images/index.jpg"]
    );
});