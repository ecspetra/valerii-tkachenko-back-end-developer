import { FC } from 'react'
import classNames from 'classnames'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'

type PropsType = {
	className: string
}

const Footer: FC<PropsType> = ({ className }) => (
	<footer
		className={classNames(
			'relative w-screen px-4 py-12 sm:py-16 text-center text-sm border-t border-border-color lg:border-t-0',
			className
		)}
	>
		<div className='relative z-10'>
			<p className='mb-2 font-extralight text-xs sm:text-sm'>
				Designed and developed by Yuliia Tkachenko, 2024
			</p>
			<a
				className='text-main-color font-extralight text-xl'
				href='https://www.yuliia-tkachenko.dev/'
				target='_blank'
			>
				www.yuliia-tkachenko.dev
			</a>
		</div>
	</footer>
)

export default Footer
