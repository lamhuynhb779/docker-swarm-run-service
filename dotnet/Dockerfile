FROM mcr.microsoft.com/dotnet/sdk:3.1
WORKDIR /home/dotnet/app
COPY ./bin/Debug/netcoreapp3.1/publish/*.* /home/dotnet/app/
EXPOSE 8085
ENTRYPOINT [ "dotnet", "dotnet.dll" ]