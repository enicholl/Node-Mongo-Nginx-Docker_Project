# Use base image node
FROM node:10

# update and upgrade cache
RUN apt-get update -y
RUN apt-get upgrade -y

# create and use the directory app
WORKDIR /app

# install npm (uses package.json file to install dependencies)
RUN npm install

# expose port 3000 for the app to run
EXPOSE 3000

# installs pug
RUN npm install pug -g

# runs the node application
CMD [ "npm", "run", "watch" ]

