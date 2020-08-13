import React from 'react'
import '../styles/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import {useStateProviderValue} from '../react-context/StateProvider';


function Header({spotify}) {
  const [{user}, dispatch] = useStateProviderValue();

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or"
          type="text"
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
