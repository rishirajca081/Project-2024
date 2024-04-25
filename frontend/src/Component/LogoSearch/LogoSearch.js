import React from "react";
import { UilSearch } from '@iconscout/react-unicons';

const LogoSearch = () => {
  return (
    <div className="LogoSearch flex gap-3 p-4 bg-white">
      {/* <img src={Logo} alt="" /> */}
      <div className="Search flex bg-gray-200 rounded-full px-4 py-2 items-center">
        <input type="text" placeholder="#Explore" className="bg-transparent outline-none ml-2" />
        <div className="s-icon ml-2 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-red-500 rounded px-2 text-white">
          <UilSearch size="20" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
