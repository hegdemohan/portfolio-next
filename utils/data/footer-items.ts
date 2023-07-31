import { iconTypes } from '../icons';

// footer links
const SOCIAL_MEDIA_LINKS: {
	key: string | number;
	href: string;
	icon: keyof typeof iconTypes;
	label?: string;
}[] = [
	{
		key: 1,
		href: 'https://www.facebook.com/mohan.hegde94',
		icon: 'facebook',
	},
	{
		key: 2,
		href: 'https://www.instagram.com/mohanhegde',
		icon: 'instagram',
	},
	// The last element will be pushed to the end in the UI,
	// So keep the contact at the end always to follow the design
	{
		key: 3,
		href: 'https://github.com/hegdemohan',
		label: '@mohanhegde',
		icon: 'github',
	},
];
export default SOCIAL_MEDIA_LINKS;
