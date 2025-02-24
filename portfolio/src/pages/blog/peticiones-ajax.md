---
layout: "../../layouts/BlogContent.astro"
title: "¿Cómo hacer peticiones AJAX?"
---

# ¿Cómo hacer peticiones AJAX?

Los servicios web son aplicaciones diseñadas para establecer comunicaciones entre programas, para lograrlo, se establecen reglas en la estructura de comunicación y las direcciones para conectar ambos programas.

Las páginas web funcionan con la arquitectura **cliente/servidor** El servidor es un computador que almacenan la información (también lo conocemos como la nube) y el cliente es quien consumen la información de estos computadores, desde un celular, tablet, computador, entre otros...

Una característica a tener en cuenta es que los servicios web no dependen de una tecnología específica para tener comunicación en tre programas. Esto quiere decir que un servidor puede estar programado en JAVA, y yo el cliente puede usar Javascript (u otra tecnología) para comunicarse con el servidor.

El protocolo REST está basado fuertemente en los estados **HTTP**. Las acciones que se pueden realizar se especifican con los verbos HTTP, la representación de este recurso no está "casada" con ninguna tecnología, podemos hacer uso de XML, HTML o JSON.

## Qué es Fetch()

Cómo ya sabrás me apasiona el fútbol, así que en mis palabras te voy explicar cómo lo entiendo.
Mi equipo (Mi página web) Arlo FC está en mitad de un partido, el jugador con la camiseta 10 acaba de hacer un pase al delantero del equipo (esto sería una petición al servidor), el pase lo recibe el delantero y hace ¡gooool!, el marcador del partido ahora es 1-0 (La respuesta ha sido efectiva y el servidor me ha devuelto información).

Desmenucemoslo un poco más, una petición **fetch()** es el pase a un jugador en un partido de futbol, para hacer el pase debo saber a quien se lo voy a hacer, si el jugador recibe el balón es un pase efectivo, si no lo recibe es un error (puede ser error mio o del jugador).
En términos técnicos hacer un pase a un jugador es como si estuviera haciendo una petición a una url, debo saber la url a dónde lo estoy haciendo, si la url me retorna información es porque he hecho bien el pase, si no, es porque he hecho mal el pase o el jugador no ha recibido controlado el balón.

```sh
fetch(url): El jugador a quien le voy a hacer el pase (hace la petición a la url).
.then((respuesta) => respuesta.json()): El jugador recibe el pase y hace algo con el balón (He hecho la consulta a una url de forma exitosa).
.then((datos) => console.log(datos)): El jugador patea al arco y hace gol. (He recibido información del servidor)
.catch((error) => console.error(error)): El jugador patea al arco pero no hace el gol (No he recibido información del servidor)
```

### Está sería la consulta a un servidor real

```sh
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(
    function(response){ // Significa que he recibido información de la promesa al servidor
      response.json().then( // Si la información viene en formato Json la convierto en data
        function(data){ // Si hay información por consumir la veo en consola
          console.log(data)
        }
      )
    }
  )
```

