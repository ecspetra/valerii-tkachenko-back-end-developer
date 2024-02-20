import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'

const useDecreaseShapeSize = () => {
	const isSmallDesktop = useMediaQuery({ query: '(max-width: 1280px)' })
	const isWideScreenWithSmallHeight = useMediaQuery({
		query: '(max-height: 1080px) and (min-width:1281px)',
	})
	const [isDecreaseShapeSize, setIDecreaseShapeSize] = useState(false)

	useEffect(() => {
		setIDecreaseShapeSize(isSmallDesktop || isWideScreenWithSmallHeight)
	}, [isSmallDesktop, isWideScreenWithSmallHeight])

	return isDecreaseShapeSize
}

export default useDecreaseShapeSize
