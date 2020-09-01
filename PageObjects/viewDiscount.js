const { browser } = require("protractor");

var viewDiscount = function() {
    this.get = async function() {
      await browser.get('http://54.208.9.185/viewdiscounts');
      browser.waitForAngular();
    };
  
    this.getAgeDataByState = async function(state) {
      element.all(by.css('tr')).get(rowNumber).all(by.css('td')).get(colNumber).getText()
      grid.each(function(row) {
        var rowElems = row.$$('td');
        if(rowElems.get(0).getText() == state) {
          return rowElems.get(1).getText();
        }        
      });
    };
  };

  module.exports = new viewDiscount();