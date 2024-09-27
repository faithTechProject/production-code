FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli
<<<<<<< HEAD

=======
>>>>>>> e44e351b958f8bd9578e565f93c6bfbc2b2b01cd
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]