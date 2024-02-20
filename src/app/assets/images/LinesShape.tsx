import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}

const LinesShape: FC<PropsType> = ({ className }) => (
	<svg
		className={classNames('absolute -z-10', className)}
		width='200'
		height='24'
		viewBox='0 0 200 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect width='100' height='4' rx='0.5' fill={`rgb(var(--main-color))`} />
		<rect
			width='100'
			height='4'
			rx='0.5'
			fill={`rgb(var(--main-color))`}
			transform='matrix(1 0 0 -1 40 24)'
		/>
	</svg>
)

export default LinesShape
