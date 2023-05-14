fixture('Test speed page ')
    .page('https://devexpress.github.io/testcafe/example/')

test('Test load page speed',async t=>{
    await t
        .setPageLoadTimeout(0)
        .navigateTo('https://devexpress.github.io/testcafe/example/')
        .setPageLoadTimeout(2)
        .navigateTo('https://devexpress.github.io/testcafe/example/')

})