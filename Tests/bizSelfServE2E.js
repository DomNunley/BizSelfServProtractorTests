var ssdHome = require('../PageObjects/SuperStudentHome');
const { browser } = require('protractor');

describe('SuperStudentDiscount homepage', function() {
  it('should have title SuperStudentDiscount', async function() {
    await ssdHome.get();
    expect(await browser.getTitle()).toEqual('SuperStudentDiscount');
  });
});