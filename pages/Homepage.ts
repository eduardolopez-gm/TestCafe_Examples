import { Selector, t } from "testcafe";

class HomePage{
    constructor() {
        this.subtitleHeader = Selector('h2').withText('Welcome to our store');
        this.registerLink = Selector('a').withText('Register');
        this.loginLink = Selector('a').withText('Log in');
        this.shoppingCartLink = Selector('a').withText('Shopping cart');
        this.currencyList = Selector('select#customerCurrency');
    }

    public async navigateTo(url: string): Promise<void> {
        await t.navigateTo(url);
    }    
}

export default new HomePage();