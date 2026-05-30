# Contexto del Proyecto: Clon de Frontend de Airbnb

## Descripción del Proyecto
El objetivo de este desarrollo es reconstruir el frontend de una plataforma de alquiler vacacional (basada en la interfaz de Airbnb) para validar la arquitectura de componentes. Se implementarán tres vistas principales utilizando Next.js 16 (App Router), TypeScript y Tailwind CSS. El enfoque es estrictamente mobile-first (base de 375px, adaptando a escritorio a partir de 768px). Se prohíbe el uso de librerías de componentes UI preconstruidas; toda la interfaz se construirá desde cero utilizando utilidades de Tailwind CSS y estructuras de layout modernas (Flexbox y Grid).

## Perfil del Usuario
El usuario final es un viajero que busca y reserva alojamiento vacacional. Su objetivo es explorar opciones de forma intuitiva, filtrar resultados en tiempo real, revisar los detalles específicos de una habitación (fotos, servicios, información del anfitrión) y configurar los datos básicos de una reserva. El usuario espera una experiencia de navegación rápida, reactiva y sin recargas completas del navegador.

## Vistas a Construir
* **Página de inicio (`/`):** Contiene la barra de navegación principal, un campo de búsqueda interactivo (filtrado en tiempo real mediante `useState`), una fila de filtros por categoría y una cuadrícula responsiva de alojamientos. Implementa una simulación de carga de datos mediante `useEffect` y `setTimeout`.
* **Página de catálogo (`/catalog`):** Muestra un listado de resultados con un control de ordenación por precio (Ascendente/Descendente). Reutiliza las tarjetas de alojamiento e incluye un área (placeholder o integración real) para visualizar un mapa de ubicaciones.
* **Página de detalle de habitación (`/rooms/[id]`):** Vista enfocada en un alojamiento específico. Simula la carga de datos por ID e incluye una galería de imágenes interactiva, cabecera de información, detalles del anfitrión, cuadrícula de servicios y una tarjeta de reserva con contador de huéspedes.

## Componentes Principales Identificados
* `Navbar`: Barra superior con logo, buscador e iconos de usuario.
* `CategoryFilter`: Fila horizontal de botones para categorías de alojamiento.
* `PropertyCard`: Tarjeta reutilizable con imagen, título, precio y valoración.
* `PropertyGrid`: Contenedor (CSS Grid) para renderizar el listado de tarjetas.
* `SortControl`: Selector para ordenar los resultados en el catálogo.
* `MapArea`: Contenedor visual para el mapa de ubicaciones.
* `ImageGallery`: Visualizador de fotos con controles de estado (Anterior/Siguiente).
* `HostInfo`: Bloque de información sobre el anfitrión del alojamiento.
* `AmenitiesGrid`: Cuadrícula que empareja iconos y etiquetas de los servicios.
* `BookingCard`: Tarjeta interactiva para configurar la reserva (selector de huéspedes y CTA).

## Reglas Estrictas de Implementación
* **Modularidad:** Cada componente debe existir en su propio archivo dentro del directorio `/components`.
* **Límites de tamaño:** Ningún componente debe superar las ~80 líneas de código (JSX + lógica). Si un componente crece más, debe subdividirse.
* **Tipado riguroso:** Todas las props y estructuras de datos deben estar fuertemente tipadas utilizando interfaces de TypeScript, preferiblemente organizadas en la carpeta `/types`.
* **Estilos y Layout:** Uso exclusivo de Tailwind CSS. Evitar técnicas de layout obsoletas; utilizar siempre Flexbox o CSS Grid para la estructura y alineación.
* **Navegación:** Toda transición entre páginas debe realizarse obligatoriamente con el componente `<Link>` de Next.js.
* **Declaración:** Todos los componentes de React deben declararse como funciones constantes (`const`). No se permiten componentes de clase.