FROM php:7
WORKDIR /home/php/app
COPY ./index.php /home/php/app/index.php
EXPOSE 8085
ENTRYPOINT [ "php" ]
CMD [ "-S", "0.0.0.0:8085", "index.php" ]
