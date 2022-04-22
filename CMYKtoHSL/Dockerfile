FROM node:current-alpine3.14

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]