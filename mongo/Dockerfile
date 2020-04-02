FROM ubuntu:latest

RUN apt-get update && apt-get install -y gnupg2

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/mongodb.list


RUN apt-get update -y --allow-unauthenticated
RUN apt-get upgrade -y

RUN apt-get install -y mongodb-10gen

RUN mkdir -p /data/db

CMD ["mongod"]

EXPOSE 27017
EXPOSE 28017
