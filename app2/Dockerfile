FROM node:10

RUN apt-get update -y
RUN apt-get upgrade -y

WORKDIR /app

RUN npm install

EXPOSE 3000

RUN npm install pug -g

CMD [ "npm", "run", "watch" ]

