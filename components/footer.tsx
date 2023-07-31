import { getFormattedMessage } from '@/i18n/i18n-provider';
import SOCIAL_MEDIA_LINKS from '@/utils/data/footer-items';
import IconComponent from '@/utils/icons';
import LinkButton from './link-button';

const Footer = () => {
	return (
		<section id="navbar" className="w-full">
			<nav className="flex h-10 w-full flex-wrap justify-between border-t border-br-default font-fira_retina text-base text-menu-text">
				<div className="flex grow overflow-auto">
					<div className="hidden h-full flex-shrink-0 items-center border-r border-br-default px-6 lg:flex">
						{getFormattedMessage({
							id: 'social.infoText',
							defaultMessage: 'find me in:',
						})}
					</div>
					{SOCIAL_MEDIA_LINKS.map(({ key, href, label, icon }) => (
						<LinkButton
							key={key}
							href={href}
							label={
								<span className="flex gap-2">
									<span className="hidden lg:flex">{label}</span>
									<IconComponent name={icon} />
								</span>
							}
							className="last:ml-auto last:border-l [&:not(:last-child)]:border-r"
							target="_blank"
						/>
					))}
				</div>
			</nav>
		</section>
	);
};

export default Footer;
