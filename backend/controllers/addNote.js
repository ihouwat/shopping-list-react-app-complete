const handleAddNote = (req, res, db) => {
  ItemName = req.body.itemName
  note = req.body.note
  try {
    //Find index of item in grocery list
    const itemIndex = db.items.findIndex(item => item.name === ItemName)
    db.items[itemIndex].note = note
    res.json({
      items: db.items,
    })
  }
  catch(error) {
    res.status(400).json('could not add note to item')
  }
}

module.exports = {
  handleAddNote
}