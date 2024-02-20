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
			'relative duration-300 pt-4 pl-4 pr-4 pb-2 lg:p-2 2xl:p-4 w-full md:w-auto text-background-color md:text-white group border-b border-transparent hover:border-b-border-color',
			{
				'!text-main-color border-b-border-color':
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
				'w-full px-4 py-2 2xl:p-4 fixed top-0 flex justify-between items-center z-50 text-white bg-background-color lg:bg-transparent',
				className
			)}
		>
			<a
				href={LINK_TO_TOP}
				className='font-normal text-base 2xl:text-xl !leading-none duration-300 hover:text-main-color'
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
					className='hidden-menu px-4 py-12 md:px-0 md:py-0 flex justify-start md:justify-end flex-col md:flex-row items-start md:items-center uppercase font-semibold text-lg md:text-xs leading-none bg-white md:bg-transparent tracking-[2px] duration-1000 h-screen md:!w-auto md:h-fit fixed -top-full left-0 md:static'
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
