FROM node:16-alpine AS build

WORKDIR /webapp

COPY ./webapp .

RUN npm install

RUN npm run build

# Serve Application using Nginx Server

FROM nginx:alpine

COPY --from=build /webapp/dist/connect4/ /usr/share/nginx/html