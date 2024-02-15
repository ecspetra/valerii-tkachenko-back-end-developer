import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className: string
}

const Footer: FC<PropsType> = ({ className }) => (
	<footer
		className={classNames(
			'w-screen px-4 py-20 min-h-12 text-center text-sm border-t border-border-color',
			className
		)}
	>
		<p className='mb-2 font-extralight'>
			Designed and developed by Yuliia Tkachenko, 2024
		</p>
		<a
			className='text-main-color font-extralight text-xl'
			href='https://www.yuliia-tkachenko.dev/'
			target='_blank'
		>
			www.yuliia-tkachenko.dev
		</a>
	</footer>
)

export default Footer
