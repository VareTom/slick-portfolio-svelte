import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Louvain La Neuve - Belgium',
		logo: Assets.Unknown,
		name: '',
		organization: 'EPHEC',
		period: { from: new Date(2017, 8, 1), to: new Date(2020, 5, 1) },
		shortDescription: '',
		slug: 'ephec',
		subjects: ['C', 'Algorithm', 'Algebra', 'Javascript', 'PHP', 'Python', 'Java', 'Electronic', 'English']
	}
];

export const title = 'Education';
