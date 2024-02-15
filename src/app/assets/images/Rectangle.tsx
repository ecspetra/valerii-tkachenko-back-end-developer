import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}

const Rectangle: FC<PropsType> = ({ className }) => {
	return (
		<svg
			className={classNames('absolute z-20 mix-blend-overlay', className)}
			width='100'
			height='100'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='100%' height='100%' fill={`rgb(var(--main-color))`} />
		</svg>
	)
}

export default Rectangle
