import {
	HiOutlineViewGrid,
	HiUser,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLockClosed
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	// {
	// 	key: 'dashboard',
	// 	label: 'Dashboard',
	// 	path: '/dashboard',
	// 	icon: <HiOutlineViewGrid />
	// },
	{
		key: 'user',
		label: 'User',
		path: '/user',
		icon: <HiUser />
	},
	{
		key: 'EditProfile',
		label: 'EditProfile',
		path: '/EditProfile',
		icon: <HiUser />
	},
	{
		key: 'Password',
		label: 'Change Password',
		path: '/ChangePassword',
		icon: <HiOutlineLockClosed />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [

	{
		key: 'support',
		label: 'Help & Support',

		icon: <HiOutlineQuestionMarkCircle />
	}
]