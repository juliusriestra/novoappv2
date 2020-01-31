const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const assert = require('assert');
const utils= require('./../../utils/utils');
const config= require('./ResumenPreciosCostos.locator');
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports = {

  Constructor(){  
  },

  async selectPreciosPoints(PrecioPoints) {
    I.wait(1);
    I.retry(wait).click(locator.selectComboPreciosPoints);
    I.wait(5);
    I.retry(wait).click(locator.selectComboItemPreciosPoints(PrecioPoints));
    I.wait(10);
  },

  async validacionPrecioPosMN(PrecioPosMNEsperado){
    I.wait(1);
    let precioPosMNObtenido = await I.retry(wait).grabTextFrom(locator.precioPosMN);
    console.log ("El precioPosMNObtenido: ==>" + precioPosMNObtenido)
    I.wait(1);
    assert.equal(PrecioPosMNEsperado, precioPosMNObtenido);
  },
  
  busquedaComparblePaisPreciosCostos(Comparable) {
    I.wait(1);
    I.retry(wait).click(locator.buscarComparblePaisPrecios(Comparable));
    I.wait(1);
  },

  ingresarEstimacion() {
    I.wait(1);
    I.retry(wait).click(locator.botonAccesoEstimar);
    I.wait(1);
  },
  
}

