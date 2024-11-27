const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const hotelMenu = 
    {
        "menu": [
          {
            "id": 1,
            "name": "Breakfast Special",
            "description": "A healthy start to your day with scrambled eggs, buttered toast, and a steaming cup of freshly brewed coffee or tea.",
            "price": 12.99
          },
          {
            "id": 2,
            "name": "Lunch Burger",
            "description": "A classic American cheeseburger with a juicy patty, lettuce, tomato, pickles, and melted cheddar cheese, served with crispy fries.",
            "price": 14.99
          },
          {
            "id": 3,
            "name": "Pasta Primavera",
            "description": "A delightful pasta dish featuring spaghetti tossed with seasonal fresh vegetables, drizzled with olive oil and topped with Parmesan cheese.",
            "price": 18.99
          },
          {
            "id": 4,
            "name": "Grilled Salmon",
            "description": "Fresh, tender salmon fillet grilled to perfection with lemon, garlic, and fresh herbs, served with a side of roasted vegetables.",
            "price": 15.49
          },
          {
            "id": 5,
            "name": "Caesar Salad",
            "description": "Crisp romaine lettuce mixed with Caesar dressing, crunchy croutons, and freshly grated Parmesan cheese for a light and flavorful meal.",
            "price": 9.49
          },
          {
            "id": 6,
            "name": "Tom Yum Soup",
            "description": "A zesty and aromatic Thai soup made with shrimp, lemongrass, lime leaves, galangal, and mushrooms, balanced with a touch of spice and tang.",
            "price": 7.99
          }
        ]
      }
      ;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/menu', (req, res) => {
  res.json(hotelMenu);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