<details>
  <summary>Parámetros Query</summary>
  Los parametros Query se usan para especificar el contenido que quiero consultar, en la url a la que le estoy haciendo la petición se debe poner un **?** y el valor que quiero consultar, por ejemplo:

  ```sh
  fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  ```

  Si quiero que sea el parametro sea variable se establecen comillas de backtrip (``) y agrego corchetes {}

  ```sh
  let user = 1
  fetch(`https://jsonplaceholder.typicode.com/posts?{user}`)
  ```

  ## Veamoslo nuevamente en términos futbolísticos

  Analicemos la siguiente petición


  ```sh
  let parametros = {
    userId: 1,
    _limit: 3
  };

  let url = new URL('https://jsonplaceholder.typicode.com/posts');

  Object.keys(parametros).forEach(paramKey => {
    url.searchParams.append(
      paramKey,
      parametros[paramKey]
    )
  });

  fetch(url).then(r => r.json()).then(data => console.log(data));
  ```


  Imagina que el entrenador (tu código) establece ciertas instrucciones para la jugada. Aquí le dice al equipo que se centre en el jugador con la camiseta número 1 y que solo se muestren los primeros 3 pases o acciones importantes.
  ```sh
  let parametros = {
    userId: 1,
    _limit: 3
  };
  ```
  userId: 1: Es como decir “quiero que juegue el jugador 1”.
  _limit: 3: Es como establecer “solo quiero ver las 3 jugadas más destacadas”.

  Elegir el campo de juego (la URL):

  ```sh
  let url = new URL('https://jsonplaceholder.typicode.com/posts');
  ```
  Este es el estadio donde se va a realizar la jugada. La URL es la cancha donde se desarrollará el partido (la consulta a la API).

  Preparar la estrategia (agregar parámetros a la URL):
  ```sh
  Object.keys(parametros).forEach(paramKey => {
    url.searchParams.append(
      paramKey,
      parametros[paramKey]
    );
  });
  ```
  Aquí, el entrenador pasa las instrucciones específicas al capitán del equipo, que las distribuye a todo el equipo antes de iniciar la jugada. Cada parámetro es como una indicación en la táctica:

  - Se recorre cada instrucción (cada clave del objeto parametros).
  - Se añade esa instrucción a la estrategia general del partido (la URL), para que el equipo sepa a quién buscar y qué limitar en la jugada.
  - Por ejemplo, al agregar userId=1 y _limit=3 a la URL, es como decir “En este partido, centraremos la jugada en el jugador 1 y solo veremos las 3 mejores jugadas”.
  - Ejecutar la jugada (hacer la petición con fetch):

  ```sh
  fetch(url).then(r => r.json()).then(data => console.log(data));
  ```
  fetch(url): Es como enviar el balón hacia el campo con las instrucciones definidas. El balón (la solicitud) se envía al servidor (el rival o el árbitro) que está en la cancha (la URL).
  .then(r => r.json()): Una vez que el balón llega y es controlado, se transforma en datos útiles. Es como si el jugador que recibe el balón (la respuesta del servidor) lo controlara y preparara la jugada para que todos entiendan lo que pasó (convertir la respuesta en JSON).
  .then(data => console.log(data)): Finalmente, se registra el resultado de la jugada en el marcador (la consola), mostrando los datos obtenidos. Es como ver el resultado del pase, el control del balón y, en definitiva, el gol anotado en el partido.

  ### Resumen
  Parámetros: Instrucciones tácticas (por ejemplo, enfócate en el jugador 1, muestra solo 3 jugadas).
  URL: El campo de juego o estadio donde se desarrolla la acción.
  Agregar parámetros a la URL: Comunicar la estrategia antes de iniciar la jugada.
  fetch(): Enviar el balón con las instrucciones.
  Conversión a JSON y registro de datos: Controlar la jugada, interpretar lo que sucedió y anotar el resultado en el marcador.

</details>

<details>
<summary>Métodos HTTP</summary>

1. GET
Qué hace: Solicita datos al servidor.
Analogía:
Imagina que le pides a un compañero que te muestre el marcador del partido o que te pase información sobre la formación del equipo rival.
Ejemplo: "Dame los detalles de los jugadores" (solicitas información sin modificar nada).

2. POST
Qué hace: Envía datos al servidor para crear un nuevo recurso.
Analogía:
Es como iniciar una jugada ofensiva enviando el balón a un delantero que, a partir de ese pase, intenta anotar. Estás “creando” una situación nueva en el juego.
Ejemplo: "Registrar un nuevo jugador en el equipo" (creas un nuevo registro en la base de datos).

3. PUT
Qué hace: Reemplaza completamente la información de un recurso existente.
Analogía:
Imagina que, durante un partido, decides cambiar toda la estrategia de una jugada en curso. Es como si cambiaras la formación completa de un sector del equipo, sustituyendo cada detalle por uno nuevo.
Ejemplo: "Actualizar todos los datos del perfil de un jugador" (reemplazas toda la información, no solo una parte).

4. PATCH
Qué hace: Modifica parcialmente un recurso existente.
Analogía:
Es similar a PUT, pero en vez de cambiar la jugada completa, solo ajustas algunos detalles, como cambiar la posición de un jugador o corregir un error en la estrategia.
Ejemplo: "Modificar únicamente el número de camiseta de un jugador" (solo ajustas una parte del recurso).

5. DELETE
Qué hace: Elimina un recurso del servidor.
Analogía:
Imagina que decides quitar a un jugador del campo porque no está rindiendo. Con DELETE, le pides al servidor que retire o elimine ese recurso.
Ejemplo: "Eliminar un comentario en una publicación" (retiras información del servidor).

6. HEAD
Qué hace: Solicita los encabezados de la respuesta, sin el cuerpo.
Analogía:
Es como hacer una revisión rápida del terreno o pedirle a un compañero que te dé un resumen rápido de la situación, sin entrar en todos los detalles.
Ejemplo: "Verificar si una página está disponible sin descargar todo el contenido" (consultas el estado sin obtener el cuerpo completo de la respuesta).

7. OPTIONS
Qué hace: Consulta al servidor sobre qué métodos HTTP están permitidos para una URL.
Analogía:
Es como preguntar al árbitro o a tus compañeros “¿Qué jugadas podemos ejecutar en esta situación?”. Te informa sobre las opciones tácticas disponibles antes de tomar una decisión.
Ejemplo: "Saber qué acciones se pueden realizar en una ruta específica" (te informa de las posibilidades).
</details>


<details>
  <summary>Parámetros en el body</summary>
  El body tendrá la información que vamos a consultar, enviar, o actualizar. Son las acciones que podemos hacer durante el partido.
  Veamos como se agrega en el código:

```sh
let postParams = {
  title: 'Creando un nombre de jugador',
  body: 'Arley Guerrero',
  userId: 1
}

