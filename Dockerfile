# Use lightweight Nginx as the base image
FROM nginx:alpine

# Copy prebuilt Angular files from local dist/browser/ to Nginx HTML directory
COPY dist/angular-portfolio-app/browser /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
