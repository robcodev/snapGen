
# SnapGen

## Descripción
SnapGen es una plataforma web con rutas protegidas que permite a los clientes utilizar plantillas diseñadas específicamente para su negocio. Los usuarios pueden editar estas plantillas y descargarlas en formato de imagen para compartirlas en redes sociales.

## Tecnologías Utilizadas
- **Frontend:** React, Vite, TailwindCSS, CSS3, html2canvas
- **Backend:** Express con Supabase
- **Otras Herramientas:** Variables de entorno, Vercel (para despliegue)
- **Pendientes:** Implementar CORS, JSON Web Token (jsonwebtoken), entre otras mejoras

## Instalación y Ejecución
SnapGen es una web app, por lo que no requiere instalación. Para ejecutarla en local:
1. Clonar el repositorio.
2. Configurar las variables de entorno para la conexión con Supabase.
3. En la carpeta del proyecto, ejecutar:
   ```sh
   npm install
   npm run dev


## Estructura del Proyecto
El proyecto sigue la estructura de Vite, con `index.html` como punto de entrada. Se divide en dos carpetas principales:
- **Frontend:** Contiene los componentes y estilos de la interfaz de usuario.
- **Backend:** Contiene la configuración de Express y la integración con Supabase.

### Componentes Clave
- **`Preview.jsx`**: Se encarga de mostrar en vivo los cambios aplicados a la plantilla.
- **`Form.jsx`**: Contiene el formulario donde el usuario ingresa los datos (nombre del producto, descripción, precio, oferta, etc.).

## Flujo de Uso
1. El usuario accede a la plataforma y selecciona una plantilla.
2. Rellena los campos en el formulario con la información de su producto.
3. Los cambios se reflejan en tiempo real en la vista previa (`Preview.jsx`).
4. Hace clic en "Descargar Imagen".
5. **html2canvas** captura el contenido dentro del elemento con `id="canva"` y genera una imagen descargable.
