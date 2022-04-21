FROM node:current-alpine3.14

WORKDIR /app

COPY ["package.json", "package-lock.json"]

RUN npm install && npm start

COPY . /app

ENTRYPOINT ["ts-node", "src/HttpServer.ts"]

EXPOSE 3000