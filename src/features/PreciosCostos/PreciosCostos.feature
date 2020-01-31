Feature: Realizar la Seleccion de Comparables
  Como de usuario de Marca o Planeamiento yo quiero 
  ingresar a Precio y Costos para seleccionar comparables
  y poder definir las caracteristicas del Producto nuevo

@PreciosyCostos @SeleccionComparablesExitosa
Scenario Outline: Precios y Costos seleccion de comparables exitosa
    Given El acceso a Precios y Costos previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>" selecciono "<MiMarca>" el "<TipoProyecto>" las fechas "<Desde>", "<Hasta>" la "<DescripcionComparable>" la <CantidadComparable> comparables y el check al <Comparable> elegido
    Then Selecciono el precio "<Precio>" del comparable
    And Selecciono el costo "<Costo>" del comparable 
    And Selecciono la tactica "<Tactica>" del comparable
    And Selecciono la receta "<Receta>" del comparable
    And Le doy Click al boton "ResumenSeleccionEscenario"
    
Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso | Estimacion | MiPais | Pais | Ubicacion | CampanaIntro | MiMarca | TipoProyecto | Desde | Hasta | DescripcionComparable        |  CantidadComparable | Comparable |  Precio | Costo | Tactica | Receta |
  | usuario01 |   1234   | LBEL  | LECHE LIMPIADORA CONCENTRE | PR00001411 | 486178001 : LB CONCENTRE DEMAQ 110ML |    Definir variables   |   Anual | CO  |   1  |  1   |  201808  | CYZONE | CUIDADO PERSONAL/ANTIBACTERIAL/GEL | 201801 |201806 |  CZ XPRES YB GEL ANTIBAC 30 ML |          1          |      1     |  L'BEL - LB EXL ACON RIZO 250 ML | ESIKA - MINI CHICS DESENR 200 ML | CYZONE - CZ DANCING EDP 100 ML | Agresividad Alta | 
