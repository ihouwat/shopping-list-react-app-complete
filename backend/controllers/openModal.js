const handleOpenModal = (req, res, db) => {
  itemName = req.body.item.name
  try {
    let itemIndex = db.items.findIndex(item => item.name === itemName)
    res.json({
      modalItemName: db.items[itemIndex].name,
      itemNotes: db.items[itemIndex].note
    })
  }
  catch(error) {
    res.status(400).json('could not fetch item note')
  }
}

module.exports = {
  handleOpenModal
}