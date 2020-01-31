Feature: Ingresar a Estimar Anual
  Como de usuario de Marca o Planeamiento yo quiero 
  ingresar a Estimar Anual para 

@EstimarAnual @EstimarAnualExitoso
Scenario Outline:  Resumen y Seleccion de escenario exitosa
  Given El acceso a Resumen de Precios y Costos previo ingreso de mi "<Usuario>" y mi "<Password>" la "<Marca>" y la "<Descripcion>" obtengo el "<Proyecto>" el "<Producto>" y el "<Acceso>" a la "<Estimacion>" un "<MiPais>" el "<Pais>" la "<Ubicacion>" y la "<CampanaIntro>" accedo a "<PreciosCostos>" Selecciono el "<PricePoint>" Busco el "<ComparablePais>" a editar Selecciono el "<ComparablePrecio>" en la "<UbicaPrecio>" ubicacion1 Ingreso el "<FactorPrecio>" FactorPrecio Selecciono el "<ComparableCosto>" en la <UbicaCosto> ubicacion2 Ingreso el "<FactorCosto>" FactorCosto Selecciono la "<Tactica>" Tactica en la <UbicaTactica> ubicacion3 Selecciono la "<Receta>" Receta en la <UbicaReceta> ubicacion4, el "<GrupoOferta>" y el "<PrecioPosMN>"
  Then Obtenemos a "<PromedioPrecioNormal>"
  And Ingresamos la "<FechaInicio>" y la "<FechaFinal>"
  And  Busco el "<ComparablePaisEstimar>"
  And Presionamos el boton "Continuar"
   
Examples:
                                                                                                                                                                                                                                                                                                                
  | Usuario   | Password | Marca |      Descripcion     |  Proyecto  |   Producto             | Acceso | Estimacion | MiPais | Pais | Ubicacion | CampanaIntro | PreciosCostos | PricePoint | ComparablePais | ComparablePrecio | UbicaPrecio | FactorPrecio | ComparableCosto | UbicaCosto | FactorCosto | Tactica | UbicaTactica | Receta | UbicaReceta | GrupoOferta | Comparables | PrecioPosMN | PromedioPrecioNormal | FechaInicio | FechaFinal | ComparablePaisEstimar |
  | usuario01 |   1234   | LBEL  | LECHE LIMPIADORA CONCENTRE | PR00001411 | 486178001 : LB CONCENTRE DEMAQ 110ML |    Definir variables    |   Anual   |  CO | 3  |  3 |  201808   | PRECIOS Y COSTOS | OP | CO |  L'BEL - LB EXL ACON RIZO 250 ML  | 1 | 50 | ESIKA - MINI CHICS DESENR 200 ML | 1 | 40 | CYZONE - CZ DANCING EDP 100 ML | 1 | Agresividad baja | 1  | PN | CYZONE - CZ DANCING EDP 100 ML | 51,000.00 | 46,412.24 | 201801 | 201806 |  CO |
                                                                                                                                                                                                                                                                                                   