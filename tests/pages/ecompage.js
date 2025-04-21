class ecomLoginPage {  
    constructor(page) {  
      this.page = page; // Assign the page object to this instance  
      // Locator for the "My Account" button  
      this.myAccount_btn = this.page.locator(  
        "//a[@role='button']//span[@class='title'][normalize-space()='My account']"  
      );  
      // Locator for the active login link  
      this.login_link = this.page.locator("//a[@class='list-group-item active']");  
      // Locator for the username input field  
      this.username = this.page.locator("#input-email");  
      // Locator for the password input field  
      this.password = this.page.locator("#input-password");  
      // Locator for the login button  
      this.login_btn = this.page.locator("//input[@value='Login']");  
      // Locator for the "Edit Your Account Information" link  
      this.editinfo = this.page.locator("//a[normalize-space()='Edit your account information']");  
      // Locator for the logout link  
      this.logout_link = this.page.locator("//a[contains(text(),'Logout')]");  
      // Locator for the account logout message  
      this.accountlogout_message = this.page.locator("//h1[normalize-space()='Account Logout']");  
      // Locator for the continue button after logout  
      this.continue_btn = this.page.locator("//a[text()='Continue']");  
    }  
  
    // Method to navigate to a specific URL and click on the My Account button  
    async navigatetourl(url) {  
      await this.page.goto(url); // Go to the specified URL  
      await this.myAccount_btn.click(); // Click the "My Account" button  
    }  
  
    // Method to click on the login link  
    async clickOnLoginLink() {  
      await this.login_link.click(); // Click the login link  
    }  
  
    // Method to enter the username in the username input field  
    async enterUsername(username) {  
      await this.username.fill(username); // Fill in the username  
    }  
  
    // Method to enter the password in the password input field  
    async enterPassword(password) {  
      await this.password.fill(password); // Fill in the password  
    }  
  
    // Method to click the login button  
    async clickOnLoginButton() {  
      await this.login_btn.click(); // Click the login button  
    }  
  
    // Method to verify successful login by checking visibility of the edit info link  
    async loginSuccessVerification() {  
      return await this.editinfo.isVisible(); // Verify edit info link is visible  
    }  
  
    // Method to click the logout button  
    async clickOnLogoutButton() {  
      await this.logout_link.click(); // Click the logout button  
    }  
  
    // Method to verify logout success and click the continue button  
    async logOutSccessMessage() {  
      await this.accountlogout_message.isVisible(); // Check logout message visibility  
      await this.continue_btn.click(); // Click the continue button after logout  
    }  
  }  
  
  // Export the ecomLoginPage class for use in other files  
  module.exports = ecomLoginPage;  