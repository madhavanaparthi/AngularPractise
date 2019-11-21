var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config=
{
// The address of a running selenium server.
//seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect:true,

// Capabilities to be passed to the webdriver instance.
capabilities: {
  browserName: 'chrome'
},

// Spec patterns are relative to the configuration file location passed
// to protractor (in this example conf.js).
// They may include glob patterns.
specs: ['./testScripts/loginTest/*.js'],

onPrepare:function()
{
browser.driver.manage().window().maximize();
jasmine.getEnv().addReporter(
    new Jasmine2HtmlReporter({
      savePath: 'Reports/screenshots2'
    }))
},

params:
{
    name:'sheela',
    email:'sheela@gmail.com',
    password:'ganesh',
    dob:'05-09-1983',
    url:"https://rahulshettyacademy.com/angularpractice/"
},

// Options to be passed to Jasmine-node.
jasmineNodeOpts: {
  showColors: true, // Use colors in the command line report.
}
};
