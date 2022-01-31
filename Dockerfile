FROM node:16

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

EXPOSE 3000

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

CMD ["npm", "start"]