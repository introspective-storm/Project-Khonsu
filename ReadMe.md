# Project Khonsu
This project consists of multiple packages that make up the Khonsu (a working name) tech stack.

To get started:
```bash
npm run install
```

This will install all the dependiences for each package.

### DB
This package contains the scripts needed to maintain the Khonsu database. The database is MongoDB, with Mongoose used to create schemas to maintain constistency.

Please note that a database must be connected for this project to work as expected.

### Front End
This package is for everything front end. We will be using React with Vite.
To get the react-app started, use either:

```bash
npm run start-client
```
Or
```bash
cd client/khonsu-app
npm run dev
```

### Server
Contains all backend scripts and server managment for Khonsu.
To get the server started, use either:

```bash
npm run server-start
```
Or
```bash
cd server
node server.js
```

### Some Considerations:

The default ports are used for this project, and for development, it is recomended to keep them.
The server will start at *port:3000*, client will start at *port:5173*, and MongoDB will start at *port:27017*. To change the port, add paths used in deployment, or use API keys, it is recomended to make a .env file in these specific locations:

##### For the client:
```bash
cd client/khonsu-app
touch .env
```

##### For the server:
```bash
cd server
touch .env
```

##### For the database:
```bash
cd database
touch .env
```

It is then recomended to use the following variables for each .env file:

##### For the client:
```
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID= ""
VITE_FIREBASE_STORAGE_BUCKET= ""
VITE_FIREBASE_MESSAGING_SENDER_ID= ""
VITE_FIREBASE_APP_ID= ""
VITE_FIREBASE_MEASURMENT_ID=""
VITE_GOOGLE_MAPS_API_KEY= ""
VITE_API_ENDPOINT_FIND_BUSINESS= ""
VITE_API_ENDPOINT_ADD_BUSINESS= ""
VITE_API_ENDPOINT_REMOVE_BUSINESS= ""
```
Where "" is where one would insert their paths and API keys. The same goes for the other .env files:

##### For the database:
```
MONGODB_CONNECTION=""
```

##### For the server:
```
PORT=""
```
