export const initialStore=()=>{
  return{
    favorites: [],
    planets: [
      {
        uid: 1,
        name: "Planet 1",
        url: "https://www.swapi.tech/api/planets/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/1.jpg?raw=true",
        climate: "Planet Digger",
        terrain: "Planet Mining",
        population: "30"
      },
      {
        uid: 2,
        name: "Planet 1",
        url: "https://www.swapi.tech/api/planets/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/2.jpg?raw=true",
        climate: "Planet Digger",
        terrain: "Planet Mining",
        population: "30"
      },
      {
        uid: 3,
        name: "Planet 1",
        url: "https://www.swapi.tech/api/planets/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/3.jpg?raw=true",
        climate: "Planet Digger",
        terrain: "Planet Mining",
        population: "30"
      },
      {
        uid: 4,
        name: "Planet 1",
        url: "https://www.swapi.tech/api/planets/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/4.jpg?raw=true",
        climate: "Planet Digger",
        terrain: "Planet Mining",
        population: "30"
      }
    ],
    vehicles: [
      {
        uid: 4,
        name: "Sand Crawler",
        url: "https://www.swapi.tech/api/vehicle/4",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/4.jpg?raw=true",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining",
        passengers: "30"
      },
      {
        uid: 6,
        name: "T-16 skyhopper",
        url: "https://www.swapi.tech/api/vehicle/6",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/6.jpg?raw=true",
        model: "T-16 skyhopper",
        manufacturer: "Corellia Mining ",
        passengers: "2"
      },
      {
        uid: 7,
        name: "X-34 landspeeder",
        url: "https://www.swapi.tech/api/vehicle/7",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/7.jpg?raw=true",
        model: "X-34 landspeeder",
        manufacturer: "Corellia Mining",
        passengers: "17"
      },
      {
        uid: 8,
        name: "TIE/LN starfighter",
        url: "https://www.swapi.tech/api/vehicle/8",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/8.jpg?raw=true",
        model: "TIE/LN starfighter",
        manufacturer: "Corellia Mining",
        passengers: "3"
      }
    ],
    persons: [
      {
        uid: 1,
        name: "Luke Skywalker",
        url: "https://www.swapi.tech/api/people/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/1.jpg?raw=true",
        gender: "male",
        hair: "blond",
        eyes: "blue"
      },
      {
        uid: "2",
        name: "C-3PO",
        url: "https://www.swapi.tech/api/people/2",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/2.jpg?raw=true",
        gender: "robot",
        hair: "none",
        eyes: "yellow"
      },
      {
        "uid": "3",
        "name": "R2-D2",
        "url": "https://www.swapi.tech/api/people/3",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/3.jpg?raw=true",
        gender: "robot",
        hair: "none",
        eyes: "red"
      },
      {
        "uid": "4",
        "name": "Darth Vader",
        "url": "https://www.swapi.tech/api/people/4",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/4.jpg?raw=true",
        gender: "male",
        hair: "none",
        eyes: "yellow"
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_person':
      return {
        ...store,
        persons: action.payload
      };
      // case: "update_planets":
      //   return {
      //     ...store,
      //     planets: action.payload
      //   };
    case 'add_favorite_person':
      return {
        ...store,
        favorites: [
          ...store.favorites,
          action.payload
        ]
      };
    case 'add_favorite_vehicle':
      return {
        ...store,
        favorites: [
          ...store.favorites,
          action.payload
        ]
      };
    case 'add_favorite_planet':
      return {
        ...store,
        favorites: [
          ...store.favorites,
          action.payload
        ]
      };
    default:
      throw Error('Unknown action.');
  }    
}
