import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {

    const users = useLoaderData()


    return (
        <div>

            {
                users.map(x => <Friend key={x.id} friend={x} />)
            }


        </div>
    );
};

export default Friends;