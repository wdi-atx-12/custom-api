# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

## A Collaborative Playlist API (Work in Progress)

Welcome! This API is based on MongoDB and several NPM packages. It is currently hosted on Heroku and can be accessed [here](https://fierce-bastion-83122.herokuapp.com/).

### Using this API
This API has several endpoints:

| Endpoints     | Methods       | What they do  |
| ------------- |:-------------:| -----:|
| /users        | GET           | gives all users |
| /users/:id    | GET           | gives one user by ID |
| /users        | POST          | create user |
| /users/:id    | DELETE        | delete user by ID |
| /songs        | GET           | gives all songs |
| /songs        | POST          | create song |
| /playlists    | GET           | gives all playlists |


### Getting Started
To test this API out, you'll need Postman.
Postman will allow you to use any of the available CRUD methods to use this API.
Take a look at each endpoint to get familiar with how to interact with the API.

_Note:_ The 'update' and 'delete' methods are still in progress for 'songs' and 'playlists'.

### Your API should have:

* Well-organized **JSON API** Endpoints
* The ability to **read** (`GET`) each type of resource **as a collection**
* The ability to **read** (`GET`) each type of resource **by specific ID**
* The ability to **create** (`POST`) a new resource of each type
* At least one **update** (`PUT`) endpoint
* At least one **delete** (`DELETE`) endpoint

Try to start by completing the schema/model and implementing endpoints for only one type of resource and expand from there to include other schemas/models/endpoints.

Fork and clone this repo. You can use the placeholder code in this repo as a starting point.

## Step 0: Deploy to Heroku

Before we start coding, let's prepare to deploy our API on Heroku so other developers can access our API from any computer.

You can find full instructions here: [Deploying Express Apps to Heroku](https://github.com/SF-WDI-LABS/shared_modules/blob/master/how-to/heroku-mean-stack-deploy.md)

As you continue to work on this project, you'll need to remember to push your changes to Heroku (just like you would with Github!):

```bash
# git add changed-files
# git commit -m "detailed description of what I changed"
git push heroku master
heroku open
```

It's common for code to break "in production" even when it works fine "in development" on your computer (due to different environment variables, missing dependenies, etc). Do your best to debug! Let us know if you get stuck on deployment issues.

## Step 1: Verify the Test Routes in Postman

Since we're building a JSON API with no front-end (yet), Postman will come in handy for testing our work.

Make sure you've **installed dependencies** and added a `.env` file with your **Mongo DB credentials**. Then **run the server** with the placeholder code.

Use Postman to verify that the `GET /test` and `POST /test` endpoints work, confirming that our server can connect to our Mongo DB and complete operations on demand. For the `POST` endpoint, you can simply submit an object with a `name` property, and then it should appear in your next `GET /test` request:

```json
{
    "name": "test item 1"
}
```

## Step 2: Build Your Main Schema/Model

Next, go to the `models/` folder and add a new file for your main schema/model. For now we'll create it without a reference to any other schemas/models.

Be sure to export the model from the file and then modify `models/index.js`. It should require the file you just created and then export the models from it so they can be used more directly while preparing responses for our routes.

## Step 3: Create Your Primary Endpoints

Now go to the `routes/` folder and create a new file to handle your endpoints for the primary model. It should contain function definitions for handling various endpoints (`GET`, `POST`, etc) related to your primary model.

Start with the `GET` method for retrieving all matching resources. Then add a function for adding new resources (`POST`). Then add a function for retireving a specific resource by ID (`GET`, with path parameter).

Make sure that for each function, you modify `server.js` to register the functions as endpoint/route handlers.

## Step 4: Check Your Work in Postman

Open up Postman with your new code running on `localhost`. Hit your new `GET` and `POST` endpoints a few times to verify everything is working as expected.

If it's all working, add/commit your changes to git. Push to Github to backup your code. Push to Heroku so other people can use your newly created endpoints.

Return to Postman and test again, making sure that your code is working "in production" on the URL Heroku provided for your API server.

## Step 5: Add Your Other Schemas/Models/Endpoints

Now it's time to expand on what you've done. Piece by piece, add the other schemas/models and endpoints you planned.

Be sure to test your endpoints as you go in Postman. Also don't forget to commit your changes and deploy to Heroku from time to time.

## Options for Extra Challenge

- **Add even more schemas/models/enpoints.** Thinking of more detailed information is usually fairly easy, but the code to support it gets more difficult the more detail is added.
- **Add support for query parameters** to limit/filter responses on your endpoints that retrieve all resources in a collection. For example, you might limit items based on rating, time/date range, tags, etc.
- **Document all the endpoints of your API** in a markdown file. What does each endpoint do? How should a new user of your API get started?
