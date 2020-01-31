const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const assert = require('assert');
const utils= require('./../../utils/utils');
const config= require('./PreciosCostos.locator');
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports = {

  Constructor(){  
  },

  accederAgregarComparables() {
    I.wait(1);
    I.retry(wait).click(locator.botonAgregarComparable);
    I.wait(5);
  },

  async validacionMsgAccesoBuscarComaparables(msgWelcomeEsperado){
    I.wait(1);
    let msgObtenido = await I.retry(wait).grabTextFrom(locator.msgAccesoBuscarComaparables);
    console.log ("El Mensaje de Acceso a Buscar Comparables es: ==>" + msgObtenido)
    I.wait(1);
    assert.equal(msgWelcomeEsperado, msgObtenido);
  },

  validacionMensajeConfirmacion(msgWelcomeEsperado) {
    I.wait(1);
    I.retry(wait).see(msgWelcomeEsperado);
    I.wait(1);
  },

  selectPrecioComparable(Precio) {
    I.wait(1);
    I.retry(wait).click(locator.selectPrecio);
    I.wait(1);
    I.retry(wait).click(locator.selectPrecioItem(Precio));
    I.wait(2);
  },

  selectCostoComparable(Costo) {
    I.wait(1);
    I.retry(wait).click(locator.selectCosto);
    I.wait(1);
    I.retry(wait).click(locator.selectCostoItem(Costo));
    I.wait(2);
  },

  selectTacticaComparable(Tactica) {
    I.wait(1);
    I.retry(wait).click(locator.selectTactica);
    I.wait(1);                  
    I.retry(wait).click(locator.selectTacticaItem(Tactica));
    I.wait(2);
  },

  selectRecetaComparable(Receta) {
    I.wait(1);
    I.retry(wait).click(locator.selectReceta)
    I.wait(1);
    I.retry(wait).click(locator.selectRecetaItem(Receta));
    I.wait(1);
  },

  ingresarResumenSeleccionEscenario() {
    I.wait(1);
    I.retry(wait).click(locator.botonResumenEscenario);
    I.wait(1);
  },
}


