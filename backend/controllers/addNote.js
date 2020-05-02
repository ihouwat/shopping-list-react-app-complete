const handleAddNote = (req, res, db) => {
  const itemName = req.body.itemName
  const note = req.body.note
  db.select().from('items').where('name', '=', itemName).update('note', note).returning('*')
  .then(resp => {
    db.select().from('items')
    .then(items => {
      res.json ({items: items})
    })
  })
  .catch(err => res.status(400).json('could not add note to item'))
}

module.exports = {
  handleAddNote
}