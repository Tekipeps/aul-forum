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
Replace `<USERNAME>` and `<PASSWORD>` with the username and passowrd of the database server

<hr>

# License
This project is licensed under the MIT license.
