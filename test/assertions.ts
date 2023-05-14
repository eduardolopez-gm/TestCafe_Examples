import {Selector} from 'testcafe'
fixture('trying assertions')
    .page('https://devexpress.github.io/testcafe/example/')
test('making assertions', async t =>{
    const nameField = Selector('input#developer-name')
    await t
    .setTestSpeed(0.1)
    .expect(nameField.value).eql('', 'Name field should be empty')
    .typeText(nameField, 'Eduardo Lopez')
    .expect(nameField.value).eql('Eduardo Lopez', 'Name field should not be empty')

})
test.skip('making assertions 2', async t =>{
    const nameField = Selector('input#developer-name')
    await t
    .setTestSpeed(0.1)
    .expect(nameField.value).eql('', 'Name field should be empty')
    .typeText(nameField, 'Eduardo Lopez')
    .expect(nameField.value).notContains('Eduardo Lopez', 'Name field should not be empty')
})
test('making assertions 3', async t =>{
    const nameField = Selector('input#developer-name')
    await t
    .setTestSpeed(0.9)
    .expect(nameField.value).eql('', 'Name field should be empty')
    .typeText(nameField, 'Eduardo Lopez')
    .expect(nameField.value).contains('Eduardo', 'Name field should not be empty')
})
test('making assertions 4', async t =>{
    const nameField = Selector('input#developer-name')
    await t
    .setTestSpeed(0.5)
    .expect(nameField.value).eql('', 'Name field should be empty')
    .typeText(nameField, 'Eduardo Lopez')
    .expect(nameField.value).notEql('Vanessa', 'Name field should not be empty')

})
// fixture('SKIP test/fixtures')
//     .page('https://www.saucedemo.com/')
//     const userName = Selector('#user-name')
//     const password = Selector('#password')
    

// test('First Test', async t => {
//     await t
//         .setTestSpeed(0.1)
//         .typeText('#user-name', 'standard_user')
//         .typeText('#password', 'secret_sauce')
//         .click('#login-button')
// })
// test.only('Second Test', async t => {
//     await t
//         .setTestSpeed(0.1)
//         .typeText(userName, 'standard_user')
//         .typeText(password, 'secret_sauce')
        

// })