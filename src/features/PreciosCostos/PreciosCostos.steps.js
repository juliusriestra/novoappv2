const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('../DefinirVariables/DefinirVariables.module')
const comparables = require('../DefinirComparables/DefinirComparables.module')
const buscarComparables = require('../BuscarComparables/BuscarComparables.module')
const preciosCostos = require('./PreciosCostos.module')

let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('El acceso a Precios y Costos previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string} a la {string} un {string} el {string} la {string} y la {string} selecciono {string} el {string} las fechas {string}, {string} la {string} la {int} comparables y el check al {int} elegido', async function (Usuario, Password, Marca, Descripcion, Proyecto, Producto, Acceso, Estimacion, MiPais, Pais, Ubicacion, CampanaIntro, 
  MiMarca, TipoProyecto, Desde, Hasta, DescripcionComparable, CantidadComparable, Comparable) {
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
});

Then('Selecciono el precio {string} del comparable', async function(Precio) {
  preciosCostos.selectPrecioComparable(Precio);
});

Then('Selecciono el costo {string} del comparable', async function(Costo) {
  preciosCostos.selectCostoComparable(Costo);
});

Then('Selecciono la tactica {string} del comparable', async function(Tactica) {
  preciosCostos.selectTacticaComparable(Tactica);
});

Then('Selecciono la receta {string} del comparable', async function(Receta) {
  preciosCostos.selectRecetaComparable(Receta);
});
     
Then('Le doy Click al boton "ResumenSeleccionEscenario"', function(){
  preciosCostos.ingresarResumenSeleccionEscenario();
});

