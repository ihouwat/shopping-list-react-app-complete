const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

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

//Middleware to sort incoming favorites
const sortedFaves = function (req, res, next) {
 //Helper method to sort groceries by count
 let sortFavorites = (a, b) => {
  const itemA = a.count;
  const itemB = b.count;
  let comparison = 0;
  if (itemA < itemB) {
    comparison = 1;
  } else if (itemA > itemB) {
    comparison = -1;
  }
  return comparison
  }
  // Get top ten grocery items by count.
  // Count number is historical record of how many times each item has been bought
  const sortTopTenFavorites = db.groceriesTemplate.sort(sortFavorites).slice(0,10)
  // Create a new array
  const topTenFavorites = []
  // For each topTen, create an object and push into favoritesState
  for (let index in sortTopTenFavorites){
    topTenFavorites.push({
      // Grocery name
      name: sortTopTenFavorites[index].name,
      // isChecked is false, when it is checked in TopNavigationFaves, it becomes tru
      isChecked: false,
    });
  }
  req.topTenFavorites = topTenFavorites
  next()
}

app.use(sortedFaves)


// Get lists
app.get('/', (req, res) => {
  res.send({
    topTenFavorites: req.topTenFavorites,
    items: db.items,
    completedItems: db.completedItems,
  })
});

// Add item to grocery list
app.put('/additem', (req, res) => {
  item = req.body
  db.items.push({
    name: item.name,
    note: '',
    id: Math.random().toString(36).substr(2, 9), // unique ID
  })
  newItem = db.items[db.items.length - 1]
  res.json({
    name: newItem.name,
    note: newItem.note,
    id: newItem.id
  })
});

// Complete item from grocery list
app.put('/completeitem', (req, res) => {
  item = req.body.item
  itemName = req.body.item.name
  // Push item to completed items list
  db.completedItems.push(item)
  // Filter item out of items list
  db.items.splice(db.items.findIndex(item => item.name === itemName), 1)
  // Find item index in groceriesTemplate array
  const templateIndex = db.groceriesTemplate.findIndex(item => item.name === itemName)
  // Increment count of item in groceries Template array (useful for loading favorites)
  if(templateIndex !== -1) {
    console.log('in grocery list')
    db.groceriesTemplate[templateIndex].count ++
  } else {
    console.log('not in grocery list')
    // If item not in groceriesTemplate, push it and increment count to 1
    db.groceriesTemplate.push({
      name: item.name,
      count: 1,
    })
  }
  console.log(db.groceriesTemplate)
  res.json({
    name: item.name,
    note: item.note,
    id: item.id
  })
});

// Delete item from list
app.put('/deleteitem', (req, res) => {
  item = req.body.item
  list = req.body.list
  list === 'items' ? dbList = db.items : dbList = db.completedItems
  dbList.splice(dbList.findIndex(item => item.name === item.name), 1)
  res.json({
    item: item,
    list: list
  })
})

// Recover item from completed list to grocery list
app.put('/recoveritem', (req, res) => {
  recoveredItem = {name: "Ice Cream", note: 'Rocky Road flavor', id: 10}
  db.items.push(recoveredItem)
  const updatedList = db.completedItems.filter(item => item.name !== recoveredItem.name)
  db.completedItems = updatedList
  res.json({
    items: db.items,
    completedItems: db.completedItems,
  })
})

// Add note to grocery item
app.put('/addnote', (req, res) => {
  modalItemName = 'Flax Seed'
  itemNotes = 'Get the large one'
  //Find index of item in grocery list
  const findIndex = db.items.findIndex(item => item.name === modalItemName)
  db.items[findIndex].note = itemNotes
  res.json({
    items: db.items,
  })
})

// Delete all the completed items
app.put('/deleteallcompleted', (req, res) => {
  db.completedItems = []
  res.json({
    completedItems: db.completedItems
  })
})

// Recover all the completed items back to groceyr list
app.put('/recoverallcompleted', (req, res) => {
  // Push all completed items back to items list
  db.completedItems.forEach(item => db.items.push(item))
  // Empty completed items list
  db.completedItems = []
  res.json({
    items: db.items,
    completedItems: db.completedItems
  })
})

app.listen(port, () => console.log(`app is running http://localhost:${port}`))

/* ROUTES to build
/DONE getitemslists --> GET = success/fail for items, completed items, and favorites (top 10 count)
/DONE Add item --> PUT = grocery
/DONE Complete item -->  DELETE = from items & PUT completed items, PUT item count increased
/DONE Delete item --> DELETE = from list

/ Recover item --> DELETE = from completed items & PUT items
/ Add note --> Add note on modal in items list
/ Delete all items --> Delete all items from completed list
/ Recover all items --> Recover all items from completed list to items list */