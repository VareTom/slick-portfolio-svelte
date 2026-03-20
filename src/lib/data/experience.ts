import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'rush-labs',
		company: 'Rush Labs',
		description: 'Mobile and web application development.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Nivelles & Home - Belgium',
		period: { from: new Date(2024, 4, 1) },
		skills: getSkills('nextjs', 'nest', 'react-native', 'trpc', 'prisma', 'vitest'),
		name: 'Full Stack Developer',
		color: '#EF4444',
		links: [
			{
				to: 'https://www.rush.be/',
				label: 'Rush website',
				newTab: true
			}
		],
		logo: Assets.Rush,
		shortDescription: 'Mobile and web application development.'
	},
	{
		slug: 'idweaver',
		company: 'IdWeaver',
		description: 'Web application development.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Waterloo & Home - Belgium',
		period: { from: new Date(2023, 2, 1), to: new Date(2024, 4, 1) },
		skills: getSkills('angular', 'nextjs', 'graphql', 'redis'),
		name: 'Angular & NextJs Developer',
		color: 'midnightblue',
		links: [
			{
				to: 'https://www.idweaver.com/',
				label: 'Idweaver website'
			}
		],
		logo: Assets.Idweaver,
		shortDescription: 'Web application development.'
	},
	{
		slug: 'underside',
		company: 'Underside',
		description: 'Mobile application and CMS development for various clients.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Gosselies & Home - Belgium',
		period: { from: new Date(2021, 5, 1), to: new Date(2023, 2, 1) },
		skills: getSkills('angular', 'ionic', 'python', 'redis'),
		name: 'Full Stack Developer',
		color: '#4963A4',
		links: [
			{
				to: 'https://www.underside.be/',
				label: 'Underside website'
			}
		],
		logo: Assets.Underside,
		shortDescription: 'Mobile application and CMS development for various clients.'
	},
	{
		slug: 'inforius',
		company: 'Inforius',
		description: 'CMS development to digitize the services of Belgian municipal institutions.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Gembloux - Belgium',
		period: { from: new Date(2020, 7, 1), to: new Date(2021, 5, 1) },
		skills: getSkills('angular', 'azure'),
		name: 'Software Developer',
		color: 'orange',
		links: [
			{
				to: 'https://www.inforius.be/',
				label: 'Inforius website'
			}
		],
		logo: Assets.Inforius,
		shortDescription: 'CMS development to digitize the services of Belgian municipal institutions.'
	},
	{
		slug: 'itschool',
		company: 'IT-School',
		description: 'Integration of new features into a web platform enabling schools to go digital.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Louvain La Neuve - Belgium',
		period: { from: new Date(2020, 1, 1), to: new Date(2020, 3, 1) },
		skills: getSkills(),
		name: 'Intern Full Stack Developer',
		color: 'violet',
		links: [
			{
				to: 'https://www.it-school.be/',
				label: 'IT-School website'
			}
		],
		logo: Assets.ItSchool,
		shortDescription: 'Integration of new features into a web platform enabling schools to go digital.'
	}
];

export const title = 'Experience';
