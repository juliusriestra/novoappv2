Feature: Buscar proyectos seleccionando los combos de filtrado
  Como usuarios de marca y planeamiento registrados
  Yo quiero buscar un proyecto para poder seleccionarlo
  e ingresar al listado de productos del proyecto

@Busqueda @BusquedaProyectoCombosExitosa
Scenario Outline: Buscar proyectos por Marca, Categoria, Tipo de proyecto, Año de Lanzamiento
    Given El listado de todos los proyectos previo ingreso de mi "<Usuario>" y mi "<Password>"
    When Selecciono la "<Marca>" la "<Categoria>" el "<TipoProyecto>" el "<AnioLanzamiento>" del proyecto
    Then Ingreso la "<Descripcion>" del proyecto a buscar
    And Presiono "Enter" para realizar busqueda
    Then Se mostrara el "<Proyecto>" solicitado
    And Le damos "Dobleclick" al proyecto encontrado
    And Se mostrara los productos del proyecto "<Mensaje>"

Examples:
 | Usuario   | Password | Marca  | Categoria          |  TipoProyecto   | AnioLanzamiento |  Descripcion  | Proyecto   |           Mensaje                | 
 | usuario01 |   1234   | LBEL   | TRATAMIENTO FACIAL |  PRODUCTO NUEVO |      2018       |  LECHE LIMPIADORA CONCENTRE | PR00001411  |  [NO TOCAR] LECHE LIMPIADORA CONCENTRE | 

@Busqueda @BusquedaProyectoTextoExitosa
Scenario Outline:  Buscar proyectos por descripcion ingresados en la caja de texto
    Given El listado de todos los proyectos previo ingreso de mi "<Usuario>" y mi "<Password>"
    When Selecciono la "<Marca>" del proyecto
    Then Ingreso la "<Descripcion>" del proyecto a buscar
    And Presiono "Enter" para realizar busqueda
    Then Se mostrara el "<Proyecto>" solicitado
    And Le damos "Dobleclick" al proyecto encontrado
    And Se mostrara los productos del proyecto "<Mensaje>"
  
Examples:
| Usuario   | Password | Marca  |      Descripcion      |  Proyecto  |        Mensaje        | 
| usuario01 |   1234   | LBEL   | 5 NTS CUARTETO EK BR  | PR00001686 | [NO TOCAR] 5 NTS CUARTETO EK BR  |


@Busqueda @CantidadProyectos
Scenario Outline: Buscar cantidad de proyectos por Marca
    Given El listado de todos los proyectos previo ingreso de mi "<Usuario>" y mi "<Password>"
    When Selecciono la "<Marca>" del proyecto 
    Then Se mostrara los <CantidadProyecto> primeros proyectos

Examples:
 | Usuario   | Password  |  Marca | CantidadProyecto  |
 #| usuario01 | 1234      | CYZONE |      101          | 
 #| usuario01 | 1234      |  ESIKA |      203          |
  |usuario01 | 1234      |  LBEL  |      105          |
                                
@Busqueda @AsignarTipoProyecto
Scenario Outline: Buscar cantidad de proyectos por Marca y asignar Tipo
    Given El listado de todos los proyectos previo ingreso de mi "<Usuario>" y mi "<Password>"
    When Selecciono la "<Marca>" del proyecto 
    Then Asigno el "<TipoProyecto>" al proyecto de la fila <Fila> 

Examples:
 | Usuario   | Password  |  Marca  |  TipoProyecto | Fila |
 #| usuario01 | 1234      | CYZONE |               |      |
 #| usuario01 | 1234      |  ESIKA |               |      |
  |usuario01  | 1234      |  LBEL  | PRODUCTO NUEVO |   5  |
  #|usuario01 | 1234      |  LBEL  |     1         |  16  |
 
                                  

