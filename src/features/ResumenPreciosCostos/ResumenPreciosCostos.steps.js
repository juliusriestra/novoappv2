const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('../DefinirVariables/DefinirVariables.module')
const comparables = require('../DefinirComparables/DefinirComparables.module')
const buscarComparables = require('../BuscarComparables/BuscarComparables.module')
const preciosCostos = require('../PreciosCostos/PreciosCostos.module')
const resumenEscenario = require('../ResumenEscenario/ResumenEscenario.module')
const resumenPreciosCostos = require('./ResumenPreciosCostos.module')

let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
                                                                                                                                                                                                                                                                                                                                                                                                              // "<Receta>" el "<PricePoint>" el "<ComparablePais>" el "<ComparablePrecio>" en la <UbicaPrecio> el "<FactorPrecio>" el "<ComparableCosto>" en la <UbicaCosto> ingreso el "<FactorCosto>" la "<Tactica>" la <UbicaTactica> la "<Receta>" la <UbicaReceta>
Given('El acceso a Resumen de Precios y Costos previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string} a la {string} un {string} el {string} la {string} y la {string} selecciono {string} el {string} las fechas {string}, {string} la {string} la {int} comparables y el check al {int} elegido selecciono el {string} el {string} la {string} la {string} el {string} el {string} el {string} en la {int} el {string} el {string} en la {int} ingreso el {string} la {string} la {int} la {string} la {int}', async function (Usuario, Password, Marca, Descripcion, Proyecto, Producto, Acceso, Estimacion, MiPais, Pais, Ubicacion, CampanaIntro, 
  MiMarca, TipoProyecto, Desde, Hasta, DescripcionComparable, CantidadComparable, Comparable, Precio, Costo, Tactica, Receta, PricePoint, ComparablePais, ComparablePrecio, UbicaPrecio, FactorPrecio, ComparableCosto, UbicaCosto, FactorCosto, MiTactica, UbicaTactica, MiReceta, UbicaReceta ) {
  login.Constructor();
  login.ingresarDatos(Usuario, Password);
  login.ingresar();

  proyecto.selectMarcaMenu(Marca);
  proyecto.ingresarDatosBusqueda(Descripcion);
  proyecto.ejecutarBusquedaEnter();
  proyecto.obtenerProyectoBuscado(Proyecto);
  proyecto.dobleClickProyecto();
  producto.seleccionarProducto(Producto);
  producto.ingresarAlPaso(Acceso);

  variables.selectEstimacion(Estimacion);
  variables.buscarPais(MiPais);
  variables.checkPais(Pais);
  variables.ingresarCampIntro(Ubicacion, CampanaIntro);
  variables.accederDefinirComparables();

  comparables.accederAgregarComparables();

  buscarComparables.seleccionarMarca(MiMarca);
  buscarComparables.selectTipoProyecto(TipoProyecto);
  buscarComparables.ingresarRangoFechas(Desde, Hasta);
  buscarComparables.ingresarDescripcion(DescripcionComparable);
  buscarComparables.ejecutarBusquedaComparables();
  buscarComparables.obtenerCantidadComparables(CantidadComparable);
  buscarComparables.seleccionarComparable(Comparable);
  buscarComparables.ejecutarBotonContinuar();
  comparables.accederPreciosCostos();

  preciosCostos.selectPrecioComparable(Precio);
  preciosCostos.selectCostoComparable(Costo);
  preciosCostos.selectTacticaComparable(Tactica);
  preciosCostos.selectRecetaComparable(Receta);
  preciosCostos.ingresarResumenSeleccionEscenario();

  resumenEscenario.selectPricePoints(PricePoint);
  resumenEscenario.busquedaComparblePais(ComparablePais);
  resumenEscenario.seleccionarComparablePrecio(UbicaPrecio, ComparablePrecio);
  resumenEscenario.ingresarFactorPrecio(FactorPrecio);
  resumenEscenario.seleccionarComparableCosto(ComparableCosto, UbicaCosto);
  resumenEscenario.ingresarFactorCosto(FactorCosto);
  resumenEscenario.seleccionarComparableCosto(ComparableCosto, UbicaCosto);
  resumenEscenario.ingresarFactorCosto(FactorCosto);
  resumenEscenario.seleccionarComparableTactica(MiTactica, UbicaTactica);
  resumenEscenario.seleccionarComparableReceta(MiReceta, UbicaReceta);
  resumenEscenario.ingresarResumenPreciosCostos();
});

When('Selecciono el {string}', async function(GrupoOferta) {
  //await resumenPreciosCostos.selectPreciosPoints(GrupoOferta);
});

Then('Obtenemos el {string}', async function(PrecioPosMN){
  await resumenPreciosCostos.validacionPrecioPosMN(PrecioPosMN);
});

Then('Busco el {string}', function(ComparablePaisPrecioCosto){
  resumenPreciosCostos.busquedaComparblePaisPreciosCostos(ComparablePaisPrecioCosto);
});

Then('Ingresamos a "Estimar"', function(){
  resumenPreciosCostos.ingresarEstimacion();
});


