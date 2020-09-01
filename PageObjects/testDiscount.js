const { browser, element } = require("protractor");

var testDiscount = function() {
    var eligAgeInput = element(by.id("driverage"));
    var eligGpaInput = element(by.id('drivergpa'));
    var discountGrantedText = element(by.id("discountgranted"));
    var discountAmountText = element(by.id("discountamount"));
    var testButton = element(by.id("testdiscount"));
  
    this.get = async function() {
      await browser.get('http://54.208.9.185/testdiscount');
      browser.waitForAngular();
    };
  
    this.setEligAge = async function(age) {
      eligAgeInput.clear();
      await eligAgeInput.sendKeys(age);
    };
      
    this.getEligAge = async function() {
      eligAgeInput.getText().then(text=> {
        return text;
      });
    }

    this.setEligGpa = async function(gpa) {
        eligGpaInput.clear();
        await eligGpaInput.sendKeys(gpa);
      };

    this.clickTestButton = async function() {
        await testButton.click();
    }

    this.getDiscountGrantedText = async function() {
      discountGrantedText.getText().then(text=> {
        return text;
      });
    }

    this.getDiscountAmountText = async function() {
      await discountAmountText.getText();
    }
  };

  module.exports = new testDiscount();