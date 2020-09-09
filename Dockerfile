# docker build -t web . 
# docker run -dit --name app -p 8080:80 web
FROM httpd:2.4
COPY ./ /usr/local/apache2/htdocs/
