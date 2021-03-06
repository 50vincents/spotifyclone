import React, {useEffect, useState} from 'react';
import './App.css';

import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from './util/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useStateProviderValue} from './react-context/StateProvider';

// data layer - components of components
// tightly coupled code - prob drilling
// soln: redux/react context api -> tree next to data layer, can pull info whenever

// Communicate with spotify
const spotify = new SpotifyWebApi();

function App() {
  // Grab anything from data layer, destructure
  // Dispatch used to shoot/update values in data layer
  const [{user, token}, dispatch] = useStateProviderValue();

   // run piece of code when component loads
  // when something changes re run
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      // Get user
      spotify.getMe().then(user => {
        // Dispatch user to data layer with action
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });

      spotify.getPlaylist('0O3aBDky6v3jtl1wAZQZLD').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      });

    }

  }, []);

  return (
    <div className="app">
      { 
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
     
    </div>
  );
}

export default App;
