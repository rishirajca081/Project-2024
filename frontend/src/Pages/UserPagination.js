import React, { useState } from 'react';
import UserProfileLogo from "../Images/UserProfileLogo.png";
import Details from './details'
const Profile = ( profile) => (
  <div className="bg-white shadow-md rounded-md p-4 flex items-center">
    <img src={UserProfileLogo} alt="User Profile" className="h-16 w-16 rounded-full" />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{profile.FirstName} {profile.LastName}</h2>
      <p className="text-gray-600">Batch: {profile.batchYear}</p>
      <p className="text-gray-600">Company: {profile.company}</p>
      <button
      onClick={()=>{
           
      }} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">View Details</button>
    </div>
  </div>
);

const UserPagination = ({ profiles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 6;
  const [details,setDetails]=useState(false);
  // Get current profiles
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(profiles.length / profilesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentProfiles.map((profile, idx) => (
          <Details key={idx} {...profile} />
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="flex space-x-2 items-center">
          <button
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? 'bg-gray-200 text-black cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <ul className="flex space-x-2">
            {Array.from({ length: Math.ceil(profiles.length / profilesPerPage) }).map((_, idx) => (
              <li key={idx}>
                <button
                  className={`px-4 py-2 rounded-md ${
                    currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => paginate(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}
          </ul>
          <button
            className={`px-4 py-2 rounded-md ${
              currentPage === Math.ceil(profiles.length / profilesPerPage)
                ? 'bg-gray-200 text-black cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={nextPage}
            disabled={currentPage === Math.ceil(profiles.length / profilesPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPagination;