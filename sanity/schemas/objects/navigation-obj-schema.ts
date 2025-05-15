import { defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

const navObject = defineType({
	title: 'Navigation',
	name: 'navObject',
	description: 'Navigation. Leave blank to use default navigation.',
	icon: LinkIcon,
	type: 'object',
	options: {
		collapsible: true,
	},
	initialValue: {
		header: {
			_type: 'reference',
			_ref: 'b7ce86fc-58b2-4687-b302-2919cd06c6c3',
		},
		footer: {
			_type: 'reference',
			_ref: '4f268c09-2dbd-4daf-92ae-b6302c6e7d56',
		},
	},
	fields: [
		{
			name: 'header',
			title: 'Header',
			type: 'reference',
			to: [{ type: 'navigation' }],
		},
		{
			name: 'footer',
			title: 'Footer',
			type: 'reference',
			to: [{ type: 'navigation' }],
		},
	],
})

export default navObject
