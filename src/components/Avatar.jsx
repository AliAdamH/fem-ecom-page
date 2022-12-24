import React from 'react';
import avatarImage from '../assets/images/image-avatar.png';
function Avatar() {
  return (
    <div className="w-8">
      <img src={avatarImage} alt="User's Avatar" />
    </div>
  );
}

export default Avatar;
