import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function Layout() {
	// const {userid} = useParams();
	const userid = Cookies.get('userid');
	return (
		<div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
			<Sidebar userid={userid}/>
			<div className="flex flex-col flex-1">
				<Header />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
            
		</div>
	)
}