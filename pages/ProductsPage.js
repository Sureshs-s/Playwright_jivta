const Utils = require('../util.js');

class ProductPage {

constructor(page){
    this.page = page;
    this.product = '.inventory_list .inventory_item:nth-child(6) button';
    this.cart = '.shopping_cart_link';
}

async selectProduct(){
    await Utils.scrollDown(this.page , 500);
    await this.page.waitForSelector(this.product)
    await this.page.click(this.product)
    await Utils.scrollUp(this.page , -500);
    await Utils.waitForTimeout(this.page , 4000)
    await this.page.click(this.cart)
}


}

module.exports = { ProductPage };