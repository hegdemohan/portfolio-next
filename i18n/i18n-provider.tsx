import { useAppContext } from '@/providers/app-context-provider';
import { flatten } from '@/utils/helpers';
import { FlattenObjectKeys } from '@/utils/types';
import { PropsWithChildren, useEffect } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import messages, { isSupportedLocale } from '.';
import en from './dictionary/en';
import { I18nMessage } from './types';

declare global {
	namespace FormatjsIntl {
		interface Message {
			/** Using en messages is enough as all the translation files will have the same keys */
			ids: FlattenObjectKeys<typeof en>;
		}
	}
}

const I18nProvider = ({ children }: PropsWithChildren): JSX.Element => {
	const { locale, setLocale } = useAppContext();

	/** Check for the browser language and use it if the app supports it */
	useEffect(() => {
		const lang = window.navigator.language.split('-')[0];
		if (isSupportedLocale(lang)) {
			setLocale(lang);
		}
	}, [setLocale]);

	return (
		<IntlProvider locale={locale} messages={flatten(messages[locale])}>
			{children}
		</IntlProvider>
	);
};

export const getFormattedMessage = ({ id, defaultMessage }: I18nMessage) => {
	return <FormattedMessage id={id} defaultMessage={defaultMessage} />;
};
export default I18nProvider;
