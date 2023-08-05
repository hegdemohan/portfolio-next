import { Project, Tech } from '../types';

import { v4 as uuidv4 } from 'uuid';

export const TECHS: Tech[] = [
	{
		key: uuidv4(),
		icon: 'html',
		tech: 'HTML',
	},
	{
		key: uuidv4(),
		icon: 'css',
		tech: 'CSS',
	},
	{
		key: uuidv4(),
		icon: 'tailwindCss',
		tech: 'Tailwind CSS',
	},
	{
		key: uuidv4(),
		icon: 'javaScript',
		tech: 'JavaScript',
	},
	{
		key: uuidv4(),
		icon: 'typeScript',
		tech: 'TypeScript',
	},
	{
		key: uuidv4(),
		icon: 'react',
		tech: 'React',
	},
	{
		key: uuidv4(),
		icon: 'angular',
		tech: 'Angular',
	},
	{
		key: uuidv4(),
		icon: 'android',
		tech: 'Android',
	},
	{
		key: uuidv4(),
		icon: 'python',
		tech: 'Python',
	},
	{
		key: uuidv4(),
		icon: 'docker',
		tech: 'Docker',
	},
];

export const PROJECTS: Project[] = [
	{
		key: uuidv4(),
		title: { id: 'dev.projects.1.title', defaultMessage: '_portfolio' },
		description: {
			id: 'dev.projects.1.description',
			defaultMessage: '',
		},
		tech: ['React', 'TypeScript', 'HTML', 'Tailwind CSS'],
		url: 'https://github.com/hegdemohan/portfolio-next',
	},
	{
		key: uuidv4(),
		title: { id: 'dev.projects.2.title', defaultMessage: '_jober-desk-frontend' },
		description: {
			id: 'dev.projects.2.description',
			defaultMessage: '',
		},
		tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
		url: 'https://github.com/hegdemohan/JoberDesk_frontend',
	},
	{
		key: uuidv4(),
		title: { id: 'dev.projects.3.title', defaultMessage: '_jober-desk-backend' },
		description: {
			id: 'dev.projects.3.description',
			defaultMessage: '',
		},
		tech: ['Python', 'Docker'],
		url: 'https://github.com/hegdemohan/django_mic',
	},
	{
		key: uuidv4(),
		title: { id: 'dev.projects.4.title', defaultMessage: '_docx-reader' },
		description: {
			id: 'dev.projects.4.description',
			defaultMessage: '',
		},
		tech: ['Android'],
		url: 'https://github.com/hegdemohan/TheDocxReader',
	},
	{
		key: uuidv4(),
		title: { id: 'dev.projects.5.title', defaultMessage: '_automated-learning-agreement' },
		description: {
			id: 'dev.projects.5.description',
			defaultMessage: '',
		},
		tech: ['React', 'JavaScript', 'HTML', 'CSS'],
		url: 'https://gitlab.com/hegdemohan94/ARP-Project',
	},
	{
		key: uuidv4(),
		title: { id: 'dev.projects.6.title', defaultMessage: '_wallpaper' },
		description: {
			id: 'dev.projects.6.description',
			defaultMessage: '',
		},
		tech: ['Android'],
		url: 'https://github.com/hegdemohan/WallPaper',
	},
];
