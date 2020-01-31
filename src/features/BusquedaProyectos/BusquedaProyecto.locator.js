
config = {

    locator: {                   
                                   
        countRegistros:{xpath:'//p-table/div/div/div/div[2]/table/tbody/tr'}, 
        
        selectMarca: {id:'brand'}, 
                                              
        selectMarcaItem: (row) => {return `//*[@id="brand"]/div/div[3]/div/ul/p-dropdownitem[${row}]/li`},
        
        selectCategoria: {id:'categoria'}, 
        selectCategoriaItem: (row) => {return `//*[@id="categoria"]/div/div[3]/div/ul/p-dropdownitem[${row}]/li`},
    
        selectTipoProyecto:{id:'tipoproyecto'},   
        selectTipoProyectoItem: (row) => {return `//*[@id="tipoproyecto"]/div/div[3]/div/ul/p-dropdownitem[${row}]/li`},

        selectAnioLanzamiento:{id:'aniolanzamiento'},
        selectAnioLanzamientoItem: (row) => {return `//*[@id="aniolanzamiento"]/div/div[3]/div/ul/p-dropdownitem[${row}]/li`},

        countItem:{xpath:'//*[@id="aniolanzamiento"]/div/div[3]/div/ul'},

        fieldBuscarProyecto:{id:"filtro"},
                                               
        proyectoSeleccionado: {xpath:'//p-table/div/div/div/div[2]/table/tbody/tr/td[1]'},

        clickTipoProyectoGrilla:(row) => { return `//div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[2]`},        
        selectProyectoCombo:(row) => { return `//div/p-table/div/div/div/div[2]/table/tbody/tr[${row}]/td[2]/p-celleditor/div/select`},
        proyectoAccedido:{class:".g-title.fs20"}
         
    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;
  
  