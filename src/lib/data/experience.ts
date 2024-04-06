import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'rush',
		company: 'Rush',
		description: 'Turning Ideas into Actionable Solutions at Lightning Speed.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Nivelles & Home - Belgium',
		period: { from: new Date(2024, 4,6), to: new Date() },
		skills: getSkills( 'sass', 'html', 'nextjs', 'nest', 'docker'),
		name: 'Software engineer',
		color: '#EF4444',
		links: [
			{
				to: 'https://www.rush.be/',
				label: 'Rush website',
				newTab: true
			}
		],
		logo: Assets.Rush,
		shortDescription: 'Design. Build. Ship.'
	},
	{
		slug: 'idweaver',
		company: 'Idweaver',
		description: 'One partner for all your digital needs. Our approach is based on a digital strategy specifically designed for each project, taking into account the particularities of your company, products and customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Waterloo & Home - Belgium',
		period: { from: new Date(2023, 2,1), to: new Date(2024, 4, 5) },
		skills: getSkills( 'sass', 'html', 'angular', 'vue', 'aws', 'azure'),
		name: 'Front end developer',
		color: 'midnightblue',
		links: [
			{
				to: 'https://www.idweaver.com/',
				label: 'Idweaver website'
			},
			{
				to: 'https://www.eneon.agency/',
				label: 'Eneon group website'
			}
		],
		logo: Assets.Idweaver,
		shortDescription: 'Your brand new digital future'
	},
	{
		slug: 'underside',
		company: 'Underside',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Gosselies & Home - Belgium',
		period: { from: new Date(2021,6,1), to: new Date(2023, 1, 28) },
		skills: getSkills( 'sass', 'html', 'angular', 'express', 'python'),
		name: 'Full stack developer',
		color: '#4963A4',
		links: [
			{
				to: 'https://www.underside.be/',
				label: 'Underside website'
			}
		],
		logo: Assets.Underside,
		shortDescription: 'We support companies in their digital life.'
	},
	{
		slug: 'inforius',
		company: 'Inforius',
		description: 'Inforius is THE partner for the private and public sectors thanks to its technological, adapted, innovative and robust IT solutions.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Gembloux - Belgium',
		period: { from: new Date(2020, 7, 3), to: new Date(2021,6,1) },
		skills: getSkills( 'sass', 'html', 'angular', 'azure'),
		name: 'Junior front end developer',
		color: 'orange',
		links: [{
			to: 'https://www.inforius.be/',
			label: 'Inforius website'
		}],
		logo: Assets.Inforius,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'itschool',
		company: 'IT-School',
		description: 'IT.SCHOOL frees the administrative and financial management of the school from all time-consuming tasks, ensures full transparency of operations for both the manager and parents and allows students to move in a «cashless» universe.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Louvain La Neuve - Belgium',
		period: { from: new Date(2020, 1, 1), to: new Date(2020,4,1) },
		skills: getSkills('symfony'),
		name: 'Internship - Full stack developer',
		color: 'violet',
		links: [{
			to: 'https://www.it-school.be/',
			label: 'IT-School website'
		}],
		logo: Assets.ItSchool,
		shortDescription: 'Administrative and financial management of schools'
	}
];

export const title = 'Experience';
