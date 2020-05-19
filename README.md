# Quick Shopper

We've all visited grocery stores and found ourselves retracing our steps or revisiting aisles because we missed an item on our hand written list or because our 'generic' shopping app categorizes items in a way that doesn't match our store layout. This progressive web app is a shopping app that allows you to customize your favorite grocery store layouts so you can zip in and out as efficiently as possible. [Check out the demo](https://ihouwat.github.io/shopping-list-react-app-demo/).

## Setup 

### Database

Create a PostgreSQL database called 'quickshopper' on your local machine. It includes three tables:

1. **items**: stores the added grocery items. It includes three columns:

    a. name (varchar)

    b. id (varchar - primary key)
  
    c. note (varchar)

2. **completeditems**: stores the completed items. It includes three columns, same as above.

3. **groceriestemplate**: a. is used to fetch top 10 favorites on app load and b. populates the autofill search box. It includes two columns:

    a. name (varchar - primary key)

    b. count (integer - not null)

### Customize the app

In the backend folder:

Edit the server credentials, starting on line 14 in the server.js file

In the constants folder:
1. Copy the groceriestemplatedb-5-6-2020.csv file to the groceriestemplate table in the database.
2. Customize the stores array in the groceryStores.js file by modifying the store names, store categories, store orders, and items per category.

### Start the app

1. `npx nodemon server.js` starts the server on port 3000
2. `npm start` starts the frontend

## Features
* Customizable grocery stores and store layouts, in JavaScript
* Click on list items to add notes
* Fast, accessible progressive web app
* Top 10 faves list based on usage history 
* Dark mode, because why not?!
* Ready to deploy
* Cute bear to brighten your day (load the app)

## Frontend Technologies Used
* [create-react-app](https://create-react-app.dev/): To create React application
* [material-ui](https://material-ui.com/): To create Material Design UI components
* [gh-pages](https://www.npmjs.com/package/gh-pages): To deploy site on GitHub pages

## Backend Technologies Used 
* [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware
* [cors](https://www.npmjs.com/package/cors): to provide a Connect/Express middleware that can be used to enable CORS
* [express](https://www.npmjs.com/package/express): To set up server
* [knex](https://www.npmjs.com/package/knex): A SQL query builder in JavaScript
* [pg](https://www.npmjs.com/package/pg): PostgreSQL client for Node.js. Uses pure JavaScript
* [nodemon](https://www.npmjs.com/package/nodemon): A development utility that monitors for any changes in the code and automatically restarts the server