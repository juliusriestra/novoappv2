const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const assert = require('assert');
const utils= require('./../../utils/utils');
const config= require('./BuscarComparables.locator');
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports = {

  Constructor(){  
  },

  seleccionarMarca(Marca){
    I.wait(1);
    I.retry(wait).click(locator.selectMarca)
    I.wait(1);
    I.retry(wait).click(locator.selectMarcaItem(Marca));
    I.wait(1);
  },

  selectTipoProyecto(Tipo) {
    I.wait(1);
    I.retry(wait).click(locator.selectTipoProyecto);
    I.wait(1);
    I.retry(wait).click(locator.selectTipoProyectoItem(Tipo));
    I.wait(1);
  },

  ingresarRangoFechas(inputDesde, inputHasta) {
    I.wait(1);
    I.retry(wait).fillField(locator.rangoDesde, inputDesde);
    I.wait(1);
    I.retry(wait).fillField(locator.rangoFin, inputHasta);
    I.wait(1);
  },

  ingresarDescripcion(Descripcion) {
    I.wait(1);
    I.retry(wait).fillField(locator.inputDescripcion, Descripcion);
    I.wait(1);
  },

  ejecutarBusquedaComparables() {
    I.wait(1);
    I.retry(wait).click(locator.botonBuscar);
    I.wait(20);
  },

  async obtenerCantidadComparables(cantidadEsperada) {                
    let cantidadObtenida = await I.grabNumberOfVisibleElements(locator.countComparables);
    console.log("La Cantidad es: ==>" + cantidadObtenida);
    assert.equal(cantidadEsperada, cantidadObtenida);
  },

  seleccionarComparable(item) {
    I.wait(2);
    I.retry(wait).click(locator.checkComparable(item));
    I.wait(2);
  },

  ejecutarBotonContinuar() {
    I.wait(1);
    I.retry(wait).click(locator.botonContinuar);
    I.wait(20);
  },

  ejecutarBotonIrPreciosCostos() {
    I.wait(1);
    I.retry(wait).click(locator.botonPreciosCostos);
    I.wait(2);
  },

  validacionIngresoCodigo(codEsperado) {
    I.wait(2);
    I.retry(wait).see(codEsperado);
    I.wait(5);
  },

}

