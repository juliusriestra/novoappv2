const login = require('../Login/Login.module')
const proyecto = require('../BusquedaProyectos/BusquedaProyecto.module')
const producto = require('./SeleccionProductos.module')


let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('El listado de todos los productos previo ingreso de mi {string} y mi {string} la {string} y la {string} obtengo el {string}', async function(Usuario,Password,Marca,Descripcion,Proyecto) {
  login.Constructor();
  login.ingresarDatos(Usuario, Password);
  login.ingresar();
  proyecto.selectMarcaMenu(Marca);
  proyecto.ingresarDatosBusqueda(Descripcion);
  proyecto.ejecutarBusquedaEnter();
  proyecto.obtenerProyectoBuscado(Proyecto)
  proyecto.dobleClickProyecto();
});

When('Selecciono el {string} elegido', async function (Producto) {
  producto.seleccionarProducto(Producto);
});

Then('Le doy click al Paso {string}', function (Acceso) {
  producto.ingresarAlPaso(Acceso);
});

Then('Se muestrara la ventana {string}', function (Mensaje) {
  producto.validacionMensaje(Mensaje);
});

