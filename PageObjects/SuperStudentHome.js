const { browser } = require("protractor");

var SuperStudentHome = function() {
    var eligAgeInput = element(by.id("update_driverage"));
    var eligGpaInput = element(by.id('update_drivereligiblegpa'));
    var stateInput = element(by.id('update_state'));

    var medGpaInput = element(by.id("update_drivermediumgpa"));
    var medAmountInput = element(by.id("update_discountmediumamount"));
    var highGpaInput = element(by.id("update_driverhighgpa"));
    var highAmountInput = element(by.id("update_discounthighamount"));

    var updateButton = element(by.id("updateSuperStudentDiscount"));
  
    this.get = async function() {
      await browser.get('http://54.210.38.124');
      browser.waitForAngular();
    };
  
    this.setEligAge = async function(age) {
      await eligAgeInput.sendKeys(age);
    };

    this.setEligGpa = async function(gpa) {
        await eligGpaInput.sendKeys(gpa);
      };

    this.selectState = async function(state) {
        await eligAgeInput.sendKeys(age);
      };

    this.clickUpdateButton = async function() {
        await updateButton.click();
    }
  
    // Not async, returns the element
    this.getGreeting = function() {
      return greeting;
    };
  };

  module.exports = new SuperStudentHome();