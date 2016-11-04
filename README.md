# flatpage generator

## Steps to install dev environment:
1. brew install node
2. brew install npm
3. brew install mongodb
4. npm install -g nodemon

Otherwise:
* node.js: https://docs.npmjs.com/getting-started/installing-node
* mongodb: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition


## Commands

* make a new db 'junk' folder called junk in the flatpage_generator directory [never check this file into the git repo]
* `mongod --dbpath <path to junk>/junk`
* `nodemon` or `npm start` - Starts app
* [optional] `npm run webpack` - Listens to whatever webpack.config.js says and compiles on change

## Notes
* Sample site UI: http://graphics.dailybruin.com/pacific-ties/