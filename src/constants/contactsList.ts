import {
	faGithub,
	faLinkedinIn,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
	faEarthAmericas,
	faPhoneVolume,
	faEnvelope,
	faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import {
	LINK_TO_GITHUB_PROFILE,
	LINK_TO_INSTAGRAM_PROFILE,
	LINK_TO_LINKEDIN_PROFILE,
	LINK_TO_TELEGRAM_PROFILE,
} from '@/constants/links'

export const CONTACTS_LIST = [
	{
		icon: faEarthAmericas,
		title: 'Address',
		value: 'Vancouver, BC, Canada',
	},
	{
		icon: faPhoneVolume,
		title: 'Phone',
		value: '+1 (778) 957 63 10',
	},
	{
		icon: faEnvelope,
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
		icon: faPaperPlane,
		title: 'Telegram',
		link: LINK_TO_TELEGRAM_PROFILE,
	},
	{
		icon: faInstagram,
		title: 'Instagram',
		link: LINK_TO_INSTAGRAM_PROFILE,
	},
]
