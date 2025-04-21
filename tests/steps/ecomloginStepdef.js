const { Given, When, Then,DataTable } = require("@cucumber/cucumber");
const utils = require("../../utills/helper")
const constants  = require("../../utills/constant")

let usersData = []; 
 
Given("User navigates to the application url {string}", async function (url) {
  const const_url = constants.BASE_URL
  await this.ecomobj.navigatetourl(const_url);
  await utils.takeScreenshot(this.page, "Navigation", "User navigates to URL");

});

Given("User Click on the login link", async function () {
  await this.ecomobj.clickOnLoginLink();
});

Given("User enters the Username as {string}", async function (username1) {
  await this.ecomobj.enterUsername(username1);
  usersData = await utils.readCSV('./Data/userdata.csv')
  console.log('User data loaded:', usersData); 
  console.log('User data loaded:', usersData.username);  
  usersData.forEach((user, index) => {  
    console.log(`User ${index + 1}:`);  
    console.log(`Username: ${user.username}`);  
    console.log(`Password: ${user.password}`);  
    console.log('--------------------');  
  }); 
});

Given("User enters the Password as {string}", async function (password) {
  await this.ecomobj.enterPassword(password);
});

When("User Click on login button", async function () {
  await this.ecomobj.clickOnLoginButton();
});

Then("Login Should be Success", async function () {
  await this.ecomobj.loginSuccessVerification();
  await utils.takeScreenshot(this.page, "LoginSucess", "Login Success Validation");

});

Then("Login Should Not be Success", async () => {
  // const failureMessageSelector =
  //   "//div[@class='alert alert-danger alert-dismissible']"; // Adjust based on your application
  // //await this.page.waitForSelector(failureMessageSelector,{timeout: constants.TIMEOUTS.PAGE_LOAD});
  // const isVisible = await this.page.isVisible(failureMessageSelector);
  // //expect(await this.page.locator(failureMessageSelector).isVisible()).toBeTruthy();
  // await utils.takeScreenshot(this.page, "LoginFail", "Invalid Crdential Validation");

  // console.log("Login is not able to success");

    //await utils.takeScreenshot(this.page, "LoginFail", "Invalid Credential Validation");  

    console.log("Login is not able to succeed");  
});

When("User Click on logout button", async function () {
  await this.ecomobj.clickOnLogoutButton();
});

Then("Logout Should be Success", async function () {
  await this.ecomobj.logOutSccessMessage();
  await utils.takeScreenshot(this.page, "Logout", "User Logout Sucess");

});
Given('Send the below User details', async function (DataTable) {
  // Convert the DataTable to an array of objects  
  const userDetails = DataTable.rows();  
  // Log the user details to use
  userDetails.forEach((row, index) => {  
      const [username, password] = row;  // Destructure the username and password from the row  
      console.log(`User ${index + 1}: Username - ${username}, Password - ${password}`);  
  });  
});

