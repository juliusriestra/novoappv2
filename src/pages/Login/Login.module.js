const I = actor();
const utils= require('./../../utils/utils');
let wait = { retries: 5, minTimeout: 2000 };
const config= require('./Login.locator')
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports={
  
  Constructor(){
    I.retry(wait).amOnPage('/');
    //let configJson= config.Login;
    //console.log(JSON.stringify(configJson));
    //this.locator=config.locator; 
  },

  InicioSesion(Pais, Usuario, Password) {
    I.retry(wait).say('Deseo loguearme a Somos Belcorp');
    I.retry(wait).see('¡Bienvenida');
    I.retry(wait).selectOption(locator.selectPais, Pais);
    I.retry(wait).fillField(locator.fieldUsuario, Usuario);
    I.retry(wait).fillField(locator.fieldPassword, Password);
    I.retry(wait).click(locator.clickLogin);
    //I.retry(wait).waitForText('¡Hola')        
    //I.retry(wait).waitForText('CERRAR');
    //I.retry(wait).waitForText('SESIÓN')
    //I.retry(wait).wait(5)
    I.retry(wait).waitForElement(locator.clickCerrarPopup)
    I.retry(wait).click(locator.clickCerrarPopup);
  },

  InicioSesionAdministrador(Pais, Usuario, Password) {
    I.retry(wait).say('Deseo loguearme a Somos Belcorp');
    I.retry(wait).see('¡Bienvenida');
    I.retry(wait).selectOption(locator.selectPais, Pais);
    I.retry(wait).fillField(locator.fieldUsuario, Usuario);
    I.retry(wait).fillField(locator.fieldPassword, Password);
    I.retry(wait).click(locator.clickLogin);    
    /*I.retry(wait).waitForText('¡Bienvenida')    
    I.retry(wait).see(`Hola ${Usuario}`);    
    I.retry(wait).waitForText('CERRAR');
    I.retry(wait).waitForText('SESIÓN')*/
    I.retry(wait).waitForElement(locator.clickCerrarPopup)
    I.retry(wait).click(locator.clickCerrarPopup);
},

/*Cierre de Sesion */
  CerrarSesion(){
    //I.retry(wait).amOnPage('/Bienvenida');
    //I.retry(wait).see('HOLA');
    I.retry(wait).click(locator.clickLogout);
  }
}

