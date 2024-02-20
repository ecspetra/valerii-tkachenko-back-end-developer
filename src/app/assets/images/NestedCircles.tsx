import { FC } from 'react'

interface PropsType {
	count: number
	radius: number
	className?: string
	isShowSmallCircles?: boolean
}

const NestedCircles: FC<PropsType> = ({
	count,
	radius,
	className,
	isShowSmallCircles = false,
}) => {
	const innerRadiusStep = 24
	const circles = []

	let currentRadius = radius
	for (let i = 0; i < count; i++) {
		const opacity = 1 - i * (1 / count)
		circles.push(
			<circle
				key={i}
				cx={radius + 2}
				cy={radius + 2}
				r={currentRadius}
				fill='transparent'
				stroke={i === 0 ? `rgb(var(--main-color))` : 'white'}
				strokeWidth={i === 0 ? '2' : '1'}
				opacity={opacity}
			/>
		)
		currentRadius -= innerRadiusStep
	}

	return (
		<svg
			className={className}
			width={radius * 2}
			height={radius * 2}
			viewBox={`0 0 ${radius * 2 + 40} ${radius * 2 + 40}`}
		>
			{isShowSmallCircles && (
				<>
					<circle
						cx={radius * 2 - radius / 20}
						cy={radius}
						r={radius / 10}
						fill='transparent'
						stroke='white'
						strokeWidth='1'
					/>
					<circle
						cx={radius}
						cy={radius * 2 - radius / 4}
						r={radius / 20}
						fill='transparent'
						stroke='white'
						strokeWidth='1'
					/>
				</>
			)}
			{circles}
		</svg>
	)
}

export default NestedCircles
