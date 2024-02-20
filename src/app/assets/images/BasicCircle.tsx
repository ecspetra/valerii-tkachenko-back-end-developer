import { FC } from 'react'
import classNames from 'classnames'

interface PropsType {
	className?: string
	isDarkColor?: boolean
}

const BasicCircle: FC<PropsType> = ({ className, isDarkColor = false }) => (
	<svg
		className={classNames('absolute -z-10', className)}
		width={320}
		height={320}
		viewBox='0 0 320 320'
	>
		<circle
			cx='160'
			cy='160'
			r='160'
			fill={
				isDarkColor
					? `rgb(var(--background-color))`
					: `rgb(var(--main-color))`
			}
		/>
	</svg>
)

export default BasicCircle
