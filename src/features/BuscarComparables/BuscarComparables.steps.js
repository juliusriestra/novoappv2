const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('../DefinirVariables/DefinirVariables.module')
const comparables = require('../DefinirComparables/DefinirComparables.module')
const buscarComparables = require('./BuscarComparables.module')

let wait = { retries: 10, minTimeout: 3000 };

const I = actor();    
Given('El acceso a Buscar Comparables previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string} a la {string} un {string} el {string} la {string} y la {string}', async function (Usuario, Password, Marca, Descripcion, Proyecto, Producto, Acceso, Estimacion, MiPais, Pais, Ubicacion, CampanaIntro) {
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
});

When('Selecciono la {string} el {string} las fechas {string}, {string} y la {string}', async function (Marca, TipoProyecto, FechaDesde, FechaHasta, Descripcion) {
  buscarComparables.seleccionarMarca(Marca);
  buscarComparables.selectTipoProyecto(TipoProyecto);
  buscarComparables.ingresarRangoFechas(FechaDesde, FechaHasta);
  buscarComparables.ingresarDescripcion(Descripcion);
});

Then('Le doy Click a boton "Buscar"', function () {
  buscarComparables.ejecutarBusquedaComparables();
});

Then('Se mostrara {int} comparables', async function (cantidadComparables) {
  await buscarComparables.obtenerCantidadComparables(cantidadComparables);
});

Then('Le doy check al {int} elegido', async function (item) {
  buscarComparables.seleccionarComparable(item);
});

Then('Le damos Click al boton "Continuar"', function () {
  buscarComparables.ejecutarBotonContinuar();
});
   
Then('Se mostrara el {string}', function (Resultado) {
  buscarComparables.validacionIngresoCodigo(Resultado);
});

