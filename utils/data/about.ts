// The developer data in en is used as source of truth
import en from '@/i18n/dictionary/en';
import { v4 as uuidv4 } from 'uuid';
import { AboutSection, AboutSubSection, Contacts } from '../types';

export const GITHUB_PROJECT_LINK = 'https://github.com/hegdemohan/portfolio-next';

/** The contact details of the developer */
export const CONTACTS: Contacts = {
	title: { id: 'contacts', defaultMessage: 'title' },
	sources: [
		{
			key: uuidv4(),
			icon: 'mail',
			details: 'hegdemohan94@gmail.com',
		},
		{
			key: uuidv4(),
			icon: 'call',
			details: '+49-17636366822',
		},
	],
};

// START - SubSections of  professional-info
const EXPERIENCE: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.professionalInfo.info.experience.title',
		defaultMessage: 'experience',
	},
	description: {
		id: 'dev.about.sections.professionalInfo.info.experience.description',
		defaultMessage: 'experience - description not available',
	},
	files: [
		{
			key: uuidv4(),
			title: {
				id: 'dev.about.sections.professionalInfo.info.experience.files.faro.title',
				defaultMessage: 'faro',
			},
			description: {
				id: 'dev.about.sections.professionalInfo.info.experience.files.faro.description',
				defaultMessage: 'faro-technologies - description not available',
			},
		},
		{
			key: uuidv4(),
			title: {
				id: 'dev.about.sections.professionalInfo.info.experience.files.autLay.title',
				defaultMessage: 'autLay',
			},
			description: {
				id: 'dev.about.sections.professionalInfo.info.experience.files.autLay.description',
				defaultMessage: 'autLay - description not available',
			},
		},
		{
			key: uuidv4(),
			title: {
				id: 'dev.about.sections.professionalInfo.info.experience.files.cisco.title',
				defaultMessage: 'cisco',
			},
			description: {
				id: 'dev.about.sections.professionalInfo.info.experience.files.cisco.description',
				defaultMessage: 'cisco-systems - description not available',
			},
		},
	],
};

const HARD_SKILLS: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.professionalInfo.info.hardSkills.title',
		defaultMessage: 'hard-skills',
	},
	description: {
		id: 'dev.about.sections.professionalInfo.info.hardSkills.description',
		defaultMessage: 'hard-skills - description not available',
	},
};

const SOFT_SKILLS: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.professionalInfo.info.softSkills.title',
		defaultMessage: 'soft-skills',
	},
	description: {
		id: 'dev.about.sections.professionalInfo.info.softSkills.description',
		defaultMessage: 'soft-skills - description not available',
	},
};
// END - SubSections of  professional-info

// START - SubSections of  personal-info
const BIO: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.personalInfo.info.bio.title',
		defaultMessage: 'bio',
	},
	description: {
		id: 'dev.about.sections.personalInfo.info.bio.description',
		defaultMessage: 'bio - description unavailable',
	},
};

const INTERESTS: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.personalInfo.info.interests.title',
		defaultMessage: 'interests',
	},
	description: {
		id: 'dev.about.sections.personalInfo.info.interests.description',
		defaultMessage: 'interests - description unavailable',
	},
};

const LANGUAGES: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.personalInfo.info.languages.title',
		defaultMessage: 'languages',
	},
	description: {
		id: 'dev.about.sections.personalInfo.info.languages.description',
		defaultMessage: 'languages - description unavailable',
	},
};

const EDUCATION: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.personalInfo.info.education.title',
		defaultMessage: 'education',
	},
	description: {
		id: 'dev.about.sections.personalInfo.info.education.description',
		defaultMessage: 'education - description unavailable',
	},
	files: [
		{
			key: uuidv4(),
			title: {
				id: 'dev.about.sections.personalInfo.info.education.files.universityPostgraduate.title',
				defaultMessage: 'postgraduate',
			},
			description: {
				id: 'dev.about.sections.personalInfo.info.education.files.universityPostgraduate.description',
				defaultMessage: 'university-postgraduate - description unavailable',
			},
		},
		{
			key: uuidv4(),
			title: {
				id: 'dev.about.sections.personalInfo.info.education.files.universityUndergraduate.title',
				defaultMessage: 'undergraduate',
			},
			description: {
				id: 'dev.about.sections.personalInfo.info.education.files.universityUndergraduate.description',
				defaultMessage: 'university-undergraduate - description unavailable',
			},
		},
	],
};
// END - SubSections of  personal-info

// START - SubSections of  hobbies-info
const SPORTS: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.hobbiesInfo.info.sports.title',
		defaultMessage: 'sports',
	},
	description: {
		id: 'dev.about.sections.hobbiesInfo.info.sports.description',
		defaultMessage: 'sports - description unavailable',
	},
};

const FAVORITE_MOVIES: AboutSubSection = {
	key: uuidv4(),
	title: {
		id: 'dev.about.sections.hobbiesInfo.info.favoriteMovies.title',
		defaultMessage: 'favorite-movies',
	},
	description: {
		id: 'dev.about.sections.hobbiesInfo.info.favoriteMovies.description',
		defaultMessage: 'favorite-movies - description unavailable',
	},
};

// END - SubSections of  hobbies-info

export const ABOUT_SECTIONS: AboutSection[] = [
	{
		key: uuidv4(),
		title: {
			id: 'dev.about.sections.professionalInfo.title',
			defaultMessage: 'professional-info',
		},
		icon: 'briefcase',
		subSections: [EXPERIENCE, HARD_SKILLS, SOFT_SKILLS],
	},
	{
		key: uuidv4(),
		title: {
			id: 'dev.about.sections.personalInfo.title',
			defaultMessage: 'personal-info',
		},
		icon: 'profile',
		subSections: [BIO, EDUCATION, INTERESTS, LANGUAGES],
	},
	{
		key: uuidv4(),
		title: {
			id: 'dev.about.sections.hobbiesInfo.title',
			defaultMessage: 'personal-info',
		},
		icon: 'game',
		subSections: [SPORTS, FAVORITE_MOVIES],
	},
];
