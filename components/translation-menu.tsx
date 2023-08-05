import { useAppContext } from '@/providers/app-context-provider';
import messages, { isSupportedLocale } from '@/i18n';
import IconComponent from '@/utils/icons';

const TranslationMenu = () => {
	const { locale, setLocale } = useAppContext();
	return (
		<div className="relative mx-4 h-full">
			<button
				tabIndex={0}
				className="peer h-full justify-center focus-within:text-white"
				type="button"
				title="language"
			>
				<IconComponent name="translate" />
			</button>
			<div
				className="transform-all invisible absolute -right-4 origin-top scale-95 transform rounded-md border border-br-default bg-dark-bg opacity-0 duration-300 peer-focus-within:visible peer-focus-within:opacity-100"
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
