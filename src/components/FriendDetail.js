import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const {id,name}=useLoaderData()
    
    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>

        </div>
    );
};

export default FriendDetail;