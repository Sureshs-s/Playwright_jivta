const Cm = require('../util.js')


class ProductPage{

constructor(page){
this.page = page;
this.addToCart = '.inventory_list .inventory_item:nth-child(6) button';
this.cart = '.shopping_cart_link'
}

//Reusable Method

async selectProductAndAddToCart(){

 await Cm.scrollDown(this.page , 500)
 await this.page.waitForSelector(this.addToCart)
 await this.page.click(this.addToCart);
 await Cm.scrollUp(this.page , -500);
 await this.page.click(this.cart);
}



}


module.exports = {ProductPage};