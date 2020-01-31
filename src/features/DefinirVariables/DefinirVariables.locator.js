
config = {
    locator: {
      
        comboEstimacion: {id:'estimation'}, 
        comboEstimacionItem: (row) =>{ return '//*[@id="estimation"]/div/div[3]/div/ul/p-dropdownitem[1]/li/span[contains(text(),"' + row.toString() + '")]'},
                                       //p-table/div/div[2]/table/tbody/tr[1]/td[2]
                                       //p-table/div/div[2]/table/tbody/tr[2]/td[2]
        buscarPais: (row) => { return '//p-table/div/div[2]/table/tbody/tr/td[contains(text(),"' + row.toString() + '")]'},                                
        checkPais: (row) => { return `//table/tbody/tr[${row}]/td[1]/p-tablecheckbox/div/div[2]`},

        inputCampaIntro: (row) => {return `//table/tbody/tr[${row}]/td[4]`},
        msgcofirmacion:{xpath:'/html/body/app-root/app-home/p-toast/div/p-toastitem/div/div/div/div[1]'}, 
        
        botonDefinirComparables:{xpath:'/html/body/app-root/app-home/app-project-campaign-estimate-list/div/div/button'},
        msgConfirmacionAcceso:{xpath:'/html/body/app-root/app-home/app-comparable-define/div/div[1]/h3'}
  }
}
  module.exports.config=config;
  module.exports.locator=config.locator;