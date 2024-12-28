
class LoginPage{

//Constructor
constructor(page){
    this.page = page;
    this.username = '[data-test="username"]';
    this.password = '[data-test="password"]';
    this.submit =  '#login-button';

}

//Resusable Functions/methods

async navigateTo(){
    await this.page.goto("https://www.saucedemo.com/")
}


async login(username , password){
  await this.page.locator(this.username).fill(username);
  await this.page.fill(this.password,password);
  await this.page.locator(this.submit).click();
}

}

module.exports = {LoginPage}