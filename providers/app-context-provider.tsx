import { Messages } from '@/i18n';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type AppContextType = {
	/** locale of the application */
	locale: keyof Messages;

	/** set the locale of the application */
	setLocale(locale: keyof Messages): void;

	/** true if the mobile navigation open */
	isNavOpen: boolean;

	/** Function to set the value of navigation bar */
	setIsNavOpen(isNavOpen: boolean): void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: PropsWithChildren) => {
	const [locale, setLocale] = useState<keyof Messages>('en');
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	return (
		<AppContext.Provider value={{ isNavOpen, setIsNavOpen, locale, setLocale }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

/**
 * @returns the app related information
 */
export function useAppContext(): AppContextType {
	const ctx = useContext(AppContext);
	if (!ctx) {
		throw Error('useAppContext called outside the AppContext');
	}
	return ctx;
}
