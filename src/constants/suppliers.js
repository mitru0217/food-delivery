import BurgerKingLogo from '../assets/images/suppliers/burger_king.png';
import McDonaldsLogo from '../assets/images/suppliers/mcdonalds.png';
import ChelentanoLogo from '../assets/images/suppliers/chelentano.png';
import ChickFillLogo from '../assets/images/suppliers/chick_fil_a.png';
import TacoBellLogo from '../assets/images/suppliers/taco_bell.png';
import KfcLogo from '../assets/images/suppliers/kfc.png'
import TexasBeef from '../assets/images/products/Burger King/texas-beef.jpg';
import ChiliCheeseDoubleBeef from '../assets/images/products/Burger King/chili-cheese-double-beef.jpg';
import BigKing from '../assets/images/products/Burger King/big-king.jpg';
import BaconKing from '../assets/images/products/Burger King/bacon-king.jpg';
import BigKingXXL from '../assets/images/products/Burger King/big-king-xxl.jpg';
import Whopper from '../assets/images/products/Burger King/whopper.jpg';
import Steakhouse from '../assets/images/products/Burger King/steakhouse.jpg';
import KingJrBurger from '../assets/images/products/Burger King/king-jr-burger.jpg';
import KingJrCheeseburger from '../assets/images/products/Burger King/king-jr-cheeseburger.jpg';
import SpicyMcCrispy from '../assets/images/products/McDonalds/SpicyCrispyChicke.jpg';
import BigMac from '../assets/images/products/McDonalds/BigMac.jpg';
import QuarterPounderWithCheese from '../assets/images/products/McDonalds/QuarterPounderwithCheese.jpg';
import EggMcMuffin from '../assets/images/products/McDonalds/EggMcMuffin.jpg';
import Cheeseburger from '../assets/images/products/McDonalds/Cheeseburger.jpg';
import McChicken from '../assets/images/products/McDonalds/McChicken.jpg';
import WorldFamousFries from '../assets/images/products/McDonalds/Fries.jpg';
import McFlurryWithOreoCookies from '../assets/images/products/McDonalds/OREOMcFlurry.jpg';
import HamburgerHappyMeal from '../assets/images/products/McDonalds/HamburgerHappyMeal.jpg';
import Barbequ from '../assets/images/products/Chelentano/barbequ.jpg';
import Egoista from '../assets/images/products/Chelentano/egoista-na-tomatniy-osnovi.jpg';
import СhickenKalcone from '../assets/images/products/Chelentano/kalcone.jpg';
import HawaiianPizza from '../assets/images/products/Chelentano/havaiian.jpg';
import Peperoni from '../assets/images/products/Chelentano/peperoni.jpg';
import Bavarska from '../assets/images/products/Chelentano/bavarska.jpg';
import Salami from '../assets/images/products/Chelentano/salami_fungi.jpg';
import Amante from '../assets/images/products/Chelentano/amante.jpg';
import DeluxeSandwich from '../assets/images/products/ChickFilA/DeluxeSandwich.png';
import SpicyDeluxeSandwich from '../assets/images/products/ChickFilA/Spicy-Deluxe-Sandwich.png';
import GrilledChickenSandwich from '../assets/images/products/ChickFilA/Grilled-Deluxe-Sandwich.png';
import GrilledChickenClubSandwich from '../assets/images/products/ChickFilA/grilledClub.png';
import CobbSalad from '../assets/images/products/ChickFilA/cobbSalad.png';
import SpicySouthwestSalad from '../assets/images/products/ChickFilA/spicyGrilled.png';
import FruitCup from '../assets/images/products/ChickFilA/Fruit-Cup.png';
import BurritoBowlMexican from '../assets/images/products/Taco Bell/BURRITO_BOWL_MEXICAN.jpg';
import Quesarito from '../assets/images/products/Taco Bell/QUESARITO.jpg';
import EnsaladaDePollo from '../assets/images/products/Taco Bell/ENSALADA_DE_POLLO.jpg';
import GranBurrito from '../assets/images/products/Taco Bell/GRAN_BURRITO.jpg';
import NachosSupreme from '../assets/images/products/Taco Bell/NACHOS_SUPREME.jpg';
import Quesadilla from '../assets/images/products/Taco Bell/QUESADILLA.jpg';
import CrunchyTaco from '../assets/images/products/Taco Bell/CRUNCHY TACO.jpg';
import CrunchyTacoSupreme from '../assets/images/products/Taco Bell/CRUNCHY_TACO_ SUPREME.jpg';
import ZingerBurger from '../assets/images/products/KFC/zinger-burger.jpg';
import KentuckyBbqOriginalBurger from '../assets/images/products/KFC/bbq-original.jpg';
import ColonelTsBurger from '../assets/images/products/KFC/colonel-ts-burger.jpg';
import VeggieColonelTsBurger from '../assets/images/products/KFC/veggie-coloneltsburger.jpg';
import DoubleCheeseBaconBurger from '../assets/images/products/KFC/double-cheese-bacon.jpg';
import GourmetBbqBurger from '../assets/images/products/KFC/gourmet-bbq-burger.jpg';
import CherryMilkshake from '../assets/images/products/KFC/cherry-05.jpg';
import Twister from '../assets/images/products/KFC/twister.jpg';
import ChickenBiscuit from '../assets/images/products/ChickFilA/Biscuit_Chicken.png';
const suppliers = [
  {
    id: 1,
    name: 'Burger King',
    logo: BurgerKingLogo,
    products: [
      {
        id: 11,
        title: 'Texas Beef™',
        img: TexasBeef,
        description:'From Texas with love. Authentic taste straight out of the Wild West, the Texas Beef™ Burger features our signature 100% flame-grilled beef patty, two golden onion rings and a slice of lightly melted cheese, topped with BBQ sauce on a sesame seed bun. Ihaa!',
        price: 10.99,
      },
      {
        id: 12,
        title: 'Chili Cheese Double Beef™',
        img: ChiliCheeseDoubleBeef,
        description:'The Chili Cheese Double Beef™ is a double flame-grilled beef patty burger topped with spicy chili con carne, jalapenos, cheese and onions. It’s a burger that’s packed with a punch!',
        price: 10.50,
        },
          {
        id: 13,
        title: 'Big King®',
        img: BigKing,
        description:'The Big King® is a flame-grilled beef patty topped with melted American cheese, fresh cut iceberg lettuce, crisp onions, crunchy pickles, and featuring a sweet thousand island style dressing, all on a warm, toasted, sesame seed bun.',
        price: 9.99,
        },
    {
        id: 14,
        title: 'Bacon King™',
        img: BaconKing,
        description:'The Bacon King™ features two 100% beef patties, topped with thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise all on a soft sesame seed bun.',
        price: 8.99,
        },
        {
        id: 15,
        title: 'Whopper®',
        img: Whopper ,
        description:'Our WHOPPER® Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh cut lettuce, creamy mayonnaise, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        price: 8.99,
        },
         {
        id: 16,
        title: 'Steakhouse™',
        img: Steakhouse,
        description:'The Steakhouse™ is a flame-grilled beef patty topped with thick-cut smoked bacon, A.1.® Thick & Hearty sauce, American cheese, crispy onions, and creamy mayonnaise all on a soft sesame seed bun.',
        price: 8.75,
        },
              {
        id: 17,
        title: 'Big King XXL®',
        img: BigKingXXL,
        description:'The Big King XXL® is a towering testament to taste. Two flame-grilled beef patties topped with melted American cheese, fresh cut iceberg lettuce, crisp onions, crunchy pickles, and featuring a sweet thousand island style dressing, all on a warm, toasted, sesame seed bun.',
        price: 8.75,
        },
            {
        id: 18,
        title: 'King JR™ Burger',
        img: KingJrBurger,
        description:'The King JR™ Burger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        price: 9.85,
        },
        {
        id: 19,
        title: 'King JR™ Cheeseburger',
        img: KingJrCheeseburger,
        description:'The King JR™ Cheeseburger is a signature flame-grilled beef patty topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        price: 7.85,
        },       
    ],
  },
  {
    id: 2,
    name: 'McDonalds',
    logo: McDonaldsLogo,
    products: [
      {
        id: 21,
        title: 'Spicy McCrispy™',
        img: SpicyMcCrispy,
        description:'The Spicy McCrispy™ is a crispy chicken patty topped with a spicy sauce, lettuce and mayonnaise, all served on a sesame seed bun.',
        price: 12.99,
      },
      {
        id: 22,
        title: 'Big Mac®',
        img: BigMac,
        description:'The Big Mac® is a double burger with two 100% pure beef patties, a slice of cheese, lettuce, onion and pickles, all in our famous burger sauce. Served in a sesame seed bun.',
        price: 13.99,
        },
       {
        id: 23,
        title: 'Quarter Pounder®* with Cheese',
        img: QuarterPounderWithCheese,
        description:'The Quarter Pounder®* with Cheese is a quarter pound* of 100% pure beef, topped with cheese, onions, pickles, mustard and a dollop of tomato ketchup, all in a sesame seed bun.',
        price: 10.99,
        },
         {
        id: 24,
        title: 'Egg McMuffin®',
        img: EggMcMuffin,
        description:'The Egg McMuffin® is a simple breakfast sandwich, made with a freshly cracked egg, bacon, a slice of cheese and a toasted English muffin.',
        price: 12.99,
        },
         {
        id: 25,
        title: 'Cheeseburger',
        img: Cheeseburger,
        description:'The Cheeseburger is a signature burger, made with a 100% pure beef patty seasoned with just a pinch of salt and pepper, melty cheese, tangy pickles, minced onions, ketchup and mustard.',
        price: 10.99,
        },
        {
        id: 26,
        title: 'McChicken®',
        img: McChicken,
        description:'The McChicken® is a delightfully crispy chicken sandwich with a crispy chicken fillet topped with mayonnaise, shredded iceberg lettuce, and served on a perfectly toasty bun.',
        price: 8.75,
        },
        {
        id: 27,
        title: 'World Famous Fries®',
        img: WorldFamousFries,
        description: 'World Famous Fries® are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside',
            sizes: [
        {
          size: 'medium',
          price: 2.05,
        },
        {
          size: 'large',
          price: 3.2,
           },
          ]
        },
        {
          id: 28,
        title: 'McFlurry® with OREO® Cookies',
        img: McFlurryWithOreoCookies,
        description: 'The McFlurry® with OREO® Cookies is an popular combination of OREO® pieces and vanilla soft serve!',
        price: 6.75,
      },
        {
          id: 29,
        title: 'Hamburger Happy Meal®',
        img: HamburgerHappyMeal,
        description: 'The Hamburger Happy Meal® is a simple, satisfying burger, made with a 100% pure beef patty seasoned with just a pinch of salt and pepper, melty cheese, tangy pickles, minced onions, ketchup and mustard. Served with a side of World Famous Fries®, your choice of a soft drink, and a Happy Meal® toy!',
        price: 6.75,
      },  
    ],
  },
   {
    id: 3,
    name: 'Cheletano',
    logo: ChelentanoLogo,
     products: [
       {
        id: 31,
        title: 'Barbequ',
        img: Barbequ,
        description: 'Chicken fillet, barbecue sauce, red onion, marinated pepperoni, mozzarella, barbecue sauce 420g/760g',
        sizes: [
        {
          size: 28,
          price: 4.1,
        },
        {
          size: 40,
          price: 7.45,
        },
      ],
       },
       {
        id: 32,
        title: 'Egoista',
        img: Egoista,
        description: 'Sauce from Italian tomatoes "Mutti"/creamy 305g/600g',
        sizes: [
        {
          size: 28,
          price: 2.05,
        },
        {
          size: 40,
          price: 3.2,
           },
          ]
       },
       {
        id: 33,
        title: 'Сhicken Kalcone',
        img: СhickenKalcone,
        description: 'Closed pizza with chicken, fried mushrooms, tomatoes, mozzarella and parmesan 360g',
        price: 4,
       },
       {
        id: 34,
        title: 'Hawaiian Pizza',
        img: HawaiianPizza,
        description: '"Mutti" Italian tomato sauce, chicken fillet, corn, pineapples and mozzarella 420g/800g',
        sizes: [
        {
          size: 28,
          price: 4.33,
        },
        {
          size: 40,
          price: 7.23,
           },
          ]
       },
       {
        id: 35,
        title: 'Peperoni',
        img: Peperoni,
        description: '"Mutti" Italian tomato sauce, spicy salami, pepperoni, chili pepper, feta, mozzarella 380/800g',
        sizes: [
        {
          size: 28,
          price: 4.2,
        },
        {
          size: 40,
          price: 7.65,
           },
          ]
       },
       {
        id: 36,
        title: 'Bavarska',
        img: Bavarska,
        description: '"Mutti" Italian tomato sauce, hunting sausages, ham, mushrooms, tomatoes and mozzarella 400g/870g',
        sizes: [
        {
          size: 28,
          price: 4.2,
        },
        {
          size: 40,
          price: 7.65,
           },
          ]
       },
       {
        id: 37,
        title: 'Salami',
        img: Salami,
        description: '"Mutti" Italian tomato sauce, mozzarella, salami 330g/650g',
        sizes: [
        {
          size: 28,
          price: 3.95,
        },
        {
          size: 40,
          price: 6.95,
           },
          ]
       },
        {
        id: 38,
        title: 'Amante',
        img: Amante,
        description: 'Cream sauce, salmon, spinach, cherry tomatoes, parmesan and mozzarella 400g/750g',
        sizes: [
        {
          size: 28,
          price: 5.7,
        },
        {
          size: 40,
          price: 10.45,
           },
          ]
        }
    ]   
  },
  {
    id: 4,
    name: 'Chick-fil-A',
    logo: ChickFillLogo,
    products: [
      {
        id: 51,
        title: 'Chicken Biscuit',
        img: ChickenBiscuit,
        description:'A breakfast portion of our famous boneless breast of chicken, seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a buttermilk biscuit baked fresh at each Restaurant.',
        price: 8.99,
      },
       {
        id: 52,
        title: 'Deluxe Sandwich',
        img: DeluxeSandwich,
        description:'A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips, Green Leaf lettuce, tomato and American cheese. Gluten-free bun or multigrain bun also available at an additional cost.',
        price: 10.99,
      },
        {
        id: 53,
        title: 'Spicy Deluxe Sandwich',
        img: SpicyDeluxeSandwich,
        description:'A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips, Green Leaf lettuce, tomato and Pepper Jack Cheese. Gluten-free bun or multigrain bun also available at an additional cost.',
        price: 10.99,
      },
        {
        id: 54,
        title: 'Grilled Chicken Sandwich',
        img: GrilledChickenSandwich,
        description:'A boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste, served on a toasted multigrain bun with Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.',
        price: 12.99,
      },
         {
        id: 55,
        title: 'Grilled Chicken Club Sandwich',
        img: GrilledChickenClubSandwich,
        description:'A boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste, served on a toasted multigrain bun with Colby-Jack cheese, applewood smoked bacon, Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.',
        price: 14.99,
      },
          {
        id: 56,
        title: 'Cobb Salad',
        img: CobbSalad,
        description:'Slices of grilled spicy chicken breast served on a fresh bed of chopped Romaine lettuce and baby greens, topped with shredded red cabbage and carrots, grape tomatoes, a blend of Monterey Jack and Cheddar cheeses, and a zesty combination of poblano chiles, red bell peppers, roasted corn and black beans. Made fresh daily. Served with Seasoned Tortilla Strips, Chili Lime Pepitas, Creamy Salsa dressing or Chili Lime Vinaigrette dressing for a lighter option (or guest’s choice of dressing).',
        price: 9.99,
      },
          {
        id: 57,
        title: 'Spicy Southwest Salad',
        img: SpicySouthwestSalad ,
        description:'Slices of grilled spicy chicken breast served on a fresh bed of mixed greens, topped with grape tomatoes, a blend of Monterey Jack and Cheddar cheeses, and a zesty combination of roasted corn, black beans, poblano chiles, and red bell peppers.',
        price: 9.99,
      },
            {
        id: 58,
        title: 'Fruit Cup',
        img: FruitCup,
        description:'A great-tasting, nutritious fruit mix made with mandarin orange segments, fresh strawberry slices, red and green apple pieces, and blueberries, served chilled, in a choice of sizes. Prepared fresh at each Restaurant.',
        price: 9.99,
      },    
    ]
    
  },
  {
    id: 5,
    name: 'Taco Bell',
    logo: TacoBellLogo,
    products: [
      {
        id: 51,
        title: 'BURRITO BOWL MEXICAN',
        img: BurritoBowlMexican,
        description: 'A burrito bowl with Mexican beef, rice, tomato salsa, sour cream and nacho cheese sauce.',
        price: 10.99,
      },
        {
        id: 52,
        title: 'QUESARITO',
        img: Quesarito,
        description: 'A burrito with Mexican beef, rice, tomato salsa, sour cream and nacho cheese sauce, wrapped in a grilled tortilla with a layer of melted cheese.',
        price: 10.99,
      },
         {
        id: 53,
        title: 'ENSALADA DE POLLO',
        img: EnsaladaDePollo,
        description: 'A salad with Mexican chicken, rice, tomato salsa, sour cream and nacho cheese sauce.',
        price: 8.99,
      },
        {
        id: 54,
        title: 'GRAN BURRITO',
        img: GranBurrito ,
        description: 'A burrito with Mexican beef, rice, tomato salsa, sour cream and nacho cheese sauce.',
        price: 11.99,
      },
       {
        id: 55,
        title: 'NACHOS SUPREME',
        img: NachosSupreme,
        description: 'Nachos with Mexican beef, tomato salsa, sour cream and nacho cheese sauce.',
        price: 14.99,
      },
       {
        id: 56,
        title: 'QUESADILLA',
        img: Quesadilla,
        description: 'A grilled tortilla with a layer of melted cheese.',
        price: 13.99,
      },
         {
        id: 57,
        title: 'CRUNCHY TACO',
        img: CrunchyTaco,
        description: 'A crunchy taco with Mexican beef, lettuce, tomato salsa and nacho cheese sauce.',
        price: 13.99,
      },
           {
        id: 58,
        title: 'CRUNCHY TACO SUPREME',
        img: CrunchyTacoSupreme ,
        description: 'A crunchy taco with Mexican beef, lettuce, tomato salsa, sour cream and nacho cheese sauce.',
        price: 16.99,
      },    
    ]
  },
  {
    id: 6,
    name: 'KFC',
    logo: KfcLogo,
    products: [
      {
        id: 61,
        title: 'ZINGER BURGER',
        img: ZingerBurger,
        description: 'The Zinger® is a 100% chicken breast fillet burger with lettuce and mayo on a seeded bun.',
        price: 10.5
      },
        {
        id: 62,
        title: 'KENTUCKY BBQ ORIGINAL BURGER',
        img: KentuckyBbqOriginalBurger,
        description: 'The Kentucky BBQ Original Burger is a 100% chicken breast fillet burger with a BBQ sauce, cheese, bacon, lettuce and mayo on a seeded bun.',
        price: 14.5
      },
       {
        id: 63,
        title: 'COLONEL TS BURGER',
        img: ColonelTsBurger,
        description: 'The Colonel TS Burger is a 100% chicken breast fillet burger with a spicy coating, cheese, lettuce and mayo on a seeded bun.',
        price: 12.5
      },
       {
        id: 64,
        title: 'VEGGIE COLONEL TS BURGER',
        img: VeggieColonelTsBurger,
        description: 'The Veggie Colonel TS Burger is a veggie burger with a spicy coating, cheese, lettuce and mayo on a seeded bun.',
        price: 10.5
      },
       {
        id: 65,
        title: 'DOUBLE CHEESE & BACON BURGER',
        img: DoubleCheeseBaconBurger,
        description: 'The Double Cheese & Bacon Burger is a 100% chicken breast fillet burger with a spicy coating, cheese, bacon, lettuce and mayo on a seeded bun.',
        price: 15.5
      },
         {
        id: 66,
        title: 'GOURMET BBQ BURGER',
        img: GourmetBbqBurger,
        description: 'The Gourmet BBQ Burger is a 100% chicken breast fillet burger with a BBQ sauce, cheese, bacon, lettuce and mayo on a seeded bun.',
        price: 12.5
      },
         {
        id: 67,
        title: 'CHERRY MILKSHAKE 0.5L',
        img: CherryMilkshake,
        description: 'Cherry Milkshake 0.5L',
        price: 6.5
      },
           {
        id: 68,
        title: 'TWISTER',
        img: Twister,
        description: 'The Twister is a 100% chicken breast fillet, lettuce, tomato and pepper mayo, wrapped in a soft tortilla wrap.',
        price: 6.5
      },   
    ]
  }
];


export default suppliers;