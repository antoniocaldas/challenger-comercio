# Inicio

Se usa vite ya que me da un entorno facil y rapido.

## Requisitos

- Node.js v18: Asegúrate de tener Node.js en la versión 18 instalada.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/antoniocaldas/challenger-comercio.git
   cd challenger-comercio
   npm i
   npm i -D
   npm run dev
   ```

### Nota

En este caso no estoy colocando en un try catch la llamada del api. Esto lo hago porque estoy seguro de la data que voy a recibir, al colocarlo en un try catch se esta generando un objeto. el cual tiene informacion del error el cual se usa para temas de experiencia de usuario y mandar un mensaje de advertencia al usuario.
