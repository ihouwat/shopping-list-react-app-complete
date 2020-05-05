const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const knex = require('knex')
const getitems = require('./controllers/getItems');
const additem = require('./controllers/addItem');
const completeitem = require('./controllers/completeItem');
const deleteitem = require('./controllers/deleteItem');
const recoveritem = require('./controllers/recoverItem');
const deleteallcompleted = require('./controllers/deleteAllCompleted');
const recoverallcompleted = require('./controllers/recoverAllCompleted');
const addnote = require('./controllers/addNote');
const openmodal = require('./controllers/openModal');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Wisaal83',
    database : 'quickshopper'
  }
});

const app = express(); // Start app
app.use(cors()); // for CORS
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000;

app.get('/', (req, res) => {getitems.getItemsOnLoad(req, res, db)}); // Get lists
app.post('/additem', (req, res) => {additem.handleAddItem(req, res, db)}) // Add item to grocery list
app.put('/completeitem', (req, res) => {completeitem.handleCompleteItem(req, res ,db)}) // Complete item from grocery list
app.delete('/deleteitem', (req, res) => {deleteitem.handleDeleteItem(req, res ,db)}) // Delete item from list
app.put('/recoveritem', (req, res) => {recoveritem.handleRecoverItem(req, res, db)}) // Recover item from completed list to grocery list
app.delete('/deleteallcompleted', (req, res) => {deleteallcompleted.handleDeleteAllCompleted(req, res, db)}) // Delete all the completed items
app.put('/recoverallcompleted', (req, res) => {recoverallcompleted.handleRecoverAllCompleted(req, res, db)}) // Recover all the completed items back to grocery list
app.post('/openmodal', (req, res) => {openmodal.handleOpenModal(req, res, db)}) // Open modal and fetch item name note
app.put('/addnote', (req, res) => {addnote.handleAddNote(req, res, db)}) // Add note to grocery item on modal close

app.listen(port, () => console.log(`app is running http://localhost:${port}`))

/* ROUTES to build
/DONE getitemslists --> GET = success/fail for items, completed items, and favorites (top 10 count)
/DONE Add item --> PUT = grocery
/DONE Complete item -->  DELETE = from items & PUT completed items, PUT item count increased
/DONE Delete item --> DELETE = from list
/DONE Delete all items --> Delete all items from completed list
/DONE Recover item --> DELETE = from completed items & PUT items
/DONE Recover all items --> Recover all items from completed list to items list 
/DONE Add note --> Add note on modal in items list
/DONE Fetch item on modal open
*/