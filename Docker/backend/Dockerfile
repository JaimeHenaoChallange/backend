# Usa una imagen base de Node.js para el backend
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto del backend
EXPOSE 8080

# Comando para iniciar el backend
CMD ["npm", "start"]
