const handleDeleteItem = (req, res, db) => {
  const {name, id, note} = req.body.item
  const listName = req.body.listName.toLowerCase() // lowercase matches db table names
  // Identify the deleted item in the table and delete it
  db(listName).where('id', '=', id).del()
  .then(response => {
    // Get the table that was just updated
    return db.select().from(listName)
    .then(list => {
      // Send the table and table name to the front end
      res.json({
        listName: listName,
        updatedList: list,
      })
    })
  })
  .catch(err => res.status(400).json('could not delete item'))
}

module.exports = {
  handleDeleteItem
}