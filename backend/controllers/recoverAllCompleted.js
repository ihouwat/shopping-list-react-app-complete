const handleRecoverAllCompleted = (req, res, db) => {
  // Find all items in completed list
    db.select().from('completeditems')
    .then(items => {
      // Add all items to grocery list
      return db('items').insert(items).returning('*')
      })
      .then(items => {
        // Delete all items in completed list
        return db('completeditems').del().returning('*')
        .then(completeditems => {
          // Get completed list
          return db('completeditems')
            .then(completeditems => {
              return db('items') 
                .then(items => {
                //Send to front end
                res.json({
                  items: items,
                  completedItems: completeditems
                })
              })
            })
          })
      })
    .catch(err => res.status(400).json('could not recover all completed items'))
  }

module.exports = {
  handleRecoverAllCompleted
}