import { useAppContext } from '@/providers/app-context-provider';
import messages, { isSupportedLocale } from '@/i18n';
import IconComponent from '@/utils/icons';
import { useState } from 'react';

const TranslationMenu = () => {
	const { locale, setLocale } = useAppContext();
	const [isTranslationMenuOpen, setIsTranslationMenuOpen] = useState(false);
	return (
		<div className="relative mx-4 h-full">
			<button
				className={`h-full justify-center ${isTranslationMenuOpen ? 'text-white' : ''}`}
				type="button"
				title="language"
				onClick={() => setIsTranslationMenuOpen(!isTranslationMenuOpen)}
			>
				<IconComponent name="translate" />
			</button>
			<div
				className={`transform-all  absolute -right-4 origin-top scale-95 transform rounded-md border border-br-default bg-dark-bg duration-300 ${
					isTranslationMenuOpen ? 'block' : 'hidden'
				}`}
				role="menu"
			>
				<div className="flex flex-col">
					{Object.keys(messages).map((lang) => (
						<button
							className={`p-4 text-left text-base leading-5 text-menu-text hover:bg-hover-bg hover:text-white ${
								locale === lang ? 'bg-active-bg' : ''
							}`}
							role="menuitem"
							key={lang}
							onClick={() => {
								if (isSupportedLocale(lang)) setLocale(lang);
							}}
						>
							{lang.toUpperCase()}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default TranslationMenu;
