const handleAddItem = (req, res, db) => {
  item = req.body
  number = Math.random().toString(36).substr(2, 9)// unique ID
  db('items').insert([{name: item.name, id: number, note: ''} ])
  .then(function(result){
    db.select().from('items')
    .then(function(result){
      res.json({ items: result })
    })
  })
  .catch(err => res.status(400).json('could not add item'))
 };

module.exports={
  handleAddItem
}