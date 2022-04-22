FROM node:current-alpine3.14

COPY . .

RUN npm install

EXPOSE 3300

ENTRYPOINT [ "npm", "start" ]