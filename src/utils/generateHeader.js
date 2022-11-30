import URLS from '@/src/enums/urls'

export const privateHeaderMenuConfig = [
	{ key: URLS.PROFILE, label: 'Profile' },
	{ key: URLS.LANDING, label: 'Home' },

	// {
	// 	key: 'package-parent',
	// 	label: 'App Package',
	// 	children: [
	// 		{ label: 'Rent App Package', key: URLS.PACKAGE },
	// 		{ label: 'History', key: URLS.PACKAGE_HISTORY }
	// 	]
	// }
]
export const publicHeaderMenuConfig = [{ key: URLS.AUTH, label: 'Login' }]
