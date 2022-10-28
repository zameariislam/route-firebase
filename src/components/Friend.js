import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    return (
        <div>
            <h1>{friend.name}</h1>
            <Link to={`/friend/${friend.id}`}><button>click me</button></Link>
        
           
        </div>
    );
};

export default Friend;