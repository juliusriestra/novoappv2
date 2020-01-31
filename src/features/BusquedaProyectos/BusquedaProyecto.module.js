const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const assert = require('assert');
const utils= require('./../../utils/utils');
const config= require('./BusquedaProyecto.locator')
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports = {

    Constructor(){  
    },

    seleccionarCombosDeFiltrado(marca,categoria,tipoProyecto,anioLanzamiento) {
         
        I.wait(1);
        I.retry(wait).click(locator.selectMarca)
        I.wait(1);
        I.retry(wait).click(locator.selectMarcaItem(this.selectMarca(marca)));
        I.wait(1);

        I.retry(wait).click(locator.selectCategoria)
        I.wait(1);
        I.retry(wait).click(locator.selectCategoriaItem(this.selectCategoria(categoria)));
        I.wait(1);
        
        I.retry(wait).click(locator.selectTipoProyecto)
        I.wait(1);
        I.retry(wait).click(locator.selectTipoProyectoItem(this.selectTipoProyecto(tipoProyecto)));

        I.wait(1);
        I.retry(wait).click(locator.selectAnioLanzamiento)
        I.wait(1);
        I.retry(wait).click(locator.selectAnioLanzamientoItem(this.selectAnioLanzamiento(anioLanzamiento)));
        I.wait(1);   
    },
   
    async seleccionarTipoProyectoGrilla(tipoProyecto, fila) {
        I.wait(1);
        I.retry(wait).click(locator.clickTipoProyectoGrilla(fila));
        I.wait(1);
        I.retry(wait).selectOption(locator.selectProyectoCombo(fila), tipoProyecto);
    },

    ingresarDatosBusqueda(proyecto){
        I.wait(1);
        I.retry(wait).fillField(locator.fieldBuscarProyecto, proyecto);
        I.wait(1);
    },
    
    ejecutarBusquedaEnter() {
        I.wait(1);
        I.retry(wait).pressKey('Enter');
        I.wait(1);
     },

     dobleClickProyecto() {
        I.wait(1);
        I.retry(wait).doubleClick(locator.proyectoSeleccionado);
        I.wait(1);
     },

    async obtenerProyectoBuscado(proyectoEsperado) {
        var proyectoObtenido = await I.grabTextFrom(locator.proyectoSeleccionado);
        console.log ("El Proyecto buscado es: ==>" + proyectoObtenido);
        assert.equal(proyectoEsperado, proyectoObtenido);     
     },
     
    async obtenerProyectoAccedido(msgProyectoEsperado) {         
        let msgProyectoObtenido = await I.grabTextFrom(locator.proyectoAccedido);
        console.log ("Se accedio al Proyecto : ==>" + msgProyectoObtenido)
        assert.equal(msgProyectoEsperado, msgProyectoObtenido);
     },

     async obtenerCantidadRegistros(cantidadEsperada) {
        let cantidadObtenida= await I.grabNumberOfVisibleElements(locator.countRegistros);
        console.log ("La Cantidad es: ==>" + cantidadObtenida)
        assert.equal(cantidadEsperada, cantidadObtenida);
    },

    selectMarca(marca) {
        let item=0;
        console.log ("La Marca es: ==>" + marca)
        switch(marca){
        case "LBEL":
        item = 1;
        break;
        case "ESIKA":
        item = 2;
        break;
        case "CYZONE":
        item = 3;
        break;
        }
        return item;
    },

    selectCategoria(categoria){
        let item=0;
        console.log ("La Categoria es: ==>" + categoria)
        switch(categoria){
        case "FRAGANCIAS":
        item=1;
        break;
        case "MAQUILLAJE":
        item=2;
        break;
        case "CUIDADO PERSONAL":
        item=3;
        break;
        case "TRATAMIENTO CORPORAL":
        item=4;
        break;
        case "TRATAMIENTO FACIAL":
        item=5;
        break;
        }
        return item;
    },

    selectTipoProyecto(tipoProyecto){
        let item = 0;
        console.log ("El Tipo de Proyecto es: ==>" + tipoProyecto)
        switch(tipoProyecto) {
        case "CIRCULO DE CALIDAD":
        item=1;
        break;
        case "PRODUCTO NUEVO":
        item=2;
        break;
        case "NUEVOS TONOS":
        item=3
        break;
        case "EDICIÓN LIMITADA":
        item=4;
        break;
        case "NUEVOS ACABADOS":
        item=5;
        break;
        }
        return item;
    },  

    selectAnioLanzamiento(anioLanzamiento) {
        let item=0;
        console.log ("El Anio de Lanzamiento es: ==>" + anioLanzamiento)
        switch(anioLanzamiento){
        case "2018":
        item = 1;
        break;
        case "2019":
        item = 2;
        break;
        case "2020":
        item = 3;
        break;
        }
        return item;
    },
    
    selectMarcaMenu(marca){
        I.wait(1);
        I.retry(wait).click(locator.selectMarca);
        I.wait(1);
        I.retry(wait).click(locator.selectMarcaItem(this.selectMarca(marca)));
        I.wait(1);
    },

}