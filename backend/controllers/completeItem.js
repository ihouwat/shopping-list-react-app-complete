const handleCompleteItem = (req, res, db) => {
  item = req.body.item
  itemName = req.body.item.name
  try {
    // Remove snackbar functionality once item has been completed
    if (item.activatedSnackbarOnce) {
      item["activatedSnackbarOnce"] = 'fired once'
    }
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
      items: db.items,
      completedItems: db.completedItems,
    })
  }
  catch(err) {
    res.status(400).json('could not complete getting item');
  }
};

module.exports = {
  handleCompleteItem
}