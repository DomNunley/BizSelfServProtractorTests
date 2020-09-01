const { browser } = require("protractor");

var workflows = function() {
    this.navToHome = async function() {
      await browser.get('http://54.208.9.185');
      browser.waitForAngular();
    };

    this.navViewDiscounts = async function() {
      await browser.get('http://54.208.9.185/viewdiscounts');
      browser.waitForAngular();
    };

    this.navTestDiscount = async function() {
      await browser.get('http://54.208.9.185/testdiscount');
      browser.waitForAngular();
    };

    this.navToComboDiscResults = async function() {
      await browser.get('http://54.208.9.185/combtestdiscount');
      browser.waitForAngular();
    };
  };

  module.exports = new workflows();