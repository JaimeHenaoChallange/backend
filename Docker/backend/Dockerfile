# Usa una imagen base de Node.js para el backend
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto de los archivos del backend
COPY . .

# Establece las variables de entorno necesarias
ENV NODE_ENV=production

# Expone el puerto del backend
EXPOSE 8080

# Comando para iniciar el backend
CMD ["npm", "start"]
