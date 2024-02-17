import {
	faGithub,
	faLinkedinIn,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
	LINK_TO_GITHUB_PROFILE,
	LINK_TO_INSTAGRAM_PROFILE,
	LINK_TO_LINKEDIN_PROFILE,
} from '@/constants/links'

export const CONTACTS_LIST = [
	{
		title: 'Address',
		value: 'Vancouver, BC, Canada',
	},
	{
		title: 'Phone',
		value: '+1 (778) 957 63 10',
	},
	{
		title: 'Email',
		value: 'valeriitkachenko96@gmail.com',
	},
]

export const SOCIAL_LINKS_LIST = [
	{
		icon: faGithub,
		title: 'GitHub',
		link: LINK_TO_GITHUB_PROFILE,
	},
	{
		icon: faLinkedinIn,
		title: 'LinkedIn',
		link: LINK_TO_LINKEDIN_PROFILE,
	},
	{
		icon: faInstagram,
		title: 'Instagram',
		link: LINK_TO_INSTAGRAM_PROFILE,
	},
]
