
config = {                              
    locator: {
        
        promedioPrecioNormal: {xpath:'//div[not(@hidden)]/div/p-table/div/div/table/tbody/tr/td[4]'},
        
        fechaIncio:{xpath:'//div[not(@hidden)]/div/div[1]/form/div[1]/input'},
        fechaFin:{xpath:'//div[not(@hidden)]/div/div[1]/form/div[2]/input'},
        
        buscarComparbleEstimar: (row) => { return '//p-table/div/div/div/div[2]/table/tbody/tr/td[1]/p-checkbox/label[contains(text(),"' + row.toString() + '")]'},                                        
        
        botonContinuar: {id:'btnContinue'},
                 
    }
  }

  module.exports.config=config;
  module.exports.locator=config.locator;
  
  