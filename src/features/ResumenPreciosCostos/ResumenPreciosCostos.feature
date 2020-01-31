Feature: Ingresar Resumen de Precios y Costos
  Como de usuario de Marca o Planeamiento yo quiero 
  ingresar a Resumen de Precio y Costos para 
  seleccionar un pais y realizar la estimacion

@ResumenPreciosCostos @ResumenPreciosCostosExitoso
Scenario Outline: Ingresar Resumen de Precios y Costos
    Given El acceso a Resumen de Precios y Costos previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>" selecciono "<MiMarca>" el "<TipoProyecto>" las fechas "<Desde>", "<Hasta>" la "<DescripcionComparable>" la <CantidadComparable> comparables y el check al <Comparable> elegido selecciono el "<Precio>" el "<Costo>" la "<Tactica>" la "<Receta>" el "<PricePoint>" el "<ComparablePais>" el "<ComparablePrecio>" en la <UbicaPrecio> el "<FactorPrecio>" el "<ComparableCosto>" en la <UbicaCosto> ingreso el "<FactorCosto>" la "<MiTactica>" la <UbicaTactica> la "<MiReceta>" la <UbicaReceta>
    When Selecciono el "<GrupoOferta>"
    And Obtenemos el "<PrecioPosMN>"
    And  Busco el "<ComparablePaisPrecioCosto>"
    Then Ingresamos a "Estimar"

Examples:
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso | Estimacion | MiPais | Pais | Ubicacion | CampanaIntro | MiMarca | TipoProyecto | Desde | Hasta | DescripcionComparable        |  CantidadComparable | Comparable |  Precio | Costo | Tactica | Receta |                                                                                                                               PricePoint | ComparablePais | ComparablePrecio                | UbicaPrecio | FactorPrecio | ComparableCosto                  | UbicaCosto | FactorCosto | MiTactica                        | UbicaTactica | MiReceta            | UbicaReceta | GrupoOferta | PrecioPosMN | ComparablePaisPrecioCosto |
  | usuario01 |   1234   | LBEL  | LECHE LIMPIADORA CONCENTRE | PR00001411 | 486178001 : LB CONCENTRE DEMAQ 110ML |    Definir variables   |   Anual | CO  |   1  |  1   |  201808  | CYZONE | CUIDADO PERSONAL/ANTIBACTERIAL/GEL | 201801 |201806 |  CZ XPRES YB GEL ANTIBAC 30 ML |          1          |      1     |  L'BEL - LB EXL ACON RIZO 250 ML | ESIKA - MINI CHICS DESENR 200 ML | CYZONE - CZ DANCING EDP 100 ML | Agresividad Alta | PN     | CO             | L'BEL - LB EXL ACON RIZO 250 ML | 1           | 50           | ESIKA - MINI CHICS DESENR 200 ML | 1          | 40          | CYZONE - CZ DANCING EDP 100 ML | 1            |  Agresividad baja | 1 | PN | 51,000.00 | CO |

                                                                                                                                                                                                                                                                                             