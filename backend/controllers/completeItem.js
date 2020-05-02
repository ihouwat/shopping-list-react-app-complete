const handleCompleteItem = (req, res, db) => {
  db.transaction(trx => {
    const {name, id, note} = req.body.item
    // Push item to completed items list and return id
    return trx('completeditems').insert({name: name, id: id, note: note})
    .returning('id')
    .then(id => { 
      // Delete same item from grocery list and return name
      return trx('items').where('id', '=', id[0]).del().returning('name')
    })
    .then(name => {
      // If name in groceriestemplate, increment count by 1
      // This will be used to generate top ten faves on app load
      return trx('groceriestemplate').returning('*').where('name', '=', name[0]).increment('count', 1).returning('*')
      .then(groceriestemplate => {
        return trx('items')
        .then(items => {
          return trx('completeditems')
          .then(completeditems => {
            // Fetch items and completeditems tables and send to front-end
            res.json({ 
              items: items, 
              completedItems: completeditems 
            }); 
          })
        })
      })
    })
      .then(trx.commit)
      .catch(trx.rollback)
  })
  .catch(err => res.status(400).json('could not complete getting item'))
}

module.exports = {
  handleCompleteItem
}