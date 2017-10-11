Maps out the API endpoints (method + path combos)
brief description of each endpoint
what's the expected response
any relevant options (i.e.query string options)
Provides a basic model structure
includes properties of each model
requirements for creation

# A Catering API
***
______________

### Introduction
This is an API that allows the user to use authored schemas and models to add, view, search, make changes, and delete catering indices with JSON output.
***
___________________________________________________________________________________________________

### To Access
To access this API, use the following URL: https://sleepy-plains-71427.herokuapp.com/ . While the 'home page' ('/') does not contain any content, please read further for instructions on how to access the indices.
***
___________________________________________________________________________________________________

### Methods and Paths to Endpoints
This API has several endpoints; where an order can be added, an entree can be added, where both can be found through their IDs, where both can listed in JSON. The order index can also be updated and removed if need be. 

#### To GET or POST orders or entrees
https://sleepy-plains-71427.herokuapp.com/newOrder will allow you to post a new order or view existing orders. 

Orders consist of custName (the customer's name that placed the order), howMany (how many orders of the batches of entrees were ordered), feedsUpTo (how many each ordered batch will feed), price (the overall cost for the whole order), and entrees (consisting of the IDs of each entree included in the order batch).
```
    {
        custName: "Darla Grazdan",
        howMany: 2,
        feedsUpTo: "60",
        price: 2000,
        entrees: [ ]
    }
```

https://sleepy-plains-71427.herokuapp.com/newEntrees will allow you to post a new entree or view existing entrees.

Entrees consist of the name (of the entree), the sides (side provided with the entree), ingedient (main ingredient in the entree itself), and glutenFree (a boolean stating whether the entree and side are gluten free or not).
```
    {
        name: "Chicken Parm",
        sides: "green beans",
        ingredients: "chicken",
        glutenFree: true,
    }
```
#### To GET order or entrees by ID

Use the following links followed by /:id of the order or entree you wish to find.

- Order: https://sleepy-plains-71427.herokuapp.com/newOrder/:id
- Entree: https://sleepy-plains-71427.herokuapp.com/newEntrees/:id









