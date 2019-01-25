import React from "react";
import Friend from "./Friend";


const FriendList = props => {
  return (
    <div className="friends-list__container">
      {props.friendsOnProps.map(friend => {
        return (
          <Friend
            key={`friend${friend.id}`}
            friend={friend}
            deleteFriend={props.deleteFriend}
            modifyFriend={props.modifyFriend}
          />
        );
      })}
    </div>
  );
};

export default FriendList;