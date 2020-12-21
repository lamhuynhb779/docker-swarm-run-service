## RUN app node
$ cd .\node\
$ node app.js

## Lib pause system
$ npm install system-sleep

## Build node Dockerfile to image
$ docker build -t lamhuynhb779/swarm-run-service:node .

## Test run & rm container 
$ docker run -it --rm lamhuynhb779/swarm-run-service:node

## Push image into repository in Dockerhub
$ docker push lamhuynhb779/swarm-run-service:node