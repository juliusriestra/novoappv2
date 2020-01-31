Feature: Realizar la Busqueda de Comparables
  Como de usuario de Marca o Planeamiento
  Yo quiero ingresar a Buscar de Comparables
  para ingresar estimar un Producto nuevo

@BuscarComparables @BuscarComparableExitosa
Scenario Outline:  Buscar Comparables por Marca Tipo de Producto con Rangos Desde, Hasta y Descripcion
    Given El acceso a Buscar Comparables previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>"
    When Selecciono la "<MiMarca>" el "<TipoProyecto>" las fechas "<Desde>", "<Hasta>" y la "<DescripcionComparable>"
    And Le doy Click a boton "Buscar"
    Then Se mostrara <CantidadComparable> comparables
    Then Le doy check al <Comparable> elegido
    Then Le damos Click al boton "Continuar"
    And Se mostrara el "<Resultado>"
   
    
Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso | Estimacion | MiPais | Pais | Ubicacion | CampanaIntro | BuscarComparables  | MiMarca | TipoProyecto | Desde | Hasta | DescripcionComparable        |  CantidadComparable | Comparable | Resultado |
  | usuario01 |   1234   | LBEL  | LECHE LIMPIADORA CONCENTRE | PR00001411 | 486178001 : LB CONCENTRE DEMAQ 110ML |    Definir variables   |   Anual | CO  |   1  |  1   |  201808  | BUSCAR COMPARABLES | CYZONE | CUIDADO PERSONAL/ANTIBACTERIAL/GEL | 201801 |201806 |  CZ XPRES YB GEL ANTIBAC 30 ML |          1          |      1     |  CZ - CZ XPRES YB GEL ANTIBAC 30 ML |
#| usuario01 |   1234   | LBEL  | LECHE LIMPIADORA CONCENTRE | PR00001411 | 486178001 : LB CONCENTRE DEMAQ 110ML |    Definir variables   |   Anual | CO  |   1  |  1   |  201808  | BUSCAR COMPARABLES | CYZONE | CUIDADO PERSONAL/ANTIBACTERIAL/GEL | 201801 |201806 |  CZ XPRES YB GEL ANTIBAC 30 ML |          1          |      1     | CZ - CZ XPRES YB GEL ANTIBAC 30 ML |

 