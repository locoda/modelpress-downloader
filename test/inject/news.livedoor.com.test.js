const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/image_detail/22794332/?img_id=34472927", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.livedoor.com/article/image_detail/22794332/?img_id=34472927",
        "news.livedoor.com-article-image_detail-22794332-/",
        [
            "https://image.news.livedoor.com/newsimage/stf/8/1/81fc7daa63989e0ac6e0ff9a378c16cd.jpg",
            "https://image.news.livedoor.com/newsimage/stf/5/9/5952650b87dbe35869fb880e23946328.jpg",
            "https://image.news.livedoor.com/newsimage/stf/5/2/528ec63e705fa62930df271b3773bf48.jpg",
            "https://image.news.livedoor.com/newsimage/stf/3/7/37e12162cff15e6a9d82b05ced4281c4.jpg",
            "https://image.news.livedoor.com/newsimage/stf/2/f/2faba04d86939e9d47fc847ba41cd96f.jpg",
            "https://image.news.livedoor.com/newsimage/stf/4/4/4484fdfb2da0cfb067ec9f5b8ce2dd85.jpg",
            "https://image.news.livedoor.com/newsimage/stf/2/5/25f24ba33918d228b4d6611e3b4937e5.jpg",
            "https://image.news.livedoor.com/newsimage/stf/6/f/6f9e0e23648b3391d4a8c2a1cbe0b290.jpg",
            "https://image.news.livedoor.com/newsimage/stf/b/2/b2ab72f95d12e216fa7db056b27a918b.jpg"
        ]);
});

test("article/detail/24186622/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.livedoor.com/article/detail/24186622/",
        "news.livedoor.com-article-detail-24186622-/",
        [
            "https://image.news.livedoor.com/newsimage/stf/4/9/491c7_1585_d07bab04d853b96e7180cc66d254f416.jpg",
            "https://image.news.livedoor.com/newsimage/stf/4/8/48f2a_1585_0fd4b766d8907500832d70296a137cbf.jpg"
        ]);
});

test("article/detail/23986066/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.livedoor.com/article/detail/23986066/",
        "news.livedoor.com-article-detail-23986066-/",
        [
            "https://image.news.livedoor.com/newsimage/stf/7/3/73ca0_1719_032c6c90_b7dee588.png",
            "https://image.news.livedoor.com/newsimage/stf/3/7/37e4e_1719_fc67062cc833be8b4e3b3cbd0572ac9d.jpg"
        ]);
});
