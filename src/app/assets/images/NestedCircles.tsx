import { FC } from 'react'

interface PropsType {
	count: number
	radius: number
	className?: string
}

const NestedCircles: FC<PropsType> = ({ count, radius, className }) => {
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
			viewBox={`0 0 ${radius * 2 + 4} ${radius * 2 + 4}`}
		>
			{circles}
		</svg>
	)
}

export default NestedCircles
