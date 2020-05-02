const handleOpenModal = (req, res, db) => {
  const { name, id, note } = req.body.item
  db.select().from('items').where('id', '=', id).update('note', note).returning('*')
  .then(item => {
    res.json({
      modalItemName: item[0].name,
      itemNotes: item[0].note
    })
  })
  .catch(err => res.status(400).json('could not fetch item note to open modal'))
}

module.exports = {
  handleOpenModal
}