# Forum web app (AUL entrepreneurship project)

## Objectives

- Learn version control (Git and Github)
- Learn how websites/webpages work
- Learn how to create static/dynamic websites
# About this branch
This is a complete rewrite of the AUL forum project in Reactjs, Sass and Typescript, knowledge of these three tools is fundamental in contributing to the frontend of this branch. The app was bootstrapped with  [create-react-app](https://github.com/facebook/create-react-app)
## Documentations

- [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) documentation.

- [reactjs](https://reactjs.org/) documentation.

- [sass](https://sass-lang.com/documentation) documentation.

- [typescript](https://www.typescriptlang.org/docs/) documentation.
- [postgresql](https://www.postgresql.org/docs/) documentation.


# Development

## Linux

- Install Volta from [volta](https://volta.sh/) website
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`


## Windows

- Install [Nodejs](https://nodejs.org/en/download/) for windows, then run `node -v` to test if node has been properly installed
- Install Yarn from [yarn site](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or if Nodejs is already installed `npm install --global yarn`
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`


Download and install postgresql on your computer [here](https://www.postgresql.org/download/)

## Backend
- Navigate to the root folder and install dependencies `yarn install` and `yarn install:client`
- Run `cp .env.example .env`
- Replace `<USERNAME>`, `<PASSWORD>` and `<DB_PORT>`, `<DB_NAME>` with the username, password, port and name of the postgres database respectively
- Run `yarn db:up` which sets up the database and seeds it
- Run `yarn build:client` which builds the frontend to serve (not necessary if working with only API)
- Start the server `yarn dev`

## Frontend
- Navigate into the client directory and run `yarn install`
- Run `yarn dev` to start the development server
- View the app in the url shown in your console


# Testing

## Backend
- Run `cp .env.example .env.test.local` to create a copy of the environment variables
- Replace `<USERNAME>`, `<PASSWORD>` and `<DB_PORT>`, `<DB_NAME>` with the username, password, port and name of the 'test' postgres database respectively
- Run `yarn test:api`
# Contributors

| Author                                   | Role                                                    |
| ---------------------------------------- | -------------------------------------------------------- |
| [Bidemi](https://github.com/BidemiEnoch) | Leading role at UI and UX design                         |
| [Tekena](https://github.com/Tekipeps)    | Leading role at Backend development, Database Management |
| [Seun](https://github.com/seunosinowo)   | Supporting role at UI and UX design                      |
| [Emedit](https://github.com/EmeditWeb)   | ?                                                        |

# License

This project is licensed under the MIT license.
