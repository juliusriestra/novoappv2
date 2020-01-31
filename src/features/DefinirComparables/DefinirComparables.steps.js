const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('../DefinirVariables/DefinirVariables.module')
const comparables = require('./DefinirComparables.module')
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
  
Given('El acceso a Definicion de Comparables previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string} a la {string} un {string} el {string} la {string} y la {string}', async function(Usuario,Password,Marca,Descripcion,Proyecto,Producto,Paso,Estimacion,MiPais,Pais,Ubicacion,CampanaIntro) {
  login.Constructor();
  login.ingresarDatos(Usuario, Password);
  login.ingresar();

  proyecto.selectMarcaMenu(Marca);
  proyecto.ingresarDatosBusqueda(Descripcion);
  proyecto.ejecutarBusquedaEnter();
  proyecto.obtenerProyectoBuscado(Proyecto)
  proyecto.dobleClickProyecto();
  producto.seleccionarProducto(Producto);
  producto.ingresarAlPaso(Paso);

  variables.selectEstimacion(Estimacion);
  variables.buscarPais(MiPais);
  variables.checkPais(Pais);
  variables.ingresarCampIntro(Ubicacion,CampanaIntro);
  variables.accederDefinirComparables();
});

Then('Le doy Click a boton "AgregarComparable" en Definicion de Comparable', function(){
  comparables.accederAgregarComparables();
});
    
Then('Puedo acceder a la ventana {string} en Definicion', async function(Mensaje) {
  comparables.validacionMsgAccesoBuscarComaparables(Mensaje);
});

Then('Le doy Click a boton "PreciosyCostos"', function(){
  comparables.accederPreciosCostos();
});

Then('Puedo acceder a la ventana {string} PreciosCostos', async function(Mensaje) {
  comparables.validacionMsgAccesoPreciosCostos(Mensaje);
});
