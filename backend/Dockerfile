FROM node:alpine

WORKDIR /codetierlist

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]
