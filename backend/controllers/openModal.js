const handleOpenModal = (req, res, db) => {
  const { id } = req.body.item
  // Find item in database
  db.select().from('items').where('id', '=', id).returning('*')
  .then(item => {
    res.json({
      // Return the item name and corresponding note to the frontend
      modalItemName: item[0].name,
      itemNotes: item[0].note
    })
  })
  .catch(err => res.status(400).json('could not fetch item note to open modal'))
}

module.exports = {
  handleOpenModal
}