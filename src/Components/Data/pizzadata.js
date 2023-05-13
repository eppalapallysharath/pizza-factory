import deluxViggiImg from "../../Assets/Images/veggie-deluxe-hd-png.png";
import cheeseAndCornImg from "../../Assets/Images/cheese and corn pizza.png";
import paneerTikkaImg from "../../Assets/Images/paneer tikka pizza.jpg";
import NonVegSupremeImg from "../../Assets/Images/non vegie superme pizza.jpg";
import chickenTikkaImg from "../../Assets/Images/chicken-tikka-pizza.png";
import pepperBarbecueChickenImg from "../../Assets/Images/Pepper Barbecue Chicken.jpg";
export const data = {
  pizza: [
    {
      id: 1,
      name: "Deluxe Veggie",
      vegetarian: true,
      image: deluxViggiImg,
      price: [
        { name: "Regular", price: 150 },
        { name: "Medium", price: 200 },
        { name: "Large", price: 325 },
      ],
      description:
        "Loaded with delectable mushrooms, golden corn, paneer, capsicum, and onions, this pizza guarantees an explosion of flavors in every bite.",
    },
    {
      id: 2,
      name: "Cheese and Corn",
      vegetarian: true,
      image: cheeseAndCornImg,
      price: [
        { name: "Regular", price: 175 },
        { name: "Medium", price: 375 },
        { name: "Large", price: 475 },
      ],
      description:
        "The GARLIC AND CHEESE Corner Pizza is a simple but no-fail flavor! Made with white pizza sauce as a base, topped with toasted garlic, yellow cheddar, orange cheddar, mozzarella, garnished with toasted garlic bits and parsley",
    },
    {
      id: 3,
      name: "Paneer Tikka",
      vegetarian: true,
      image: paneerTikkaImg,
      price: [
        { name: "Regular", price: 160 },
        { name: "Medium", price: 290 },
        { name: "Large", price: 340 },
      ],
      description:
        "Paneer (Cottage Cheese) Tikka Pizza Recipe is a fusion recipe which is combination of Indian tandoori paneer tikka with Italian pizza base. It is a new twist to the pizza which can be enjoyed for dinner or for lunch. The paneer in the pizza makes it healthy and tasty.",
    },
    {
      id: 4,
      name: "Non-Veg Supreme",
      vegetarian: false,
      image: NonVegSupremeImg,
      price: [
        { name: "Regular", price: 190 },
        { name: "Medium", price: 325 },
        { name: "Large", price: 425 },
      ],
      description:
        "What is non veg supreme pizza? Order Non Veg Supreme Pizza online from nearby Dominos & Get The toppings, original mozzarella cheese, and fresh pizza dough make the non veg supreme pizza tastier. The pizza has a generous amount of peri-peri chicken, onions, black olives, grilled chicken rashers, pepper BBQ chicken, grilled mushrooms, cheese, and secret herbs.",
    },
    {
      id: 5,
      name: "Chicken Tikka",
      vegetarian: false,
      image: chickenTikkaImg,
      price: [
        { name: "Regular", price: 210 },
        { name: "Medium", price: 370 },
        { name: "Large", price: 500 },
      ],
      description:
        "Chicken Tikka Pizza is prepared with small cubes of boneless chicken as the key ingredient. Tasty pizza sauce along with chicken pieces, vegetables and cheese mixture gives away a finger-licking chicken pizza.",
    },
    {
      id: 6,
      name: "Pepper Barbecue Chicken",
      vegetarian: false,
      image: pepperBarbecueChickenImg,
      price: [
        { name: "Regular", price: 220 },
        { name: "Medium", price: 380 },
        { name: "Large", price: 525 },
      ],
      description:
        "This BBQ chicken pizza has spicy barbecue sauce, diced chicken, peppers, onion, and cilantro, all covered with cheese and baked to bubbly goodness! This is similar to a recipe I had at a popular pizza place in California. My family loves it!",
    },
  ],
  add_ons: {
    toppings: {
      veg_toppings: [
        {
          name: "Capsicum",
          price: 25,
        },
        {
          name: "Paneer",
          price: 35,
        },
        {
          name: "Mushroom",
          price: 30,
        },
        {
          name: "Fresh Tomatoes",
          price: 35,
        },
      ],
      non_veg_toppings: [
        {
          name: "Chicken Tikka",
          price: 35,
        },
        {
          name: "Barbecue Chicken",
          price: 45,
        },
        {
          name: "Grilled Chicken",
          price: 40,
        },
      ],
    },
    crustType: [
      "New hand tossed",
      "Wheat thin crust",
      "Cheese burst",
      "Fresh pan pizza",
    ],
    sides: [
      { name: "Cold Drink", price: 55 },
      { name: "Mousse Cake", price: 90 },
    ],
  },
};
