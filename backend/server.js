const express = require('express');
const bodyParser = require('body-parser')

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
  items: [
    {name: "Apples", note: 'The note', id: 0},
    {name: "Oranges", note: 'The note', id: 1},
    { name: 'Flax Seed', note: 'The note', id: 2},
  ],
  completeditems: [
    {name: "Bananas", note: 'The note is here', id: 1},
    {name: "Ice Cream", note: 'Rocky Road flavor', id: 10},
  ],
}



// Start app
const app = express();
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
  res.json({
    topTenFavorites: req.topTenFavorites,
    items: db.items,
    completeditems: db.completeditems,
  })
});

// Add item to grocery list
app.put('/additem', (req, res) => {
  db.items.push({
    name: "Oatmeal",
    note: "Don't get quick oatmeal",
    id: Math.random().toString(36).substr(2, 9), // unique ID
  })
  console.log('newItem', db.items[db.items.length - 1])
  res.json({
    items: db.items,
  })
});

// Complete item from grocery list
app.put('/completeitem', (req, res) => {
  completedItem = {name: "Oranges", note: 'The note', id: 1}
  // Push item to completed items list
  db.completeditems.push(completedItem)
  // Filter item out of items list
  const findListIndex = db.items.findIndex(item => item.name === completedItem.name)
  db.items.splice(findListIndex, 1)
  // Find item index in groceriesTemplate array
  const templateIndex = db.groceriesTemplate.findIndex(item => item.name === completedItem.name)
  // Increment count of item in groceries Template array (useful for loading favorites)
  db.groceriesTemplate[templateIndex].count ++
  console.log(db.groceriesTemplate)
    res.json({
      items: db.items,
      completeditems: db.completeditems,
    })
});

app.put('/deleteitem', (req, res) => {
  deletedItem = {name: "Oranges", note: 'The note', id: 1}
  deletedItemList = 'items'
  // deletedItem2 = {name: "Bananas", note: 'The note is here', id: 1},
  // deletedItemList = 'completeditems'
  list = ''
  deletedItemList === 'items' ? list = db.items : list = db.completeditems
  findIndex = list.findIndex(item => item.name === deletedItem.name)
  list.splice(findIndex, 1)
  if (list === db.items) {
    db.items = list
    res.json({
      items: list,
    })
  } else {
    res.json({
      completeditems: list,
    })
  }
})

app.put('/recoveritem', (req, res) => {
  recoveredItem = {name: "Ice Cream", note: 'Rocky Road flavor', id: 10}
  db.items.push(recoveredItem)
  const updatedList = db.completeditems.filter(item => item.name !== recoveredItem.name)
  db.completeditems = updatedList
  res.json({
    items: db.items,
    completeditems: db.completeditems,
  })
})

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

app.put('/deleteallcompleted', (req, res) => {
  db.completeditems = []
  res.json({
    completeditems: db.completeditems
  })
})

app.put('/recoverallcompleted', (req, res) => {
  // Push all completed items back to items list
  db.completeditems.forEach(item => db.items.push(item))
  // Empty completed items list
  db.completeditems = []
  res.json({
    items: db.items,
    completeditems: db.completeditems
  })
})

app.listen(port, () => console.log(`app is running http://localhost:${port}`))

/* ROUTES to build
/DONE getitemslists --> GET = success/fail for items, completed items, and favorites (top 10 count)
/DONE Add item --> PUT = grocery
/DONE Complete item -->  DELETE = from items & PUT completed items, PUT item count increased
/DONE Delete item --> DELETE = from list
/DONE Recover item --> DELETE = from completed items & PUT items
/DONE Add note --> Add note on modal in items list
/DONE Delete all items --> Delete all items from completed list
/DONE Recover all items --> Recover all items from completed list to items list
/Check favorite item --> PUT change isChecked to true */