This API is designed to allow users to look up technical information about different vehicles (engine type, engine size, number of doors, etc) and is located at https://quiet-depths-71345.herokuapp.com/

Model:



  1 model
  2 year
  3 engineInfo
        -engineType
        -sizeLiters
        -fuelEconomy
        -powerBHP
        -torque
  4 numberOfDoors
  5 colorOptions

  There is a path of /vehicles that lets you use the CRUD method to add to, remove from, and update the database.  You can look up a specific vehicle by using the path for each id as, /vehicle/:id
