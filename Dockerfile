FROM nginx:alpine

# Copia solo el contenido construido al contenedor de NGINX
COPY build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


