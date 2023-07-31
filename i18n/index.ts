import de from './dictionary/de';
import en from './dictionary/en';

const messages = { en, de };

export type Messages = typeof messages;

/** A type guard to check if the given locale is supported in the app */
export const isSupportedLocale = (locale: string): locale is keyof Messages => {
	return locale in messages;
};

export default messages;
