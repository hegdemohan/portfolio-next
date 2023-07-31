import Accordion from '@/components/accordion';
import CommentedText from '@/components/commented-text';
import Gist from '@/components/gist';
import { getFormattedMessage } from '@/i18n/i18n-provider';
import { AboutSubSectionProps } from './desktop-about-sub-section';

const MobileAboutSubSection = ({ activeSection, activeSubsection, onSubsectionClick }: AboutSubSectionProps) => {
	return (
		<div className="flex grow overflow-auto font-fira_regular text-sm text-menu-text lg:hidden">
			{/* Sub sections of the given section */}
			<div className="m-1 flex w-full flex-col rounded-md border border-br-default p-1">
				<h2 className="border-b border-br-default bg-hover-bg p-2 text-slate-300">
					{getFormattedMessage(activeSection.title)}
				</h2>
				{activeSection.subSections.map(({ title, description, key, files }) => (
					<Accordion
						key={key}
						id={key}
						active={activeSubsection.folder.key}
						title={title}
						onClick={onSubsectionClick}
					>
						<CommentedText text={description} /> <br />
						<div className="border-b border-br-default py-2">
							{files &&
								files.map((file, key) => (
									<div key={key}>
										<br />
										<div className="flex flex-col gap-2">
											<span className="font-fira_semibold">
												{'// '}
												{getFormattedMessage(file.title)}{' '}
											</span>
											<CommentedText text={file.description} /> <br />
											<br />
										</div>
									</div>
								))}
						</div>
						<div>
							<br />
							<p>
								{getFormattedMessage({
									id: 'codeSnippetHeading',
									defaultMessage: '// Code snippet showcase:',
								})}
							</p>
							<br />
							<Gist />
						</div>
					</Accordion>
				))}
			</div>
		</div>
	);
};

export default MobileAboutSubSection;
