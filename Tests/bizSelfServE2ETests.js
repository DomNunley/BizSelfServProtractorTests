var ssdHome = require('../PageObjects/superStudentHome');
var testDiscount = require('../PageObjects/testDiscount');
var viewDiscounts = require('../PageObjects/viewDiscount');
var workflows = require('../WorkFlows/workflows')
const { browser } = require('protractor');

describe('Enter age and gpa then navigate to test discount', function() {
  it('should be eligible and recieve discount', async function() {
    await ssdHome.get();
    await ssdHome.setEligAge(29);
    await ssdHome.setEligGpa(3.75);
    await ssdHome.clickUpdateButton();

    await workflows.navTestDiscount();
    await testDiscount.setEligAge(29);
    await testDiscount.setEligGpa(3.75);
    await testDiscount.clickTestButton();

    var text = testDiscount.getEligAge();
    var discountText = testDiscount.getDiscountGrantedText();
    expect(text).toContain("true");
  });

  it('should be not be eligible and not recieve discount', async function() {
    await ssdHome.get();
    await ssdHome.setEligAge(29);
    await ssdHome.setEligGpa(3.75);
    await ssdHome.clickUpdateButton();

    await workflows.navTestDiscount();
    await testDiscount.setEligAge(30);
    await testDiscount.setEligGpa(3.75);
    await testDiscount.clickTestButton();

    var discountText = await testDiscount.getDiscountGrantedText();
    expect(text).toContain("false");
  });
});