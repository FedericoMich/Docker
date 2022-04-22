FROM node:current-alpine3.14

COPY . .

RUN npm install

EXPOSE 3200

ENTRYPOINT [ "npm", "start" ]