
const deliWrapsObj = {
  Veggy: {
    id: 1,
    name: "Veggy",
    short: "Vg",
    class: "wrap",
    subclass: "deli",
    dressing: "",
    meat: [
      {
        qty: 2,
        units: "ounces",
        ingredient: "veggies",
      },
    ],
    cheese: [
      {
        qty: 0,
        units: "",
        ingredient: "",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "red"],
    wrapped: "2 checkered papers",
  },
  "Tuna Wrap": {
    id: 2,
    name: "Tuna",
    short: "TnW",
    class: "wrap",
    subclass: "deli",
    dressing: "",
    meat: [
      {
        qty: 4,
        units: "ounces",
        ingredient: "tuna salad",
      },
    ],
    cheese: [
      {
        qty: 0,
        units: "",
        ingredient: "",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "dressing", "red"],
    wrapped: "2 checkered papers",
  },
  "Turkey Wrap": {
    id: 3,
    name: "Turkey",
    short: "TkW",
    class: "wrap",
    subclass: "deli",
    dressing: "thousand islands",
    meat: [
      {
        qty: 3,
        ingredient: "turkey",
        units: "slices",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "cheddar",
        units: "slice",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "dressing", "red"],
    wrapped: "2 checkered papers",
  },
  "Chicken Wrap": {
    id: 4,
    name: "Chicken",
    short: "CxW",
    class: "wrap",
    subclass: "deli",
    dressing: "honey mustard",
    meat: [
      {
        qty: 4,
        ingredient: "chicken",
        units: "slices",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "provolone",
        units: "slice",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "dressing", "red"],
    wrapped: "2 checkered papers",
  },
  "Ham Wrap": {
    id: 5,
    name: "Ham",
    short: "HmW",
    class: "wrap",
    subclass: "deli",
    dressing: "creamy italian",
    meat: [
      {
        qty: 3,
        ingredient: "ham",
        units: "slices",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "swiss",
        units: "slice",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "dressing", "red"],
    wrapped: "2 checkered papers",
  },
  "Italian Wrap": {
    id: 6,
    name: "Italian",
    short: "ItW",
    class: "wrap",
    subclass: "deli",
    dressing: "creamy italian",
    meat: [
      {
        qty: 2,
        ingredient: "ham",
        units: "slices",
      },
      {
        qty: 2,
        ingredient: "salami",
        units: "slices",
      },
      {
        qty: 2,
        ingredient: "capicola",
        units: "slices",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "provolone",
        units: "slice",
      },
    ],
    green: "green leaves",
    red: [
      {
        qty: 2,
        ingredient: "tomato",
        units: "slices",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "dressing", "meat", "cheese", "green", "red"],
    wrapped: "none",
  },
  "Roast Beef Wrap": {
    id: 7,
    name: "Roast Beef",
    short: "RbW",
    class: "wrap",
    subclass: "deli",
    dressing: "horse raddish",
    meat: [
      {
        qty: 4,
        units: "ounces",
        ingredient: "roast beef",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "swiss",
        units: "slice",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "dressing", "red"],
    wrapped: "2 checkered papers",
  },
  "Corn Beef Wrap": {
    id: 8,
    name: "Corn Beef",
    short: "CbW",
    class: "wrap",
    subclass: "deli",
    dressing: "spicy mustard",
    meat: [
      {
        qty: 4,
        units: "ounces",
        ingredient: "corn beef",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "swiss",
        units: "slice",
      },
    ],
    green: "shredded romaine",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "green", "meat", "dressing", "red"],
    wrapped: "2 checkered papers",
  },
  "Pastrami Wrap": {
    id: 6,
    name: "Pastrami",
    short: "Pst",
    class: "wrap",
    subclass: "deli",
    std: false,
    dressing: "spicy mustard",
    meat: [
      {
        qty: 2,
        units: "ounces",
        ingredient: "cornBeef",
      },
    ],
    cheese: [
      {
        qty: 1,
        ingredient: "swiss",
        units: "slice",
      },
    ],
    green: "green leaves",
    red: [
      {
        qty: 1,
        ingredient: "tomato",
        units: "slice",
      },
    ],
    bread: "wrap",
    otherbread: '2x8" gf wraps',
    steps: ["bread", "dressing", "meat", "cheese", "green", "red"],
    wrapped: "none",
  },
};

export default deliWrapsObj

