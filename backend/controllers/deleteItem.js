const handleDeleteItem = (req, res, db) => {
  item = req.body.item
  itemName = item.name
  try {
    listName = req.body.listName
    listName === 'items' ? dbList = db.items : dbList = db.completedItems
    dbList.splice(dbList.findIndex(item => item.name === itemName), 1)
    res.json({
      listName: listName,
      updatedList: dbList,
    })
  }
  catch (err) {
    res.status(400).json('could not delete item');
  }
}

module.exports = {
  handleDeleteItem
}