const handleAddItem = (req, res, db) => {
  item = req.body
  try {
    db.items.push({
    name: item.name,
    note: '',
    id: Math.random().toString(36).substr(2, 9), // unique ID
    })
    res.json(db.items)
  }
  catch(err) {
    res.status(400).json('could not add item');
  }
};

module.exports={
  handleAddItem
}