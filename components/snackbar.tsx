type Props = {
	/** Message to be shown in the snackbar */
	message: string | JSX.Element;
};

const Snackbar = ({ message }: Props) => {
	return (
		<div className="fixed bottom-14 left-4 z-10 m-4 flex items-center rounded-sm border border-br-active/50 bg-blue-bg px-4 py-2 text-slate-300 shadow-lg">
			<div>{message}</div>
		</div>
	);
};

export default Snackbar;
