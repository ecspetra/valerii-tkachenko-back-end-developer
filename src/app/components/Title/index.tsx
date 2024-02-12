import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	children: string
	className?: string
	variant?: 'h1' | 'h2' | 'h3' | 'h3-vertical-label' | 'h3-horizontal-label'
}

const Title: FC<PropsType> = ({ children, className, variant = 'h1' }) => {
	const getVariant = () => {
		switch (variant) {
			case 'h1':
				return (
					<h1
						className={classNames(
							'text-[160px] leading-none font-semibold text-white mb-16',
							className
						)}
					>
						{children}
					</h1>
				)
			case 'h2':
				return (
					<h2
						className={classNames(
							'text-8xl font-medium mb-20',
							className
						)}
					>
						{children}
					</h2>
				)
			case 'h3':
				return (
					<h3
						className={classNames(
							'text-3xl font-normal',
							className
						)}
					>
						{children}
					</h3>
				)
			case 'h3-vertical-label':
				return (
					<h3
						className={classNames(
							'text-3xl font-semibold bg-white w-fit text-background-color px-1 py-2 [writing-mode:vertical-lr] rotate-180 absolute',
							className
						)}
					>
						{children}
					</h3>
				)
			case 'h3-horizontal-label':
				return (
					<h3
						className={classNames(
							'text-3xl font-semibold bg-white w-fit text-background-color px-2 py-1 absolute',
							className
						)}
					>
						{children}
					</h3>
				)
		}
	}
	return getVariant()
}

export default Title
