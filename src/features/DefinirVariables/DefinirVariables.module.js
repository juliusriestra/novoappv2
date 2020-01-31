const I = actor();
const utils = require('./../../utils/utils');
const assert = require('assert');
let wait = { retries: 5, minTimeout: 2000 };
const config = require('./DefinirVariables.locator')
let locator = config.locator;

module.exports = {

  Constructor() {
  },

  selectEstimacion(estimacion) {
    I.wait(1);
    I.retry(wait).click(locator.comboEstimacion)
    I.wait(1);
    I.retry(wait).click(locator.comboEstimacionItem(estimacion));
    I.wait(1);
  },
  
  buscarPais(pais) {
    I.wait(1);
    I.retry(wait).click(locator.buscarPais(pais));
    I.wait(1);
  },

  checkPais(item) {
    I.wait(1);
    I.retry(wait).click(locator.checkPais(item));
    I.wait(1);
  },

  ingresarCampIntro(ubicaCampo, CampIntro) {
    I.wait(1);
    I.retry(wait).click(locator.inputCampaIntro(ubicaCampo));
    I.wait(3);
    I.retry(wait).clearField(locator.inputCampaIntro(ubicaCampo));
    I.wait(3);
    I.retry(wait).fillField(locator.inputCampaIntro(ubicaCampo), CampIntro);
    I.wait(3);
  },

  validacionMensaje(msgWelcomeEsperado) {
    I.wait(1);
    I.retry(wait).see(msgWelcomeEsperado);
    I.wait(1);
  },

  accederDefinirComparables() {
    I.wait(2);
    I.retry(wait).click(locator.botonDefinirComparables);
    I.wait(1);
  },
}

