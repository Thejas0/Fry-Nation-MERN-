const pizzas = [
  
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
 

{
  name: "Aloo Paratha",
    varients: ["single", "double"],
    prices: [
      {
        single: 49,
        double: 89,
      },
    ],
    category: "veg",
    image: "/images/aloo_paratha.png",
    description: "A taste of Punjab's food tradition",
  },
  {
    name: "Baby Corn Munchurian",
    varients: ["small", "large"],
    prices: [
      {
        small: 99,
        large: 179,
      },
    ],
    category: "veg",
    image: "/images/baby_corn.jpg",
    description:
      "A combo of crisp and softness",
  },
  {
    name: "Chicken Biryani",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "nonveg",
    image: "/images/biryani.jpg",
    description:
      "For those hard core non-veg lovers",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
  },
  {
    name: "Burger",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 79,
        medium: 149,
        large: 289,
      },
    ],
    category: "nonveg",
    image: "/images/burger.jpg",
    description:
      "Crunchy fillet burger garnished with pickle gherkins",
  },
  {
    name: "Red Velvet Cake",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "veg",
    image: "/images/cake.jpg",
    description:
      "This classic cake is a crowd favourite as it is made with layers of deep red sponge, luscious cream cheese frosting and white chocolate bits.",
  },
  {
    name: "Chole Bhature",
    varients: ["half", "full"],
    prices: [
      {
        half: 380,
        full: 500,
      },
    ],
    category: "veg",
    image: "/images/chole_bhature.jpg",
    description:
      "2 fluffy Bhaturas served with authentic Chole and onion to remind you the taste of Delhi",
  },
  
 
  {
    name: "Dahi Puri",
    varients: ["full"],
    prices: [
      {
        full: 49,
      },
    ],
    category: "veg",
    image: "/images/dahi_puri.jpg",
    description:
      "Crispy poori shells (6pcs) filled with mashed potatoes, topped with sweetened yoghurt, chutneys and sev.",
  },
  {
    name: "Fish Tava Fry",
    varients: ["half", "full", "combo"],
    prices: [
      {
        half:129,
        full: 249,
        combo: 499,
      },
    ],
    category: "nonveg",
    image: "/images/fish.jpg",
    description:
      "Shallow-fried anchovies (nethili) marinated in a tangy, red pepper and lemon masala.",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Masala Dosa",
    varients: ["small","medium", "large"],
    prices: [
      {
        small:30,
        medium: 49,
        large: 89,
      },
    ],
    category: "veg",
    image: "/images/MDosa.jpg",
    description:
      "Tawa- toasted, crispy and delicious dosa, folded in with masala.",
  },
  {
    name: "Noodles",
    varients: ["medium", "large"],
    prices: [
      {
        medium: 69,
        large: 149,
      },
    ],
    category: "veg",
    image: "/images/noodles.png",
    description:
      "Noodles tossed in spicy schezwan sauce & generous portion of vegetables",
  },
  {
    name: "Paneer Butter Masala",
    varients: ["medium", "large"],
    prices: [
      {
        medium: 129,
        large: 249,
      },
    ],
    category: "veg",
    image: "/images/paneer.jpeg",
    description:
      "Crowd's favourite paneer tikka now infused in a creamy onion-tomato based spicy gravy to add that fiery kick to an appetite",
  },
  {
    name: "Margherita Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Sandwich",
    varients: ["half", "full"],
    prices: [
      {
        half: 30,
        full: 60,
      },
    ],
    category: "veg",
    image: "/images/sandwich.jpg",
    description:
      "Need we say more? Serving Size: 230gms Energy per 100 gms: 281.41Kcal Contains: Milk, Gluten, Soy, Egg",
  },
  {
    name: "Poori",
    varients: ["Pieces_2", "Pieces_3","Pieces_4"],
    prices: [
      {
        Pieces_2:30,
        Pieces_3:45,
        Pieces_4:60,
      },
    ],
    category: "veg",
    image: "/images/poori.jpg",
    description:
      "Need we say more? Serving Size: 230gms Energy per 100 gms: 281.41Kcal Contains: Milk, Gluten, Soy, Egg",
  },
  {
    name: "Samosa",
    varients: ["Pieces_1", "Pieces_2","Pieces_3"],
    prices: [
      {
        Pieces_1:30,
        Pieces_2:50,
        Pieces_3:70,
      },
    ],
    category: "veg",
    image: "/images/samosa.jpg",
    description:
      "Need we say more? Serving Size: 230gms Energy per 100 gms: 281.41Kcal Contains: Milk, Gluten, Soy, Egg",
  },
  
  
  {
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },


  {
    name: "Gobi Manchurian",
    varients: ["half", "full"],
    prices: [
      {
        half:40,
        full:80
      },
    ],
    category: "veg",
    image: "/images/gobi.jpg",
    description:
      "Need we say more? Serving Size: 230gms Energy per 100 gms: 281.41Kcal Contains: Milk, Gluten, Soy, Egg",
  },
  
  
  {
    name: "Fried Rice",
    varients: ["half", "full"],
    prices: [
      {
        half: 40,
        full: 80,
      },
    ],
    category: "veg",
    image: "/images/fried_rice.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },


];
export default pizzas;



