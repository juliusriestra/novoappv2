const I = actor();
const utils= require('./../../utils/utils');
const assert = require('assert');
let wait = { retries: 5, minTimeout: 2000 };
const config= require('./SeleccionProductos.locator')
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports={

Constructor(){
},

async seleccionarProducto(productoEsperado) {
  var productoObtenido = await I.grabTextFrom(locator.selectedProducto);
  console.log ("El ProductoObtenido es: ==>" +productoObtenido)
  assert.equal(productoEsperado, productoObtenido);
},

ingresarAlPaso(paso) {
  I.wait(1);
  I.retry(wait).say('Ingresar a Pasos');
  I.wait(1);
  I.retry(wait).click(locator.clickInOnePasos(paso));
  I.wait(1);
},

async validacioneAccesosDefVariables(msgWelcomeEsperado){
  var msgObtenido = await I.grabTextFrom(locator.msgWelcomeDefiVariables);
  I.wait(1);
  console.log ("El Mensaje de AccesoObtenido es: ==>" + msgObtenido)
  assert.equal(msgWelcomeEsperado, msgObtenido);
},

async validacioneAccesosDefComparables(msgWelcomeEsperado){
  var msgObtenido = await I.grabTextFrom(locator.msgWelcomeDefinirComparables);
  I.wait(1);
  console.log ("El Mensaje de AccesoObtenido es: ==>" + msgObtenido)
  assert.equal(msgWelcomeEsperado, msgObtenido);
},

async validacioneAccesosPreciosCostos(msgWelcomeEsperado){
  var msgObtenido = await I.grabTextFrom(locator.msgWelcomePreciosCostos);
  I.wait(1);
  console.log ("El Mensaje de AccesoObtenido es: ==>" + msgObtenido)
  assert.equal(msgWelcomeEsperado, msgObtenido);
},

validacionMensaje(msgWelcomeEsperado){
  I.retry(wait).see(msgWelcomeEsperado);
  I.wait(1);
}

}