import bottomBannerImage from '../../../public/assets/images/bottom-banner-image.jpg'
import Title from '@/app/components/Title'
import Button from '@/app/components/Button'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import NestedCircles from '@/app/assets/images/NestedCircles'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'
import BasicCircle from '@/app/assets/images/BasicCircle'
import Noise from '@/app/assets/images/Noise'
import { Parallax } from 'react-scroll-parallax'
import useDecreaseShapeSize from '@/hooks/useDecreaseShapeSize'
import topBannerImage from '../../../public/assets/images/top-banner-image.jpg'
import Image from 'next/image'

const BottomBanner = () => {
	const isDecreaseShapeSize = useDecreaseShapeSize()

	return (
		<div
			className='relative w-screen lg:min-h-screen ipad-pro:min-h-full overflow-hidden lg:overflow-visible'
			id='cv'
		>
			<div className='hidden 2xl:block absolute bottom-0 right-0 w-[60vh] h-[90%] max-h-screen opacity-40 bg-[url("../../public/assets/images/background-image-6.jpg")] bg-cover bg-center bg-no-repeat' />
			<div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:gap-12 2xl:gap-36 px-6 py-14 sm:py-20 lg:py-0'>
				<BackgroundStraightLine className='hidden lg:block -top-20 2xl:-top-60 right-1/2 -translate-x-1/2 lg:translate-x-0 lg:right-[54%]' />
				<div className='relative z-20 w-full lg:pt-24 xl:pt-16 lg:pb-40 lg:max-w-sm xl:max-w-xl order-2 lg:order-1'>
					<div className='relative'>
						<Parallax translateX={[5, -5]}>
							<Title className='!mb-0'>Valerii</Title>
						</Parallax>
						<Parallax translateX={[-5, 5]}>
							<Title className='!mb-8 wide-screen-with-small-height:!mb-8 2xl:!mb-16 xl:ml-[5%]'>
								Tkachenko
							</Title>
						</Parallax>
					</div>
					<Title
						variant='h2'
						className='!mb-14 wide-screen-with-small-height:!mb-16 2xl:!mb-24 !text-4xl xl:!text-5xl !text-main-color'
					>
						<span className='block mx-auto lg:mx-0 w-fit xl:mb-2 xl:pb-2 border-b border-border-color'>
							Backend
						</span>
						<span className='block mx-auto lg:mx-0 w-fit xl:mb-2 xl:pb-2 border-b border-border-color'>
							Developer
						</span>
					</Title>
					{/*<Button>Download Resume</Button>*/}
				</div>
				<div className='aspect-[2/3] max-w-[560px] 2xl:max-w-[768px] w-full sm:w-[70%] h-full lg:w-auto lg:h-screen ipad-pro:h-auto relative z-10 self-start mb-12 sm:mb-16 lg:mb-0 order-1 lg:order-2'>
					<Parallax
						translateY={[50, -50]}
						className='absolute -left-5 top-[30%] sm:top-[50%] z-10 w-11 h-[350px]'
					>
						<Title variant='h3-vertical-label'>
							<span className='text-main-color'>6+ years</span> of
							experience
						</Title>
					</Parallax>
					<Image
						className='max-h-full max-w-full'
						src={bottomBannerImage}
						alt='Bottom Banner'
						loading='eager'
					/>
					<Parallax
						scale={[0.2, 1.4]}
						rotate={[-160, 100]}
						className='absolute hidden sm:block -top-[10%] right-[50%] opacity-20 -z-10'
					>
						<NestedCircles
							count={7}
							radius={isDecreaseShapeSize ? 300 : 500}
							isShowSmallCircles
						/>
					</Parallax>
					<Parallax
						translateY={[-50, 50]}
						className='absolute left-[20%] sm:-left-[30%] 2xl:-left-[10%] top-[20%] sm:top-[50%] w-[320px] h-[320px] -z-10'
					>
						<BasicCircle className='scale-75 wide-screen-with-small-height:scale-75 2xl:scale-100' />
					</Parallax>
					<LinesShape className='left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-16 top-3 sm:top-0 -rotate-45 -scale-x-100' />
					<Rectangle className='-top-2 -right-2 sm:-top-6 sm:-right-6 w-[10%] h-[20%]' />
					<Noise className='top-[40%] -left-[30%]' />
				</div>
			</div>
		</div>
	)
}

export default BottomBanner
