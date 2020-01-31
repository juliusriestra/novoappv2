//const modulo = require('./Login.module')
const login = require('./Login.module')
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
// Add in your custom step files
  
Given('Ingreso el {string} y mi {string}', async function (Usuario, Password) {
   login.Constructor();
   login.ingresarDatos(Usuario, Password);
  });
  
When('le doy click en el boton "Ingresar"', function(){
  login.ingresar();
});

Then('puedo ver el listado de {string}', async function(msgProyectos){
  login.obtenerMsgProyectos(msgProyectos);
});

Then('Se muestra el {string}', async function(msgNoAcceso) {
  login.obtenerMsgNoAcceso(msgNoAcceso);
});