const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const assert = require('assert');
const utils= require('./../../utils/utils');
const config= require('./ResumenEscenario.locator');
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports = {

  Constructor(){  
  },

  async validacionAccesoResumenEscenario(welcomeEsperado){
    I.wait(1);
    let welcomeObtenido = await I.retry(wait).grabTextFrom(locator.validAccesoResumenEscenario);
    console.log ("El Mensaje de Acceso a Resumen de Escenario es: ==>" + welcomeObtenido)
    I.wait(1);
    assert.equal(welcomeEsperado, welcomeObtenido);
  },

  selectPricePoints(PricePoints) {
    I.wait(1);
    I.retry(wait).click(locator.selectComboPricePoints);
    I.wait(1);
    I.retry(wait).click(locator.selectComboItemPricePoints(PricePoints));
    I.wait(1);
  },

  busquedaComparblePais(Comparable) {
    I.wait(1);
    I.retry(wait).click(locator.buscarComparblePais(Comparable));
    I.wait(1);
  },
  
  seleccionarComparablePrecio(ubicacion,comparablePrecio) {
    I.wait(1);
    I.retry(wait).click(locator.clickComparablePrecio);
    I.wait(1);
    I.retry(wait).click(locator.clickComparablePrecio);
    I.wait(1);    
    I.retry(wait).selectOption(locator.selectClickComparablePrecio(ubicacion), comparablePrecio);             
    I.wait(1);
  },

  ingresarFactorPrecio(valor) {
    I.wait(5);
    I.retry(wait).click(locator.factorPrecio);
    I.wait(1);
    I.retry(wait).fillField(locator.factorPreciovalor(valor),valor);
    I.pressKey('Enter');
    I.wait(5);
  },

  async seleccionarComparableCosto(comparableCosto, ubicacion) {
    I.retry(wait).click(locator.clickComparableCosto(ubicacion));
    I.retry(wait).selectOption(locator.selectClickComparableCosto(ubicacion), comparableCosto); 
    I.wait(1);
  },
  
  ingresarFactorCosto(valor) {
    I.wait(5);
    I.retry(wait).click(locator.factorCosto);
    I.wait(1);
    I.retry(wait).fillField(locator.factorCostoValor(valor), valor);
    I.pressKey('Enter');
    I.wait(5);
  },

  async seleccionarComparableTactica(comparableTactica, ubicacion) {
    I.retry(wait).click(locator.clickComparableTactica(ubicacion));
    I.retry(wait).selectOption(locator.selectClickComparableTactica(ubicacion),comparableTactica);
    I.wait(1);
  },

  seleccionarComparableReceta(comparableReceta, ubicacion) {
    I.wait(5);
    I.retry(wait).click(locator.clickComparableReceta(ubicacion));
    I.retry(wait).selectOption(locator.selectClickComparableReceta(ubicacion), comparableReceta);
    I.wait(5);
  },

  ingresarResumenPreciosCostos() {
    I.wait(1);
    I.retry(wait).click(locator.botonAccesoVerResumen);
    I.wait(10);
  },
}

