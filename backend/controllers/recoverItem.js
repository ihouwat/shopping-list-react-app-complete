const handleRecoverItem = (req, res, db) => {
  db.transaction(trx => {
    const {name, id, note} = req.body.item
    // Readd item to grocery list and return id
      return trx('items').insert([{name: name, id: id, note: note}]).returning('id')
      .then(id => {
        // Remove item from completed items list
        return trx('completeditems').where('id', '=', id[0]).del().returning('*')
      })
      .then(response => {
        return trx('items')
        .then (items => {
          return trx('completeditems')
          .then(completeditems => {
            res.json({
              items: items,
              completedItems: completeditems
            })
          })
        })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
  .catch(err => res.status(400).json('could not recover item'))
}

module.exports = {
  handleRecoverItem
}