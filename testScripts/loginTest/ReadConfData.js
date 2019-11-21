
var login1= require("../../pageObjects/loginPage/loginPage.js");
//var using= require("jasmine-data-provider");
//var data1= require("E:/AngularPractise/testData/loginData.js")
//var data2=require("E:/AngularPractise/testData/loginData.json")


describe('Login Page',function()
{
    beforeEach(function()
    {
        browser.get("https://rahulshettyacademy.com/angularpractice/");
        //console.log(data2.Email);
    })    
    it("verify the login",async ()=>
    {
      await login1.name.sendKeys(browser.params.name);
      await login1.email.sendKeys(browser.params.email);
      await login1.password.sendKeys(browser.params.password);
      await login1.checkBox.click();
      await login1.employmentStatus.click();
      await login1.birthDay.sendKeys(browser.params.dob);
      await login1.employmentStatus.click();
      await login1.submit.click();
      expect(login1.alert.getText()).not.toEqual("x Success! The Form has been submitted successfully!.");
      await login1.alertDismiss.click();
      
    //  getText().then(function(output)
    //   {
    //    console.log(output);
    //   })
      //
     // browser.sleep('5000');
    })
});


