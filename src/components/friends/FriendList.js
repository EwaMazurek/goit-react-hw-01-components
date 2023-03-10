import PropTypes from "prop-types";
import "./FriendList.css";
function FriendList({ friends }) {
  return (
    <div className="friends-container">
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="item" key={friend.id}>
            {friend.isOnline ? (
              <span className="status online"></span>
            ) : (
              <span className="status offline"></span>
            )}
            <img className="avatar" src={friend.avatar} alt="user avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
