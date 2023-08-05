import LinkButton from '@/components/link-button';
import TranslationMenu from '@/components/translation-menu';
import NAVIGATION_ITEMS from '@/utils/data/navigation-items';

export const DesktopNavbar = ({ pathname }: { pathname: string }) => {
	return (
		<nav className="hidden h-10 w-full border-b border-br-default font-fira_retina text-base text-menu-text lg:flex">
			<div className="max-w-[275px min-w-[275px]">
				<LinkButton
					id="developer-name"
					href="/"
					label={{
						id: 'dev.logoName',
						defaultMessage: 'mohan-hegde',
					}}
					className="min-w-[50%] border-r"
				/>
			</div>

			<div className="flex grow">
				{NAVIGATION_ITEMS.map(({ key, href, label }) => (
					<LinkButton
						key={key}
						href={href}
						label={label}
						isActive={pathname === href}
						className="border-r last:ml-auto last:border-l [&:not(:last-child)]:border-r"
					/>
				))}
			</div>
			<TranslationMenu />
		</nav>
	);
};
