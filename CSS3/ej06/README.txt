Enunciado
=========
Dados el siguiente código HTML y CSS base, aplicar las animaciones y transformaciones necesarias para conseguir el siguiente efecto:

Al cargarse la página, únicamente se mostrarán los recuadros con las imágenes, ocultando el título, texto, enlace a "Leer más" y el fondo naranja.

Al pasar con el ratón sobre la imagen, debe ocurrir lo siguiente:

La imagen de fondo aumentará su tamaño, dando la impresión de que se acerca.
Se mostrará el fondo naranja, de manera progresiva.
El título aparecerá por la parte superior de la imagen, hasta colocarse en su lugar.
El párrafo aparecerá por la parte inferior de la imagen, hasta colocarse en su lugar.
Se mostrará el enlace "Leer más", de manera proresiva.


Desarrollo
==========

título
texto
leer más
fondo naranja

estos elementos son accesibles mediante .view

hay que establecer un estado "apagado" para estos elementos, dado que se "encenderán" por medio de una animación. Traducido: no debería valer display:none.

la imagen debe escalarse, transform:scale(200%) ?
fondo, variacion de color de transparente a naranja
titulo, variacion de posicion
párrafo, de abajo a arriba.
leer más, un fade in o algo así...


