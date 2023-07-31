import { getFormattedMessage } from '@/i18n/i18n-provider';
import { I18nMessage } from '@/i18n/types';
import IconComponent from '@/utils/icons';
import { PropsWithChildren, useState } from 'react';

type Props = {
	/** a unique key for the accordion */
	id: string;

	/** The key of active accordion which is currently expanded */
	active: string;

	/** title of the accordion */
	title: I18nMessage;

	/** A callback on accordion heading clicked */
	onClick?(key: string): void;
};

const Accordion = ({
	id,
	active,
	title,
	onClick,
	children,
}: PropsWithChildren<Props>) => {
	const [isExpanded, setIsExpanded] = useState(true);
	return (
		<div
			key={id}
			className={`flex w-full flex-col border-l border-r border-br-default ${
				active === id && isExpanded ? 'grow overflow-auto' : ''
			}`}
		>
			<button
				className={`flex w-full items-center justify-between border-b border-br-default p-2 ${
					active === id && isExpanded ? 'bg-active-bg text-slate-300' : ''
				}`}
				onClick={() => {
					if (active !== id) {
						setIsExpanded(true);
						onClick?.(id);
					} else {
						setIsExpanded(!isExpanded);
					}
				}}
			>
				{getFormattedMessage(title)}
				<IconComponent
					name="arrow"
					className={`${
						active === id && isExpanded ? 'rotate-180' : ''
					} flex h-3 w-3 shrink-0 items-center `}
				/>
			</button>
			<div
				id="accordion-body"
				className={`overflow-auto border-b border-br-default ${
					isExpanded && active === id ? 'flex grow' : 'hidden'
				} `}
			>
				<div className="p-2">{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
