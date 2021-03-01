# Forum web app (AUL entrepreneurship project)

## Objectives
- Learn version control (Git and Github)
- Learn how the internet works
- Learn how to create static/dynamic websites

## Setup

### Linux
- Install Volta from [volta](https://volta.sh/) website
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`
- Install dependencies `yarn install`
- Start the server `yarn dev`

### Windows
- Install [Nodejs](https://nodejs.org/en/download/) for windows, then run `node -v` to test if node has been properly installed
- Install Yarn from [yarn site](https://classic.yarnpkg.com/en/docs/install/#debian-stable) or if Nodejs is already installed `npm install --global yarn`
- Fork and clone the project `git clone https://github.com/<YOUR_USERNAME>/aul-forum.git`
- Install dependencies `yarn install`
- Start the server `yarn dev`

Add a `.env` file to the root of the project 

DB url format:`postgresql://<USERNAME>:<PASSWORD>@<SERVER>:<PORT>/<DB_NAME>?schema=public`
Note: remove the angle brackets to when adding the parameters.

Add the below content to the `.env` file
```
DEV_DB_URL="postgresql://<USERNAME>:tekipeps@localhost:5432/aul-forum?schema=public"
PROD_DB_URL="postgresql://<USERNAME>:tekipeps@localhost:5432/aul-forum?schema=public"
TEST_DB_URL="postgresql://<USERNAME>:tekipeps@localhost:5432/aul-forum-test?schema=public"
```
`DEV_DB_URL` and `PROD_DB_URL` should be the same in development
<hr>

# License
This project is licensed under the MIT license.
