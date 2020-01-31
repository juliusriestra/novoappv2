Login = {
  locator: {                      
 
            fieldUsuario: {id:'login'}, 
            
            fieldPassword: {id:'password'},

            clickLogin: {id:'login-button'},
                                 
            msgProyectos:{xpath:'/html/body/app-root/app-home/app-project-list/div/div[1]/h3'},
                                  
            msgNoAcceso:{xpath:'/html/body/app-root/login-view/div/form/div[2]/p-message/div/span[2]'}
  }
}

module.exports.login=Login;
module.exports.locator=Login.locator