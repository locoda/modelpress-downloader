const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {replaceIllegalChars} = require("../../src/inject/www.nogizaka46.com")
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("s/n46/diary/detail/59749?ima=4135&cd=MEMBER", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/diary/detail/59749?ima=4135&cd=MEMBER",
        "齋藤飛鳥-2021.01.17_11.48-汗をかいたこのコップに、触れることは出来ない。張り付いた小さな粒を壊す…/",
        [
            {
                "imageUrl": "http://dcimg.awalker.jp/i/hJHudPkiiKXSExaZJEII6FiYDVVyEtK0EggU8SCnkAdmRFkSEcVes8WPLTaPy26PI3UUTGkouTH0Cz2FOPEjh4TSUqQJky0cPqGGDAjG0QO35KH86jts1sIbZRXKAlKhviWDwkeSAwp49arBsPgMIiv9kNWBZMCC4cYJAOSWWICiGixjtcuID73DhI1t7XAZSVCPHmCN.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/hJHudPkiiKXSExaZJEII6FiYDVVyEtK0EggU8SCnkAdmRFkSEcVes8WPLTaPy26PI3UUTGkouTH0Cz2FOPEjh4TSUqQJky0cPqGGDAjG0QO35KH86jts1sIbZRXKAlKhviWDwkeSAwp49arBsPgMIiv9kNWBZMCC4cYJAOSWWICiGixjtcuID73DhI1t7XAZSVCPHmCN"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/MT8nEr6x1kiBJPvXHvl7oaybw1enUNXrT1SHAHAjQZlfEfk9MFFgBJNPL1dp3LDywyMWL5cdLaBhOW9vOCrhUb4mEB9EwFPaAPVtnKo3p8Sp7uQU4JZqvcQ2yFDSgm5vIcrNtSh7AxJPTl2nLiCP1slKASGqlcz8LHdG4VWE48q5UnDzjGemOMpSvIA5byRchSu7KgWf.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/MT8nEr6x1kiBJPvXHvl7oaybw1enUNXrT1SHAHAjQZlfEfk9MFFgBJNPL1dp3LDywyMWL5cdLaBhOW9vOCrhUb4mEB9EwFPaAPVtnKo3p8Sp7uQU4JZqvcQ2yFDSgm5vIcrNtSh7AxJPTl2nLiCP1slKASGqlcz8LHdG4VWE48q5UnDzjGemOMpSvIA5byRchSu7KgWf"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/UKMonHR3vITF0wEtTyHL2N7wvrdaFI2sHfN208KFYst8E0wLpVy00YAYgftYnvRzvsUHUxe9cyhHgbRxm0glf6er06KTbRQwqnC6HkTTqb5wKS8KF49xjbPSdVWyh7lQjyLDdOFGBvMyFNMDoWZmWDng2ssLWcmJHdNUZjaPtyjCLEC3oLNfrjE9LQRz7Z7d9ffhMUNe.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/UKMonHR3vITF0wEtTyHL2N7wvrdaFI2sHfN208KFYst8E0wLpVy00YAYgftYnvRzvsUHUxe9cyhHgbRxm0glf6er06KTbRQwqnC6HkTTqb5wKS8KF49xjbPSdVWyh7lQjyLDdOFGBvMyFNMDoWZmWDng2ssLWcmJHdNUZjaPtyjCLEC3oLNfrjE9LQRz7Z7d9ffhMUNe"
            }
        ]);
});

test("s/n46/diary/detail/65304?ima=0131", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/diary/detail/65304?ima=0131",
        "早川聖来-2022.02.14_18.36-ハッピーバレンタイン　　早川聖来/",
        [
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/0000%20%281%29_2.jpeg"
        ]);
});

test("s/n46/diary/detail/100484?ima=1429&cd=MEMBER", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/diary/detail/100484?ima=1429&cd=MEMBER",
        "5期生-2022.07.22_18.57-#さつきぶろぐ 馴染んでますか- 菅原咲月/",
        [
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/moblog/202207/mob7KmvUZ.jpg",
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/moblog/202207/mobpYfrlP.jpg",
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/moblog/202207/mobZHy2vH.jpg"
        ]);
});

test("test replaceIllegalChars", () => {
    expect(replaceIllegalChars('>')).toBe('-')
    expect(replaceIllegalChars('<')).toBe('-')
    expect(replaceIllegalChars(':')).toBe('-')
    expect(replaceIllegalChars('"')).toBe('-')
    expect(replaceIllegalChars('\'')).toBe('-')
    expect(replaceIllegalChars('/')).toBe('-')
    expect(replaceIllegalChars('>')).toBe('-')
    expect(replaceIllegalChars('\\')).toBe('-')
    expect(replaceIllegalChars('?')).toBe('-')
    expect(replaceIllegalChars('*')).toBe('-')
    expect(replaceIllegalChars('>>>')).toBe('---')
    expect(replaceIllegalChars('abc>>>bla')).toBe('abc---bla')
});
