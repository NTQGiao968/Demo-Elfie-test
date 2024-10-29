const ChromePage = require('../pageobjects/chrome.page');

describe('Chrome App Automation', () => {
    it('should search for "Elfie" and perform verifications', () => {
        browser.url('https://www.google.com');
        ChromePage.searchBox.setValue('Elfie');
        ChromePage.searchBox.keys('Enter');
        ChromePage.firstResult.click();
        
        expect(ChromePage.logo).toBeDisplayed();
        // Capture screenshot
        browser.saveScreenshot('./screenshots/logo.png');

        ChromePage.hamburgerMenu.click();
        expect(ChromePage.hamburgerMenu).toHaveAttrContaining('class', 'open');
        // Capture screenshot
        browser.saveScreenshot('./screenshots/hamburger.png');
        
        browser.scroll('bottom');
        expect(ChromePage.footerText).toHaveTextContaining('Copyright 2023 Elfie Pte. Ltd.');
        // Capture screenshot
        browser.saveScreenshot('./screenshots/footer.png');
    });
});
