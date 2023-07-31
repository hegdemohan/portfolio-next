import { getFormattedMessage } from '@/i18n/i18n-provider';
import { I18nMessage, isI18nMessage } from '@/i18n/types';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, HTMLProps } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
	LinkProps & {
		/** Label to display in the link */
		label: I18nMessage | JSX.Element;

		/** ID of the link */
		id?: string;

		/** Additional styles */
		className?: HTMLProps<HTMLElement>['className'];

		/** if true, applies proper styling */
		isActive?: boolean;
	};

const LinkButton = ({ label, className, isActive, ...rest }: Props) => {
	return (
		<Link
			{...rest}
			className={`flex h-full flex-shrink-0 items-center border-br-default px-6 hover:bg-hover-bg hover:text-slate-100 ${className} ${
				isActive ? 'border-b-2 border-b-br-active text-white' : ''
			}`}
		>
			{isI18nMessage(label) ? <>_{getFormattedMessage(label)}</> : label}
		</Link>
	);
};

export default LinkButton;
