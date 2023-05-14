import { Selector } from 'testcafe';
const userName = Selector('#user-name')
const password = Selector('#password')
const loginButton = Selector('#login-button')


fixture `Fixture`
	.page('http://learningwebgl.com/lessons/lesson01/index.html');

 test('i2445', async t => {
    await t
	.setTestSpeed(0.1)
	.click('#lesson01-canvas', { offsetX: 130, offsetY: 230 });
 });


// fixture('First fixture')
//     .page('https://www.saucedemo.com/')

// test('First Test', async t => {
//     await t
//         .typeText('#user-name', 'standard_user')
//         .typeText('#password', 'secret_sauce')
//         .click('#login-button')
// })
// test('Second Test', async t => {
//     await t
//         .typeText(userName, 'standard_user')
//         .typeText(password, 'secret_sauce')
//         .click(loginButton)
//         .expect(true).notOk('this assertion will pass')

// })