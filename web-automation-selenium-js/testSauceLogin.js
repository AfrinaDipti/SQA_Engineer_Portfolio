const { Builder, By, Key, until }= require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testSuccessfulSauceDemoLogin() {
    let driver;
    try {
        let options= new chrome.Options();
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        await driver.manage().window().maximize();
        
        console.log('Navigating to SauceDemo login page...');
        await driver.get('https://www.saucedemo.com/');

        const usernameField=await driver.wait(
            until.elementLocated(By.id('user-name')),
            10000
        );
        await usernameField.sendKeys('standard_user');
        // console.log('Entered username: standard_user');

        // const passwordField= await driver.wait(
        //     until.elementLocated(By.id('password')),
        //     10000
        // );
        // await passwordField.sendKeys('secret_sauce');
        // console.log('Entered password: secret_sauce');

        // const loginButton=await driver.wait(
        //     until.elementLocated(By.id('login-button')),
        //     10000
        // );
        // await loginButton.click();
        // console.log('Clicked login button.');

        // await driver.wait(
        //     until.urlContains('inventory.html'),
        //     10000
        // );
        // console.log('Current URL: ${await driver.getCurrentUrl()}');
        // const currentUrl=await driver.getCurrentUrl();
        // if (!currentUrl.includes('inventory.html')) {
        //     throw new Error('Did not land on inventory page after login.');
        // }
        // console.log('Assertion Passed: Successfully navigated to inventory page.');

        // const productsTitleLocator=By.className('title');
        // const productsTitleElement=await driver.wait(
        //     until.elementLocated(productsTitleLocator),
        //     10000
        // );
        // if (!(await productsTitleElement.isDisplayed())) {
        //     throw new Error('Products title is not displayed.');
        // }
        // const titleText=await productsTitleElement.getText();
        // if (titleText!=='Products') {
        //     throw new Error('Products title text is incorrect. Expected "Products", got "${titleText}"');
        // }
        // console.log("Assertion Passed: 'Products' title displayed correctly.");

    } catch (error) {
        console.error('An error occurred during test execution: ${error}');
        if (driver) {
            const screenshot=await driver.takeScreenshot();
            require('fs').writeFileSync('saucedemo_login_error.png', screenshot, 'base64');
            console.log('Screenshot saved to saucedemo_login_error.png');
        }
        throw error;
    } finally {
        if (driver) {
            // await driver.quit();
            console.log('Browser closed.');
        }
    }
}

testSuccessfulSauceDemoLogin();