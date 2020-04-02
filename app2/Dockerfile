FROM node:10

RUN apt-get update -y
RUN apt-get upgrade -y

WORKDIR /app

COPY package.json /app
RUN npm install
RUN npm install pug
RUN npm install pug-cli -g
COPY . /app

EXPOSE 3000
EXPOSE 27017

CMD [ "npm", "run", "watch" ]

