# url-shortener
URL Shortener Module: we are using react js in frontend, Nodejs/express.js for the REST APIs and MySql for the Database

## Tested under following configurations

- Node version: v12.18.3
- NPM version:  6.14.6
- MySql version: 10.4.13-MariaDB-phpmyadmin
- React JS: 16.13.1


## Clone

- Clone this repo to your local machine using `https://github.com/ashish100100/url-shortener.git`


## Database Setup
- Create Database "db_url_shortner" in mysql
- After creating import db_url_shortner.sql


### API Setup

- Directory: /api

> use following commands to install dependency, packages.  We are using port: 9000 for the API server, if required you can change it under /api/.env file

```shell
$ npm install
```

> now run following command to start node server

```shell
$ node index.js
```
- API Base URL:  http://localhost:9000 



### Frontend Setup

- Directory: /web

> use following commands to install dependency, packages.  We are using port: 9500 for the frontend, if required you can change it under /web/.env file

```shell
$ npm install
```

> now run following command to start frontend

```shell
$ npm start
```
- Frontend Base URL:  http://localhost:9500
