# Usa una imagen de node como base
FROM node:20.10

# Establece el directorio de trabajo en el contenedor
WORKDIR /src/app

# Copia el package.json y package-lock.json para instalar dependencias
COPY package*.json .

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expón el puerto en el que la aplicación Express va a escuchar
EXPOSE 3000

# Comando para arrancar la aplicación
CMD npm start
