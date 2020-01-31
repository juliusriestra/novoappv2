const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('../SeleccionProducto/SeleccionProductos.module')
const variables = require('./DefinirVariables.module')
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('El acceso a Definir Variables previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string} el {string} y el {string}', async function(Usuario,Password,Marca,Descripcion,Proyecto,Producto,Paso) {
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
});
  
When('Selecciono el combo {string}', async function(selectCombo) {
  variables.selectEstimacion(selectCombo);
});

Then('Busco el {string} definido', function(ElPais){
  variables.buscarPais(ElPais);
});

Then('Le doy check al {int} elegido', async function(item) {
  variables.checkPais(item);
});

When('Clickeo en la {int} y digito la Campana {string}', async function(clickCampIntro,campIntro){
  variables.ingresarCampIntro(clickCampIntro,campIntro)
});

Then('Puedo ver el {string} de confirmacion', async function(Mensaje) {
  variables.validacionMensaje(Mensaje);
});
      
Then('Le doy Click en el boton "DefinirComparables"', function(){
  variables.accederDefinirComparables();
});

