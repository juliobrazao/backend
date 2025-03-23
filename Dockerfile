FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

RUN npm install -g ts-node-dev

CMD ["ts-node-dev", "--respawn", "--transpile-only", "src/main.ts"]
