const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
   {
      title: "Matoke",
      slug: "matoke",
      image: "/images/matoke.jpg",
      summary: "A hearty East African dish made with plantains simmered in a flavorful tomato-based sauce, often served as a main or side dish.",
      instructions: `
        1. Prepare the plantains:
           Peel 6-8 unripe plantains and cut them into large chunks. Set aside in a bowl of water to prevent browning.
    
        2. Make the sauce:
           Heat 2 tablespoons of oil in a pot. Sauté 1 diced onion and 2 minced garlic cloves until soft. Add 2 chopped tomatoes, 1 diced bell pepper, and cook until the mixture thickens.
    
        3. Add the plantains:
           Drain the plantains and add them to the pot. Pour in 1-2 cups of water or broth, and season with salt, pepper, and a pinch of turmeric.
    
        4. Cook:
           Cover the pot and simmer on low heat for 20-30 minutes, stirring occasionally, until the plantains are tender and have absorbed the sauce.
    
        5. Serve:
           Serve warm as a standalone meal or alongside your favorite stew or greens.
      `,
      creator: "Joyce Nyakundi",
      creator_email: "joycenyakundi@example.com"
    },
    {
      title: "Mutura",
      slug: "mutura",
      image: "/images/mutura.jpg",
      summary: "A popular Kenyan street food made from goat, lamb, or cow intestines stuffed with spiced ground meat, fat, and blood, then grilled to perfection.",
      instructions: `
        1. Prepare the stuffing:
           Mix 500g of ground meat (goat, lamb, or beef) with 1 finely chopped onion, 2 minced garlic cloves, 1 teaspoon grated ginger, 1 diced chili, and a handful of chopped fresh herbs (like cilantro). Add salt, pepper, and 1 cup of animal blood, and mix well.
    
        2. Clean the intestines:
           Thoroughly wash the intestines with warm water and lemon juice to remove any impurities. Turn them inside out and rinse again.
    
        3. Stuff the intestines:
           Use a funnel to carefully stuff the seasoned mixture into the intestines. Tie off the ends with string or toothpicks, ensuring they are securely sealed.
    
        4. Cook the Mutura:
           Pre-boil the stuffed intestines in lightly salted water for 20-30 minutes to ensure they are cooked through. Then, transfer them to a hot charcoal grill and roast for 10-15 minutes, turning occasionally, until browned and crispy.
    
        5. Serve:
           Slice the Mutura into bite-sized pieces and serve warm with kachumbari (tomato and onion salad) and a squeeze of fresh lemon juice.
      `,
      creator: "Getrude Nyokabi",
      creator_email: "getrudenyokabi@example.com"
    },
    {
      title: "Githeri",
      slug: "githeri",
      image: "/images/githeri.webp",
      summary: "A wholesome Kenyan vegetarian dish made with corn and beans, simmered together in a flavorful tomato-based stew.",
      instructions: `
        1. Boil the corn and beans:
           In a large pot, boil 2 cups of dried beans (soaked overnight) and 2 cups of corn kernels with enough water to cover them. Cook until tender, about 1-2 hours.
    
        2. Prepare the stew:
           Heat 2 tablespoons of cooking oil in a pan. Add 1 diced onion and sauté until golden brown. Stir in 2 chopped tomatoes and cook until soft and saucy.
    
        3. Combine:
           Add the boiled corn and beans to the tomato mixture. Mix well and season with salt, pepper, and a pinch of curry powder (optional).
    
        4. Optional potatoes:
           If using potatoes, peel and dice 2 medium-sized potatoes and add them to the pot with a little water. Simmer until the potatoes are soft and flavors are well combined.
    
        5. Serve:
           Garnish with fresh cilantro and serve hot as a standalone meal or with chapati.
      `,
      creator: "Brian Kamau",
      creator_email: "briankamau@example.com"
    },
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: 'EmilyBaraza',
    creator_email: 'emilybaraza@example.com',
  },
   {
      title: 'Wali wa Mnazi',
      slug: 'wali-wa-mnazi',
      image: '/images/wali_wa_mnazi.jpg',
      summary: 'A delicious and creamy coconut rice dish, a staple in Swahili cuisine, often paired with stews or vegetable sides.',
      instructions: `
      1. Prepare the coconut milk:
         Grate fresh coconut and extract 2 cups of thick coconut milk. Keep 1 cup of thin coconut milk separately.
   
      2. Wash and cook the rice:
         Rinse 2 cups of white rice until the water runs clear. In a pot, combine the rice with thin coconut milk, 1 cup of water, and a pinch of salt. Cook on medium heat until the liquid is absorbed.
   
      3. Add thick coconut milk:
         Lower the heat, add the thick coconut milk, and gently stir. Cover the pot and let the rice steam for another 10 minutes until fluffy and creamy.
   
      4. Serve:
         Serve warm, garnished with fresh coconut flakes or accompanied by a flavorful stew.
      `,
      creator: 'Juma Bakari',
      creator_email: 'jumabakari@example.com'
   },
   {
      title: 'Nyama Choma with Kachumbari',
      slug: 'nyama-choma-kachumbari',
      image: '/images/nyama_choma.jpg',
      summary: 'A classic Kenyan dish of grilled meat paired with Kachumbari, a fresh and zesty tomato and onion salad, perfect for gatherings and celebrations.',
      instructions: `
      Nyama Choma:
      1. Prepare the meat:
         Select 1 kg of goat, beef, or chicken. Marinate with salt, pepper, garlic, and a squeeze of lemon juice. Allow to rest for 30 minutes.
   
      2. Grill the meat:
         Heat a charcoal grill to medium heat. Place the meat on the grill and cook slowly, turning occasionally, until evenly charred and fully cooked (about 45-60 minutes).
   
      Kachumbari:
      1. Prepare the vegetables:
         Finely chop 3 tomatoes, 1 red onion, 1 chili (optional), and a handful of fresh cilantro. Place in a bowl.
   
      2. Season:
         Add salt to taste, juice of 1 lemon, and a drizzle of olive oil. Toss to combine.
   
      Serve:
      Arrange the grilled meat on a platter and serve with Kachumbari on the side. Enjoy warm with ugali or as is.
      `,
      creator: 'Nderitu-muciri',
      creator_email: 'nderitumuciri@example.com'
   },
   {
      title: 'Misheveve - Traditional Kenyan Meal',
      slug: 'misheveve-kenyan-meal',
      image: '/images/misheveve.jpg',
      summary: 'A wholesome and colorful traditional Kenyan dish made with boiled maize kernels, kidney beans, and pumpkin leaves, often paired with avocado and chili sauce.',
      instructions: `
      1. Prepare maize and beans:
         Boil maize kernels and kidney beans together until tender.

      2. Cook pumpkin leaves:
         Wash and chop fresh pumpkin leaves. Sauté in a pan with a little oil and onions until softened.

      3. Assemble the meal:
         Arrange the boiled maize and beans on a plate alongside the sautéed pumpkin leaves.

      4. Add sides:
         Serve with sliced avocado and a small bowl of chili sauce for extra flavor.

      5. Enjoy:
         Relish this nutritious and traditional meal, perfect for a homely experience.
      `,
      creator: 'Jane Mwangi',
      creator_email: 'janemwangi@example.com'
   },

      {
         title: 'Smocha - Kenyan Street Food',
         slug: 'smocha-kenyan-street-food',
         image: '/images/smosha.jpg',
         summary: 'A popular Kenyan street food made by wrapping a spicy sausage and chili mixture in soft chapati bread, delivering a flavorful and fiery snack.',
         instructions: `
         1. Prepare the sausage:
            Grill or fry the sausage until fully cooked and slightly crispy on the outside.
   
         2. Make the chili sauce:
            In a small bowl, mix chopped fresh chilies, diced onions, tomatoes, and a squeeze of lemon juice. Add a pinch of salt to taste.
   
         3. Warm the chapati:
            Heat the chapati briefly on a pan to make it pliable and warm.
   
         4. Assemble the smocha:
            Place the sausage on the chapati, spread the chili sauce generously over the sausage, and roll it tightly to form a wrap.
   
         5. Serve:
            Enjoy this spicy and satisfying street food as a quick snack or meal.
         `,
         creator: 'Wanjiku Kariuki',
         creator_email: 'wanjikukariuki@example.com'
   }
   ,  
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    image: '/images/curry.jpg',
    summary:
      'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: 'Max Juma',
    creator_email: 'maxjuma@example.com',
  },
  {
    title: 'Homemade Dumplings',
    slug: 'homemade-dumplings',
    image: '/images/dumplings.jpg',
    summary:
      'Tender dumplings filled with savory meat and vegetables, steamed to perfection.',
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: 'Sheila Kairetu',
    creator_email: 'sheilakairetu@example.com',
  },
  {
    title: 'Classic Mac n Cheese',
    slug: 'classic-mac-n-cheese',
    image: '/images/macncheese.jpg',
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: 'Zimamoto Smith',
    creator_email: 'zimamotomith@example.com',
  },
  {
    title: 'Authentic Pizza',
    slug: 'authentic-pizza',
    image: '/images/pizza.jpg',
    summary:
      'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: 'Martin Rossi',
    creator_email: 'martinrossi@example.com',
  },
  {
    title: 'Wiener Schnitzel',
    slug: 'wiener-schnitzel',
    image: '/images/schnitzel.jpg',
    summary:
      'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.',
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
      Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
      Serve hot with a slice of lemon and a side of potato salad or greens.
 `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Fresh Tomato Salad',
    slug: 'fresh-tomato-salad',
    image: '/images/tomato-salad.jpg',
    summary:
      'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.',
    instructions: `
      1. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.
    
      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.
    
      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();