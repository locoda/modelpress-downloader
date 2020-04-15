const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test times.abema.tv article with images", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/posts/7039728",
        "times.abema.tv-posts-7039728/",
        [{
            retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_0_1580522021.webp"],
            url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_0.jpg"
        },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_1_1580522021.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_1.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_2_1580522021.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_2.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_3_1580522021.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_3.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_og_4_1580522021.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_og_4.jpg"
            },
            {
                retries: ["https://hayabusa.io/abema/series/283-10/thumb.w800.v1577092222.jpg"],
                url: "https://hayabusa.io/abema/series/283-10/thumb.jpg"
            }],
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                await pageutils.scrollTo(page,50);
            }
        });
});

test("Test times.abema.tv article with images 2", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/posts/7006935",
        "times.abema.tv-posts-7006935/",
        [{
            retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_0_1560759726.webp"],
            url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_0.jpg"
        },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_13_1560759726.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_13.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_1_1560759726.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_1.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_2_1560759726.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_2.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_3_1560759726.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_3.jpg"
            }].concat(dummyItems(15)),
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                await  await pageutils.scrollTo(page,50);
            }
        });
});

test("Test times.abema.tv article with images and data url", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/posts/7040578",
        "times.abema.tv-posts-7040578/",
        [{
            retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7040578_ext_col_03_1_1581045919.webp"],
            url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_1.jpg"
        },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7040578_ext_col_03_3_1581045919.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_3.jpg"
            },
            {
                retries: ["https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7040578_ext_col_03_6_1581045919.webp"],
                url: "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_6.jpg"
            },
            {
                retries: ["https://hayabusa.io/abema/programs/90-1354_s5_p3/thumb001.w800.v1581039915.jpg"],
                url: "https://hayabusa.io/abema/programs/90-1354_s5_p3/thumb001.jpg"
            }],
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                await pageutils.scrollTo(page, 50);
            }
        });
});
