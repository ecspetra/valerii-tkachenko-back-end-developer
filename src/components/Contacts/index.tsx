import { FC } from 'react'
import Button from '@/app/components/Button'
import { SOCIAL_LINKS_LIST } from '@/constants/contactsList'
import classNames from 'classnames'

type PropsType = {
	isLeftAligned?: boolean
}

const Contacts: FC<PropsType> = ({ isLeftAligned = false }) => {
	return (
		<div
			className={classNames(
				'flex items-start gap-16',
				isLeftAligned ? 'justify-start mb-8' : 'justify-center'
			)}
		>
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
