const getItemsOnLoad = (req, res, db) => {
  // }
  db.select().from('items') // Get the items list
  .then(function(items){
      db.select().from('completeditems') // Get the completed items list
      .then(function(completeditems) {
        db.select('name').from('groceriestemplate').orderBy('count', 'desc').limit(10) // Get the top ten favorites, starting in descending order
        .then(function(groceriestemplate){
          let favoriteItems = [] 
          groceriestemplate.forEach(item => {
            favoriteItems.push(item.name)
          })
          console.log(favoriteItems)
          // topTenFavorites.push({
          //   // Grocery name
          //   name: sortTopTenFavorites[index].name,
          //   // isChecked is false, when it is checked in TopNavigationFaves, it becomes tru
          //   isChecked: false,
          // })
          // console.log(groceriestemplate.filter(item => console.log('1', item.name)))
          res.json({
              items: items,
              completedItems: completeditems,
              favoriteItems: groceriestemplate
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