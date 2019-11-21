
function login()
{
    this.name=element(by.name("name"));
    this.email=element(by.name("email"));
    this.password=element(by.id("exampleInputPassword1"));
    this.checkBox=element(by.id("exampleCheck1"));
    //this.gender=element(by.xpath('//select/option[1]');
    this.employmentStatus=element(by.id("inlineRadio1"));
    this.birthDay=element(by.name("bday"));
    this.submit=element(by.css("input[type='submit']"));
    this.alert=element(by.css("div[class*='dismissible']"));
    this.alertDismiss=element(by.css("a[aria-label='close']"));  




}

module.exports= new login();