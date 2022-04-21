FROM node:current-alpine3.14

WORKDIR /app

COPY ["package.json", "package-lock.json"]

RUN npm install && npm start

ENTRYPOINT ["ts-node", "src/HttpServer.ts"]

EXPOSE 3100