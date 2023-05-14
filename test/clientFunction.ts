import { Selector, ClientFunction } from "testcafe";
fixture('Testing client parameters')
    .page('https://www.saucedemo.com/')
    
const getPageUrl = ClientFunction(()=> window.location.href )
test('test client', async t =>{
    await t
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    .expect(getPageUrl()).contains('sauce')
    .click('#login-button')
    .expect(getPageUrl()).contains('inventory')
})