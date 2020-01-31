
config = {
    locator: {
        
        selectedProducto:{xpath:'//*[@id="ui-tabpanel-0"]/div/h4'},

        clickInOnePasos: (row) => { return '//*[@id="ui-tabpanel-0"]/div/div[2]/div[1]/div/div/button[contains(text(),"' + row.toString() + '")]'},                 
        
        msgWelcomeDefiVariables:{xpath:'//div/fieldset/div[1]/h3'},
        msgWelcomeDefinirComparables: {xpath:'/html/body/app-root/app-home/app-comparable-define/div/div[1]/h3'},
        msgWelcomePreciosCostos: {xpath:'/html/body/app-root/app-home/app-price-cost-view/div[1]/div/h3'},
        
    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;
  