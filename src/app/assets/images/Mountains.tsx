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
			viewBox='0 0 550 120'
			className={classNames('-z-10 opacity-15', className)}
		>
			<path
				fill='none'
				stroke='#fff'
				strokeWidth={0.6}
				d='m10.828 109.567 14.98-13.778 5.575 3.135 6.967-2.09 4.53 6.27 24.735-41.806 20.904-8.362 9.058 4.181L123.01 37.26l9.058.348 9.406 8.362 10.626 3.135 7.142-5.574 18.813 4.18 2.44 17.768 5.225 2.44 2.787 4.528 10.452-3.135 13.587 4.18 9.407.349 17.42-12.89 3.135-12.891 4.529 1.045 13.239-13.587 6.62.348 14.98-10.452 11.149 1.742 15.329-16.722 10.452 11.497 13.935 1.045 20.207 19.51 32.4 7.316 10.452 6.27 11.149-2.438 7.316.349 13.936 8.36 13.587 27.175 12.194-12.542 5.225.697 3.136 3.832 9.058-1.393 9.407-14.284 12.696 3.296 45.668 40.444'
			/>
		</svg>
	)
}

export default Mountains
