import { getFormattedMessage } from '@/i18n/i18n-provider';
import { CONTACTS } from '@/utils/data/about';
import IconComponent from '@/utils/icons';
import React from 'react';
type Props = {
	onClick?(contact: string): void;
};
const Contacts = ({ onClick }: Props) => {
	return (
		<div className="w-full border-b border-br-default lg:border-none">
			<div className="flex items-center border-b border-br-default  bg-active-bg p-2 font-fira_medium text-slate-300 lg:bg-transparent">
				<IconComponent name="solidArrow" className={'mx-2 rotate-90'} />
				<p>{getFormattedMessage(CONTACTS.title)}</p>
			</div>
			{CONTACTS.sources.map(({ key, icon, details }) => (
				<button
					key={key}
					className="group flex w-full items-center justify-between px-2 py-2 hover:text-slate-300"
					onClick={() => onClick?.(details)}
					title={`Copy ${details}`}
				>
					<div className="flex items-center gap-2 ">
						<IconComponent name={icon} className="w-4" />
						<p>{details}</p>
					</div>
					<IconComponent
						name="copy"
						className="mt-1 hidden w-4 group-hover:flex"
					/>
				</button>
			))}
		</div>
	);
};

export default Contacts;
