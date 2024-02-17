'use client'

import { ParallaxProvider } from 'react-scroll-parallax'

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const userPrefersReducedMotion = {
		query: '(prefers-reduced-motion)',
	}

	return (
		<ParallaxProvider isDisabled={userPrefersReducedMotion}>
			{children}
		</ParallaxProvider>
	)
}
