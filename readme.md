Proyecto de Ejemplo: API Node.js + Cliente React

Una aplicación Full-Stack de ejemplo para demostrar la interacción entre un backend (servidor/API) construido con Node.js y Express, y un frontend (cliente) construido con React.js.
Stack de Tecnologías

Frontend:

    React.js

    Vite

Backend:

    Node.js

    Express

    Cors

Ejecutar Localmente

Sigue estos pasos en orden para poner en marcha el proyecto en tu computador.
1. Clonar el Proyecto

git clone [https://github.com/topassky3/despliegue-api-nodejs-apache.git](https://github.com/topassky3/despliegue-api-nodejs-apache.git)
cd despliegue-api-nodejs-apache

2. Poner en Marcha el Backend (Servidor)

El backend es el "motor" que provee los datos. Necesita su propia terminal.

# Navega a la carpeta del backend
cd gestor-tareas-backend

# Instala las dependencias
npm install

# Inicia el servidor
npm run dev

Tu API ahora está corriendo en http://localhost:4000. ¡Deja esta terminal abierta!
3. Poner en Marcha el Frontend (Cliente)

El frontend es la parte visual. ¡Abre una nueva terminal!

# Desde la raíz del proyecto, navega a la carpeta del frontend
cd gestor-tareas-frontend

# Instala las dependencias
npm install

# Inicia la aplicación de React
npm run dev

Tu aplicación de React ahora está corriendo en http://localhost:5173.
Variables de Entorno

Para ejecutar este proyecto, no necesitas configurar ninguna variable de entorno.
Referencia de la API
Obtener todas las tareas

  GET /api/tasks

Parámetro
	

Tipo
	

Descripción

N/A
	

N/A
	

No requiere ningún parámetro.
Crear una nueva tarea

  POST /api/tasks

Cuerpo de la Petición (Body):

{
  "title": "Título de la nueva tarea",
  "description": "Descripción opcional de la tarea"
}
