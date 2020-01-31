Feature: Ingresar a resumen de escenario
  Como de usuario de Marca o Planeamiento yo quiero 
  ingresar a Resumen y seleccion de escenarios
  para mostrar mis Price points por comparables

@ResumenEscenario @ResumenSeleccionEscenarioExitoso
Scenario Outline: Resumen y Seleccion de escenario exitosa Nuevo
    Given El acceso a Resumen de escenarios previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>" selecciono "<MiMarca>" el "<TipoProyecto>" las fechas "<Desde>", "<Hasta>" la "<DescripcionComparable>" la <CantidadComparable> comparables y el check al <Comparable> elegido selecciono el "<Precio>" el "<Costo>" la "<Tactica>" la "<Receta>"
    When Selecciono el "<PricePoint>"
    Then Busco el "<ComparablePais>" a editar
    And Selecciono el "<ComparablePrecio>" en la <UbicaPrecio> ubicacion1
    Then Ingreso el "<FactorPrecio>" FactorPrecio
    And Selecciono el "<ComparableCosto>" en la <UbicaCosto> ubicacion2
    Then Ingreso el "<FactorCosto>" FactorCosto
    And Selecciono la "<Tactica>" Tactica en la <UbicaTactica> ubicacion3
    And Selecciono la "<Receta>" Receta en la <UbicaReceta> ubicacion4
    Then Le doy click al boton "VerResumen"
    
Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso | Estimacion | MiPais | Pais | Ubicacion | CampanaIntro | MiMarca | TipoProyecto | Desde | Hasta | DescripcionComparable        |  CantidadComparable | Comparable |  Precio | Costo | Tactica | Receta |                                                                                                                               PricePoint | ComparablePais | ComparablePrecio                | UbicaPrecio | FactorPrecio | ComparableCosto                  | UbicaCosto | FactorCosto | Tactica                        | UbicaTactica | Receta            | UbicaReceta |
  | usuario01 |   1234   | LBEL  | LECHE LIMPIADORA CONCENTRE | PR00001411 | 486178001 : LB CONCENTRE DEMAQ 110ML |    Definir variables   |   Anual | CO  |   1  |  1   |  201808  | CYZONE | CUIDADO PERSONAL/ANTIBACTERIAL/GEL | 201801 |201806 |  CZ XPRES YB GEL ANTIBAC 30 ML |          1          |      1     |  L'BEL - LB EXL ACON RIZO 250 ML | ESIKA - MINI CHICS DESENR 200 ML | CYZONE - CZ DANCING EDP 100 ML | Agresividad Alta | PN     | CO             | L'BEL - LB EXL ACON RIZO 250 ML | 1           | 50           | ESIKA - MINI CHICS DESENR 200 ML | 1          | 40          | CYZONE - CZ DANCING EDP 100 ML | 1            |  Agresividad baja | 1 |
