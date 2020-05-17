const handleDeleteItem = (req, res, db) => {
  const {name, id, note} = req.body.item
  const listName = req.body.listName.toLowerCase() // lowercase matches db table names
  // Identify the deleted item in the table and delete it
  let matchItem
  // If there is an id (all delete requests, except those from top favorites modal)
  if (id) {
    matchItem = db(listName).where('id', '=', id).del()
  } else {
    // If you are deleting from the top faves modal, use the name from req.boy.item instead
     matchItem = db.raw("DELETE FROM items WHERE id IN (SELECT id FROM items WHERE name=? LIMIT 1)", [name])
  }
  matchItem.then(response => {
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