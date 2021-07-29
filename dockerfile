FROM mcr.microsoft.com/dotnet/sdk:5.0-focal as serverBuilder
WORKDIR /app
COPY  ./ServerStore/ServerStore.sln ./
COPY ./ServerStore/Store.API/Store.API.csproj ./Store.API/
COPY ./ServerStore/Store.Business/Store.Business.csproj ./Store.Business/
COPY ./ServerStore/Store.Migrations/Store.Migrations.csproj ./Store.Migrations/

RUN dotnet restore
COPY ./ ./

WORKDIR /app/ServerStore/Store.API
RUN dotnet publish "Store.API.csproj" -c Release -o out

WORKDIR /app/ServerStore/Store.Business
RUN dotnet publish "Store.Business.csproj" -c Release -o out
WORKDIR /app/ServerStore/Store.Migrations
RUN dotnet publish "Store.Migrations.csproj" -c Release -o out

FROM node:lts-alpine as client_builder
WORKDIR /app
COPY ./client/package.json ./
RUN npm install
COPY ./client/ ./
ENV NODE_ENV production
RUN npm run build

FROM mcr.microsoft.com/dotnet/aspnet:5.0 as runtime
WORKDIR /app
COPY --from=serverBuilder /app/ServerStore/Store.API/out/ ./
COPY --from=client_builder /app/build ./wwwroot/
ENTRYPOINT [ "dotnet", "Store.API.dll" ]