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

<img src="https://lh3.googleusercontent.com/95GRY8xJLeAaRwIsWAUu2mADKMIDHE2eEqbLXUVeCEhQ_UohzHRIIYwpj4Rx-pFAv4z6HwlndfTjO7s=w1479-h609-rw">


_Note:_ The 'update' and 'delete' methods are still in progress for 'songs' and 'playlists'.

### The API's schemas

The user schema has 4 parts to it:
- username
- display name
- artist
- playlists

The **username** and **display name** are used for authentication/authorization in creating, updating, and deleting songs and playlists. The **artist** key indicates whether that user is an artist/musician or not using boolean values (default is false). The **playlist** keys lists any associated playlists for that user.

The song schema has 4 parts to it:
- name
- artist
- url
- user

The **name** and **artist** are _required_, for the song's name and the artist that created the song. The **URL** is _optional_, but should link to any site the song is hosted on (Youtube, Spotify, etc.). The **user** is to identify which user added the song.

The playlist schema has 4 parts as well:
- name
- songs
- tags
- user

The **name** specifies the name of the playlist. An array of the **songs** in that playlist will appear in the songs section. The **tags** are _optional_ but can help clarify what kind of playlist a user is accessing. The **user** that created the playlist is referenced by ID.
