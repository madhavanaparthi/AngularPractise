
var login1= require("../../pageObjects/loginPage/loginPage.js");
var using= require("jasmine-data-provider");
var data1= require("E:/AngularPractise/testData/loginData.js")
var data2=require("E:/AngularPractise/testData/loginData1.json")


describe('Login Page',function()
{
    beforeEach(function()
    {
        browser.get("https://rahulshettyacademy.com/angularpractice/");
        console.log(data2.length);
    })
    //using(data1.Datadriven,function(data,description){
        
        // for(var i=0;i<data2.length;i++)
        using(data2.Dataset,function(set,description)    {

    it("verify the login",function()
    {
      
      login1.name.sendKeys(set.Name);
      login1.email.sendKeys(set.Email);
      login1.password.sendKeys(set.Password);
      login1.checkBox.click();
      login1.employmentStatus.click();
      login1.birthDay.sendKeys(set.DOB);
      login1.employmentStatus.click();
      login1.submit.click();
      expect(login1.alert.getText()).not.toEqual("x Success! The Form has been submitted successfully!.");
      login1.alertDismiss.click();
      //console.log(data2.length);
      //browser.sleep('3000');

      
      
    
    
    })
});
});


