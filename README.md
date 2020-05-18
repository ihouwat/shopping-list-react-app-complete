We've all gone to a grocery store and found ourselves retracing our steps or revisiting aisles because we missed an item on our hand written list or because some 'generic' shopping app categorized items in a way that doesn't match our store layout. This shopping app allows you to customize your favorite grocery store layouts so you can zip in and out as efficiently as possible.

**Setup**

First set up a local PostgreSQL database called, 'quickshopper'. It includes three tables:

1. items: corresponds to the list of groceries to buy. It is made of three columns:

a. name (varchar)

b. id(varchar -- primary key)

c. note

2. completeditems: corresponds to the list of completed items. It includes three columns, as above

3. groceriestemplate: serves two functions, to fetch top 10 favorites and to populate the autofill search box. It is made of two columns:

a. name (varchar -- primary key)

b. count (integer -- not null)

In the src / constants folder:

1. Copy the groceriestemplatedb-5-6-2020.csv file to the groceriestemplate table in the database.

2. Modify the groceryStores.js file to include the grocery stores, categories, and store layouts.

**Starting the app**

**cd backend**

**npx nodemon server.js**

Then:

**npm start**

## Frontend Technologies Used
* [create-react-app](https://create-react-app.dev/): To create React application
* [material-ui](https://material-ui.com/): To create Material Design UI components
* [gh-pages](https://www.npmjs.com/package/gh-pages): To deploy demo site on GitHub pages

## Backend Technologies Used 
* [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware
* [cors](https://www.npmjs.com/package/cors): to provide a Connect/Express middleware that can be used to enable CORS
* [express](https://www.npmjs.com/package/express): To set up server
* [knex](https://www.npmjs.com/package/knex): A SQL query builder in JavaScript
* [pg](https://www.npmjs.com/package/pg): PostgreSQL client for Node.js. Uses pure JavaScript
* [nodemon](https://www.npmjs.com/package/nodemon): A development utility that monitors for any changes in the code and automatically restart the server