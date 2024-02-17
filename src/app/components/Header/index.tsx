import { FC } from 'react'
import classNames from 'classnames'
import { HEADER_ANCHORS, LINK_TO_TOP } from '@/constants/anchors'
import useHeaderAnimation from '@/hooks/useHeaderAnimation'
import useToggleHeaderMenu from '@/hooks/useToggleHeaderMenu'
import CloseButton from '@/app/components/Button/CloseButton'

type PropsType = {
	className?: string
}

const Header: FC<PropsType> = ({ className }) => {
	const { activeAnchor, isScrolled } = useHeaderAnimation()
	const { isMenuHidden, toggleIsMenuHidden } = useToggleHeaderMenu()

	const linkClassNames = (anchor: string) =>
		classNames(
			'relative duration-300 p-4 group border-b border-transparent hover:border-b-border-color',
			{
				'text-main-color border-b-border-color':
					anchor.toLowerCase() === activeAnchor && isScrolled,
			}
		)

	const linkBorderClassNames = (anchor: string) =>
		classNames(
			'duration-300 w-0 h-0.5 absolute bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 group-hover:w-full',
			{
				'!w-full md:!w-4':
					anchor.toLowerCase() === activeAnchor && isScrolled,
			}
		)

	return (
		<header
			className={classNames(
				'w-full p-8 fixed top-0 flex justify-between items-center z-50 text-white',
				className
			)}
		>
			<a
				href={LINK_TO_TOP}
				className='font-normal text-xl leading-none duration-300 hover:text-main-color'
			>
				Valerii<span className='block ml-2'>Tkachenko</span>
			</a>
			<nav className='relative'>
				<CloseButton
					isMenuHidden={isMenuHidden}
					toggleIsMenuHidden={toggleIsMenuHidden}
				/>
				<ul
					id='header-menu'
					className='hidden-menu flex justify-end flex-col md:flex-row items-start md:items-center uppercase font-extrabold text-xs leading-none tracking-[2px] duration-1000 h-screen md:!w-auto md:h-fit fixed top-0 md:static'
				>
					{HEADER_ANCHORS.map(([key, value]) => (
						<li key={key} className='w-full flex'>
							<a
								href={value}
								className={linkClassNames(key)}
								onClick={toggleIsMenuHidden}
							>
								<span className={linkBorderClassNames(key)} />
								{key}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
