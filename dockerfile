FROM node:18.1.0-slim

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --silent

CMD [ "yarn", "start" ]
