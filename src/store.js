export const initialStore=()=>{
  return{
    persons: [
      {
        uid: 1,
        name: "Luke Skywalker",
        url: "https://www.swapi.tech/api/people/1"
      },
      {
        "uid": "2",
        "name": "C-3PO",
        "url": "https://www.swapi.tech/api/people/2"
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
    default:
      throw Error('Unknown action.');
  }    
}
