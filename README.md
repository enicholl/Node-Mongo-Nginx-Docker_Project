# Node-Mongo-Nginx-Docker-Project
-----
The aim of this project was to create a simple nodejs application using express and pug, which would prompt the user to enter their details into a mongodb database. The project runs on three seperate docker containers (nginx, nodejs app, mongodb) which are created and maintained by a single docker-compose.yml file. Nginx serves as a reverse proxy for the application, and can be reached on https.  


## Getting Started
-----
To get started with this project, simply clone this git repository to a new folder on your local machine, in a location that suits you best. Please see the prerequisites section for the softwares required for this project and the deployment section for how to run the project.

## Prerequisites
-----
Before you can run the project, the below softwares are required:
  - Docker Desktop
  - Docker-Compose

(Additionally, if you are using a Windows machine it must be Windows 10 Pro or Enterprise in order to successfully run Docker Desktop).

See below for installation instructions.

### Installing
-----
##### Docker
  
  #  
To install Docker Desktop, head to the community edition section on [Dockerhub](https://hub.docker.com/search?type=edition&offering=community)  and select the installer for the machine you are using (Mac, Linux, Windows, etc). Then proceed to follow the installation guide, you may have to restart your machine when it has finished.
  #
 To check Docker Desktop is successfully installed, open up your terminal and run the below command:
 ```
 docker --version
```

The output should display something similar to the below:
```
Docker version 19.03.08
```
##### Docker-Compose
 #
 To install Docker-Compose follow the instructions on the official Docker documentation for [Docker-Compose installation](https://docs.docker.com/compose/install/), and progress with the specific instructions dependant on which machine environment you are using. (Most windows systems will already have Docker-Compose installed on download of Docker Desktop).
 
 Once finished, to check the successful installation of Docker-Compose run the below command in your terminal:
  ```
 docker-compose --version
```
 And he output should display something similar to the below:
  ```
 docker-compose version 1.25.4
``` 
 ## Deployment
 ---
 Now that all the prerequisites are install on your machine, you can run the project. To do this, ensure you are in the folder you cloned the repository into and run the below command in your terminal:
   ```
 docker-compose up
``` 
 This command will run the docker-compose.yml file to create the three seperate docker containers. Once running you can access the form page of the application on:
 ```
 https://localhost
```
Where you may enter your details into the mongo database. 
To view all entries into the database, navigate to 
 ```
 https://localhost/registrations
```
 ## Authors
 ---
 - ##### Elizabeth Nicholl



