import React from "react";
import { useState } from "react";
import "../App.css";

const FollowCard = ({ userName, children, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const buttonText = isFollowing ? "Following" : "Follow";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="followCard-container">
      <header className="followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="Avatar"
          className="followCard-avatar"
        />
        <div className="followCard-info">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="followCard-button" onClick={handleFollow}>
          {buttonText}
        </button>
      </aside>
    </article>
  );
};

export default FollowCard;
