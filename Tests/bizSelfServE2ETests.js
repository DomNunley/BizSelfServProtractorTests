var ssdHome = require('../PageObjects/SuperStudentHome');
var testDiscount = require('../PageObjects/testDiscount');
var viewDiscounts = require('../PageObjects/viewDiscount');
var workflows = require('../Workflows/workflows')
const { browser } = require('protractor');

describe('Enter age and gpa then navigate to test discount', function() {
  it('should be eligible and recieve discount', async function() {
    await ssdHome.get();
    await ssdHome.setEligAge(28);
    await ssdHome.setEligGpa(3.75);
    await ssdHome.clickUpdateButton();

    await workflows.navTestDiscount();
    await testDiscount.setEligAge(27);
    await testDiscount.setEligGpa(3.75);
    await testDiscount.clickTestButton();

    element(by.id("discountgranted")).getAttribute('value').then
    (
       x  => expect(x).toContain("true")
    );

    element(by.id("discountamount")).getAttribute('value').then
    (
       x  => expect(x).toEqual("20")
    );
    
    //Reset fields
    await ssdHome.get();
    await ssdHome.setEligAge(15);
    await ssdHome.setEligGpa(3.5);
    await ssdHome.clickUpdateButton();

  });
});