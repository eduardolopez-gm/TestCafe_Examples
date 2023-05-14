
fixture('test hooks')
    .page('https://www.saucedemo.com/')
    .beforeEach(async t =>{
        await t
        //.maximizeWindow()
        .setTestSpeed(0.1)
        .setPageLoadTimeout(0)
    })
    .afterEach(async t =>{
        await t
        .navigateTo('http://www.google.com')
    })

test('first test with meta tags', async t =>{
    await t
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    .click('#login-button')
})
test('second test with meta tags', async t =>{
    await t
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    
})
test('third  test with meta tags', async t =>{
    await t
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    
})