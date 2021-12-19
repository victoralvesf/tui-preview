FROM node:latest

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

EXPOSE 8090

CMD [ "npm", "start" ]