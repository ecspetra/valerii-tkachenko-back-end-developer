import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
}

const Mountains: FC<PropsType> = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			viewBox='0 0 150 250'
			className={classNames('absolute -z-10 opacity-20', className)}
		>
			<path
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				d='M26.574 241.727V107.09l66.89-9.599 29.962 9.599v90.39M93.465 170.306V97.492'
			/>
			<ellipse
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				rx={23.168}
				ry={5.923}
				transform='translate(87.02 85.299)'
			/>
			<ellipse
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				rx={28.5}
				ry={7.285}
				transform='translate(87.02 78.014)'
			/>
			<ellipse
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				rx={36}
				ry={9.2}
				transform='translate(87.02 70.176)'
			/>
			<path
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				d='M87.02 8.273v57.341M77.877 86.737v12.885M96.899 86.737v11.945M32.465 115.028l54.554-7.937M32.465 122.965l54.555-7.937M32.465 130.902l54.555-7.937M32.465 138.84l54.555-7.938M96.899 107.09l22.937 7.032M96.899 115.028l22.937 7.032M96.899 122.965l22.937 7.032M96.899 130.902l22.937 7.032'
			/>
			<ellipse
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				rx={16}
				ry={4.09}
				transform='translate(87.02 50.243)'
			/>
			<path
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				d='M87.02 12.913 63.85 19.508v11.454q0 .347 14.026-3.47'
			/>
		</svg>
	)
}

export default Mountains
