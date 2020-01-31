Feature: Realizar el ingreso al portal web NovoApp
  Como de usuario de Marca o Planeamiento
  Yo quiero ingresar al portal XXX para ver el listado de Proyectos
   
@Login @LoginExitoso
Scenario Outline:  Login exitoso
   Given Ingreso el "<Usuario>" y mi "<Password>"
   When le doy click en el boton "Ingresar" 
   Then puedo ver el listado de "<Proyectos>"

Examples:
| Usuario     | Password  |  Proyectos |
| usuario01   | 1234      |  PROYECTOS |
| usuario02   | 1234      |  PROYECTOS |


@Login @LoginFallido
Scenario Outline:  Login Fallido
    Given Ingreso el "<Usuario>" y mi "<Password>"
    When le doy click en el boton "Ingresar" 
    Then Se muestra el "<Mensaje>"

Examples:
| Usuario    | Password  |            Mensaje              |
| usuario01  | 12345     | Usuario y/o contraseña inválida |
| usuario02  | 12345     | Usuario y/o contraseña inválida |
