import Contacts from '@/components/contacts';
import { getFormattedMessage } from '@/i18n/i18n-provider';
import { I18nMessage } from '@/i18n/types';
import { useSnackbar } from '@/providers/snackbar-provider';
import { CONTACTS } from '@/utils/data/about';
import IconComponent, { iconTypes } from '@/utils/icons';
import { AboutSection, AboutSubSection, File, isKeyOf } from '@/utils/types';
import { HTMLProps, useState } from 'react';

const DefaultFileName = 'page';

export type AboutSubSectionProps = {
	/** currently active activeSection */
	activeSection: AboutSection;

	/** subsection of currently active subsection with folder and file */
	activeSubsection: {
		/** active folder */
		folder: AboutSubSection;

		/** active file */
		file: File | undefined;
	};

	/** callback on click of each subsection */
	onSubsectionClick(folder: string, file?: string): void;
};

const DesktopAboutSubSection = ({ activeSection, activeSubsection, onSubsectionClick }: AboutSubSectionProps) => {
	const { folder: activeFolder, file: activeFile } = activeSubsection;
	const { createSnackbar } = useSnackbar();

	const [isFolderCollapsed, setIsFolderCollapsed] = useState(false);

	const Heading = ({ title }: { title: JSX.Element }) => (
		<div className="flex items-center border-b border-br-default  p-2 font-fira_medium text-slate-300">
			<IconComponent name="solidArrow" className={'mx-2 rotate-90'} />
			<p>{title}</p>
		</div>
	);

	/** A reusable File component with proper styles */
	const File = ({
		fileKey,
		folderKey,
		file,
		className,
	}: {
		fileKey?: string;
		folderKey: string;
		file?: I18nMessage;
		className?: HTMLProps<HTMLElement>['className'];
	}) => (
		<button
			className={`flex w-full items-center gap-2 py-2 pl-10 pr-2 ${className} `}
			onClick={() => onSubsectionClick(folderKey, fileKey)}
		>
			<IconComponent name="react" className="w-4" />
			<p>
				{file ? getFormattedMessage(file) : DefaultFileName}
				.tsx
			</p>
		</button>
	);

	return (
		<div className="hidden lg:flex">
			<div className="w-64 border-r border-br-default font-fira_regular">
				<Heading title={getFormattedMessage(activeSection.title)} />

				<div className="border-b border-br-default">
					{activeSection.subSections.map(({ key: folderKey, title, files }) => (
						<div key={folderKey}>
							<button
								className={`flex w-full items-center gap-2 px-4 py-2 text-menu-text hover:bg-hover-bg hover:text-slate-300 ${
									activeFolder.key === folderKey ? ' bg-active-bg/70 text-slate-300' : ''
								}`}
								onClick={() => {
									if (activeFolder.key === folderKey) {
										setIsFolderCollapsed(!isFolderCollapsed);
									} else {
										onSubsectionClick(folderKey);
										setIsFolderCollapsed(false);
									}
								}}
							>
								<IconComponent
									name="arrow"
									className={`${
										activeFolder.key === folderKey && !isFolderCollapsed
											? 'rotate-180'
											: 'rotate-90'
									} w-3 `}
								/>
								<IconComponent
									name={activeFolder.key === folderKey ? 'folderOpen' : 'folder'}
									className="w-5"
								/>
								<span>{getFormattedMessage(title)}</span>
							</button>
							{activeFolder.key === folderKey && !isFolderCollapsed && (
								<>
									<File
										folderKey={folderKey}
										className={`${
											activeFile === undefined ? 'bg-active-bg/30 text-slate-300' : ''
										}`}
									/>
									{files &&
										files.map(({ key, title }) => (
											<File
												key={key}
												fileKey={key}
												folderKey={folderKey}
												file={title}
												className={`${
													activeFile?.key === key ? 'bg-active-bg/30  text-slate-300' : ''
												}`}
											/>
										))}
								</>
							)}
						</div>
					))}
				</div>
				{/* Contacts */}
				<Contacts
					onClick={(contact) => {
						navigator.clipboard.writeText(contact);
						createSnackbar(
							<>
								{getFormattedMessage({
									id: 'copyMessage.copied',
									defaultMessage: 'Copied',
								})}{' '}
								{contact}{' '}
								{getFormattedMessage({
									id: 'copyMessage.toClipBoard',
									defaultMessage: 'to clipboard',
								})}
							</>
						);
					}}
				/>
			</div>
		</div>
	);
};

export default DesktopAboutSubSection;
