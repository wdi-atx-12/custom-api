# Project Management API

This custom API is made to help developers manage their projects and remember past projects. You may add a time that the project was posted, and add a boolean on whether or not it is currently active and deployed. You may also refer to developers included in the project Schema along with a project description and name. You can also include a list of ids of projects that a developer has done through the developer Schema. You may also add a GitHub handle which is required in the developer schema.

## How To Contribute To Project Schema

```
  //https://localhost:3000/projects
  //This url above shows you all projects listed in the database

  //To add a new project, go to post method and refer to object model

  {
    "name": "name",
    "description": "gibberish",
    "developers": [{id: 87162728}, ....],
    "timePosted": "10/06/17",
    "isDeployed": true
  }

  //To update a project, go to put method, and refer to object model above //and make changes where necessary

  //To remove a project, simply add the id to the end of the above url, such as: https://localhost:3000/projects/87162728 and go to delete method and send.

  //To get one project, simply input the id at the end of the url shown above and go to get method.
```

## How To Contribute To Developer Schema

```
  //https://localhost:3000/developers
  //This url above shows you all developers listed in the database

  //To add a new developer go to the post method and refer to object model

  {
    "name": "name",
    "github": "@gitgitHub"
    "projects": [{id: 87162728}, ....],
  }

  //To update a developer, go to put method, and refer to object model above and make changes where necessary

  //To remove a developer, simply add the id to the end of the above url, such as: https://localhost:3000/developers/87162728 and go to delete method and send.

  //To get one developer, simply input the id at the end of the url shown above and go to get method.
```
I hope you find this database useful in some way.
