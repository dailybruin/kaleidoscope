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
1. [`Page`](https://github.com/daily-bruin/flatpage_generator/blob/master/public/model/page.js)
  * contains an array of dictionaries representing the raw data of all components in the page
