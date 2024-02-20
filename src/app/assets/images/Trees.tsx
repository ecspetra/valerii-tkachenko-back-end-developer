import { FC } from 'react'
import classNames from 'classnames'

type PropsType = {
	className?: string
	variant?: 'v1' | 'v2'
}

const Trees: FC<PropsType> = ({ className, variant = 'v1' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			viewBox='0 0 140 170'
			className={classNames('absolute -z-10 opacity-20', className)}
		>
			{variant === 'v1' ? (
				<>
					<g fill='none' stroke='#fff' strokeWidth={0.5}>
						<path d='M37.658 8.354v153.292M37.658 8.354l20.439 20.439M47.877 39.477l20.44 20.439M47.877 59.916l20.44 20.439M61.464 92.432l20.44 20.44M61.464 112.871l20.44 20.44M37.658 8.354l-20.44 20.439M27.438 59.916 7 80.355' />
					</g>
					<g fill='none' stroke='#fff' strokeWidth={0.5}>
						<path d='M102.342 49.696v111.95M102.342 49.696l20.44 20.44M112.562 80.82 133 101.257M112.562 101.258 133 121.698M102.342 49.696l-20.439 20.44' />
					</g>
				</>
			) : (
				<>
					<g fill='none' stroke='#fff' strokeWidth={0.5}>
						<path d='M37.658 8.354v153.292M37.658 8.354l20.439 20.439M47.877 39.477l20.44 20.439M47.877 59.916l20.44 20.439M61.464 92.432l20.44 20.44M61.464 112.871l20.44 20.44M37.658 8.354l-20.44 20.439M27.438 59.916 7 80.355' />
					</g>
					<path
						fill='none'
						stroke='#fff'
						strokeWidth={0.5}
						d='m120.931 49.696 4.669 5.23 5.048-5.23M106.356 23.563l4.668 5.23 5.049-5.23M116.073 79.77 120.74 85l5.049-5.23M85.732 15.958l4.669 5.23 5.048-5.23M90.59 39.477l4.67 5.23 5.048-5.23'
					/>
				</>
			)}
		</svg>
	)
}

export default Trees
