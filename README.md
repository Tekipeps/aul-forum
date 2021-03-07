# Forum web app (AUL entrepreneurship project)

## Objectives

- Learn version control (Git and Github)
- Learn how the internet works
- Learn how to create static/dynamic websites
# About this branch

This is a complete rewrite of the AUL forum project in React.js, Sass and Typescript, knowledge of these two tools is fundamental in contributing to this branch

# Development

### Linux

- Install Volta from [volta](https://volta.sh/) website
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`


### Windows

- Install [Nodejs](https://nodejs.org/en/download/) for windows, then run `node -v` to test if node has been properly installed
- Install Yarn from [yarn site](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or if Nodejs is already installed `npm install --global yarn`
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`


Download and install postgresql on your computer [here](https://www.postgresql.org/download/)

#### backend
- Navigate to the root folder and install dependencies `yarn install` and `yarn install:client`
- Run `cp .env.example .env`
- Replace `<USERNAME>`, `<PASSWORD>` and `<DB_PORT>`, `<DB_NAME>` with the username, password, port and name of the postgres database respectively
- Run `yarn db:up` which sets up the database and seeds it
- Run `yarn build:client` which builds the frontend to serve (not necessary if working with only API)
- Start the server `yarn dev`

### frontend
- Navigate to the client directory and run `yarn install`
- Run `yarn dev` to start the development server
- View the app in url shown in your console

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Testing

#### backend
- Run `cp .env.example .env.test.local` to create a copy of the environment variables
- Replace `<USERNAME>`, `<PASSWORD>` and `<DB_PORT>`, `<DB_NAME>` with the username, password, port and name of the 'test' postgres database respectively
- Run `yarn test:api`
## Contributors

| Author                                   | Roles                                                    |
| ---------------------------------------- | -------------------------------------------------------- |
| [Bidemi](https://github.com/BidemiEnoch) | Leading role at UI and UX design                         |
| [Tekena](https://github.com/Tekipeps)    | Leading role at Backend development, Database Management |
| [Seun](https://github.com/seunosinowo)   | Supporting role at UI and UX design                      |
| [Emedit](https://github.com/EmeditWeb)   | ?                                                        |

# License

This project is licensed under the MIT license.
