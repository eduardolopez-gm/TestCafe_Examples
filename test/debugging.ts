import { Selector } from 'testcafe';
const userName = Selector('#user-name')
const password = Selector('#password')
const loginButton = Selector('#login-buttons')


fixture('First fixture')
    .page('https://www.saucedemo.com/')

test('First Test', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        //.debug()
        .click('#login-button')
})
test('Second Test', async t => {
    await t
        .typeText(userName, 'standard_user')
        .typeText(password, 'secret_sauce')
        .click(loginButton)

})
test('Third Test', async t => {
    await t
        .typeText(userName, 'standard_user')
        .typeText(password, 'secret_sauce')
        .takeElementScreenshot(password)
        .takeElementScreenshot('#login-button')
        .click('#login-button')
        .takeScreenshot()
})
test('Fourth Test', async t => {
    await t
        .typeText(userName, 'standard_user')
        .typeText(password, 'secret_sauce')
        .click(loginButton)
        .click('#login-buttonss')
})