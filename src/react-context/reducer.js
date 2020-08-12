export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQCzICLDi8bYcoBYm-tUp1slwUMGW4NIUiMptRDD5crpNBj0jsrNKGapdkshUGroVnngN5FRdKfpbFfeyHnwz4pEL5R8eX24AEadlkeqX53aG2KbOk3tJ52Uw6MgQYMrvesOx2j93fU5lTw-Khu844AalMUZF6UaNEtm7Q'
};

// action manipulates data layer look like -> set action/user etc
// state currently looks
const reducer = (state, action) => { // reducers job is to listen to actions

  // Action -> type, [payload]
  switch(action.type) {
    // Dispatch action with type SET_USER; here is a user, throw it into data layer
    case 'SET_USER': 
      // Return new state
      return { 
        // Keep what was in current state
        ...state,
        user: action.user // User is the payload
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    default:
      return state
  }

}

export default reducer;