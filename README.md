
# MidProject Ironhack

## Introdución

Este proyecto consiste en el desarrollo de una página web dentro de un curso de programación FrontEnd hecho en la escuela Ironhack, a tiempo parcial durante 3 semanas. 
Se trata de aplicar todo el conocimiento que se ha ido adquiriendo a lo largo del bootcamp desde que se inicio, respecto de HTML, CSS y JS, así como del uso de repositorios usados en nuestra terminal y guardados en GitHub. 

El diseño se ha tomado de uno predeterminado por la propia escuela y se puede ver todos los detalles del mismo desde [figma](https://www.figma.com/file/PwDsI9Lpmj0iAONsrXEE8x/mid-term-project?t=DypCOfCNOZKExND4-0). El diseño se ha tomado de forma detallada para la página web en su versión de escritorio. Sin embargo, no fue así para las versiones de tablet o movil donde se usó la imaginación propia para desarrollar un diseño acorde al propio estilo que venía predeterminado para que tuviera una linea de diseño acorde y sin mucha variación, permitiendo así al usuario una adaptabilidad y uso más intuitivo. 

La página web se despliega en 3 apartados que son: _HomePage_, _ContacPage_ y _ContactUs_.

En la carpeta MIDPROJECT (carpeta raíz) se encuentran los archivos de `index.html`, así como `main.css`, `home.css` e `index.js`. El archivo `main.css` es un archivo general que contiene los estilos generales que se usan en los demás apartados y remiten a este. 

## Home Page

Para este apartado se construyó, en primer lugar, lo necesario y relativo al html. Se dió estructura siguiendo una lógica que luego se desarrollaría en CSS para que la maquetación fuera acertada y evitar así la ncesidad de ir añadiendo más elementos de html al código. Se elaboró el archivo `index.html`.

Posteriormente se dió estilo a cada uno de los elementos que forman parte del html, haciendo uso de los archivos `main.css`, `home.css`. Los estilos específicos relativos a html están en `home.css` y en él se puede ver que hay 3 mediaquerys que le dan estilo a cada uno de los dispositivos allí donde se desplegará: móvil, tablet y escritorio.

**Retos**

El reto que se presentó en esta página, en primer luegar, fue la forma de desarrollar los estilos para la versión móvil, pues no se disponía a priori de uno en concreto. Por lo que se tuvo en cuenta una disposición de los elementos que pudieran permitir al usuario final un uso y despliegue de las imagenes que fuera atractivo a la vista y que diera un diseño lo más limpio posibible.

Otro reto que se presentó fue la forma en la que se pudiera acomodar la barra de navegación sin que ocupara un espacio tan reducido para pantallas pequeñas (móviles). En ese caso se desarrolló un estilo nuevo tipo _hamburguesa_. 

Uno de los retos interesantes de resolver, en todos los formatos de visualización (móvil/tablet/escritorio) es el de inserción de la imagen de carta dentro del apartado de suscripción (sección anterior al `footer`). La forma más idonea para realizarlo es mediante un pseudoselector del `placeholder` e insertar la imagen mediante `background-image`.

**Problemas en el Desarrollo**

Uno de los problemas sufridos durante el desarrllo en CSS fue el encuadramiento de todas las secciones sin que hubiera desbordamiento. Dicho problema fue debido a las imágenes principalmente que no se ajustaban o que perdían resolución al redimensionarlas. 

Lo mismo en el caso de la sección de la sección de projectos para la versión de tablet y escritorio, donde los títulos y contenido no se alineaban correctamente. Para ello fue necesario aplicar un largo específico identico en cada uno de las tarjetas. 

Otro problema relacionado con el CSS fue para la sección clientes donde había que posicionar los emojis de tal manera que estuvieran en un recuadro y dentro de ellos un texto con la opinión de un cliente.

Por comentar como problema presente a la hora de desrrollar en JS el botón menú para la versión móvil, fue el de volver a ocultar la barra de navegación que se despliega a la derecha, pues no se conseguia ocultar cada vez que accedías a algún elemento del menú.


## Contact Page

En este apartado, una vez desarrollado el anterior de _Home Page_ tanto para html css y Js, es relativamente sencillo poder modificar el código escrito y ajustarlo de acuerdo a las directrices marcadas en [figma](https://www.figma.com/file/PwDsI9Lpmj0iAONsrXEE8x/mid-term-project?t=DypCOfCNOZKExND4-0). Sin embargo, no por ello dejaron de existir _retos_ y _problemas_.

Las archivos se encuetran en la carpeta de nombre a cuya sección se remite. En ella existen tres archivos correspondientes a las extensiones .html, .css y .js. Ya que en su matoria es un código reutilizado, se siguió el mismo patrón que en el apartado de home para desarrollarlo. Es decir el archivo `contact_page.css` contiene las mediaquerys para las tres versiones de dispositivos. 

**Retos**

Tener un sombreado de color de acuerdo al margen del proyecto correspondiente, ya fuera _Simplify_, _Dashcoin_, o _Vecn¡torify_.

Un reto realmente importante fue el de desplegar la funcionalidad de las tarjetas de proyecto usando JavaScript. Se usó una API (base de datos predeterminada para el proyecto) en el que debíamos obtener unos datos para desplegarlos en nuestra página web siguiendo el mismo patron de diseño del apartado que habíamos desarrollado previamente. 

**Problemas en el Desarrollo**

Un problema de desarrollo que se repitió respecto del apartado de Home Page, fueron las imágenes. Una vez más fue difícil poder conseguir que las imágenes se alinearan de una manera correcta y de acuerdo a las dimensiones tomadas de [figma](https://www.figma.com/file/PwDsI9Lpmj0iAONsrXEE8x/mid-term-project?t=DypCOfCNOZKExND4-0).

Otro problema estuvo en la forma de aplicar el filtro a la imagen y cómo poder desplegarlo de manera correcta. Finalmente la solución fue sencilla de aplicar, simplemente duplicando la imagen y superponiendolas con `position` para aplicar a la del fondo un filtro tipo `blur`.

Al aplicar JS a este apartado fue difícil que se pudiera desplegar la funcionalidad haciendo uso de la API pues el concepto de _queryParam_ era un concepto desconocido. A pesar de ello se pudo implementar para tener dinamicidad a la hora de replicar las páginas web sin necesidad de escribir más código que el necesario, usando un servidor, el método `fetch`, junto con la funcionalidad `async`, `await` para evitar el _callBackHell_ de las promesas y _catches_, así como una manera sencilla de obtener la _query param_ de la homePage para obtener el título desde el cual quería obtener la información del servidor.

## Contact Us

En este apartado del proyecto, que fue el último en desarrollarse, se tomó un diseño minimalista para empezar a desarrollarlo de manera '_Mobile first_' para tener en cuenta las necesidades del usuario de móvil primero hasta el usurio de escritorio pasando por el diseño de tablet. 

Se creó una carpeta `Contact Page` donde se alojan 3 tipos de archivos `contact_page.css`, `contact_page.js`, `contacPage.html`.

A su ves se creo una carpeta llamada `Server`donde se aloja la base de datos en donde se irán guardando todos los formularios respectivos. En dicha carpeta hay un archivo `db.json`.

**Retos**

Validación del formulario para el cual se hizo uso de _Regular Expressión_ (REGEX) y su método `.test()` para que filtrara según las indicaciones de caracteres específicos.

Envio de los datos del formulario a un base de datos. 

**Problemas en el Desarrollo**

La validación del formulario en sí no fue tan fácil y tuve que aplicar el mismo procedimiento que para el botón _hamburguesa_ del menú de la versión móvil. Es decir, traer la variable en JS y aplicar una alerta para los inputs de "Full Name", "Email", "Phone", "Message".

Además para no fue difícil enviar los datos al servidor ya que hubo un error a la hora de escribir el objeto en el archivo `db.json`.

