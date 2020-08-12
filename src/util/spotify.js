
// Send user to login and auth
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Redirect to home page after login
const redirectUri = "http://localhost:3000/";

const clientId = "a56a243a07d44365979e5085367ca56b";

// Give user scope to perform actions
const scopes = [
  // Permissions
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
  // url and finds hash
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=/superkey&/name=...
      let parts = item.split('=');
      // go into access token (parts[0]) and decode superkey/token (parts[1])
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
}

// Returns token for authentication
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;