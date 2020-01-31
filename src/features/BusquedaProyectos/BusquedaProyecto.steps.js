const login = require('../Login/Login.module')
const proyecto = require('./BusquedaProyecto.module')
//const login = require('./../../pages/Login/Login.module')

let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given ('El listado de todos los proyectos previo ingreso de mi {string} y mi {string}', async function(Usuario, Password) {
  login.Constructor();
  login.ingresarDatos(Usuario, Password);
  login.ingresar();
});
 
When('Selecciono la {string} la {string} el {string} el {string} del proyecto', async function(Marca, Categoria,TipoProyecto,AnioLanzamiento) {
  proyecto.seleccionarCombosDeFiltrado(Marca,Categoria,TipoProyecto,AnioLanzamiento);
});

Then('Se mostrara el {string} solicitado', async function(Proyecto){
  proyecto.obtenerProyectoBuscado(Proyecto);
});

Then('Le damos "Dobleclick" al proyecto encontrado', function(){
  proyecto.dobleClickProyecto();
});

Then('Se mostrara los productos del proyecto {string}', async function(Mensaje){
  proyecto.obtenerProyectoAccedido(Mensaje);
});

When('Selecciono la {string} del proyecto', function(Marca) {
  proyecto.selectMarcaMenu(Marca);
});

Then('Ingreso la {string} del proyecto a buscar', async function(Descripcion){
  proyecto.ingresarDatosBusqueda(Descripcion);
});

When('Presiono "Enter" para realizar busqueda', function(){
  proyecto.ejecutarBusquedaEnter();
});
 
Then('Se mostrara los {int} primeros proyectos', async function(cantidadProyecto) {
  await proyecto.obtenerCantidadRegistros(cantidadProyecto)
});

Then('Asigno el {string} al proyecto de la fila {int}',async function(TipoProyecto, Fila){
  await proyecto.seleccionarTipoProyectoGrilla(TipoProyecto, Fila)
});


