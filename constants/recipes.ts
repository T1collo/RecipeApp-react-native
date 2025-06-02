export type Ingredient = {
  name: string
  quantity: string
}

export type RecipeItem = {
  id: string
  mealName: string
  author: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  prepTime: string
  imageUrl: string
  description: string
  rating: number
  ingredients: Ingredient[]
  instructions: String[]
}

export const recipes: RecipeItem[] = [
  {
    id: '1',
    mealName: 'Spaghetti Carbonara',
    author: 'Chef Mario',
    difficulty: 'Medium',
    prepTime: '25 mins',
    imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Rich and satisfying.',
    rating: 4.5,
    ingredients: [
      { name: 'Spaghetti', quantity: '200g' },
      { name: 'Eggs', quantity: '3 large' },
      { name: 'Pancetta', quantity: '100g' },
      { name: 'Parmesan cheese', quantity: '50g, grated' },
      { name: 'Black pepper', quantity: 'to taste' },
      { name: 'Salt', quantity: 'to taste' },
    ],
  instructions: [
  'Boil spaghetti in salted water until al dente. Reserve some pasta water.',
  'Fry pancetta until crispy. Remove from heat.',
  'In a bowl, whisk eggs, grated Parmesan, and black pepper.',
  'Drain pasta and return to pot. Quickly mix with egg mixture and pancetta.',
  'Add reserved pasta water a bit at a time to create a creamy sauce.',
  'Serve immediately with extra Parmesan and pepper.'
]

  },
  {
    id: '2',
    mealName: 'Vegan Buddha Bowl',
    author: 'Anna Green',
    difficulty: 'Easy',
    prepTime: '15 mins',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    description: 'A colorful bowl packed with quinoa, chickpeas, veggies, and tahini dressing — healthy and nourishing.',
    rating: 4.8,
    ingredients: [
      { name: 'Quinoa', quantity: '1 cup, cooked' },
      { name: 'Chickpeas', quantity: '1 cup, cooked' },
      { name: 'Cucumber', quantity: '1/2, diced' },
      { name: 'Carrots', quantity: '1/2 cup, shredded' },
      { name: 'Avocado', quantity: '1/2, sliced' },
      { name: 'Tahini', quantity: '2 tbsp' },
      { name: 'Lemon juice', quantity: '1 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Pepper', quantity: 'to taste' },
    ],
  instructions: [
  'Prepare quinoa according to package instructions.',
  'Whisk tahini and lemon juice in a bowl. Add salt and pepper to taste.',
  'Arrange quinoa, chickpeas, cucumbers, carrots, and avocado in a bowl.',
  'Drizzle with tahini dressing.',
  'Serve immediately, optionally with fresh herbs or sesame seeds.'
]

  },
  {
    id: '3',
    mealName: 'Chicken Tikka Masala',
    author: 'Raj Patel',
    difficulty: 'Hard',
    prepTime: '45 mins',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww',
    description: 'Tender chicken pieces marinated in spices and yogurt, grilled, and served in a creamy tomato curry.',
    rating: 4.9,
    ingredients: [
      { name: 'Chicken breast', quantity: '500g, cubed' },
      { name: 'Yogurt', quantity: '1/2 cup' },
      { name: 'Ginger garlic paste', quantity: '2 tbsp' },
      { name: 'Garam masala', quantity: '1 tbsp' },
      { name: 'Tomato puree', quantity: '1 cup' },
      { name: 'Cream', quantity: '1/2 cup' },
      { name: 'Onion', quantity: '1 large, chopped' },
      { name: 'Cilantro', quantity: 'for garnish' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Oil', quantity: '2 tbsp' },
    ],
    instructions: [
  'Marinate chicken in yogurt, ginger garlic paste, and garam masala for at least 30 minutes.',
  'Grill or pan-fry chicken until lightly charred and cooked through.',
  'In a pan, sauté onions until golden, add tomato puree, and cook down.',
  'Add cream and cooked chicken. Simmer for 10 minutes.',
  'Season with salt and garnish with cilantro.',
  'Serve hot with naan or rice.'
]

  },
  {
    id: '4',
    mealName: 'Avocado Toast',
    author: 'Sophia Lee',
    difficulty: 'Easy',
    prepTime: '10 mins',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww',
    description: 'Creamy avocado mashed over crispy toast, topped with chili flakes, olive oil, and a pinch of salt.',
    rating: 4.3,
    ingredients: [
      { name: 'Bread slices', quantity: '2' },
      { name: 'Avocado', quantity: '1 ripe' },
      { name: 'Chili flakes', quantity: '1/4 tsp' },
      { name: 'Olive oil', quantity: '1 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Lemon juice', quantity: '1 tsp' },
    ],
    instructions: [
  'Toast bread slices until golden and crisp.',
  'Mash ripe avocado in a bowl with lemon juice, salt, and pepper.',
  'Spread mashed avocado onto toast.',
  'Drizzle with olive oil and sprinkle with chili flakes.',
  'Serve immediately.'
]

  },
  {
    id: '5',
    mealName: 'Beef Stroganoff',
    author: 'John Smith',
    difficulty: 'Medium',
    prepTime: '40 mins',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664391903505-546a24037088?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVlZiUyMFN0cm9nYW5vZmZ8ZW58MHx8MHx8fDA%3D',
    description: 'A creamy Russian dish of sautéed beef and mushrooms in a sour cream sauce served over noodles.',
    rating: 4.6,
    ingredients: [
      { name: 'Beef sirloin', quantity: '400g, sliced' },
      { name: 'Mushrooms', quantity: '200g, sliced' },
      { name: 'Onion', quantity: '1 medium, chopped' },
      { name: 'Sour cream', quantity: '1 cup' },
      { name: 'Beef broth', quantity: '1/2 cup' },
      { name: 'Flour', quantity: '2 tbsp' },
      { name: 'Butter', quantity: '2 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Pepper', quantity: 'to taste' },
      { name: 'Egg noodles', quantity: '250g, cooked' },
    ],
    instructions: [
  'Season beef slices with salt and pepper.',
  'In a pan, melt butter and sauté onions and mushrooms until soft.',
  'Add beef and cook until browned.',
  'Sprinkle flour and stir well, then add beef broth.',
  'Stir in sour cream and simmer until sauce thickens.',
  'Serve over cooked egg noodles.'
]

  },
  {
    id: '6',
    mealName: 'Quinoa Salad',
    author: 'Emma Johnson',
    difficulty: 'Easy',
    prepTime: '20 mins',
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    description: 'A refreshing salad made with fluffy quinoa, cucumbers, tomatoes, herbs, and lemon vinaigrette.',
    rating: 4.7,
    ingredients: [
      { name: 'Quinoa', quantity: '1 cup, cooked' },
      { name: 'Cucumber', quantity: '1/2, diced' },
      { name: 'Cherry tomatoes', quantity: '1/2 cup, halved' },
      { name: 'Parsley', quantity: '2 tbsp, chopped' },
      { name: 'Lemon juice', quantity: '2 tbsp' },
      { name: 'Olive oil', quantity: '2 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Pepper', quantity: 'to taste' },
    ],
    instructions: [
  'Cook quinoa and let it cool.',
  'In a bowl, mix quinoa with cucumbers, tomatoes, and parsley.',
  'Whisk lemon juice, olive oil, salt, and pepper for dressing.',
  'Pour dressing over the salad and toss to combine.',
  'Chill for 10 minutes before serving.'
]

  },
  {
    id: '7',
    mealName: 'Shrimp Scampi',
    author: 'Carlos Diaz',
    difficulty: 'Medium',
    prepTime: '30 mins',
    imageUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80',
    description: 'Juicy shrimp sautéed in garlic butter and white wine sauce, served over linguine.',
    rating: 4.4,
    ingredients: [
      { name: 'Shrimp', quantity: '400g, peeled and deveined' },
      { name: 'Garlic', quantity: '4 cloves, minced' },
      { name: 'Butter', quantity: '4 tbsp' },
      { name: 'White wine', quantity: '1/2 cup' },
      { name: 'Linguine', quantity: '250g, cooked' },
      { name: 'Parsley', quantity: '2 tbsp, chopped' },
      { name: 'Lemon juice', quantity: '1 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Pepper', quantity: 'to taste' },
    ],
    instructions: [
  'Cook linguine and set aside.',
  'In a large pan, melt butter and sauté garlic until fragrant.',
  'Add shrimp, salt, and pepper. Cook until pink.',
  'Pour in white wine and lemon juice. Simmer for a few minutes.',
  'Toss in cooked linguine and parsley. Mix well.',
  'Serve hot with lemon wedges.'
]

  },
  {
    id: '8',
    mealName: 'Pancakes',
    author: 'Laura Wilson',
    difficulty: 'Easy',
    prepTime: '15 mins',
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D',
    description: 'Fluffy pancakes served hot with maple syrup and fresh berries — a breakfast classic.',
    rating: 4.2,
    ingredients: [
      { name: 'Flour', quantity: '1 cup' },
      { name: 'Milk', quantity: '1 cup' },
      { name: 'Egg', quantity: '1 large' },
      { name: 'Baking powder', quantity: '1 tbsp' },
      { name: 'Sugar', quantity: '2 tbsp' },
      { name: 'Salt', quantity: '1/4 tsp' },
      { name: 'Butter', quantity: '2 tbsp, melted' },
      { name: 'Maple syrup', quantity: 'to serve' },
      { name: 'Fresh berries', quantity: 'to serve' },
    ],
    instructions: [
  'Mix flour, sugar, baking powder, and salt in a bowl.',
  'In another bowl, whisk milk, egg, and melted butter.',
  'Combine wet and dry ingredients without overmixing.',
  'Heat a non-stick pan and pour 1/4 cup batter per pancake.',
  'Cook until bubbles form, flip, and cook until golden.',
  'Serve with maple syrup and berries.'
]

  },
  {
    id: '9',
    mealName: 'Caesar Salad',
    author: 'James Brown',
    difficulty: 'Easy',
    prepTime: '20 mins',
    imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',
    description: 'Crisp romaine lettuce, crunchy croutons, and parmesan tossed in a creamy Caesar dressing.',
    rating: 4.1,
    ingredients: [
      { name: 'Romaine lettuce', quantity: '1 head, chopped' },
      { name: 'Croutons', quantity: '1 cup' },
      { name: 'Parmesan cheese', quantity: '1/2 cup, grated' },
      { name: 'Caesar dressing', quantity: '1/2 cup' },
      { name: 'Lemon juice', quantity: '1 tbsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Pepper', quantity: 'to taste' },
    ],
    instructions: [
  'Wash and dry romaine lettuce.',
  'Prepare Caesar dressing or use store-bought.',
  'Toss lettuce with dressing, grated Parmesan, and croutons.',
  'Top with extra cheese and freshly ground pepper.',
  'Serve immediately.'
]

  },
  {
    id: '10',
    mealName: 'BBQ Ribs',
    author: 'Michael Green',
    difficulty: 'Hard',
    prepTime: '60 mins',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664478272084-532c1bfebd25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmJxJTIwcmlic3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Fall-off-the-bone pork ribs slathered in smoky barbecue sauce and slow-cooked to perfection.',
    rating: 4.9,
    ingredients: [
      { name: 'Pork ribs', quantity: '1 kg' },
      { name: 'BBQ sauce', quantity: '1 cup' },
      { name: 'Garlic powder', quantity: '1 tsp' },
      { name: 'Paprika', quantity: '1 tsp' },
      { name: 'Salt', quantity: 'to taste' },
      { name: 'Black pepper', quantity: 'to taste' },
    ],
    instructions: [
  'Chop all vegetables evenly.',
  'Heat oil in a large wok or pan.',
  'Add garlic and stir for 30 seconds.',
  'Add vegetables and stir-fry on high heat for 5–7 minutes.',
  'Add soy sauce and optional sesame oil.',
  'Serve hot over rice or noodles.'
]

  },
]
