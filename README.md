# TP Final Frontend - MiniChat

## Descripción del Proyecto

MiniChat es una **aplicación web de mensajería** desarrollada en React, inspirada en WhatsApp.  
Permite gestionar contactos, enviar y recibir mensajes ficticios, y mantener conversaciones separadas por contacto. La aplicación está pensada para ser **totalmente responsiva** y funcionar en dispositivos desde 320px hasta 2000px de ancho.  

### Funcionalidades principales

- Listado de contactos con **avatar y nombre**.
- Visualización de conversaciones con **mensajes diferenciados por emisor**.
- Envío de mensajes mediante un **formulario controlado**.
- Búsqueda de contactos mediante **parámetros de búsqueda** (`react-router-dom`).
- Navegación entre páginas usando **React Router**.
- Soporte de **estados y contextos** para manejar contactos y conversaciones.
- **Diseño responsivo y accesible**, con colores y tipografía legibles.

---

## Librerías utilizadas

- [React](https://reactjs.org/) - Librería principal para el desarrollo del frontend.
- [React Router DOM](https://reactrouter.com/) - Para enrutamiento y navegación entre páginas.
- [TailwindCSS](https://tailwindcss.com/) - Para estilos rápidos, responsivos y consistentes.
- [Heroicons](https://heroicons.com/) - Iconos para mejorar la interfaz.
- [uuid](https://www.npmjs.com/package/uuid) - Para generar IDs únicos para los contactos.

---

## Estructura del Proyecto

- **src/contexts/ChatContext.jsx** → Contexto global para manejar contactos y chats.
- **src/components/** → Componentes reutilizables como `ChatWindow`, `ContactItem`, `NewContactForm`.
- **src/pages/** → Páginas principales: `Home.jsx` y `ChatPage.jsx`.
- **src/App.jsx** → Configuración de rutas y layout general.
- **src/index.jsx** → Entrada principal de React.

---

## Desafíos y dificultades

1. **Persistencia de datos en Vercel/SSR:**  
   Al utilizar `localStorage`, hubo que asegurarse de cargar los datos solo en el cliente mediante `useEffect`, ya que en el build no existe `localStorage`.
2. **Mensajes estilo WhatsApp:**  
   Se debió agregar la propiedad `sender` a cada mensaje para poder diferenciarlos y alinearlos a la izquierda o derecha según el remitente.
3. **Responsividad y accesibilidad:**  
   Ajustar la interfaz para que funcione correctamente desde móviles pequeños hasta pantallas grandes, evitando combinaciones de colores con bajo contraste.
4. **Integración de imágenes de avatar:**  
   Se usaron URLs externas de `randomuser.me` para asegurar que los avatares se carguen correctamente en todos los entornos.

---
