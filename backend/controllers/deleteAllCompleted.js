const handleDeleteAllCompleted = (req, res, db) => {
  db.completedItems = []
  try {
    res.json(db.completedItems)
  }
  catch(err) {
    res.status(400).json('could not delete all completed items');
  }
}

module.exports = {
  handleDeleteAllCompleted
}
