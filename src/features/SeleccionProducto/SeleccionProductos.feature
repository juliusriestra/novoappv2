Feature: Ingresar a uno de los Pasos seleccionando un producto del proyecto
  Como usuarios de marca y planeamiento registrados
  Yo quiero seleccionar un producto del listado de productos
  para acceder a uno de los Pasos

@Pasos @AccederPasos
Scenario Outline: Ingresar a uno de los Pasos seleccionando un producto del proyecto
    Given El listado de todos los productos previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>"
    When Selecciono el "<Producto>" elegido
    Then Le doy click al Paso "<Acceso>"
    And Se muestrara la ventana "<Ventana>" 

Examples:

| Usuario   | Password | Marca  |      Descripcion      |  Proyecto  |      Producto          |  Acceso   | Ventana            |
| usuario01 |   1234   | LBEL   | 5 NTS CUARTETO EK BR  | PR00001686 | : 5 NTS CUARTETO EK BR |   Definir variables | DEFINIR VARIABLES     |
#| usuario01 |   1234   | LBEL   | 5 NTS CUARTETO EK BR  | PR00001686 | : 5 NTS CUARTETO EK BR |   Definir comparables  | DEFINIR COMPARABLES     | 
#| usuario01 |   1234   | LBEL   | 5 NTS CUARTETO EK BR  | PR00001686 | : 5 NTS CUARTETO EK BR |   Price Cost  | PRECIOS Y COSTOS |


