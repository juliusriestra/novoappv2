const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('../DefinirVariables/DefinirVariables.module')
const comparables = require('../DefinirComparables/DefinirComparables.module')
const buscarComparables = require('../BuscarComparables/BuscarComparables.module')
const preciosCostos = require('../PreciosCostos/PreciosCostos.module')
const resumenEscenario = require('./ResumenEscenario.module')

let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
                                                                                                                                                                                                                                                                                                       
Given('El acceso a Resumen de escenarios previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string} a la {string} un {string} el {string} la {string} y la {string} selecciono {string} el {string} las fechas {string}, {string} la {string} la {int} comparables y el check al {int} elegido selecciono el {string} el {string} la {string} la {string}', async function (Usuario, Password, Marca, Descripcion, Proyecto, Producto, Acceso, Estimacion, MiPais, Pais, Ubicacion, CampanaIntro, 
  MiMarca, TipoProyecto, Desde, Hasta, DescripcionComparable, CantidadComparable, Comparable, Precio, Costo, Tactica, Receta) {
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
  
});

When('Selecciono el {string}', function(PricePoint){
  resumenEscenario.selectPricePoints(PricePoint);
});

Then('Busco el {string} a editar', function(ComparablePais) {
  resumenEscenario.busquedaComparblePais(ComparablePais);
});

Then('Selecciono el {string} en la {string} ubicacion1', function(ComparablePrecio, UbicaPrecio) {
  resumenEscenario.seleccionarComparablePrecio(UbicaPrecio, ComparablePrecio);
});

Then('Ingreso el {string} FactorPrecio', function(FactorPrecio){
  resumenEscenario.ingresarFactorPrecio(FactorPrecio);
});

Then('Selecciono el {string} en la {int} ubicacion2', async function(ComparableCosto, UbicaCosto){
  await resumenEscenario.seleccionarComparableCosto(ComparableCosto, UbicaCosto);
 });

 Then('Ingreso el {string} FactorCosto', function(FactorCosto) {
  resumenEscenario.ingresarFactorCosto(FactorCosto);
});

Then('Selecciono la {string} Tactica en la {int} ubicacion3', async function(ComparableTactica, UbicaTactica) {
  resumenEscenario.seleccionarComparableTactica(ComparableTactica, UbicaTactica);
});

Then('Selecciono la {string} Receta en la {int} ubicacion4', function(ComparableReceta, UbicaReceta) {
  resumenEscenario.seleccionarComparableReceta(ComparableReceta, UbicaReceta);
});

Then('Le doy click al boton "VerResumen"', function() {
  resumenEscenario.ingresarResumenPreciosCostos();
});

