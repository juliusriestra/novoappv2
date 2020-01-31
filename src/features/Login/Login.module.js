const I = actor();
const assert = require("assert");
const utils= require('./../../utils/utils');
let wait = { retries: 5, minTimeout: 2000 };
const config= require('./Login.locator')
let locator=config.locator; 

module.exports = {
  
Constructor(){
    I.retry(wait).amOnPage('/');
},

ingresarDatos(usuario, password) {
    I.retry(wait).say('Deseo Ingresar a NovoApp');
    I.wait(1);
    I.retry(wait).fillField(locator.fieldUsuario, usuario);
    I.wait(1);
    I.retry(wait).fillField(locator.fieldPassword, password);
    I.wait(1);
  },

ingresarDatos(usuario, password) {
    I.retry(wait).say('Deseo Ingresar a NovoApp');
    I.wait(1);
    I.retry(wait).fillField(locator.fieldUsuario, usuario);
    I.wait(1);
    I.retry(wait).fillField(locator.fieldPassword, password);
    I.wait(1);
  },

ingresar(){
   I.wait(1);
   I.retry(wait).click(locator.clickLogin);
   I.wait(1);
  },

async obtenerMsgProyectos(msgProyectosEsperado) { 
  I.wait(1);
  let msgProyectosObtenido = await I.retry(wait).grabTextFrom(locator.msgProyectos);
  I.wait(1);
  console.log ("El Mensaje ProyectoObtenido es: ==>" + msgProyectosObtenido)
  assert.equal(msgProyectosEsperado, msgProyectosObtenido);
},

async obtenerMsgNoAcceso(msgNoAccesoEsperado) { 
  I.wait(1);        
  let msgNoAccesoObtenido = await I.retry(wait).grabTextFrom(locator.msgNoAcceso);
  I.wait(1);
  console.log ("El Mensaje NoAccesoObtenido es: ==>" + msgNoAccesoObtenido)
  assert.equal(msgNoAccesoEsperado, msgNoAccesoObtenido);
}

}

