
const deliSandwichesObj = {

  'Tuna': {
    "id":1,
    "name":"Tuna",
    "short":"Tn",
    "class":"sandwich",
    "subclass":"deli",
    "dressing":"",
    "meat": [
      {
        "qty": 4,
        "units": "ounces",
        "ingredient": "tuna salad"
      }
    ],
    "cheese":[
      {
        "qty": 0, 
        "ingredient": "",
        "units": "",
      }
    ],
    "green":"green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units:": "slice"
    }],
    "bread":"onion",
    "steps":[
      "bread",
      "meat",
      "green",
      "red"
    ],
    "wrapped":"none"
  },
  "Turkey": {
    "id":2,
    "name":"Turkey",
    "short":"Tk",
    "class":"sandwich",
    "subclass":"deli",
    "dressing":"thousand islands",
    "meat": [
      {
        "qty": 2,
        "ingredient": "turkey",
        "units": "slices",
      }
    ],
    "cheese": [{
      "qty": 1,
      "ingredient": "cheddar",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units": "slice",
    }],
    "bread": "hallah",
    "steps": [
      "bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"
    ],
    "wrapped":"none"
  },
  "Chicken": {
    "id": 3,
    "name": "Chicken",
    "short": "Cx",
    "class": "sandwich",
    "subclass": "deli",
    "dressing": "honey mustard",
    "meat": [
      {
        "qty": 4,
        "ingredient": "chicken",
        "units": "slices",
      }
    ],
    "cheese": [{
      "qty": 1,
      "ingredient": "provolone",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units": "slice",
    }],
    "bread": "allWheat",
    "steps":["bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"],
    "wrapped": "none"
  },
  "Ham": {
    "id":4,
    "name": "Ham",
    "short": "Hm",
    "class": "sandwich",
    "subclass": "deli",
    "dressing": "creamy italian",
    "meat": [
      {
        "qty": 1,
        "ingredient": "ham",
        "units": "slice",
      }
    ],
    "cheese": [{
      "qty": 1,
      "ingredient": "swiss",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units": "slice",
    }],
    "bread": "chabatta",
    "steps":["bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"],
    "wrapped": "none"
  },
  "Italian": {
    "id":5,
    "name": "Italian",
    "short": "It",
    "class": "sandwich",
    "subclass": "deli",
    "dressing": "creamy italian",
    "meat": [
      {
        "qty": 2,
        "ingredient": "ham",
        "units": "slices",
      },
      {
        "qty": 2,
        "ingredient": "salami",
        "units": "slices",
      },
      {
        "qty": 2,
        "ingredient": "capicola",
        "units": "slices",
      }
    ],
    "cheese": [{
      "qty": 1,
      "ingredient": "provolone",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 2,
      "ingredient": "tomato",
      "units": "slices",
    }],
    "bread": "chabatta",
    "otherbread": "frozen baguette",
    "steps":["bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"],
    "wrapped": "none"
  },
  "Roast Beef": {
    "id": 7,
    "name": "Roast Beef",
    "short": "Rb",
    "class": "sandwich",
    "subclass": "deli",
    "dressing": "horse raddish",
    "meat": [
      {
        "qty": 4,
        "units": "ounces",
        "ingredient": "roastBeef"
      }
    ],
    "cheese": [{
      "qty": 2,
      "ingredient": "swiss",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units": "slice",
    }],
    "bread": "onion",
    "steps":["bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"],
    "wrapped": "none"
  },
  "Corn Beef": {
    "id":6,
    "name": "Corn Beef",
    "short": "Cb",
    "class": "sandwich",
    "subclass": "deli",
    "dressing": "spicy mustard",
    "meat": [
      {
        "qty": 2,
        "units": "ounces",
        "ingredient": "cornBeef"
      }
    ],
    "cheese": [{
      "qty": 1,
      "ingredient": "swiss",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units": "slice",
    }],
    "bread": "ray",
    "otherbread": "marble slice",
    "steps":["bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"],
    "wrapped": "none"
  },
  "Pastrami": {
    "id":7,
    "name": "Pastrami",
    "short": "Ps",
    "class": "sandwich",
    "subclass": "deli",
    "dressing": "spicy mustard",
    "meat": [
      {
        "qty": 2,
        "units": "ounces",
        "ingredient": "pastrami"
      }
    ],
    "cheese": [{
      "qty": 1,
      "ingredient": "swiss",
      "units": "slice",
    }],
    "green": "green leaves",
    "red": [{
      "qty": 1,
      "ingredient": "tomato",
      "units": "slice",
    }],
    "bread": "ray",
    "otherbread": "marble slice",
    "steps":["bread",
      "dressing",
      "meat",
      "cheese",
      "green",
      "red"],
    "wrapped": "none"
  }

}

export default deliSandwichesObj