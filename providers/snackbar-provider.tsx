'use client';

import Snackbar from '@/components/snackbar';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type SnackbarContextProps = {
	createSnackbar(msg: string | JSX.Element): void;
};

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

let timer: NodeJS.Timeout;

const SnackBarProvider = ({ children }: PropsWithChildren) => {
	const [msg, setMsg] = useState<string | undefined>(undefined);

	const createSnackbar = (msg: string) => {
		console.log(msg);
		setMsg(msg);
		timer = setTimeout(() => {
			closeHandler();
		}, 3000);
	};
	const closeHandler = () => {
		clearTimeout(timer);
		setMsg(undefined);
	};

	return (
		<SnackbarContext.Provider
			value={{
				createSnackbar: createSnackbar,
			}}
		>
			{msg && <Snackbar message={msg} />}
			{children}
		</SnackbarContext.Provider>
	);
};

/**
 * @returns Hook that returns the utility function to create a snackbar
 */
export function useSnackbar() {
	const ctx = useContext(SnackbarContext);
	if (!ctx) {
		throw Error('useSnackbar called outside the SnackbarContext');
	}
	return ctx;
}

export default SnackBarProvider;
