import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}

const Header: FC<PropsType> = ({ className }) => {
	return (
		<header
			className={classNames(
				'w-full p-8 fixed top-0 flex justify-between items-center',
				className
			)}
		>
			<a>Valerii Tkachenko</a>
			<ul className='flex justify-end items-center gap-8'>
				<li>
					<a>Summary</a>
				</li>
				<li>
					<a>Experience</a>
				</li>
				<li>
					<a>Education</a>
				</li>
				<li>
					<a>CV</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
