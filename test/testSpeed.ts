import { Selector } from "testcafe"

fixture('Test speed example')
    .page('https://devexpress.github.io/testcafe/example/')

const interfaceSelect = Selector('select#preferred-interface')
const interfaceOptions = interfaceSelect.find('option')
test('Modify test speed ',async t =>{
    await t
        .setTestSpeed(0.99)
        .click(interfaceSelect)
        .click(interfaceOptions.withText('JavaScript API'))
})

test('Modify test speed 2',async t =>{
    await t
        .setTestSpeed(0.5)
        .click(interfaceSelect)
        .click(interfaceOptions.withText('JavaScript API'))
})
test('Modify test speed 3',async t =>{
    await t
        .setTestSpeed(0.01)
        .click(interfaceSelect)
        .click(interfaceOptions.withText('JavaScript API'))
})
