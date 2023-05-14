import {Selector} from 'testcafe';

fixture('dropdown example')
    .page('https://devexpress.github.io/testcafe/example/')

const interfaceSelect = Selector('select#preferred-interface')
const interfaceOptions = interfaceSelect.find('option')

test('Select element test',async t => {
    await t
        .click(interfaceSelect)
        .click(interfaceOptions.withText('JavaScript API'))
})
const chooseButton = Selector('input#file-upload')
const uploadButton = Selector('input#file-submit')
test('upload file',async t => {
    await t
        .navigateTo('https://the-internet.herokuapp.com/upload')
        .setFilesToUpload(chooseButton, '../files/Test plan.png')
        .click(uploadButton)

    
})