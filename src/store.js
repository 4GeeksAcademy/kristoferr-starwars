export const initialStore=()=>{
  return{
    favorites: [],
    vehicles: [
      {
        uid: 4,
        name: "Sand Crawler",
        url: "https://www.swapi.tech/api/vehicle/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/4.jpg?raw=true",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining",
        passengers: "30"
      },
      {
        uid: 4,
        name: "Sand Crawler",
        url: "https://www.swapi.tech/api/vehicle/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/4.jpg?raw=true",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining ",
        passengers: "30"
      },
      {
        uid: 4,
        name: "Sand Crawler",
        url: "https://www.swapi.tech/api/vehicle/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/4.jpg?raw=true",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining",
        passengers: "30"
      },
      {
        uid: 4,
        name: "Sand Crawler",
        url: "https://www.swapi.tech/api/vehicle/1",
        image: "https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/4.jpg?raw=true",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining",
        passengers: "30"
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
      },
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
    default:
      throw Error('Unknown action.');
  }    
}
