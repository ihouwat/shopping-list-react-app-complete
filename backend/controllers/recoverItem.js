const handleRecoverItem = (req, res, db) => {
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
}

module.exports = {
  handleRecoverItem
}