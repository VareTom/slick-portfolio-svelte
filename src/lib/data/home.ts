import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Tom';

export const lastName = 'Varewyck';

export const description =
	'Passionate developer specializing in web and mobile development. With extensive experience, I\'ve contributed to crafting innovative technological solutions. Explore my portfolio to see my work.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/VareTom' },
];

export const skills = getSkills('angular', 'nextjs', 'docker', 'svelte', 'nest', 'go');
