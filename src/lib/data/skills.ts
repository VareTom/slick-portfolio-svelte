import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'The web development framework for building the future.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'grey',
		description: 'Used by some of the world\'s largest companies, Next.js enables you to create high-quality web applications with the power of React components.',
		logo: Assets.NextJs,
		name: 'NextJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nest',
		color: '#ED2945',
		description: 'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.',
		logo: Assets.NestJs,
		name: 'NestJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'cyan',
		description: 'React Native lets you build mobile apps using only JavaScript and React.',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'framework'
	}),
	defineSkill({
		slug: 'ionic',
		color: '#3880FF',
		description: 'Ionic is an open source mobile UI toolkit for building modern, high quality cross-platform mobile apps.',
		logo: Assets.Ionic,
		name: 'Ionic',
		category: 'framework'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: 'Python is a programming language that lets you work more quickly and integrate your systems more effectively.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'docker',
		color: '#1D63ED',
		description: 'Docker is a platform designed to help developers build, share, and run container applications.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'azure',
		color: '#0067B8',
		description: 'Azure is a cloud computing platform and service created by Microsoft.',
		logo: Assets.AzureDevOps,
		name: 'Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'redis',
		color: '#DC382D',
		description: 'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'prisma',
		color: '#2D3748',
		description: 'Prisma is a next-generation ORM for Node.js and TypeScript.',
		logo: Assets.Prisma,
		name: 'Prisma ORM',
		category: 'orm'
	}),
	defineSkill({
		slug: 'graphql',
		color: '#E10098',
		description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
		logo: Assets.GraphQL,
		name: 'GraphQL',
		category: 'library'
	}),
	defineSkill({
		slug: 'trpc',
		color: '#2596BE',
		description: 'tRPC allows you to easily build and consume fully typesafe APIs without schemas or code generation.',
		logo: Assets.TRPC,
		name: 'tRPC',
		category: 'library'
	}),
	defineSkill({
		slug: 'vitest',
		color: '#6E9F18',
		description: 'Vitest is a blazing fast unit test framework powered by Vite.',
		logo: Assets.Vitest,
		name: 'Vitest',
		category: 'test'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
