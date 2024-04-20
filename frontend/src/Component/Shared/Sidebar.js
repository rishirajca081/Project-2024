import React, { useState } from 'react';
import Logo from '../../Images/Logo.jpg';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/Constants/navigation';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-100 hover:no-underline active:bg-indigo-300 rounded-sm text-base'

export default function Sidebar({userid}) {
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        // Show confirmation modal
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        // Perform logout action
        // For now, let's just navigate to the login page
        // performLogout();
        setShowModal(false);
    };

    const handleCancelLogout = () => {
        setShowModal(false);
    };

    return (
        <div className='flex flex-col bg-white border-2 border-indigo-200 border-r-neutral-200 w-60 p-3 '>
            <div className='flex flex-row gap-2 px-1 py-3'>
                <img src={Logo} alt="Logo" className="h-20" />
                <h1 className=' font-bold mt-4 drop-shadow-lg'>
                    <p className='text-center'>MNNIT</p>
                    <p className='text-center ml-4'>connect Hub</p>
                </h1>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-2'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} userid={userid}/>
                ))}
            </div>
            <div className='flex flex-col gap-2 pt-2 border-t border-black'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item =>
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div
                    className={classNames(linkClass, 'cursor-pointer text-black-800 font-bold')}
                    onClick={handleLogout}
                >
                    <span className="text-xl ">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
            {showModal && (
                <Modal onConfirm={handleConfirmLogout} onCancel={handleCancelLogout} />
            )}
        </div>
    )
}

function Modal({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <HiOutlineLogout className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Logout Confirmation</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">Are you sure you want to logout?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={onConfirm}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Logout
                        </button>
                        <button
                            onClick={onCancel}
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ item, pathname ,userid}) {
    const parent = '/dashboard';
    var redirectURL = `${parent}/${userid}`;
    if(parent===item.path){
        redirectURL = `${item.path}${userid}`;
    }
    else{
        redirectURL=`${redirectURL}${item.path}/${userid}`
    }
    return (
        
        <Link
            to={`${redirectURL}`}
            className={classNames(pathname === item.path ? ' text-black' : 'text-black', linkClass)}
        >
            <span className='text-xl text-black'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
