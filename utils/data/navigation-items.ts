import { I18nMessage } from '@/i18n/types';

export type NavigationItem = {
	/** The key property which could be either a number of string (uuid string) */
	key: number | string;

	/** The route which the app should redirect to */
	href: string;

	/** The display name of the navigation item */
	label: I18nMessage;
};

// Navigation buttons
const NAVIGATION_ITEMS: NavigationItem[] = [
	{
		key: 1,
		href: '/',
		label: {
			id: 'sections.hello',
			defaultMessage: '_hello',
		},
	},
	{
		key: 2,
		href: '/about',
		label: {
			id: 'sections.aboutMe',
			defaultMessage: '_about-me',
		},
	},
	{
		key: 3,
		href: '/projects',
		label: {
			id: 'sections.projects',
			defaultMessage: '_projects',
		},
	},
	// The last element will be pushed to the end in the UI,
	// So keep the contact at the end always to follow the design
	{
		key: 4,
		href: '/contact',
		label: {
			id: 'sections.contactMe',
			defaultMessage: '_contact-me',
		},
	},
];

export default NAVIGATION_ITEMS;
