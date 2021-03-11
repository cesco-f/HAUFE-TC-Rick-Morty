# Rick & Morty Application - Francesco Fagnani
<p align="center">
  <img src="./client/src/assets/rick_morty_writing.png"/>
</p>

## Getting started

This project uses a MongoDB database, make sure to have MongoDB installed and running.

More information on how to install MongoDB [here](https://docs.mongodb.com/guides/server/install/).

First, clone the repo:

```bash
$ git clone https://github.com/cesco-f/HAUFE-TC-Rick-Morty.git
$ cd HAUFE-TC-Rick-Morty
```

From that folder run the following to install all the dependencies:

```bash
$ npm i
```

Create a ```.env```  in both server and client folders following the ```.env.example``` files inside the two folders.

## Running the app
Open an additional terminal.

In the first terminal run the following:

```bash
$ cd server
$ npm run start
```
In the second one run the following:

```bash
$ cd client
$ npm run start
```

The app is now available at ```http://localhost:3000```.

## Additional frontend libraries
- **node-sass** to compile .sass files to css.
- **react-router-dom** to navigate between the different components and to change the browser URL.
- **redux-thunk** to dispatch an action only after receiving a response from the server.

## Additional backend libraries
- **bcryptjs** for password hashing.
- **cors** to enable Cross-Origin Resource Sharing and to be able to communicate with the frontend.
- **dotenv** to create secret keys (.env file) that the application needs and keep them from going public.
- **jsonwebtoken** to create and check the token used for the authentication.
- **mongoose** to manage relationships between data, provide schema validation, and translate between objects in code and the representation of those objects in MongoDB.
- **node-fetch** to consume the public API of Rick & Morty in the backend.