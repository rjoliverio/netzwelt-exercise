FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]