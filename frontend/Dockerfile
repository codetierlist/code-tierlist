FROM node:18-alpine
RUN yarn install -g serve

WORKDIR /frontend
COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn run build

CMD [ "serve", "-s", "build" ]
