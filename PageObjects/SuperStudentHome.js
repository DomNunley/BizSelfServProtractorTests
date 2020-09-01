const { browser } = require("protractor");

var superStudentHome = function() {
    var eligAgeInput = element(by.id("update_driverage"));
    var eligGpaInput = element(by.id('update_drivereligiblegpa'));
    var stateInput = element(by.id('update_state'));

    var medGpaInput = element(by.id("update_drivermediumgpa"));
    var medAmountInput = element(by.id("update_discountmediumamount"));
    var highGpaInput = element(by.id("update_driverhighgpa"));
    var highAmountInput = element(by.id("update_discounthighamount"));

    var updateButton = element(by.id("updateSuperStudentDiscount"));
  
    this.get = async function() {
      await browser.get('http://54.208.9.185');
      browser.waitForAngular();
    };
  
    this.setEligAge = async function(age) {
      eligAgeInput.clear();
      await eligAgeInput.sendKeys(age);
    };

    this.setEligGpa = async function(gpa) {
        eligGpaInput.clear();
        await eligGpaInput.sendKeys(gpa);
      };

    this.clickUpdateButton = async function() {
        await updateButton.click();
    }
  };

  module.exports = new superStudentHome();