import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        color:'red',
      };

    return (
        <div>
            
            <nav>

            <NavLink to='/home'
            style={({ isActive }) =>
            isActive ?activeStyle:undefined 
          }

            >Home</NavLink>
            <NavLink to='/about'
             style={({ isActive }) =>
             isActive ?activeStyle:undefined 
           }
            >About</NavLink>
            <NavLink to='/friends'
             style={({ isActive }) =>
             isActive ?activeStyle:undefined 
           }
            >Friends</NavLink>
            
            
        </nav>
        <h3>Common Header</h3>

        </div>
        
    );
};

export default Header;