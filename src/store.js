export const initialStore=()=>{
  return{
    favorites: [],
    planets: [],
    vehicles: [],
    persons: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_person':
      return {
        ...store,
        persons: action.payload
      };
    case 'add_vehicle':
      return {
        ...store,
        vehicles: action.payload
      };
    case 'add_planet':
      return {
        ...store,
        planets: action.payload
      };
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
