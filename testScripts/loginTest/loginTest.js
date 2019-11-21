
var login1= require("../../pageObjects/loginPage/loginPage.js");
var using= require("jasmine-data-provider");
var data1= require("E:/AngularPractise/testData/loginData.js")
//var data2=require("E:/AngularPractise/testData/loginData.json")


describe('Login Page',function()
{
    beforeEach(function()
    {
        browser.get("https://rahulshettyacademy.com/angularpractice/");
        //console.log(data2.Email);
    })
    using(data1.Datadriven,function(data,description){
        

    
    it("verify the login"+":"+description,function()
    {
      login1.name.sendKeys(data.Name);
      login1.email.sendKeys(data.Email);
      login1.password.sendKeys(data.Password);
      login1.checkBox.click();
      login1.employmentStatus.click();
      login1.birthDay.sendKeys(data.DOB);
      login1.employmentStatus.click();
      login1.submit.click();
      expect(login1.alert.getText()).not.toEqual("x Success! The Form has been submitted successfully!.");
      login1.alertDismiss.click();
      
    //  getText().then(function(output)
    //   {
    //    console.log(output);
    //   })
      //
     // browser.sleep('5000');
    })
});
})

