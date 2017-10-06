const mongoose = require('mongoose');
const db = require('./models');

const turkeyMeatballs = new db.Recipe({
  name: "Turkey Meatballs",
  description: "Delicious gluten free turkey meatballs with kale, apple, and nuts",
  imageUrl: "https://i2.wp.com/fashionablefoods.com/wp-content/uploads/2015/10/Baked-Meatballs.jpg",
  ingredients: ["1 lb Ground Turkey","1 bunch Kale","1 small apple deseeded","2 Tbsp Pumpkin Seeds","1/4 cup Almond Meal", "1 Egg white", "1 tsp Balsamic Vinegar", "salt and papper to taste"],
  instructions: "1. Chop up the kale, and sauté them lightly season with salt and a teaspoon of balsamic vinegar. Let cool. 2. Take the seeds out of the apple. Apple seeds have arsenic (poison). Roughly chop apple up. In a blender or food processor, puree apple. 3. In a large mixing bowl, mix together turkey, kale, apple puree, pumpkins seeds, almond meal, egg white, salt and pepper. 4. Roll them up into balls and fry them like fried dumplings or bake them on a tray in the oven at 400 degrees for 15-20 minutes.",
  tags: ["gluten-free","turkey","meatballs","healthy","dinner","lunch","snack"]
});

turkeyMeatballs.save(function(err,savedItem){
  if(err){
    console.log("oh no! Who took my meatballs?!");
  }else{
    console.log("Saved my meatballs!");
  }
});

db.Recipe.remove({}, function(err, removedItems){
  if(err) {
    console.log('Could not remove all Food records!');
  } else {
    console.log('Removed Food records. Now adding food items');
  }
});
