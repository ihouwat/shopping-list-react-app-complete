const handleAddItem = (req, res, db) => {
  item = req.body
  number = Math.random().toString(36).substr(2, 9)// unique ID
  // Insert a new item in the database
  db('items').insert([{name: item.name, id: number, note: ''} ])
  .then(function(result){
    // Get the items list from the database
    db.select().from('items')
    .then(function(result){
      //Send the list to the frontend
      res.json({ items: result })
    })
  })
  .catch(err => res.status(400).json('could not add item'))
 };

module.exports={
  handleAddItem
}