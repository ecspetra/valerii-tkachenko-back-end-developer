import { Outfit } from 'next/font/google'
import TopBanner from '@/components/TopBanner'
import Header from '@/app/components/Header'
import Summary from '@/components/Summary'
import Footer from '@/app/components/Footer'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

const outfitFont = Outfit({
	weight: ['100', '200', '300', '400', '500', '600'],
	subsets: ['latin'],
	variable: '--font-outfit',
})

const Home = () => {
	return (
		<>
			<Header
				className={`${outfitFont.variable} font-sans text-main-text-color`}
			/>
			<main
				className={`flex min-h-screen flex-col items-center justify-between ${outfitFont.variable} font-sans font-extralight leading-normal tracking-wide text-lg text-main-text-color`}
			>
				<TopBanner />
				<Summary />
				<Experience />
				<Skills />
			</main>
			<Footer
				className={`${outfitFont.variable} font-sans text-main-text-color`}
			/>
		</>
	)
}

export default Home
