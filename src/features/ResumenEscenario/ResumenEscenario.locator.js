
config = {                              
    locator: {

        selectComboPricePoints: { xpath:'//div/div[1]/div/p-multiselect'},                                      
        selectComboItemPricePoints: (point) => {return `//li[@aria-label="${point}"]`},
       
        buscarComparblePais: (row) => { return '//p-table/div/div/div/div[2]/table/tbody/tr/td[1]/p-checkbox/label[contains(text(),"' + row.toString() + '")]'},                                        
        
        clickComparablePrecio:  { xpath:'//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr/td[9]'},                                                
        selectClickComparablePrecio: (row) => { return '//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[9]/p-celleditor/div/select'},
                                    
        factorPrecio: { xpath: '//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[10]'}, 
        factorPreciovalor: (row) => { return '//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[10]/p-celleditor/input[@type="text"]'},
              
        clickComparableCosto: (row) => { return `//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[11]`},
        selectClickComparableCosto: (row) => { return `//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[11]/p-celleditor/div/select`},
                                                                                        
        factorCosto: { xpath:'//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[12]'}, 
        factorCostoValor: (row) => { return '//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[12]/p-celleditor/input[@type="text"]'},
                                                     
        clickComparableTactica: (row) => { return `//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[13]`},
        selectClickComparableTactica: (row) => { return `//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[13]/p-celleditor/div/select`},
                                                                                                                 
        clickComparableReceta : (row) => { return `//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[14]`},
        selectClickComparableReceta: (row) => { return `//div[not(@hidden)]/div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[14]/p-celleditor/div/select`},
                                         
        botonAccesoVerResumen: { xpath:'/html/body/app-root/app-home/app-price-cost-view/nav/div[3]/button'},
 
    }
  }

  module.exports.config=config;
  module.exports.locator=config.locator;
  
  