FROM node:12.8-slim
WORKDIR /home/node/app
ADD ./app.js /home/node/app/app.js
RUN npm install system-sleep
EXPOSE 8085
CMD ["node", "app.js"]