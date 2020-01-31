
config = {

    locator: { 
                      
        selectMarca:{id:"internal-brand"}, 
        selectMarcaItem: (row) => {return '//*[@id="internal-brand"]/div/div[4]/div[2]/ul/p-multiselectitem/li/span[contains(text(),"' + row.toString() + '")]'},
                                                          
        selectTipoProyecto:{id:"internal-product-type"},        
        selectTipoProyectoItem: (row) => {return '//*[@id="internal-product-type"]/div/div[4]/div[2]/ul/p-multiselectitem/li/span[contains(text(),"' + row.toString() + '")]'},

        rangoDesde:{id:"rangoIni"},
        rangoFin:{id:"rangoFin"},

        inputDescripcion:{id:"filtro"},

        botonBuscar:{id:"comparable-internal-button"},
                                     
        countComparables:{xpath:'//p-table/div/div[2]/div/div[2]/table/tbody/tr'},
                                          
        selectComparable:(row) => { return '//p-table/div/div[2]/div/div[2]/table/tbody/tr/td[contains(text(),"' + row.toString() + '")]'},
                                          
        checkComparable:(row) => { return `//table/tbody/tr[${row}]/td[1]/p-tablecheckbox/div/div[2]`},
                               
        botonContinuar:{xpath:'//app-comparable-find/div/div/button'},

        codigoComparable:{xpath:'//span[2]'},

        botonPreciosCostos:{xpath:'/html/body/app-root/app-home/app-comparable-define/div/div[3]/button'}
   
    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;
  
  