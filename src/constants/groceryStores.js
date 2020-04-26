export const groceryStores = {
  stores: [
    {
      storeName: "Alphabetical"
    },
    {
      storeName: "Order Entered"
    },
    {
      storeName: "Fresh Thyme",
      storeCategories: [
        {
          storeOrder: 1,
          category: 'Produce',
          items: ['Apple', 'Apples', 'Banana','Bananas', 'Grapes', 'Clementines', 'Orange', 'Oranges']
        },
        {
          storeOrder: 2,
          category: 'Bulk Foods',
          items: ['Oatmeal', 'Almonds']
        },
        {
          storeOrder: 3,
          category: 'Fridge',
          items: ['Orange Juice', 'Milk', 'Almond Milk', 'Sausages', 'Tofu']
        },
        {
          storeOrder: 4,
          category: 'Uncategorized Items',
          items: [],
        },
      ]
    },
    {
      storeName: "Kroger Frandor",
      storeCategories: [
        {
          storeOrder: 1,
          category: 'Produce',
          items: ['Apple', 'Apples', 'Banana','Bananas', 'Grapes']
        },
        {
          storeOrder: 2,
          category: 'Uncategorized Items',
          items: [],
        }
      ]
    },
  ]
};

