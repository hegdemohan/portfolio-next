import { getFormattedMessage } from '@/i18n/i18n-provider';
import { CREDIT_LINKS, GITHUB, SOCIAL_MEDIA_LINKS } from '@/utils/data/footer-items';
import IconComponent from '@/utils/icons';
import LinkButton from './link-button';

const Footer = () => {
	return (
		<section id="navbar" className="w-full">
			<nav className="flex h-10 w-full flex-wrap justify-between border-t border-br-default font-fira_retina text-base text-menu-text">
				<div className="flex grow justify-between overflow-auto">
					<div className="flex grow">
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
									<span className="flex items-center gap-2">
										<span className="hidden lg:flex">{label}</span>
										<IconComponent name={icon} className="h-5 w-5" />
									</span>
								}
								className="border-r"
								target="_blank"
							/>
						))}
					</div>
					<div className="flex grow">
						<div className="hidden h-full flex-shrink-0 items-center border-x border-br-default px-6 lg:flex">
							{getFormattedMessage({
								id: 'social.infoText',
								defaultMessage: 'credits',
							})}
						</div>
						{CREDIT_LINKS.map(({ key, href, label, icon }, index) => (
							<LinkButton
								key={key}
								href={href}
								label={
									<span className="flex items-center gap-2">
										<span className="hidden lg:flex">{label}</span>
										<IconComponent name={icon} className="h-5 w-5" />
									</span>
								}
								className={` border-r ${index === 0 ? 'border-l lg:border-l-0' : ''}`}
								target="_blank"
							/>
						))}
					</div>
					<LinkButton
						href={GITHUB.href}
						label={
							<span className="flex gap-2">
								<span className="hidden lg:flex">{GITHUB.label}</span>
								<IconComponent name={GITHUB.icon} className="h-5 w-5" />
							</span>
						}
						className="md:border-l"
						target="_blank"
					/>
				</div>
			</nav>
		</section>
	);
};

export default Footer;
