import React from 'react';

const FriendsList = props => {
    return(  
        <div className="list">
            {props.friends.map((friend, id) => (
                 <div>
                    key={friend.id}
                    <p>Name: {friend.name} </p>
                    <p>Age: {friend.age} </p>
                    <p>Email: {friend.email} </p>
                </div>
            ))}
        </div>
)};

export default FriendsList; 