const I = actor();
const utils= require('./../../utils/utils');
const assert = require('assert');
let wait = { retries: 5, minTimeout: 2000 };
const config= require('./DefinirComparables.locator')
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports={

Constructor(){
},

accederAgregarComparables() {
  I.wait(1);
  I.retry(wait).click(locator.botonAgregarComparable);
  I.wait(1);
},

async validacionMsgAccesoBuscarComaparables(msgWelcomeEsperado){
  I.wait(1);
  let msgObtenido = await I.retry(wait).grabTextFrom(locator.msgAccesoBuscarComaparables);
  console.log ("El Mensaje de Acceso a Buscar Comparables es: ==>" + msgObtenido)
  I.wait(1);
  assert.equal(msgWelcomeEsperado, msgObtenido);
},

accederPreciosCostos() {
  I.wait(1);
  I.retry(wait).click(locator.botonIrPreciosCosto);
  I.wait(5);
},

async validacionMsgAccesoPreciosCostos(msgWelcomeEsperado){
  I.wait(1);
  let msgObtenido = await I.retry(wait).grabTextFrom(locator.msgAccesoPreciosCostos);
  console.log ("El Mensaje de Acceso a Precios y Costos es: ==>" + msgObtenido)
  I.wait(1);
  assert.equal(msgWelcomeEsperado, msgObtenido);
},

/*validacionMensaje(msgWelcomeEsperado){
  I.wait(1);
  I.retry(wait).see(msgWelcomeEsperado);
  I.wait(1);
}*/
}

