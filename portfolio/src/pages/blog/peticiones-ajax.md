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
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details>

### Datos a tener en cuenta

- AJAX significa Asynchronous Javascript and XML.
- SOAP (Simple Access Object Protocol) hace unos años era el protocolo más popular, estaba basado fuertemente en el uso de XML.
- Fetch es el API nativo de los navegadores para realizar consulta AJAX.
- REST significa Representation State Transfer.
- Fetch no es soportada por el navegador Internet Explorer.
