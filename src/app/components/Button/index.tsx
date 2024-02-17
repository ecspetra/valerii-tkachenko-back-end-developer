import { FC } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PropsType = {
	children?: string
	className?: string
	link?: string
	icon?: IconProp
	context?: 'basic' | 'social-link'
}
const Button: FC<PropsType> = ({
	children,
	className,
	link,
	icon,
	context = 'basic',
}) => {
	const valeriiTkachenkoCVLink =
		'/assets/cv/CV_Yuliia_Tkachenko_Front-End-Developer.pdf'
	const basicButtonClassNames = classNames(
		'block w-fit border-b-4 border-r-4 border-l-4 border-t-4 border-b-main-color border-r-main-color border-t-transparent border-l-transparent text-lg uppercase tracking-[4px] font-semibold relative px-16 py-5 bg-transparent text-main-text-color cursor-pointer duration-300 hover:text-background-color hover:border-background-color after:absolute after:top-[calc(50%+16px)] after:left-[calc(50%+16px)] after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:bg-main-color/10 after:duration-300 hover:after:top-1/2 hover:after:left-1/2 hover:after:bg-main-color after:-z-10 after:pointer-events-none before:absolute before:top-[calc(50%-16px)] before:left-[calc(50%-16px)] before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:bg-fuchsia-300/20 before:duration-300 hover:before:top-1/2 hover:before:left-1/2 hover:before:bg-main-color/30 before:-z-10 before:pointer-events-none hover:before:w-[calc(100%+30px)] hover:before:h-[calc(100%+30px)]',
		className
	)
	const socialLinkButtonClassNames = classNames(
		'flex justify-center items-center border-4 border-main-color text-2xl uppercase relative w-14 h-14 bg-transparent text-main-color cursor-pointer duration-300 hover:text-background-color hover:bg-main-color hover:border-background-color before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:transparent before:duration-300 hover:before:top-1/2 hover:before:left-1/2 hover:before:bg-main-color/30 before:-z-10 before:pointer-events-none hover:before:w-[calc(100%+30px)] hover:before:h-[calc(100%+30px)]',
		className
	)

	return context === 'basic' ? (
		<a
			href={valeriiTkachenkoCVLink}
			target='_blank'
			rel='noopener noreferrer'
			download={valeriiTkachenkoCVLink}
			className={basicButtonClassNames}
		>
			{children}
		</a>
	) : (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className={socialLinkButtonClassNames}
		>
			{icon && (
				<FontAwesomeIcon
					className={`${children && 'ml-2'} relative z-20`}
					icon={icon}
				/>
			)}
		</a>
	)
}

export default Button
