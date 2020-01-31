
config = {                              
    locator: {                          
        botonAgregarComparable:{xpath:'//*[@id="nav-m1"]/div[2]/p-accordion/div/p-accordiontab/div[2]/div/div[4]/button'},
        
        selectPrecio: {id:'select_price'},  
        selectPrecioItem: (row) => {return '//*[@id="select_price"]/div/div[3]/div/ul/p-dropdownitem/li/span[contains(text(),"' + row.toString() + '")]'},
        
        inputPrecio: {xpath:'//*[@id="ui-accordiontab-0-content"]/div/div[5]/div[1]/div[5]/div[2]/input[1]'},

        selectCosto:{id:'select_cost'},    
        selectCostoItem: (row) => {return '//*[@id="select_cost"]/div/div[3]/div/ul/p-dropdownitem/li/span[contains(text(),"' + row.toString() + '")]'}, 
       
        inputCosto: {xpath:'//*[@id="ui-accordiontab-0-content"]/div/div[5]/div[1]/div[5]/div[2]/input[2]'},

        selectTactica: {id:'select_tactic'},                             
        selectTacticaItem: (row) => {return '//*[@id="select_tactic"]/div/div[3]/div/ul/p-dropdownitem/li/span[contains(text(),"' + row.toString() + '")]'},
                                             
        selectReceta: {id:'select_recipe'},
        selectRecetaItem: (row) => {return '//*[@id="select_recipe"]/div/div[3]/div/ul/p-dropdownitem/li/span[contains(text(),"' + row.toString() + '")]'},
        
        botonResumenEscenario:{xpath:'//*[@id="nav-m2-tab"]'}, 
        //botonCrearEscenario:{xpath:'//*[@id="nav-m1"]/div[1]/a'},
        
        //msgAccesoNuevoEscenario:{xpath:'//*[@id="exampleModalScrollable"]/div/div/div/app-scene-create/fieldset/div/div[1]/div/div/label'}
   
    }
  }
 
  module.exports.config=config;
  module.exports.locator=config.locator;
  
  