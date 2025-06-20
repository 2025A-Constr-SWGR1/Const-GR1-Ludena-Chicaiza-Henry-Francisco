# Usa la versión específica de Node.js (desde donde voy a empezar)
FROM node:22.14.0

# Establece el directorio de trabajo dentro del contenedor (empezar a trabajar en una carpeta)
WORKDIR /Const-GR1-Ludena-Chicaiza-Henry-Francisco/calculadora

# Copia el package.json y package-lock.json si existen
COPY package.json package-lock.json dist ./

# Instala dependencias
RUN npm install --omit=dev

# Copia el resto del código de la app
# Copia toda la carpeta "dist" al contenedor
COPY dist/ ./dist/

# Expone el puerto que usa tu app (ej: 3000)
EXPOSE 3000

# Comando por defecto al iniciar el contenedor
CMD ["node", "main.js"]
