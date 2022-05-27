# Proyecto-TWO
Este proyecto fue desarrollado como trabajo práctico del programa de Codo a Codo, en el cual había que crear un sitio web con html, css y js.  
El trabajo del proyecto fue de mucho aprendizaje en cada etapa de desarrollo, dejando muchas enseñanzas como manejo de las tecnolgias mencionadas, solucion de problemas, investigación y estudio de proyectos similares, lectura de documentación, entre tantas cosas. 
## Descripción
Two es un sitio web que simula la experiencia de un sitio web de streaming entretenimiento como Netflix, Disney + o Amazon Prime Video.

### Requisitos del Trabajo Practico
● Cantidad de páginas html:
En este trabajo se desarrollaron más 9 páginas html. Las cuales son una base de 7: Index, Login, Register, Home, Series, Peliculas, Novedades. A las que se suman 2 que son el ejemplo de cómo serían las páginas cuando se maneje con una api rest y templates con react: Loki, Loki-video.
● Etiquetas semanticas:
En cada html se hizo uso de las etiquetas semánticas, a las que en la mayoria de veces se manipularon con clases. Esto es debido a que eventualmente más adelante se podrian manejar más de un mismo tipo de etiqueta; por ejemplo tener mas de un main.

● Formulario validado con js:
En la página de Register, todos los campos del formulario son validados en el momento mediante js al ser los inputs comparados con expresiones regulares. 
● Iframe, íconos de FontAwesome, y fuentes locales o bien de Google
Fonts:
En todo el proyecto se usaron google fonts y iconos de FontAwesome
● Tener al menos una página totalmente responsive con 3 puntos de corte para 3 tamaños de dispositivos distintos:
Todas las páginas estan diseñadas del modo que sean en una gran medida responsive. 
Las paginas de Home, Series, Peliculas, Novedades poseen 4 puntos de corte. Los cuales sinceramente 2 estan más desarrollados. Estas páginas que son como la base del proyecto las pensé y diseñé para desktop. Por eso para que sea responsive, hice un break para los medium devices y otro para los small devices, los que desarrollé bastante. En cuanto a los otros dos breakpoints, son simplemente una mejora visual/estetica del slider. La verdad pienso hacer un breakpoint más para los dispositivos tipo tv, en el cual tendrían un side navbar, esto no lo desarrollé todavia porque me pareció que ya es demasiado grueso el html y lo tengo pensado hacer con react. 
● Una animación, transformación o una transición:
En el proyecto hay unas cuantas transformaciones y transiciones. Unos ejemplos podrian ser, transform de la imagen del carousel al hacer hover, transiciones de letras e iconos del navbar y del header. 
● Poseer una estructura HTML maquetada con Flexbox y/o Grid:
En el proyecto hay bastantes estructuras flexbox y algunas grid (en el register se usa grid) .
● Bootstrap:
No fue utilizado Bootstrap, esta decisión fue debido a que podría haber conflicto con las clases ya creadas en el resto del proyecto 
#### Malas prácticas/ a mejorar:
Algunas de las malas prácticas que fui notando y que quiero mejorar son:
● Inconsistencia en el estilo de nombramiento de variables, clases y archivos externos a lo largo de todo el proyecto.
● Alojar gran cantidad de assets como imágenes o videos en el repositorio.
● Estructurar toda mi idea de proyecto y orden de desarrollo desde un principio (Aprovechando tecnologías como Adobe xd, draw.io, entre otras).
● Aprender a usar las branches de github, aprovechar los pulls.
● Más y mejores comentarios.

-Buscar poder reciclar partes de código con mejor uso de clases y ids 
##### Estado del proyecto
Desde hace un par se semanas estoy trabajando realizar este proyecto con el stack MERN. Lo cual pueden ver en el repositorio https://github.com/lecov/two-mern y en https://github.com/lecov/two-react-app . 
**En desarrollo:**

● Uso de REACT para aprovechar estructuras de código y desarrollar SPA
● CRUD de usuarios con Mongodb, Express y NodeJs
● Creación de API rest de películas y series con Firebase, Mongodb, Express y NodeJs
● Uso de la Api Rest en el proyecto
● Search
● Sistema de perfiles
● Preloader