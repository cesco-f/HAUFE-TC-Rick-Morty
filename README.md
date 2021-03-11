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