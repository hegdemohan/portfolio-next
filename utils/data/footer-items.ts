import { iconTypes } from '../icons';

type FooterLink = {
	key: string | number;
	href: string;
	icon: keyof typeof iconTypes;
	label?: string;
};
// footer links
export const SOCIAL_MEDIA_LINKS: FooterLink[] = [
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
];

export const CREDIT_LINKS: FooterLink[] = [
	{
		key: 1,
		href: 'https://www.behance.net/gallery/142207047/Portfolio-Concept-V2',
		icon: 'design',
		label: 'design',
	},
	{
		key: 2,
		href: 'https://undraw.co/illustrations',
		icon: 'illustration',
		label: 'illustration',
	},
];

export const GITHUB: FooterLink = {
	key: 1,
	href: 'https://github.com/hegdemohan',
	label: '@mohanhegde',
	icon: 'github',
};
