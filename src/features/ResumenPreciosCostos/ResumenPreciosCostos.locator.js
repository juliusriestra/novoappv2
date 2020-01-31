
config = {                              
    locator: {
        
        selectComboPreciosPoints: {id:'comboPriceCost'},  
        selectComboItemPreciosPoints: (row) => { return '//*[@id="comboPriceCost"]/div/div[3]/div/ul/p-dropdownitem/li/span[contains(text(),"' + row.toString() + '")]'},
  
        precioPosMN: {xpath:'//div/div[2]/p-table/div/div/div[2]/div[2]/table/tbody/tr[1]/td[5]'},
        
        selectComboComparable: {id:'comboComparable'},
        selectComboComparableItem: (row) => { return '//*[@id="comboComparable"]/div/div[4]/div[2]/ul/p-multiselectitem/li/span[contains(text(),"' + row.toString() + '")]'},
                                                                                               
        buscarComparblePaisPrecios: (row) => { return '//p-table/div/div/div[1]/div[2]/table/tbody/tr/td[1]/p-checkbox/label[contains(text(),"' + row.toString() + '")]'},                                                                 
        botonAccesoEstimar: { xpath: '/html/body/app-root/app-home/app-price-cost-resume/div/div[3]/button[2]'},
  
    }
  }

  module.exports.config=config;
  module.exports.locator=config.locator;
  
  