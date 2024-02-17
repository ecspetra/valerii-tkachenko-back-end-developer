import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
	isHorizontal?: boolean
	isLargeHeight?: boolean
}

const BackgroundStraightLine: FC<PropsType> = ({
	className,
	isHorizontal = false,
	isLargeHeight = false,
}) => {
	return (
		<svg
			className={classNames(`absolute`, className)}
			width={isHorizontal ? '100%' : '1'}
			height={isHorizontal ? '1' : isLargeHeight ? '200%' : '100%'}
			viewBox='0 0 100% 100%'
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<linearGradient
					id='line-gradient'
					gradientTransform='rotate(90)'
					x1={isHorizontal ? '100%' : '0%'}
					y1='0%'
					x2={isHorizontal ? '0%' : '100%'}
					y2='0%'
				>
					<stop
						offset='50%'
						stopColor={`rgb(var(--border-color))`}
						stopOpacity='1'
					/>
					<stop
						offset='100%'
						stopColor='transparent'
						stopOpacity='0'
					/>
				</linearGradient>
			</defs>
			<line
				y1='0'
				y2={isHorizontal ? '1' : '100%'}
				x1={isHorizontal ? '100%' : '1'}
				x2='0'
				stroke='url(#line-gradient)'
				strokeWidth='1'
			/>
		</svg>
	)
}

export default BackgroundStraightLine
