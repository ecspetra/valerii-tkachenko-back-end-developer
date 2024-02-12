import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
	isHorizontal?: boolean
}
const BackgroundStraightLine: FC<PropsType> = ({
	className,
	isHorizontal = false,
}) => {
	return (
		<span
			className={classNames(
				`${isHorizontal ? 'w-full h-[1px] bg-gradient-to-l' : 'w-[1px] h-full bg-gradient-to-b'} from-border-color to-transparent absolute -z-10`,
				className
			)}
		/>
	)
}

export default BackgroundStraightLine
