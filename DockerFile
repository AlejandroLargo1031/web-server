# Usa la imagen oficial de Nginx para sitios estáticos
FROM nginx:alpine

# Copia el contenido del proyecto al directorio que Nginx utiliza para servir archivos
COPY . /usr/share/nginx/html

# Exponer el puerto 80 (por defecto en Nginx)
EXPOSE 80

# No se requiere comando de inicio, ya que la imagen de Nginx define el CMD por defecto.
