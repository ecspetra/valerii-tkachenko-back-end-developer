import { FC } from 'react'
import Title from '@/app/components/Title'

type PropsType = {
	children: string
}

const SkillsItem: FC<PropsType> = ({ children }) => (
	<Title variant='h3' className='border-b border-border-color'>
		{children}
	</Title>
)

export default SkillsItem
