Feature: Realizar la Definicion de Variables
  Como de usuario de Marca y Planeamiento
  Yo quiero ingresar a Definicion de Variables
  para seleccionar un pais e ingresar la campaña Intro 

@Variables @DefinicionVariablesExitosa
Scenario Outline:  Definicion de Variables exitosa
    Given El acceso a Definir Variables previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>"
    And Selecciono el combo "<Estimacion>"
    And Busco el "<ElPais>" definido
    And Le doy check al <Pais> elegido
    When Clickeo en la <Ubicacion> y digito la Campana "<CampanaIntro>"
    Then Puedo ver el "<Mensaje>" de confirmacion
    And Le doy Click en el boton "DefinirComparables"

Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso | Estimacion | ElPais  | Pais | Ubicacion | CampanaIntro | Mensaje |
  | usuario01 |   1234   | LBEL  | 5 NTS CUARTETO EK BR | PR00001686 | : 5 NTS CUARTETO EK BR |    Definir variables   | Anual | CO |   1  |  1 |  201818   | Los datos se registraron correctamente.|
    


  