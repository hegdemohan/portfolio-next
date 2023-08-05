'use client';
import Link from 'next/link';
import ErrorSvg from '@/public/illustrations/error.svg';
import { getFormattedMessage } from '@/i18n/i18n-provider';

export default function Error({ error }: { error: Error }) {
	return (
		<div className="grow items-center p-10 font-fira_regular text-menu-text lg:flex lg:px-96">
			<div className="mb-8 h-96 justify-between lg:flex">
				<div className="flex flex-col justify-center gap-2">
					<p className="font-fira_semibold text-2xl">
						{getFormattedMessage({
							id: 'error.somethingWrong',
							defaultMessage: 'something went wrong!',
						})}
					</p>
					<p className="text-xl lg:mb-20">error: {error.message}</p>

					<p className="text-xl">
						{getFormattedMessage({
							id: 'error.backMessage1',
							defaultMessage: 'kindly click the',
						})}{' '}
						<Link
							href={'/'}
							className="w-fit rounded-lg border border-br-active p-2 hover:bg-white/20 hover:text-white"
						>
							_
							{getFormattedMessage({
								id: 'error.back',
								defaultMessage: 'back',
							})}
						</Link>{' '}
						{getFormattedMessage({
							id: 'error.backMessage2',
							defaultMessage: 'button to navigate back to the home screen.',
						})}
					</p>
				</div>
				<div>
					<ErrorSvg className="h-full w-full" />
				</div>
			</div>
		</div>
	);
}
