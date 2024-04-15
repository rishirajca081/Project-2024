import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShowNavbar = ({ children }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const hideNavbarPaths = ['/Login', '/Register','/UserProfile','/','/ChangePassword','/EditProfile','/Otppg','/VerifyOtp']; // Add paths of pages where navbar should be hidden
        setShowNavbar(!hideNavbarPaths.includes(location.pathname));
    }, [location]);

    return (
        <div>
            {showNavbar && children}
        </div>
    );
}

export default MaybeShowNavbar;
