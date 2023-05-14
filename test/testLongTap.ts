import { Selector } from 'testcafe';

fixture `Emulating long tap`
    .page `http://labs.rampinteractive.co.uk/touchSwipe/demos/Tap_vs_swipe.html`;

test('Emulate long tap via workaround', async t => {
    const testPanel = Selector('#test');

    await t.dragToElement(testPanel, testPanel, { speed: 0.05 });

    await t
        .expect(Selector('#textText').innerText)
        .eql('You tapped 0, double tapped 0 and long tapped 1 times on test')
});