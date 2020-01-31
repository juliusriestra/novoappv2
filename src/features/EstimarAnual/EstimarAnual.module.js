const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const assert = require('assert');
const utils= require('./../../utils/utils');
const config= require('./EstimarAnual.locator');
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports = {

  Constructor(){  
  },

  async validacionPromedioPrecioNormal(PromedioPrecioNormalEsperado){
    I.wait(1);
    let PromedioPrecioNormalObtenido = await I.retry(wait).grabTextFrom(locator.promedioPrecioNormal);
    console.log ("El Promedio Precio Normal Obtenido: ==>" + PromedioPrecioNormalObtenido)
    I.wait(1);
    assert.equal(PromedioPrecioNormalEsperado, PromedioPrecioNormalObtenido);
  },

  ingresarFechaInicioFechaFin(FecInicio, FecFin) {
    I.wait(1);
    I.retry(wait).fillField(locator.fechaIncio, FecInicio);
    I.wait(1);
    I.retry(wait).fillField(locator.fechaFin, FecFin);
    I.wait(5);
  },

  busquedaComparblePaisEstimar(Comparable) {
    I.wait(1);
    I.retry(wait).click(locator.buscarComparbleEstimar(Comparable));
    I.wait(1);
  },

  ingresarEstimacion() {
    I.wait(1);
    I.retry(wait).click(locator.botonAccesoEstimar);
    I.wait(1);
  },
}

