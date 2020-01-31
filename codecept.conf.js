const steps= require("./src/features");

exports.config = {
  output: './report',
  helpers: {
    Puppeteer: {
      url: 'http://alb-novoapp-dev-1984268684.us-east-1.elb.amazonaws.com:8080',
      //fullPageScreenshots: true,
      windowSize: "1500x700",
      show:true,
      chrome: {
        args: [
              //'--use-fake-ui-for-media-stream',
              //'--disable-web-security',
              //'--use-fake-device-for-media-stream',
              //'--allow-file-access-from-files',
              //'--allow-running-insecure-content',
              '--window-size=1920,1080'
        ]
    }
      
    },
    Mochawesome: {  
      uniqueScreenshotNames: true
                }
  },
  include: {},
  mocha: {
    reporterOptions: {
      reportDir: "./report/",
      reportFilename: 'FileNameNovoApp ',
      reportTitle: 'TitleNovoApp',
      ts:'',
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/**/**/*.feature',
    steps: [
          ...steps
         ]
  },
  plugins: {
    allure: {},
    screenshotOnFail: { //captura de error
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Test'
}

//console.log(module.exports.config)