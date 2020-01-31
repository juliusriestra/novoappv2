Feature: Realizar la Definicion de Comparables
  Como de usuario de Marca o Planeamiento
  Yo quiero ingresar a Definir Comparables
  para agregar y buscar Comparables

@Comparables @DefinicionComparablesExitosa
Scenario Outline:  Definicion de Comparable exitosa
    Given El acceso a Definicion de Comparables previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>"
    Then Le doy Click a boton "AgregarComparable" en Definicion de Comparable
    And Puedo acceder a la ventana "<BuscarComparables>" en Definicion

Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso |Estimacion | MiPais | Pais | Ubicacion | CampanaIntro | BuscarComparables |
  | usuario01 |   1234   | LBEL  | 5 NTS CUARTETO EK BR | PR00001686 | : 5 NTS CUARTETO EK BR |    Definir variables    |   Anual   | CO |  1  |  1 |  201818   | BUSCAR COMPARABLES |
  

@Comparables @DefinicionComparablesPreciosCostos
Scenario Outline:  Definicion de Comparable exitosa
    Given El acceso a Definicion de Comparables previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>"
    Then Le doy Click a boton "PreciosyCostos"
    And Puedo acceder a la ventana "<PreciosCostos>" PreciosCostos

Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso |Estimacion | MiPais  | Pais | Ubicacion | CampanaIntro | PreciosCostos |
  | usuario01 |   1234   | LBEL  | 5 NTS CUARTETO EK BR | PR00001686 | : 5 NTS CUARTETO EK BR |    Definir variables    |   Anual   | CO | 1  |  1 |  201818   | PRECIOS Y COSTOS |
