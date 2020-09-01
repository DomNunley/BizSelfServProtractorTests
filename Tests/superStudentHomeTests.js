var ssdHome = require('../PageObjects/SuperStudentHome');
const { browser } = require('protractor');

describe(':Navigate to home page and validate controls', function() {
  it('should have title SuperStudentDiscount', async function() {
    await ssdHome.get();
    expect(await browser.getTitle()).toEqual('SuperStudentDiscount');
  });
});