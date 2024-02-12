import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className: string
}

const Footer: FC<PropsType> = ({ className }) => (
	<footer
		className={classNames(
			'w-screen p-4 min-h-12 text-center text-sm',
			className
		)}
	>
		<p>Designed and developed by Yuliia Tkachenko, 2024</p>
		<a
			className='text-main-color font-extralight text-lg'
			href='https://www.yuliia-tkachenko.dev/'
			target='_blank'
		>
			www.yuliia-tkachenko.dev
		</a>
	</footer>
)

export default Footer
