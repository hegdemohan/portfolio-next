import { I18nMessage } from '@/i18n/types';
import { iconTypes } from './icons';

/** Contact form data */
export type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

/** A Nested json with only string values */
export type NestedStringJSON = {
	[key: string]: string | NestedStringJSON;
};

/** Type to get flattened object keys */
export type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
	? T[Key] extends Record<string, unknown>
		? `${Key}.${FlattenObjectKeys<T[Key]>}`
		: Key
	: never;

/** True if the given string is a key of the object */
export const isKeyOf = <T extends object, K extends keyof T>(key: K | string, obj: T): key is K => key in obj;

interface TitleAndKey {
	key: string;
	title: I18nMessage;
}

export interface File extends TitleAndKey {
	description: I18nMessage;
}

export interface AboutSubSection extends TitleAndKey {
	description: I18nMessage;
	files?: File[];
}

export interface AboutSection extends TitleAndKey {
	icon: keyof typeof iconTypes;
	subSections: AboutSubSection[];
}

type SyntaxHighlighterLanguage = 'javascript' | 'typescript' | 'jsx' | 'tsx' | 'css' | 'scss' | 'html' | 'json';
// Add more languages as needed

export interface Gist {
	language: SyntaxHighlighterLanguage;
	snippet: string;
}

type AvailableTech =
	| 'Android'
	| 'Python'
	| 'React'
	| 'Angular'
	| 'JavaScript'
	| 'TypeScript'
	| 'HTML'
	| 'CSS'
	| 'Docker'
	| 'Tailwind CSS';
export interface Project extends TitleAndKey {
	description: I18nMessage;
	url: string;
	tech: AvailableTech[];
}

export interface Tech {
	key: string;
	icon: keyof typeof iconTypes;
	tech: AvailableTech;
}

type ContactSource = {
	key: string;
	icon: keyof typeof iconTypes;
	details: string;
};

export type Contacts = {
	title: I18nMessage;
	sources: ContactSource[];
};
