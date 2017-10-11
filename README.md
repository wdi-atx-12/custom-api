# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API - Weekend Lab

## A Collaborative Playlist API (Work in Progress)

Welcome! This API is based on MongoDB and several NPM packages. It is currently hosted on Heroku and can be accessed [here](https://fierce-bastion-83122.herokuapp.com/).

_This API is a hard work in progress, if you catch any issues, please let me know!_

### Using this API
This API has several endpoints that can be accessed through [here](https://fierce-bastion-83122.herokuapp.com/):


| Endpoints     | Methods       | What they do  |
| ------------- |---------------|-----|
| /users        | GET           | gives all users |
| /users/:id    | GET           | gives one user by ID |
| /users        | POST          | create user |
| /users/:id    | DELETE        | delete user by ID |
| /songs        | GET           | gives all songs |
| /songs        | POST          | create song |
| /playlists    | GET           | gives all playlists |

For example:
```
https://fierce-bastion-83122.herokuapp.com/users
```


### Getting Started
To test this API out, you'll need [Postman](https://www.getpostman.com/).
Postman will allow you to use any of the available CRUD methods to use this API.
Before using the POST and DELETE methods, take a look at each endpoint to get familiar with how to interact with the API using the example below:

<img src="https://lh3.googleusercontent.com/95GRY8xJLeAaRwIsWAUu2mADKMIDHE2eEqbLXUVeCEhQ_UohzHRIIYwpj4Rx-pFAv4z6HwlndfTjO7s=w1479-h609-rw" width="60">


_Note:_ The 'update' and 'delete' methods are still in progress for 'songs' and 'playlists'.
