FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install -g react-scripts

COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]