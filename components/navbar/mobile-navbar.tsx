import { useAppContext } from '@/providers/app-context-provider';
import NAVIGATION_ITEMS from '@/utils/data/navigation-items';
import IconComponent from '@/utils/icons';
import LinkButton from '../link-button';
import TranslationMenu from '../translation-menu';

export const MobileNavbar = ({ pathname }: { pathname: string }) => {
	const { isNavOpen, setIsNavOpen } = useAppContext();
	return (
		<div
			className={`font-fira_retina text-base text-menu-text ${
				isNavOpen ? 'h-full' : ''
			}`}
		>
			<div className="flex h-16 grow items-center justify-between border-b border-br-default px-6 lg:hidden">
				<div className="flex grow justify-between">
					<div className="flex items-center">mohan-hegde</div>
					<div>
						<TranslationMenu />
					</div>
				</div>
				<button className="p-2.5" onClick={() => setIsNavOpen(!isNavOpen)}>
					<IconComponent name={isNavOpen ? 'burgerClose' : 'burger'} />
				</button>
			</div>

			{isNavOpen && (
				<div className="w-full bg-blue-bg">
					{NAVIGATION_ITEMS.map(({ key, label, href }) => (
						<LinkButton
							href={href}
							key={key}
							className="h-16 border-b border-br-default py-4"
							label={label}
							onClick={() => setIsNavOpen(false)}
							isActive={pathname === href}
						/>
					))}
				</div>
			)}
		</div>
	);
};
