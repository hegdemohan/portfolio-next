'use client';

import { getFormattedMessage } from '@/i18n/i18n-provider';
import PageNotFoundSvg from '@/public/illustrations/page-not-found.svg';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="grow items-center p-10 font-fira_regular text-menu-text lg:flex lg:px-96">
			<div className="mb-8 h-96 justify-between lg:flex">
				<div className="flex flex-col justify-center gap-2">
					<p className="mb-4 text-3xl">
						{getFormattedMessage({
							id: 'error.pageNotFound',
							defaultMessage: `404 page not found`,
						})}
					</p>
					<p className="mb-4 text-xl">
						{getFormattedMessage({
							id: 'error.pageNotFoundMessage',
							defaultMessage: `Oops! You've ventured into uncharted digital territory. This page seems to have gone missing. Let's steer you back to where you belong`,
						})}
					</p>

					<p className="text-xl leading-9">
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
					<PageNotFoundSvg className="h-full w-full" />
				</div>
			</div>
		</div>
	);
}
