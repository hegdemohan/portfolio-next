import { usePathname } from 'next/navigation';
import { DesktopNavbar } from './navbar/desktop-navbar';
import { MobileNavbar } from './navbar/mobile-navbar';

const Header = () => {
	const pathname = usePathname();
	return (
		<section id="navbar" className="w-full">
			<DesktopNavbar pathname={pathname} />
			<MobileNavbar pathname={pathname} />
		</section>
	);
};

export default Header;
