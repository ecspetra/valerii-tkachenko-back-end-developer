import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}
const Square: FC<PropsType> = ({ className }) => {
	return (
		<span
			className={classNames(
				`w-4 h-4 border border-border-color absolute`,
				className
			)}
		/>
	)
}

export default Square
