import {Selector} from 'testcafe';

fixture('Navigate Example')
    .page('https://www.saucedemo.com/')

test('Navigate to an example page', async t =>{
    await t
        .navigateTo('http://www.google.com')
        .navigateTo('http://the-internet.herokuapp.com/iframe')


})

const iframeName = Selector('iframe#mce_0_ifr')
const textArea = Selector('body#tinymce')

test('test an Iframe', async t =>{
    await t
        .navigateTo('http://the-internet.herokuapp.com/iframe')
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'hola testcafe')
        .expect(textArea.innerText).contains('testcafe')
        .switchToMainWindow()

})

