const loadSession = (req, res, db) => {
  try {
    res.send({
      topTenFavorites: req.topTenFavorites,
      items: db.items,
      completedItems: db.completedItems,
    })
  }
  catch (err) {
    res.status(400).json('could not GET lists');
  }
};

module.exports = {
  loadSession
}