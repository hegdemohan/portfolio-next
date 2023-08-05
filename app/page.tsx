'use client';

import SnakeGame from '@/components/snake-game/snake-game';
import { getFormattedMessage } from '@/i18n/i18n-provider';
import { useAppContext } from '@/providers/app-context-provider';
import { GITHUB_PROJECT_LINK } from '@/utils/data/about';

export default function Home() {
	const { isNavOpen } = useAppContext();
	return (
		<div className="flex grow">
			{/* Gradients */}
			<div
				className={`pointer-events-none fixed bottom-1/4 right-[5%] z-10 h-96 w-96 rotate-12 rounded-full bg-gradient-to-r from-[#4d5bce] to-[#4c00ff00] opacity-70 blur-3xl ${
					isNavOpen ? 'hidden' : 'block'
				}`}
			/>
			<div
				className={`pointer-events-none fixed z-10 h-96 w-96 rotate-12 rounded-full bg-gradient-to-r from-[#43d9ad] to-[#4c00ff00] opacity-60 blur-3xl lg:right-[20%] lg:top-[20%] ${
					isNavOpen ? 'hidden' : 'block'
				}`}
			/>

			<section className="flex grow items-center pl-8 pr-2 font-fira_regular md:px-10 xl:px-40 2xl:px-80">
				<div className="flex flex-1 flex-col gap-4 text-home-text">
					<span className="font-fira_retina text-xl leading-10 ">
						{getFormattedMessage({
							id: 'welcome.title',
							defaultMessage: 'Hi all, I am',
						})}
					</span>
					<h1 className="text-5xl">
						{getFormattedMessage({
							id: 'dev.name',
							defaultMessage: 'Mohan Hegde',
						})}
					</h1>
					<h2 className="text-xl leading-10 text-neon-green lg:text-purple">
						{'>'}{' '}
						{getFormattedMessage({
							id: 'dev.role',
							defaultMessage: 'Front-end developer',
						})}
					</h2>

					<div className="mb-16 flex flex-col gap-2">
						<span className="hidden text-sm text-menu-text lg:flex">
							{getFormattedMessage({
								id: 'welcome.info.playGameToContinue',
								defaultMessage: '// complete the game to continue',
							})}
						</span>
						<span className="text-sm text-menu-text">
							{getFormattedMessage({
								id: 'welcome.info.findProjectHere',
								defaultMessage: '// you can also see it on my Github page: ',
							})}
						</span>
						<div className="font-fira_medium">
							<p>
								<span className=" text-purple">{'const '}</span>
								<span className="text-neon-green">{'githubLink'}</span>
								<span>{' = '}</span>
							</p>
							<a className="break-all text-string" href={GITHUB_PROJECT_LINK}>
								{GITHUB_PROJECT_LINK}
							</a>
						</div>
					</div>
				</div>
				<div className="hidden flex-1 lg:flex">
					<SnakeGame />
				</div>
			</section>
		</div>
	);
}
