import { FlattenObjectKeys } from '@/utils/types';
import en from './dictionary/en';

/** Type of the id used for i18n translations */
export type I18nId = FlattenObjectKeys<typeof en>;

export type I18nMessage = {
	/** ID of the i18n translation */
	id: I18nId;

	/** fallback message */
	defaultMessage: string;
};

export const isI18nMessage = (obj: any): obj is I18nMessage =>
	typeof obj === 'object' &&
	obj !== null &&
	typeof obj.id === 'string' &&
	typeof obj.defaultMessage === 'string';
