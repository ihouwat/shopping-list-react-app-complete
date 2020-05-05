const getItemsOnLoad = (req, res, db) => {
  // Get the items table
  db.select().from('items') 
  .then(items => {
    // Get the completed items table
      db.select().from('completeditems') 
      .then(completeditems => {
        // Get the name column of the groceriestemplate table
        // in descending order by count number
        db.select('name').from('groceriestemplate').orderBy('count', 'desc') 
        .then(groceriestemplate =>{
          // Put the top ten items in the favoriteItems array
          let favoriteItems = [] 
          groceriestemplate.map((item, index) => {
            if (index < 10) {
              let obj = {name: item.name.trim(), isChecked: false} // trim removes whitespaces from db
              favoriteItems.push(obj)
            }
          })
          res.json({
            // The grocery list
            items: items,
            // The completed items list
            completedItems: completeditems,
            // The top favorites list
            favoriteItems: favoriteItems,
            // The groceriestemplate, which tracks purchase history
            // The historiacally top ten acquired groceries come from this list 
            groceriesTemplate: groceriestemplate,
          });
        })
      });
  }).catch(err => res.status(400).json('could not GET lists'))
};

module.exports = {
  getItemsOnLoad
}