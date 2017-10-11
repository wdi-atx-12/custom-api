# UFC API DOCUMENTATION
### By Dazaev

Welcome to my UFC API! Here you will find the documentation you need to start retrieving, creating, updating and even deleting data! (But please... don't erase data)

## About my UFC API:
The API built on the principles of REST keeps track of current and past UFC fighters, you can access data like their fighting records, what country are they fighting from and if they're currently holding the title belt.

# PUBLIC ENDPOINTS

## This is the url where you can access all the data: https://guarded-mesa-21535.herokuapp.com/

## GET "/"
This will get you to the **homepage** where a welcome message will be displayed in the form of JSON data.
```
https://guarded-mesa-21535.herokuapp.com/
```

## GET "/fighters"
The fighters endpoint allows you to browse **all** published posts existing on the database.
```
https://guarded-mesa-21535.herokuapp.com/fighters
```
## GET "/fighters/:id"
This endpoint allows you to fetch a specific fighter based on its **id**.
```
https://guarded-mesa-21535.herokuapp.com/fighters/59dcdb5bd7aca80012cf1078
```

# PRIVATE ENDPOINTS
(This is the endpoints only **Admins** should be authorized to use, but hey feel free to contribute!)

## POST "/fighters"
With this method and this endpoint users can create via **Postman** new fighter entrees using the following guidelines:

```
{
firstName: String,
lastName: String,
titleHolder: Boolean,
country: String,
record: String,
}
```
They key "record" must have a value written like in this example "10-5", 10 being the fights the fighter has won and 5 being the ones he has lost.

## PUT "fighter/:id"
Using **PUT** in this endpoint allows users to modify the data of a specific previously created fighter entree by fetching it by its id. This is useful to keep their all the record data up to date. The guidelines on how to update their info are the same as the POST method mentioned above.
```
https://guarded-mesa-21535.herokuapp.com/fighters/59dcdb5bd7aca80012cf1078
{
  titleHolder: true
  record: "12-2"
}
```

## DELETE "fighter/:id"
**CAUTION!** I would suggest being careful with this method, avoid using it if you are not sure of how to use it. This endpoint looks for a fighter using its id and deletes it from the API.
```
https://guarded-mesa-21535.herokuapp.com/fighters/59dcdb5bd7aca80012cf1078
```

# This site is still in the works so hopefully when I get the chance I'll continue updating it since I'm a really big fan of MMA. Thanks for reading and have fun using it!
