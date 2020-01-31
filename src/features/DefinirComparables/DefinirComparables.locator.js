
config = {
    locator: {                          
      botonAgregarComparable:{xpath:'/html/body/app-root/app-home/app-comparable-define/div/div[2]/a'},
      msgAccesoBuscarComaparables:{xpath:'/html/body/p-dynamicdialog/div[2]/div[1]/span'},
      botonIrPreciosCosto:{xpath:'/html/body/app-root/app-home/app-comparable-define/div/div[3]/button'},
      msgAccesoPreciosCostos:{class:"h3.g-title.fs20"}
  }
}
  module.exports.config=config;
  module.exports.locator=config.locator;