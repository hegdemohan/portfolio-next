'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import I18nProvider from '@/i18n/i18n-provider';
import AppContextProvider, {
	useAppContext,
} from '@/providers/app-context-provider';
import SnackBarProvider from '@/providers/snackbar-provider';
import { PropsWithChildren } from 'react';
import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<AppContextProvider>
				<I18nProvider>
					<Layout>{children}</Layout>
				</I18nProvider>
			</AppContextProvider>
		</html>
	);
}

const Layout = ({ children }: PropsWithChildren) => {
	const { isNavOpen } = useAppContext();
	return (
		<body className="flex flex-col justify-between rounded-lg border border-br-default bg-blue-bg">
			<SnackBarProvider>
				<Header />
				{!isNavOpen && children}
				<Footer />
			</SnackBarProvider>
		</body>
	);
};
