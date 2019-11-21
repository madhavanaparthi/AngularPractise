
var login1= require("../../pageObjects/loginPage/loginPage.js");
//var using= require("jasmine-data-provider");
//var data1= require("E:/AngularPractise/testData/loginData.js")
var data2=require("E:/AngularPractise/testData/loginDetails.json")
var selectoption=require("../../util/SelectWrapper.js");
var mySelect = new selectoption(by.id('exampleFormControlSelect1'));



describe('Login Page',function()
{
    beforeEach(function()
    {
        browser.get(browser.params.url);
        //console.log(data2.Email);
    });
    for(var i=0;i<=2;i++)
    {
    it("verify the login",async ()=>
    {
      await login1.name.sendKeys(data2.form.name);
      await login1.email.sendKeys(data2.form.email);
      await login1.password.sendKeys(data2.form2.password);
      //await element(by.id("exampleFormControlSelect1"));
      //await element.all(by.tagName("option")).get(1).click();
      mySelect.selectByText("Female");
      await login1.checkBox.click();
      await login1.employmentStatus.click();
      await login1.birthDay.sendKeys(data2.form2.dob);
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
}
});


