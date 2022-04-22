FROM node:current-alpine3.14

COPY . .

RUN npm install

EXPOSE 3100

ENTRYPOINT [ "npm", "start" ]