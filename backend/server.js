const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const sortedFaves = require('./controllers/sortedFaves');
const firstLoad = require('./controllers/firstLoad');
const additem = require('./controllers/addItem');
const completeitem = require('./controllers/completeItem');
const deleteitem = require('./controllers/deleteItem');

const db =  {
  groceriesTemplate: [
    { name: 'Apple', count: 0 },
    { name: 'Apples', count: 10 },
    { name: 'Banana', count: 0 },
    { name: 'Bananas', count: 10 },
    { name: 'Oatmeal', count: 10 },
    { name: 'Clementines', count: 0 },
    { name: 'Blueberries', count: 0 },
    { name: 'Oranges', count: 0 },
    { name: 'Hummus', count: 10 },
    { name: 'Black Beans', count: 0 },
    { name: 'Chocolate Chips', count: 10 },
    { name: 'Cliff Bars', count: 0 },
    { name: 'Cereal Bars', count: 0 },
    { name: 'Almonds', count: 10 },
    { name: 'Coffee', count: 10 },
    { name: 'Orange Juice', count: 10 },
    { name: 'Flax Seed', count: 5 },
    { name: 'Grapes', count: 5 },
  ], 
  items: [],
  completedItems: [],
}



// Start app
const app = express();
app.use(cors()); 
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000;

app.use((req, res, next) => {sortedFaves.sortedFaves(req,res, db), next()}) //Middleware to sort incoming favorites and pass on to '/' GET request
app.get('/', (req, res) => {firstLoad.loadSession(req, res, db)}); // Get lists
app.put('/additem', (req, res) => {additem.handleAddItem(req,res,db)}) // Add item to grocery list
app.put('/completeitem', (req, res) => {completeitem.handleCompleteItem(req,res,db)}) // Complete item from grocery list
app.put('/deleteitem', (req, res) => {deleteitem.handleDeleteItem(req,res,db)}) // Delete item from list

// Recover item from completed list to grocery list
app.put('/recoveritem', (req, res) => {
  item = req.body.item
  itemName = req.body.item.name
  try {
    // Readd item to grocery list
    db.items.push(item)
    // Remove item from completed list
    db.completedItems.splice(db.completedItems.findIndex(item => item.name === itemName), 1)
    res.json({
      items: db.items,
      completedItems: db.completedItems,
    })
  }
  catch(error) {
    res.status(400).json('could not recover item');
  }
})

// Delete all the completed items
app.put('/deleteallcompleted', (req, res) => {
  db.completedItems = []
  try {
    res.json(db.completedItems)
  }
  catch(err) {
    res.status(400).json('could not delete all completed items');
  }
})

// Recover all the completed items back to groceyr list
app.put('/recoverallcompleted', (req, res) => {
  try {
    // Push all completed items back to items list
    db.completedItems.forEach(item => db.items.push(item))
    // Empty completed items list
    db.completedItems = []
    res.json({
      items: db.items,
      completedItems: db.completedItems
    })
  }
  catch(error) {
    res.status(400).json('could not recover all completed items')
  }
})


// Add note to grocery item on modal close
app.put('/addnote', (req, res) => {
  ItemName = req.body.itemName
  note = req.body.note
  try {
    //Find index of item in grocery list
    const itemIndex = db.items.findIndex(item => item.name === ItemName)
    db.items[itemIndex].note = note
    res.json({
      items: db.items,
    })
  }
  catch(error) {
    res.status(400).json('could not add note to item')
  }
})

// Send modal item on open modal
app.post('/openmodal', (req, res) => {
  itemName = req.body.item.name
  try {
    let itemIndex = db.items.findIndex(item => item.name === itemName)
    res.json({
      modalItemName: db.items[itemIndex].name,
      itemNotes: db.items[itemIndex].note
    })
  }
  catch(error) {
    res.status(400).json('could not fetch item note')
  }
})

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