# Kaleidoscope

## Overview:
Kaleidoscope is an application that lets authors build and generate their own online flatpage through reuseable pieces such as headers, subheads, images, quotes, and text sections.

## Contents:
1. [Steps to install dev environment](https://github.com/daily-bruin/kaleidoscope#steps-to-install-dev-environment)
2. [Starting the dev environment](https://github.com/daily-bruin/kaleidoscope#starting-the-dev-environment)
3. :octocat: [IMPLEMENTATION OVERVIEW](https://github.com/daily-bruin/kaleidoscope/#implementation-overview) :octocat:
4. :octocat: [REDUX IMPLEMENTATION OVERVIEW](https://github.com/daily-bruin/kaleidoscope/#redux-implementation-overview) :octocat:
	1. [Redux Introduction](https://github.com/daily-bruin/kaleidoscope#redux-introduction)
	2. [Actions](https://github.com/daily-bruin/kaleidoscope#actions)
	3. [Reducers](https://github.com/daily-bruin/kaleidoscope#reducers)
	4. [Store](https://github.com/daily-bruin/kaleidoscope/store)
	5. [Creating a New Component](https://github.com/daily-bruin/kaleidoscope#creating-a-new-component)
5. [How to Use the MongoDB Shell](https://github.com/daily-bruin/kaleidoscope#how-to-use-the-mongodb-shell)
6. [Current Features](https://github.com/daily-bruin/kaleidoscope#current-features)
7. [Future Features](https://github.com/daily-bruin/kaleidoscope#future-features)

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
The entire application starts at `views/template.jade` and `views/index.jade` where the element `#app` is our root React component. [`root.jsx`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/root.jsx) in `components/root.jsx` is the component binded to `#app`.
Inside the root is the component [`<App/>`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/App.jsx) that contain a [`<Dashboard/>`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/Dashboard.jsx) and [`<Page/>`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/Page.jsx) component.

##### The `<Dashboard/>` handles user input, form submission, and storing of data into the database. 
* To access MongoDB, AJAX requests are sent to the endpoints at `/routes.js`.
* `Dashboard` dispatchs actions using Redux to send `Page` components to a store to be rendered by the `Page`.
  * [Redux tutorial](https://github.com/happypoulp/redux-tutorial)

##### A `Page` is composed of an array of React.js components with the following heirarchy:
  * [`Page`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/Page.jsx)
    * The array in a page is [`SortableList`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/SortableComponent.jsx) which has `SortableItem` wrapped around our actual component.
        * Nested inside a `SortedItem` is a [`DashboardItem`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/DashboardItem.jsx) which contains a component from the following:
          1. [`Header`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/Header.jsx)
          2. [`Subhead`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/Subhead.jsx)
          3. [`Image`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/Image.jsx)
          4. [`Quote`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/Quote.jsx)
          5. [`TextSection`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/components/common/TextSection.jsx)
          
##### Database Models:
1. [`Page`](https://github.com/daily-bruin/kaleidoscope/blob/master/public/model/page.js): contains an array of dictionaries representing the raw data of all components in the page

### Redux Implementation Overview

#### Redux Introduction
Redux is used to dynamically create new web components for a new page and store them for easy access in the application.
Redux has a flow of information that is as follows:

Call on the store to dispatch an action

 ```javascript 
 store.dispatch(action)
 ```
The store calls a reducer function which computes the next state of the store.

The root reducer combines the outputs of multiple reducers into a single state tree.

The new entire single state tree is returned altering what is displayed on the application

react component -> action -> reducer -> store

#### Actions
Our main actions in the flatpage_generator give information necessary to create a new webpage component
To add actions, modify `public/redux/actions.js`

Here is an example to create a Header component within our application

```javascript
export const addHeader = (title, author, coverImageUrl, key,button,comp_type) => {
    return {
        type: 'ADD_HEADER',
        title: title,
        author: author,
        url: coverImageUrl,
        key: key,
        button: button,
        comp_type: comp_type,
    }
}
```
* `type` is a string that is used to identify the action when passed to the reducer function
* `title`, `author`, and `url` are information that we need to fill our component with 
* `key` is the database id that is generated by the Dashboard component `public/components/Dashboard` that is tied with the new component
* `button` is an React button group that needs to include an edit button to edit the component when added to the page preview and a delete button
* `component`is a string that identifies what type of component you are creating. (eg for our example comp_type is "header")


#### Reducers
Our reducers can befound in `public/redux/reducers.js`

Redux works with only one store. However you can have multiple reducers that contain differents pieces of data 
that will get combined together into one single state tree in our `public/redux/reducers/index.js`

Here is an simplified example of our `_dashboard` reducer function that returns a newly generated state of _dashboard

```javascript
export function  _dashboard(state = [], action) {
    switch (action.type) {
        case 'ADD_HEADER':
            const header = <Header  title={action.title}
                                    author={action.author}
                                    image={action.url}/>;
            return [
              ...state,
              header
            ]
        default:
            return state;
    }
}

```

In this example we have a part of store called _dashboard which we can access by 
```javascript
store.getState()._dashboard
```

* Notice how in our reducer function we pass in a state and an action
* We must check on the type of the action via `action.type` in order to determine how to generate the next state
* Regardless of action being taken we must return either a state object `{}` or state array `[]` (array in our application)
* In our example we have create a new Header component using the information from the action that was passed in and add it to the state array


#### Store

After a component dispatches an action to a reducer in redux, the reducer returns a new state. 
Smaller reducers can be combined into one large state tree. 
You can see this in `public/redux/reducers/index.js`

In our application we have two smaller reducers:
* _dashboard which stores the number of components a user has created for a new page
* _header which stores the metadata of the generated webpage

```javascript
export function _dashboard(state=[], action) {
  ...
}

export function _header(state=[], action) {
  ...
}
```

We combine these into a single store 
```javascript
export default function () {
    var reducer = combineReducers(reducers)
    var store = createStore(reducer);
    return store;
}
```

However, when we want to access the information in a particular store (which is part of the larger store), we make the following call
```javascript
store.getState()._dashboard
store.getState()._header
```
#### Creating a New Component
Coming soon.

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
