'use client';

import CommentedText from '@/components/commented-text';
import Gist from '@/components/gist';
import { getFormattedMessage } from '@/i18n/i18n-provider';
import { ABOUT_SECTIONS } from '@/utils/data/about';
import { findIndexByKeyValue } from '@/utils/helpers';
import IconComponent, { iconTypes } from '@/utils/icons';
import { AboutSubSection, File, isKeyOf } from '@/utils/types';
import { useCallback, useEffect, useState } from 'react';
import DesktopAboutSubSection from './desktop-about-sub-section';
import MobileAboutSubSection from './mobile-about-sub-section';

const About = () => {
	const [activeSection, setActiveSection] = useState(ABOUT_SECTIONS[0]);
	const [activeSubsection, setActiveSubsection] = useState<{
		folder: AboutSubSection;
		file: File | undefined;
	}>({
		folder: activeSection.subSections[0],
		file: undefined,
	});

	useEffect(() => {
		setActiveSubsection({
			folder: activeSection.subSections[0],
			file: undefined,
		});
	}, [activeSection]);

	/** Function to set the active section when the section changes */
	const onSectionChange = useCallback((sectionKey: string) => {
		const index = findIndexByKeyValue(ABOUT_SECTIONS, 'key', sectionKey);
		setActiveSection(ABOUT_SECTIONS[index]);
	}, []);

	const onSubsectionChange = useCallback(
		(folderKey: string, fileKey?: string) => {
			const folderIndex = findIndexByKeyValue(activeSection.subSections, 'key', folderKey);
			const activeSubSection = activeSection.subSections[folderIndex];
			if (activeSubSection.files && fileKey) {
				const fileIndex = findIndexByKeyValue(activeSubSection.files, 'key', fileKey);

				console.log(activeSubSection.files);
				const file = activeSubSection.files[fileIndex];

				setActiveSubsection({
					folder: activeSection.subSections[folderIndex],
					file,
				});
			} else {
				setActiveSubsection({
					folder: activeSection.subSections[folderIndex],
					file: undefined,
				});
			}
		},
		[activeSection.subSections]
	);

	return (
		<section className="flex grow flex-col overflow-auto  text-menu-text lg:flex-row">
			{/* Menu buttons to show different sections */}
			<div className="border-br-default lg:border-r">
				<div className="flex flex-row lg:w-20 lg:flex-col">
					{ABOUT_SECTIONS.map(({ key: sectionKey, icon }) => {
						const filledIcon = `filled-${icon}`;
						// Make sure the icons are present
						if (!isKeyOf(icon, iconTypes) || !isKeyOf(filledIcon, iconTypes)) {
							throw Error(
								`The icon ${icon} does not exist in the defined iconTypes. Please specify an icon from @/utils/icons.tsx`
							);
						}
						return (
							<button
								className={`flex items-center justify-center py-4 hover:bg-hover-bg hover:text-slate-300  max-lg:flex-1 ${
									activeSection.key === sectionKey
										? 'text-slate-300 max-lg:border-b-2 max-lg:border-b-br-active lg:border-l-2 lg:border-l-br-active '
										: ''
								}`}
								key={sectionKey}
								onClick={() => onSectionChange(sectionKey)}
							>
								<IconComponent name={activeSection.key === sectionKey ? filledIcon : icon} />
							</button>
						);
					})}
				</div>
			</div>
			{/* Content for each sub section */}
			<DesktopAboutSubSection
				activeSection={activeSection}
				activeSubsection={activeSubsection}
				onSubsectionClick={onSubsectionChange}
			/>
			<MobileAboutSubSection
				activeSection={activeSection}
				activeSubsection={activeSubsection}
				onSubsectionClick={(key) => onSubsectionChange(key)}
			/>
			{/* Description for each sub-section */}
			<div className="hidden grow lg:flex">
				<div className="flex-1 grow overflow-hidden border-r border-br-default">
					<div className="border-br border-b border-br-default font-fira_regular text-menu-text">
						<div className="flex w-fit gap-4 break-keep border-r border-br-default px-3 py-2">
							{getFormattedMessage(activeSection.title)}
							<IconComponent name="close" className="w-4" />
						</div>
					</div>
					<CommentedText
						text={
							activeSubsection.file !== undefined
								? activeSubsection.file.description
								: activeSubsection.folder.description
						}
					/>
				</div>
				<div className="flex flex-1 flex-col font-fira_regular">
					<div className="border-b border-br-default py-5" />

					<div id="code-snippet-content" className="flex h-full overflow-hidden">
						<div id="code-snippets" className="flex w-full flex-col overflow-auto px-6  py-4 ">
							<div className="mb-4 text-menu-text">
								{getFormattedMessage({
									id: 'codeSnippetHeading',
									defaultMessage: '// Code snippet showcase:',
								})}
							</div>
							<Gist />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
