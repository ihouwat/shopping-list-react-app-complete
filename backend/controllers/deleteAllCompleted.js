const handleDeleteAllCompleted = (req, res, db) => {
  // Empty completeditems table
  db('completeditems').del().returning('*')
  .then(response => {
    // Select completed items table
    db.select().from('completeditems')
    .then(completeditems => {
      // Send completed items table to the front end
      res.json({completeditems: completeditems})
    })
  })
  .catch(err => res.status(400).json('could not delete all completed items'))
}

module.exports = {
  handleDeleteAllCompleted
}
