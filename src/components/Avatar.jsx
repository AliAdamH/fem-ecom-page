import React from 'react';
import avatarImage from '../assets/images/image-avatar.png';
function Avatar() {
  return (
    <div className="w-8 md:w-10 hover:border-2 hover:border-primary-orange rounded-full">
      <img src={avatarImage} alt="User's Avatar" />
    </div>
  );
}

export default Avatar;
