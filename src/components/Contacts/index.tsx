import Button from '@/app/components/Button'
import { SOCIAL_LINKS_LIST } from '@/constants/contactsList'

const Contacts = () => {
	return (
		<div className='flex items-start gap-8 sm:gap-16 justify-center relative z-20'>
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
