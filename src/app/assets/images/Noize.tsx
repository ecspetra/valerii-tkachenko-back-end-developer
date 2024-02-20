import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}

const Mountains: FC<PropsType> = ({ className }) => {
	return (
		<span
			className={classNames(
				'absolute w-[380px] h-[380px] 2xl:w-[500px] 2xl:h-[500px] opacity-20 bg-[url("../../public/assets/images/noize-circle.svg")] bg-cover bg-center bg-no-repeat -z-10',
				className
			)}
		/>
	)
}

export default Mountains
