const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('../DefinirVariables/DefinirVariables.module')
const comparables = require('../DefinirComparables/DefinirComparables.module')
const buscarComparables = require('../BuscarComparables/BuscarComparables.module')
const preciosCostos = require('../PreciosCostos/PreciosCostos.module')
const resumenEscenario = require('../ResumenEscenario/ResumenEscenario.module')
const resumenPreciosCostos = require('../ResumenPreciosCostos/ResumenPreciosCostos.module')
const estimarAnual = require('./EstimarAnual.module')

let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
Given('El acceso a Resumen de Precios y Costos previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string} a la {string} un {string} el {string} la {string} y la {string} accedo a {string} Selecciono el {string} Busco el {string} a editar Selecciono el {string} en la {string} ubicacion1 Ingreso el {string} FactorPrecio Selecciono el {string} en la {int} ubicacion2 Ingreso el {string} FactorCosto Selecciono la {string} Tactica en la {int} ubicacion3 Selecciono la {string} Receta en la {int} ubicacion4, el {string} y {string}',async function (Usuario, Password, Marca, Descripcion, Proyecto, Producto, Acceso, Estimacion, MiPais, Pais, Ubicacion, CampanaIntro, PreciosCostos,PricePoint,ComparablePais,ComparablePrecio,UbicaPrecio,FactorPrecio,ComparableCosto,UbicaCosto,FactorCosto,Tactica,UbicaTactica,Receta,UbicaReceta, GrupoOferta, PrecioPosMN) {
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
  comparables.accederPreciosCostos();
  comparables.validacionMsgAccesoPreciosCostos(PreciosCostos);
  /*preciosCostos.selectPrecioComparable(Precio);
  preciosCostos.selectCostoComparable(Costo);
  preciosCostos.selectTacticaComparable(Tactica);
  preciosCostos.selectRecetaComparable(Receta);*/
  preciosCostos.ingresarResumenSeleccionEscenario();
  resumenEscenario.selectPricePoints(PricePoint)
  resumenEscenario.busquedaComparblePais(ComparablePais);
  resumenEscenario.seleccionarComparablePrecio(UbicaPrecio, ComparablePrecio);
  resumenEscenario.ingresarFactorPrecio(FactorPrecio);
  resumenEscenario.seleccionarComparableCosto(ComparableCosto, UbicaCosto);
  resumenEscenario.ingresarFactorCosto(FactorCosto);
  resumenEscenario.seleccionarComparableTactica(Tactica, UbicaTactica);
  resumenEscenario.seleccionarComparableReceta(Receta, UbicaReceta);
  resumenEscenario.ingresarResumenPreciosCostos();
  resumenPreciosCostos.selectPreciosPoints(GrupoOferta);
  resumenPreciosCostos.validacionPrecioPosMN(PrecioPosMN);
  resumenPreciosCostos.ingresarEstimacion();
});

Then('Obtenemos el {string}', function(PromPrecNormal){
  estimarAnual.validacionPromedioPrecioNormal(PromPrecNormal);
});
  
Then('Ingresamos la {string} y la {string}', function(fechInicio, fechFin) {
  estimarAnual.ingresarFechaInicioFechaFin(fechInicio, fechFin);
});

Then('Busco el {string}', function(ComparablePaisEstimar){
  estimarAnual.busquedaComparblePaisEstimar(ComparablePaisEstimar);
});

Then('Presionamos el boton "Continuar"', function(){
  estimarAnual.ingresarEstimacion();
});





