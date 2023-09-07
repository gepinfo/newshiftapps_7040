FROM node:20.2-alpine
COPY . /products
WORKDIR /products
RUN npm install
RUN npm i -g ts-node
CMD npm run prod