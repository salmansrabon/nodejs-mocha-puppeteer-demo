const puppeteer = require('puppeteer');

let browser;
let page;


before(async () => {
    browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        devtools: false,
        args: ['--start-maximized', '--window-size=1920,1080']
    });
    page = await browser.newPage();
});


describe('`TS01` :: Search in google', () => {

    it('`TC_01`\nSearch java on google', async () => {
        await page.goto("http://www.google.com")
        await page.waitForSelector("[name='q']")
        await page.type("[name='q']", "java tutorial")
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
    });
    it('`TC_02`\nSearch javascript on google', async () => {
        await page.waitForSelector("[name='q']")
        await page.click("[name=q]",{clickCount:3})
        await page.type("[name='q']", "javascript tutorial")
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
    });
})
after(async () => {
    await browser.close();
});