const getItemsOnLoad = (req, res, db) => {
  db.select().from('items') // Get the items list
  .then(function(items){
      db.select().from('completeditems') // Get the completed items list
      .then(function(completeditems) {
        db.select('name').from('groceriestemplate').orderBy('count', 'desc').limit(10) // Get the top ten favorites, starting in descending order
        .then(function(groceriestemplate){
          let favoriteItems = [] 
          groceriestemplate.map(item => {
            let obj = {name: item.name.trim(), isChecked: false} // trim removes whitespaces from db
            favoriteItems.push(obj)
          })
          res.json({
              items: items,
              completedItems: completeditems,
              favoriteItems: favoriteItems
          });
        })
      });
  }).catch(function(error) {
      res.status(400).json('could not GET lists')
  });
};

module.exports = {
  getItemsOnLoad
}