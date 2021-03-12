# Contributing
You must have first been assigned as a member of the **AUL web dev entrepreneurship**  team to contribute to this project. Make a fork of this repository, then clone it locally to your device to edit it. Read the [README.md](README.md) for more info about how to set up your own local copy of this project.
## Roles
Members are assigned to roles such as UI/UX design, server side scripting e.t.c To have a role, inform the [project leader](https://github.com/Tekipeps) about what role you want to get assigned to.

## Pull Request
After you have **added** and **commited** your changes to your own copy of this repository, make a pull request. Do not forget to include files like *yarn-error.log* and other build/dev tools in your [.gitignore](.gitignore) before making a pull request. If there are no merge conflicts or errors, your pull request should get merged eventually. Visit [this link](https://github.com/firstcontributions/first-contributions) for a tutorial on how to make contributions/pull requests.

# Development

## Linux

- Install [Volta](https://volta.sh/) here
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
- Run `yarn test:db:up` to setup test database
- Run `yarn test:api` to test with jest

# Code of Conduct
## Our Pledge
In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
## Our Standards
Examples of behavior that contributes to creating a positive environment include:
* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

## Attribution
This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4
