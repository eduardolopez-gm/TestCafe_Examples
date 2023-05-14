import { Selector } from "testcafe";

const checkTriedTestcafe = Selector('input#tried-test-cafe')
const slider = Selector('#slider')


fixture('Drag and Hover test example')
    .page('https://devexpress.github.io/testcafe/example/')
test('test drag functionality', async t =>{
    await t
        .setTestSpeed(0.09)
        .click(checkTriedTestcafe)
        .drag(slider,360,0,{offsetX:10, offsetY:10})
})

test('test hover functionality', async t =>{
    await t
        .setTestSpeed(0.09)
        .hover('input#populate')
        .hover('input#windows')
        .hover('input#macos')
        .hover('input#linux')

})