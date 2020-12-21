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

######

## Run app dotnet
# Prerequisites
Install the following:
    .NET Core SDK. The SDK also includes the Runtime. (https://dotnet.microsoft.com/download)
    The C# extension from the VS Code Marketplace. (https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
    The F# extension (Ionide) from the VS Code Marketplace (https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp)

## Create skeleton .NET web
$ dotnet new web

## Run app .NET
$ dotnet run

## Build source .NET into path ..\bin\Debug\netcoreapp3.1\publish\
# To copy builded source at this folder into docker image
$ dotnet publish

## Build source to image
$ docker build -t lamhuynhb779/swarm-run-service:dotnet .

## Test run & rm container 
$ docker run -it --rm lamhuynhb779/swarm-run-service:dotnet

## Push image into repository in Dockerhub
$ docker push lamhuynhb779/swarm-run-service:dotnet