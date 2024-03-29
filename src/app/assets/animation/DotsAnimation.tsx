import { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { useInView } from 'react-intersection-observer'

type PropsType = {
	id: string
	className?: string
}

const generateRandomPath = () => {
	const x1 = Math.random() * 380
	const y1 = Math.random() * 380
	const x2 = Math.random() * 380
	const y2 = Math.random() * 380
	const x3 = Math.random() * 380
	const y3 = Math.random() * 380

	return `M${x1},${y1} C${x1 - 50},${y1 + 50} ${x2 + 50},${
		y2 - 50
	} ${x2},${y2} C${x2 - 50},${y2 + 50} ${x3 + 50},${y3 - 50} ${x3},${y3} z`
}

const generateRandomSize = () => {
	return Math.random() + 1
}

const generateRandomOpacity = () => {
	return Math.random()
}

const DotsAnimation: FC<PropsType> = ({ id, className }) => {
	const svgRef = useRef<SVGSVGElement | null>(null)
	const [ref, inView] = useInView()

	const createCircles = () => {
		const circles = Array.from({ length: 30 }).map((_, index) => {
			const path = generateRandomPath()
			const size = generateRandomSize()
			const opacity = generateRandomOpacity()
			const fillColor =
				index % 2 === 0 ? `rgb(var(--main-color))` : 'white'

			const circle = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'circle'
			)
			circle.setAttribute('key', index.toString())
			circle.setAttribute('r', size.toString())
			circle.setAttribute('fill', fillColor)
			circle.setAttribute('opacity', opacity.toString())

			const animateMotion = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'animateMotion'
			)
			animateMotion.setAttribute('dur', '40s')
			animateMotion.setAttribute('repeatCount', 'indefinite')
			animateMotion.setAttribute('path', path)

			circle.appendChild(animateMotion)

			return circle
		})

		if (svgRef.current && inView) {
			circles.forEach(circle => {
				svgRef.current?.appendChild(circle)
			})

			setTimeout(() => {
				circles.forEach(_ => {
					const animateMoves =
						svgRef.current!.querySelectorAll('animateMotion')

					if (animateMoves) {
						animateMoves.forEach(animateMove => {
							animateMove.beginElement()
						})
					}
				})
			}, 100)
		}
	}

	useEffect(() => {
		if (!inView && svgRef.current && typeof window !== 'undefined') {
			while (svgRef.current.firstChild) {
				svgRef.current.removeChild(svgRef.current.firstChild)
			}
		} else if (inView && svgRef.current && typeof window !== 'undefined')
			createCircles()
	}, [inView])

	return (
		<div
			ref={ref}
			className={classNames(
				'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
				className
			)}
		>
			<svg
				ref={svgRef}
				id={id}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 390 390'
				width={380}
				height={380}
			/>
		</div>
	)
}

export default DotsAnimation
