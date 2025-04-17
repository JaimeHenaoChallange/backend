# Usa una imagen base de Python
FROM python:3.10-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY requirements.txt ./

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de los archivos del backend
COPY . .

# Expone el puerto del backend
EXPOSE 8080

# Comando para iniciar el backend
CMD ["python", "app.py"]
