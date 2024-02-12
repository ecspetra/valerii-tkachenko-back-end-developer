import Button from '@/app/components/Button'
import { SOCIAL_LINKS_LIST } from '@/constants/contactsList'

const Contacts = () => {
	return (
		<div className='flex items-start justify-center gap-16'>
			{SOCIAL_LINKS_LIST.map((item, idx) => (
				<Button
					key={idx}
					context='social-link'
					link={item.link}
					icon={item.icon}
				/>
			))}
		</div>
	)
}

export default Contacts
