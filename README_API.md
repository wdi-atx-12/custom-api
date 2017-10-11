BANDS & LABELS API

1. Description
  - This API seeks to give records of which bands are signed under which labels and vice versa.

2. Heroku URL
  - https://peaceful-garden-53032.herokuapp.com/

3. API Endpoints
  - Create
    - /bands(POST)
      - Creates a record with of a band. Takes the name of the band, year established, hometown, label (as an ObjectId), and a genre as parameters.
      - json ex:
      ```
        {
          "name" : "example name",
          "established": 2099,
          "hometown": "anytown, kz",
          "label": "l3kqk41k5h3l345ljlg34ljkhg43",
          "genre": "muzak"
        }
      ```
    - /labels(POST)
      - Creates a record with of a label. Takes the name of the label, location of the brick and mortar site, year established, bands (as an array of ObjectId's), and genre played.
      - json ex:
      ```
        {
          "name": "atta label",
          "location": "anytown, kz",
          "established": 2091,
          "bands": ["o897asdf8a7f89asdf7097fas897"],
          "genre": "muzak"
        }
      ```
  - Read
    - /bands(GET),
      - Retrieves a record of all the bands in the database
    - /bands/:id(GET),
      - Retrieves an individual band's record
    - /label(GET),
      - Retrieves a record of all the labels in the database
    - /labels/:id(GET)
      - Retrieves an individual labels's record
  - Update
    - /bands/:id(PUT),
      - Updates a band's attributes that are included in the request
      - json ex: PUT /bands/l3kqk41k5h3l345ljlg34ljkhg43
      ```
      {
        "name": "3x4m9l3_n4m3",
        "genre": "museak"
      }
      ```
    - /labels/:id(PUT)
      - Updates a label's attributes that are included in the request
      json ex: PUT /labels/o897asdf8a7f89asdf7097fas897
      ```
      {
        "name": "eryago label",
        "genre": "mooseak"
      }
      ```
  - Delete
    - /bands/:id(DELETE),
      - Deletes a band's record
    - /labels/:id(DELETE)
      - Deletes a label's record

4. Schema Outlines
  - Bands:

  ```
    {
      name: {
        type: String,
        unique: true,
        required: true
      },
      established: {
        type: Number,
        default: ""},
      hometown: {
        type: String,
        default: ""
      },
      label:
        {
          type: Schema.Types.ObjectId,
          ref: 'Label',
        },
      genre: {
        type: String,
        default: ""
      }
    }
  ```
    - Labels:
    ```
      {
        name: {
          type: String,
          required: true,
          unique: true
        },
        location: {
          type: String,
          default: ""
        },
        established: {
          type: Number,
          default: ""
        },
        bands:
          [{
            type: Schema.Types.ObjectId,
            ref: 'Band',
            // default: ""
          }],
        genre: {
          type: String,
          default: ""
        }
      }
    ```


    
