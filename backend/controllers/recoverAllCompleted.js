const handleRecoverAllCompleted = (req, res, db) => {
  try {
    // Push all completed items back to items list
    db.completedItems.forEach(item => db.items.push(item))
    // Empty completed items list
    db.completedItems = []
    res.json({
      items: db.items,
      completedItems: db.completedItems
    })
  }
  catch(error) {
    res.status(400).json('could not recover all completed items')
  }
}

module.exports = {
  handleRecoverAllCompleted
}