let url = new URL('https://jsonplaceholder.typicode.com/posts');

fetch(url, {
  method: 'POST', // El tipo de jugada que vamos a hacer
  body: JSON.stringify(postParams)
}).then(response => response.json()).then(data => console.log(data))
  ```

Hay escenarios en los que tenemos que especificar el formato en el que tenemos estructurados los datos. Para enviarle está información al backend lo hacemos con la propiedad **headers** 

```sh
let postParams = {
  title: 'Creando un nombre de jugador',
  body: 'Arley Guerrero',
  userId: 1
}

let url = new URL('https://jsonplaceholder.typicode.com/posts');

fetch(url, {
  method: 'POST', // El tipo de jugada que vamos a hacer
  body: JSON.stringify(postParams),
  headers: {
    "Content-type": "application/json; charset-UTF-8"
  }
}).then(response => response.json()).then(data => console.log(data))

  ```
</details>


<details>
  <summary>Políticas CORS</summary>

  ### Qué es CORS
  Su significado es Cross Origin Resourse Sharing (Intercambio de Recursos de Origen Cruzado)

  Imagina que tu navegador es un jugador que quiere entrar al vestuario (servidor) para jugar (hacer una petición). Pero en la entrada del vestuario hay un persona de seguridad (el servidor) que verifica si el jugador tiene permiso para entrar.
  Si el jugador es del mismo equipo (misma URL/dominio), no hay problema, entra sin restricciones.
  Si el jugador viene de otro equipo (otro dominio diferente), el personal de seguridad le pide que muestre un permiso especial (las reglas CORS).
  Si el personal de seguridad no reconoce al jugador como seguro, lo expulsa (bloquea la petición).

  #### Técnicaente esto significa:
  Se dice que es un origen distinto cuándo:
  - La petición viene de un subdomino distinto, por ejemplo el dominio es santafe.com, si tiene una petición de inferiores.santafe.com esto es un subdominio distinto.
  - La petición viene de un dominio distinto.
  - La peitición viene de un puerto distinto, por ejemplo si en mi ambiente local estoy trabajando en el puerto 3000 y recibo una petición de un número diferente.
  - La petición viene de un protocolo distinto, por ejemplo uno utiliza HTTPS y el otro HTTP


  ### Peticiones simples

  https://developer.mozilla.org/es/docs/Web/HTTP/CORS

  Es como un jugador visitante que llega a un estadio y el personal de seguridad lo deja pasar sin muchas preguntas porque ya lo conoce y sabe que no es peligroso.

  En términos técnicos, una petición es simple si cumple con estas reglas:
  ✅ Usa métodos básicos como GET, POST o HEAD.
  ✅ Los encabezados son estándar (Content-Type debe ser application/x-www-form-urlencoded, multipart/form-data o text/plain).
  ✅ No usa credenciales como Authorization o cookies.

  Si la petición cumple estas condiciones, el servidor la deja pasar sin problema.

  ### Peticiones prefligth

  Ahora imagina que un equipo visitante quiere entrar al estadio con reglas diferentes, como traer su propia pelota o jugar con más de 11 jugadores. Antes de permitirlo, el personal de seguridad primero consulta con el dueño del estadio para ver si está permitido.

  Esto es lo que hace el preflight:

  Antes de la petición real, el navegador envía una petición OPTIONS al servidor para preguntar:
  🏟️ "¿Puedo hacer esta petición con estos métodos, encabezados y credenciales?"
  Si el servidor responde con un CORS permitido, el navegador envía la petición real.
  Si no, el navegador la bloquea.
  El preflight ocurre cuando:
  ❌ Se usan métodos distintos a GET, POST o HEAD (como PUT, DELETE, PATCH).
  ❌ Se envían encabezados personalizados (Authorization, X-Custom-Header, etc.).
  ❌ Se incluyen credenciales (cookies, tokens de autenticación).

  Básicamente, las peticiones simples pasan directo, pero las más complejas necesitan un "permiso" previo antes de ejecutarse.

  ### Estas peticiones usan CORS 
  - Peticiones AJAX
  - Web Fonts
  - Texturas WebGL (interfaz de programación de aplicaciones gráficas ( API ) creada para su uso en aplicaciones web.)
  - Imágenes con videos usando Canvas
  - CSS Shapes con imágenes (Es una herramienta que permite definir formas geométricas para usar en CSS, y que se pueden aplicar a imágenes)


</details>





<details>
<summary> Datos a tener en cuenta</summary>

- AJAX significa Asynchronous Javascript and XML.
- SOAP (Simple Access Object Protocol) hace unos años era el protocolo más popular, estaba basado fuertemente en el uso de XML.
- Fetch es el API nativo de los navegadores para realizar consulta AJAX.
- REST significa Representation State Transfer.
- Fetch no es soportada por el navegador Internet Explorer.


</details>