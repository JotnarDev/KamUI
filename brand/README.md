# KamUI — Marca

**Idea:** la K construida con los tres primitivos de cualquier interfaz: una **línea**, una **diagonal** y un **punto**.
El punto, en cian, es el *átomo* del diseño atómico y el único acento de color.

## Archivos

| Carpeta | Contenido |
|---|---|
| `symbol/` | Símbolo en `light`, `dark`, `mono-black`, `mono-white` y `currentcolor` (para usar en línea en React). `kamui-symbol-small-*` es el corte dibujado para 16–24 px. |
| `lockup/` | Horizontal y apilado en las 4 variantes, más `horizontal-pkg-*` con `@jotnar_dev/core`. |
| `banner/` | Banners de 800×200 para el README (claro/oscuro). |
| `avatar/` | Avatar cuadrado para GitHub/npm (`ultra` recomendado, `dark` y `light`) en SVG y PNG de 1024 px. |
| `web/` | `favicon.ico` (16/32/48), `favicon.svg` (se adapta a pestañas oscuras), iconos de 180/192/512, `site.webmanifest` y `head.html`. |
| `png/` | Exportaciones en PNG del símbolo, el logo horizontal y los banners. |
| `tokens.css` | Variables `--kamui-logo-*`, enlazadas a los tokens del tema. |

Todo está en vectores: los textos están convertidos a trazados y no hay degradados, filtros ni imágenes incrustadas.

## Color

**Estructura + átomo.** El ultramarino construye todo y el cian marca solo el átomo: el punto del logo, el foco y la selección. El cian nunca rellena superficies grandes.

| Rol | Claro | Oscuro | Token |
|---|---|---|---|
| Línea + diagonal / primario | **#2f27ce** · rgb(47 39 206) | **#8b85ff** · rgb(139 133 255) | `--color-primary` |
| Punto / átomo | **#0891b2** · rgb(8 145 178) | **#22d3ee** · rgb(34 211 238) | `--color-atom` |
| Texto "KamUI" | **#040316** | **#eae9fc** | `--color-text` |
| Fondo | **#fbfbfe** | **#010104** | `--color-bg` |

Por qué el ultramarino y no `indigo-500`: el índigo es el color por defecto de Tailwind y uno de los que más repite la IA al generar interfaces.
Un color propio hace reconocible a KamUI y permite que el linter detecte cualquier uso de la paleta cruda.
Contraste: texto blanco sobre #2f27ce = 9.1:1 (AAA); #8b85ff sobre #010104 = 6.9:1.

La versión de una sola tinta (negro o blanco) es igual de válida. Úsala cuando haya un solo color disponible o sobre fotografías.

## Construcción

- Símbolo sobre una rejilla de 256: trazo de 56, separación de 14 entre la línea y la diagonal, punto de 60 de diámetro
  (un poco mayor que el trazo, por compensación óptica). La diagonal y el punto siguen los ejes de 45° de una K clásica.
- Texto: **Inter Bold** (licencia SIL OFL), espaciado de −2 % y ajuste manual del par K-a.
- En el logo horizontal, el símbolo mide 1,32 × la altura de las mayúsculas y va centrado con ellas.

## Espacio libre y tamaños mínimos

- **Espacio libre** = el diámetro del punto (x) por todos los lados.
- Símbolo: usa `kamui-symbol-small-*` **por debajo de 24 px**. El corte maestro funciona de 24 px hacia arriba.
- Logo horizontal: mínimo **96 px** de ancho. Logo apilado: mínimo **64 px**.

## No hacer

- Cambiar el color del punto por otro que no sea el acento, o pintar el punto y la diagonal del mismo color en la versión a color.
- Unir la diagonal al asta o cerrar la separación entre ellas.
- Girar, inclinar, deformar, añadir sombras, contornos o degradados.
- Poner el símbolo de color sobre fondos de contraste bajo (usa la versión `mono-white` o el avatar).
- Reescribir "KamUI" con otra fuente: usa los archivos del logo.

## Pendiente

- Búsqueda de marcas registradas: no está hecha; se recomienda una búsqueda profesional antes de registrar la marca.
- Alinear los `--kamui-color-primary-*` de `@jotnar_dev/core` con el ultramarino.
