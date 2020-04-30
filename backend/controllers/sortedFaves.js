
//Middleware to sort incoming favorites
const sortedFaves = function (req, res, db) {
  //Helper method to sort groceries by count
  let sortFavorites = (a, b) => {
   const itemA = a.count;
   const itemB = b.count;
   let comparison = 0;
   if (itemA < itemB) {
     comparison = 1;
   } else if (itemA > itemB) {
     comparison = -1;
   }
   return comparison
   }
   // Get top ten grocery items by count.
   // Count number is historical record of how many times each item has been bought
   const sortTopTenFavorites = db.groceriesTemplate.sort(sortFavorites).slice(0,10)
   // Create a new array
   const topTenFavorites = []
   // For each topTen, create an object and push into favoritesState
   for (let index in sortTopTenFavorites){
     topTenFavorites.push({
       // Grocery name
       name: sortTopTenFavorites[index].name,
       // isChecked is false, when it is checked in TopNavigationFaves, it becomes tru
       isChecked: false,
     });
   }
   req.topTenFavorites = topTenFavorites
 }

 module.exports = {
   sortedFaves
 }