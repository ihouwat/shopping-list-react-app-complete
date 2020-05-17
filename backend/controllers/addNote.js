const handleAddNote = (req, res, db) => {
  const {id, note} = req.body
  // Find item in database and add note
  db.select().from('items').where('id', '=', id).update('note', note).returning('*')
  .then(resp => {
    // Get items list from database
    db.select().from('items')
    .then(items => {
      // Send items list to the frontend
      res.json ({items: items})
    })
  })
  .catch(err => res.status(400).json('could not add note to item'))
}

module.exports = {
  handleAddNote
}