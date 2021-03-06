# Forum web app (AUL entrepreneurship project)

## Objectives

- Learn version control (Git and Github)
- Learn how the internet works
- Learn how to create static/dynamic websites

## Setup

### Linux

- Install Volta from [volta](https://volta.sh/) website
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`
- Navigate into the client folder and install dependencies `yarn install`
- Start the server `yarn dev`

### Windows

- Install [Nodejs](https://nodejs.org/en/download/) for windows, then run `node -v` to test if node has been properly installed
- Install Yarn from [yarn site](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or if Nodejs is already installed `npm install --global yarn`
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`
- Navigate into the client folder and install dependencies `yarn install`
- Start the server `yarn dev`

Download and install postgresql on your computer [here](https://www.postgresql.org/download/)

Add a `.env` file to the root of the project

DB url format:`postgresql://<USERNAME>:<PASSWORD>@<SERVER>:<PORT>/<DB_NAME>?schema=public`

Note: remove the angle brackets to when adding the parameters.

Example:
Add the below content to the `.env` file

> ```
> DEV_DB_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/aul-forum?schema=public"
> PROD_DB_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/aul-forum?schema=public"
> TEST_DB_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/aul-forum-test?schema=public"
> ```
>
> Replace `<USERNAME>` and `<PASSWORD>` with the username and passowrd of the database server

<hr>

# About this branch

This is a complete rewrite of the AUL forum project in React.js, Sass and Typescript, knowledge of these two tools is fundamental in contributing to this branch

## Install create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Run `npm install create-react-app` from your command line to have it installed

## Available Scripts

In the client directory, you can run:

### `yarn install`

Installs all dependencies required by this project

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About create-react-app

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributors

| Author                                   | Roles                                                    |
| ---------------------------------------- | -------------------------------------------------------- |
| [Bidemi](https://github.com/BidemiEnoch) | Leading role at UI and UX design                         |
| [Tekena](https://github.com/Tekipeps)    | Leading role at Backend development, Database Management |
| [Seun](https://github.com/seunosinowo)   | Supporting role at UI and UX design                      |
| [Emedit](https://github.com/EmeditWeb)   | ?                                                        |

# License

This project is licensed under the MIT license.
