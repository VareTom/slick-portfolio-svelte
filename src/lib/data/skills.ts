import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
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
		slug: 'nest',
		color: '#ED2945',
		description: 'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
		logo: Assets.NestJs,
		name: 'Nest',
		category: 'framework'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'The web development framework for building the future',
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
		slug: 'docker',
		color: '#1D63ED',
		description: 'Docker is a platform designed to help developers build, share, and run container applications.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'vue',
		color: '#42B883',
		description: 'An approachable, performant and versatile framework for building web user interfaces.',
		logo: Assets.VueJs,
		name: 'VueJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'express',
		color: 'green',
		description: 'Fast, unopinionated, minimalist web framework for Node.js',
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
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
		slug: 'symfony',
		color: '#42B883',
		description: 'Symfony is a set of reusable PHP components and a PHP framework to build web applications, APIs, microservices and web services.',
		logo: Assets.Symfony,
		name: 'Symfony',
		category: 'framework'
	}),
	defineSkill({
		slug: 'aws',
		color: '#EC7211',
		description: 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'azure',
		color: '#0067B8',
		description: '',
		logo: Assets.AzureDevOps,
		name: 'Azure DevOps',
		category: 'devops'
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
			console.log(item.category);
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
