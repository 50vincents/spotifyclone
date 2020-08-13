export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  token: null
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
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    default:
      return state
  }

}

export default reducer;