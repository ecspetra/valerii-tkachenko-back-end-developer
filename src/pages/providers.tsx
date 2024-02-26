'use client'

import { ReactNode } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useMediaQuery } from 'react-responsive'

const Providers = ({ children }: { children: ReactNode }) => {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

	return (
		<ParallaxProvider isDisabled={isSmallScreen}>
			{children}
		</ParallaxProvider>
	)
}

export default Providers
