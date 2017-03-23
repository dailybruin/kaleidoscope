# Kaleidoscope

## Overview:
Kaleidoscope is an application that lets authors build their own online flatpage through reuseable pieces such as headers, subheads, images, quotes, and text sections.

## Contents:
1. [Steps to install dev environment](https://github.com/daily-bruin/flatpage_generator#steps-to-install-dev-environment)
2. [Starting the dev environment](https://github.com/daily-bruin/flatpage_generator#starting-the-dev-environment)
3. :octocat: [IMPLEMENTATION GUIDE](https://github.com/daily-bruin/flatpage_generator/#implementation-overview) :octocat: 
4. [How to Use the MongoDB Shell](https://github.com/daily-bruin/flatpage_generator#how-to-use-the-mongodb-shell)
5. [Current Features](https://github.com/daily-bruin/flatpage_generator#current-features)
6. [Future Features](https://github.com/daily-bruin/flatpage_generator#future-features)

### Steps to install dev environment:
1. [*Mac OSX only*] Install Homebrew at https://brew.sh/
2. Install NPM and node.js 
	* Options
		1. `curl -L https://www.npmjs.com/install.sh | sh`
		2. With Homebrew:
			* `brew install npm`
			* `brew install node`
		3. https://docs.npmjs.com/getting-started/installing-node
3. Install MongoDB
	* Options:
		1. With Homebrew: `brew install mongodb`
		2. https://docs.mongodb.com/manual/administration/install-community/
4. Install nodemon: `npm install -g nodemon`

### Starting the dev environment (need 3 command prompt windows, each for #2-4)
1. `npm install`
2. `npm run mongo`
3. `nodemon` [note: if nodemon not installed, run `npm start`]
4. `npm run webpack`

### Implementation Overview
The entire application starts at `views/template.jade` and `views/index.jade` where the element `#app` is our root React component. [`root.jsx`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/root.jsx) in `components/root.jsx` is the component binded to `#app`.
Inside the root is the component [`<App/>`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/App.jsx) that contain a [`<Dashboard/>`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/Dashboard.jsx) and [`<Page/>`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/Page.jsx) component.

##### The `<Dashboard/>` handles user input, form submission, and storing of data into the database. 
* To access MongoDB, AJAX requests are sent to the endpoints at `/routes.js`.
* `Dashboard` dispatchs actions using Redux to send `Page` components to a store to be rendered by the `Page`.
  * [Redux tutorial](https://github.com/happypoulp/redux-tutorial)

##### A `Page` is composed of an array of React.js components with the following heirarchy:
  * [`Page`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/Page.jsx)
    * The array in a page is [`SortableList`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/SortableComponent.jsx) which has `SortableItem` wrapped around our actual component.
        * Nested inside a `SortedItem` is a [`DashboardItem`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/DashboardItem.jsx) which contains a component from the following:
          1. [`Header`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/Header.jsx)
          2. [`Subhead`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/Subhead.jsx)
          3. [`Image`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/Image.jsx)
          4. [`Quote`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/Quote.jsx)
          5. [`TextSection`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/components/common/TextSection.jsx)
          
##### Database Models:
1. [`Page`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/model/page.js): contains an array of dictionaries representing the raw data of all components in the page

### How to Use the MongoDB Shell
* To start database command shell: `mongo`
* `use flatpage`
* To show all currently existing tables: `show tables`
* To show all stored pages: `db.pages.find()`
* To clear all database content: `db.dropDatabase()`
* To leave the db shell: `quit()`

### Current Features
* inserting, editting, and deleting components
* drag-style reordering of components
* downloadable HTML file of responsive flatpage
* `TextSection` allows inline links with markdown in textarea
	* ie: `[Daily Bruin] (www.dailybruin.com)`
* collapsible dashboard for edit vs. preview mode
* `/all` shows all stored pages
* updating previously saved pages

### Future Features
* color picker to allow user selected colors + extra user-defined styling customization
	* suggested to use:
		1. [Sassport](https://github.com/davidkpiano/sassport)
		2. [`react-inline`](https://github.com/martinandert/react-inline)
		3. [`node-sass-json-importer`](https://www.npmjs.com/package/node-sass-json-importer)
* dashboard input validation
* more component options:
	* photo gallery
	* left/right text-aligned images

### Contributors
* [Shannon Phu](https://github.com/shannonphu) [PM]
* Yvonne Chen
* Stella Chung
* Jason Jiang
* Catherine Lin
* Jerry Liu
