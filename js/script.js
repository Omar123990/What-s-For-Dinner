var recipes = [
  {
    image: "images/pasta.avif",
    rating: "4.8",
    reviews: "(434 reviews)",
    prepTime: "50 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "Italian",
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti until al dente.",
      "While pasta cooks, heat a skillet. Add pancetta and cook until crispy.",
      "Whisk eggs and cheeses together. Add black pepper.",
      "Drain pasta and add to skillet with pancetta.",
      "Remove skillet from heat. Add egg mixture while tossing pasta.",
      "Serve immediately with extra cheese.",
    ],
    nutrition: {
      Calories: "520kcal",
      Protein: "28g",
      Carbohydrates: "62g",
      Fat: "18g",
      Fiber: "3g",
      Sodium: "680mg",
    },
    chefsTips: [
      "Use room temperature eggs for a smoother sauce",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    image: "images/soup.avif",
    rating: "4.7",
    reviews: "(267 reviews)",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    difficulty: "Intermediate",
    cuisine: "Mediterranean",
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutrition: {
      Calories: "380 kcal",
      Protein: "18g",
      Carbohydrates: "36g",
      Fat: "18g",
      Fiber: "4g",
      Sodium: "980mg",
    },
    chefsTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  {
    image: "images/Vegetable salad.avif",
    rating: "4.7",
    reviews: "(367 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "Asian",
    name: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    nutrition: {
      Calories: "540 kcal",
      Protein: "42g",
      Carbohydrates: "58g",
      Fat: "14g",
      Fiber: "4g",
      Sodium: "1240mg",
    },
    chefsTips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    image: "images/Lasagna Bolognese.avif",
    rating: "4.9",
    reviews: "(478 reviews)",
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
    difficulty: "Intermediate",
    cuisine: "Italian",
    name: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    nutrition: {
      Calories: "680 kcal",
      Protein: "42g",
      Carbohydrates: "58g",
      Fat: "24g",
      Fiber: "6g",
      Sodium: "920mg",
    },
    chefsTips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],
  },
  {
    image: "images/pizza.avif",
    rating: "4.9",
    reviews: "(512 reviews)",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    difficulty: "Intermediate",
    cuisine: "Italian",
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutrition: {
      Calories: "580 kcal",
      Protein: "24g",
      Carbohydrates: "68g",
      Fat: "22g",
      Fiber: "4g",
      Sodium: "920mg",
    },
    chefsTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    image: "images/Chicken-Stir-Fry.avif",
    rating: "4.5",
    reviews: "(324 reviews)",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "Asian",
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],
    nutrition: {
      Calories: "320 kcal",
      Protein: "34g",
      Carbohydrates: "18g",
      Fat: "12g",
      Fiber: "5g",
      Sodium: "840mg",
    },
    chefsTips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    image: "images/BBQ-Pulled-Pork.avif",
    rating: "4.7",
    reviews: "(412 reviews)",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "American",
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    nutrition: {
      Calories: "620 kcal",
      Protein: "48g",
      Carbohydrates: "52g",
      Fat: "22g",
      Fiber: "3g",
      Sodium: "1180mg",
    },
    chefsTips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    image: "images/Caprese-Sandwich.avif",
    rating: "4.7",
    reviews: "(412 reviews)",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "Italian",
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    nutrition: {
      Calories: "480 kcal",
      Protein: "22g",
      Carbohydrates: "48g",
      Fat: "22g",
      Fiber: "3g",
      Sodium: "680mg",
    },
    chefsTips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
  {
    image: "images/Beef-Tacos.avif",
    rating: "4.6",
    reviews: "(278 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "American",
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    nutrition: {
      Calories: "420 kcal",
      Protein: "26g",
      Carbohydrates: "32g",
      Fat: "20g",
      Fiber: "4g",
      Sodium: "780mg",
    },
    chefsTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    image: "images/Vegetable-Curry.avif",
    rating: "4.6",
    reviews: "(289 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "Asian",
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    nutrition: {
      Calories: "380 kcal",
      Protein: "14g",
      Carbohydrates: "48g",
      Fat: "16g",
      Fiber: "12g",
      Sodium: "480mg",
    },
    chefsTips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },
  {
    image: "images/Shrimp-Scampi.avif",
    rating: "4.8",
    reviews: "(356 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Easy",
    cuisine: "Seafood",
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      Calories: "520 kcal",
      Protein: "36g",
      Carbohydrates: "54g",
      Fat: "18g",
      Fiber: "3g",
      Sodium: "620mg",
    },
    chefsTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
];

var recipeImage = document.getElementById("recipe-image");
var recipeRating = document.getElementById("recipe-rating");
var recipeReviews = document.getElementById("recipe-reviews");
var prepTime = document.getElementById("prep-time");
var cookTime = document.getElementById("cook-time");
var servings = document.getElementById("servings");
var difficulty = document.getElementById("difficulty");
var cuisine = document.getElementById("cuisine");
var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");
var ingredientsList = document.getElementById("tab-ingredients-content");
var instructionsList = document.getElementById("tab-instructions-content");
var nutritionContainer = document.getElementById("tab-nutrition-content");
var chefsTipsContainer = document.getElementById("tab-chefs-content");
var nextRecipeBtn = document.getElementById("next-recipe-btn");
var longPrepMsg = document.getElementById("long-prep-msg");
var calories = document.getElementById("calories");
var protein = document.getElementById("protein");
var carbon = document.getElementById("carbon");
var fat = document.getElementById("fat");
var fiber = document.getElementById("fiber");
var sodium = document.getElementById("sodium");
var currentIndex = -1;

function updateRecipe() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * recipes.length);
  } while (randomIndex === currentIndex);

  currentIndex = randomIndex;
  var recipe = recipes[randomIndex];

  recipeImage.src = recipe.image;
  recipeRating.innerHTML = recipe.rating;
  recipeReviews.innerHTML = recipe.reviews;
  prepTime.innerHTML = recipe.prepTime;
  cookTime.innerHTML = recipe.cookTime;
  servings.innerHTML = recipe.servings;
  difficulty.innerHTML = recipe.difficulty;
  cuisine.innerHTML = recipe.cuisine;
  recipeName.innerHTML = recipe.name;
  recipeDescription.innerHTML = recipe.description;

  ingredientsList.innerHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsList.innerHTML += "<li>" + recipe.ingredients[i] + "</li>";
  }

  instructionsList.innerHTML = "";
  for (var i = 0; i < recipe.instructions.length; i++) {
    instructionsList.innerHTML += "<li>" + recipe.instructions[i] + "</li>";
  }

  chefsTipsContainer.innerHTML = "";
  for (var i = 0; i < recipe.chefsTips.length; i++) {
    chefsTipsContainer.innerHTML += `
      <div class="d-flex border-color-orange bg-red mb-3 p-3 rounded-3">
        <i class="fa-solid fa-circle-check align-self-center me-2 color-yellow fw-700"></i>
        <p class="text-black text-opacity-75 mb-0">${recipe.chefsTips[i]}</p>
      </div>
    `;
  }

  if (parseInt(recipe.cookTime) > 45) {
    longPrepMsg.style.display = "block";
  } else {
    longPrepMsg.style.display = "none";
  }

  calories.innerHTML = recipe.nutrition.Calories;
  protein.innerHTML = recipe.nutrition.Protein;
  carbon.innerHTML = recipe.nutrition.Carbohydrates;
  fat.innerHTML = recipe.nutrition.Fat;
  fiber.innerHTML = recipe.nutrition.Fiber;
  sodium.innerHTML = recipe.nutrition.Sodium;
  scrollTo(0, 0);
}

updateRecipe();
