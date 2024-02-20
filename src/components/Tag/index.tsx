import { FC } from 'react'

type PropsType = {
	tag: string
}

const Tag: FC<PropsType> = ({ tag }) => {
	return (
		<span className='w-fit inline-flex justify-center items-center text-main-color font-normal h-8 px-3 mr-2 mb-2 break-normal border border-border-color leading-none'>
			{tag}
		</span>
	)
}

export default Tag
