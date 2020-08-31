exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/*.js'],
    resultJsonOutputFile: './Report.json',
    capabilities: {
      browserName: 'chrome',
      chromeOptions :{
        args: ['--no-sandbox --headless']
      }
    }
  };