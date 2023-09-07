FROM node:20.2-alpine
COPY . /modules
WORKDIR /modules
RUN npm install
RUN npm i -g ts-node
CMD npm run prod