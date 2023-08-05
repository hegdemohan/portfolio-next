'use client';

import { getFormattedMessage } from '@/i18n/i18n-provider';
import { PROJECTS, TECHS } from '@/utils/data/projects';
import IconComponent from '@/utils/icons';
import { Tech } from '@/utils/types';
import Image from 'next/image';
import { Fragment, useState } from 'react';

// There are a total of 6 images in /public/project-images
const PROJECT_IMAGES_LENGTH = 6;
const Projects = () => {
	console.log(window.matchMedia('(min-width:1280px)').matches);
	const [isFilterOpen, setIsFilterOpen] = useState(window.matchMedia('(min-width:991px)').matches);
	const [selectedTechs, setSelectedTechs] = useState<Tech['tech'][]>([]);

	/** Handles the toggling of tech in the project filter */
	const onTechToggled = (item: Tech['tech']) => {
		setSelectedTechs((prevTechs) => {
			if (prevTechs.includes(item)) {
				// If the item already exists, remove it from the array
				return prevTechs.filter((tech) => tech !== item);
			} else {
				// If the item doesn't exist, add it to the array
				return [...prevTechs, item];
			}
		});
	};

	return (
		<div className="flex grow flex-col overflow-hidden font-fira_regular text-sm lg:grid lg:auto-cols-auto lg:grid-flow-col lg:text-base">
			<div className="w-full border-r border-br-default lg:w-64">
				<button
					className={`flex w-full items-center gap-2 bg-active-bg/50 px-6 py-4 text-slate-300 lg:flex-row-reverse lg:justify-end lg:border-b lg:border-br-default lg:bg-transparent lg:px-3 lg:py-2 ${
						isFilterOpen ? 'bg-active-bg' : ''
					}`}
					onClick={() => setIsFilterOpen(!isFilterOpen)}
				>
					<p>
						{getFormattedMessage({
							id: 'projectsFilter',
							defaultMessage: 'projects-filter',
						})}
					</p>
					<IconComponent name="solidArrow" className={`${isFilterOpen ? 'rotate-90' : ''}`} />
				</button>
				{isFilterOpen && (
					<div
						id="filters"
						className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-3 border-b border-br-default px-6 lg:block lg:border-none"
					>
						{TECHS.map(({ tech, key, icon }) => (
							<div
								key={key}
								className="grid auto-cols-max grid-flow-col  items-center gap-4 py-2 text-menu-text"
							>
								<input
									id={key}
									type="checkbox"
									className=" rounded-xl"
									onClick={() => onTechToggled(tech)}
								/>
								<label htmlFor={key} className="grid auto-cols-auto grid-flow-col  items-center gap-4">
									<IconComponent name={icon} className="col-span-1 h-5 w-5 text-menu-text/60" />
									<p>{tech}</p>
								</label>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-col overflow-hidden">
				<div
					id="applied-filters"
					className="border-br-default px-6 py-4 text-slate-300 lg:border-b lg:px-3  lg:py-2"
				>
					<p>
						{'// '}
						{getFormattedMessage({
							id: 'sections.projects',
							defaultMessage: 'projects',
						})}

						<span className="text-menu-text/80">
							{selectedTechs.length === 0 ? (
								<>{' // all;'}</>
							) : (
								<>
									{' /'}
									{selectedTechs.map((tech) => (
										<Fragment key={tech}> {tech} ;</Fragment>
									))}
								</>
							)}
						</span>
					</p>
				</div>

				<div
					id="projects"
					className=" overflow-y-scroll px-6 font-fira_semibold lg:grid lg:grid-cols-3 lg:gap-8"
				>
					{(selectedTechs.length === 0
						? PROJECTS
						: PROJECTS.filter((project) => project.tech.some((tech) => selectedTechs.includes(tech)))
					).map(({ key, title, description, tech, url }, index) => (
						<div key={key} id="project" className="my-2 flex flex-col gap-2">
							<p className="text-purple">
								{getFormattedMessage({
									id: 'project',
									defaultMessage: 'project',
								})}{' '}
								{index + 1}
								<span className="text-menu-text/60">
									{' // '}
									{getFormattedMessage(title)}
								</span>
							</p>
							<div
								id="project-card"
								className="flex grow flex-col rounded-xl border border-br-default bg-card-bg"
							>
								<div className="max-h-52 overflow-clip">
									<Image
										src={`/project-images/${index % PROJECT_IMAGES_LENGTH}.png`}
										alt="unsplash-image"
										width={100}
										height={100}
										sizes="100vw"
										className="h-auto w-auto rounded-t-xl"
									/>
								</div>
								<div className="flex grow flex-col justify-between border-t border-br-default px-2 py-4">
									<p className="mb-5 font-fira_retina text-sm text-menu-text">
										{getFormattedMessage(description)}
									</p>
									<a
										href={url}
										target="_blank"
										className="w-fit rounded-lg bg-button-bg px-4 py-2 font-fira_retina text-xs text-slate-300"
									>
										view-project
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
