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
import Image from 'next/image'
import DotsAnimation from '@/app/assets/animation/DotsAnimation'

const TopBanner = () => {
	const isDecreaseShapeSize = useDecreaseShapeSize()

	return (
		<div
			className='relative w-screen lg:min-h-screen ipad-pro:min-h-full overflow-hidden'
			id='top-banner'
		>
			<div className='hidden 2xl:block absolute top-0 left-0 w-[60vh] h-screen opacity-40 bg-[url("../../public/assets/images/background-image-1.jpg")] bg-cover bg-center bg-no-repeat' />
			<NestedCircles
				count={3}
				radius={isDecreaseShapeSize ? 500 : 800}
				className='absolute top-[80%] -left-[30%] opacity-20 z-10 ipad-pro:hidden'
			/>
			<div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:gap-12 2xl:gap-36 px-6 py-20 lg:py-0'>
				<BackgroundStraightLine className='left-[90%] 2xl:left-[80%]' />
				<BackgroundStraightLine className='left-[50%] 2xl:left-[54%]' />
				<BackgroundStraightLine
					className='top-[90%] hidden lg:block'
					isHorizontal
				/>
				<div className='aspect-[2/3] max-w-[560px] 2xl:max-w-[768px] sm:w-[70%] w-full h-full lg:w-auto lg:h-screen ipad-pro:h-[640px] relative z-10 self-start mb-12 sm:mb-16 lg:mb-0'>
					<Parallax
						translateY={[50, -50]}
						className='absolute -right-5 top-[20%] lg:top-[50%] xl:top-[60%] z-10 w-11 h-[300px]'
					>
						<Title variant='h3-vertical-label'>
							Hi There!{' '}
							<span className='text-main-color'>I am</span>
						</Title>
					</Parallax>
					<Parallax
						scale={[1.4, 1]}
						rotate={[-160, 100]}
						className='absolute hidden sm:block -top-[10%] left-[50%] opacity-20 -z-10'
					>
						<NestedCircles
							count={7}
							radius={isDecreaseShapeSize ? 300 : 500}
							isShowSmallCircles
						/>
					</Parallax>
					<div className='aspect-[2/3] w-full relative'>
						<Image
							className='w-full h-full'
							src='/assets/images/top-banner-image.jpg'
							alt='Top Banner'
							layout='fill'
							loading='eager'
						/>
					</div>
					<LinesShape className='-left-24 top-[30%] rotate-45' />
					<Rectangle className='bottom-[30%] -left-6 w-[10%] h-[20%]' />
					<div className='w-[380px] h-[380px] absolute top-[15%] -right-[30%] -z-10'>
						<Noise className='top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
						<DotsAnimation id='dots-animation-1' />
					</div>
				</div>
				<div className='relative z-20 w-full lg:pt-24 xl:pt-16 lg:pb-40 lg:max-w-md xl:max-w-xl'>
					<div className='relative lg:-ml-[20%] xl:-ml-[50%]'>
						<Parallax translateX={[5, -5]}>
							<Title className='!mb-0'>Valerii</Title>
						</Parallax>
						<Parallax translateX={[-5, 5]}>
							<Title className='!mb-8 wide-screen-with-small-height:!mb-8 2xl:!mb-16 xl:ml-[5%]'>
								Tkachenko
							</Title>
						</Parallax>
						<BasicCircle
							className='hidden lg:block -left-32 -top-24 xl:-left-24 xl:-top-16 scale-50 wide-screen-with-small-height:scale-75 xl:scale-75 2xl:scale-100'
							isDarkColor
						/>
					</div>
					<Title
						variant='h2'
						className='!mb-14 wide-screen-with-small-height:!mb-16 2xl:!mb-24 !text-4xl xl:!text-5xl !text-main-color'
					>
						<span className='block mx-auto lg:mx-0 w-fit xl:mb-2 xl:pb-2 border-b border-border-color'>
							Sr. Software
						</span>
						<span className='block mx-auto lg:mx-0 w-fit xl:mb-2 xl:pb-2 border-b border-border-color'>
							Developer
						</span>
					</Title>
					{/*<Button>Download Resume</Button>*/}
				</div>
			</div>
		</div>
	)
}

export default TopBanner
