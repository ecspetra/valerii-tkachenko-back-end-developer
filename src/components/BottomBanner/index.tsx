import bottomBannerImage from '../../../public/assets/images/bottom-banner-image.jpg'
import Title from '@/app/components/Title'
import Button from '@/app/components/Button'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import NestedCircles from '@/app/assets/images/NestedCircles'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'
import BasicCircle from '@/app/assets/images/BasicCircle'
import Noize from '@/app/assets/images/Noize'
import { Parallax } from 'react-scroll-parallax'
import useDecreaseShapeSize from '@/hooks/useDecreaseShapeSize'

const BottomBanner = () => {
	const isDecreaseShapeSize = useDecreaseShapeSize()

	return (
		<div className='relative w-screen min-h-screen' id='cv'>
			<div className='hidden 2xl:block absolute bottom-0 right-0 w-[60vh] h-[90%] max-h-screen opacity-40 bg-[url("../../public/assets/images/background-image-6.jpg")] bg-cover bg-center bg-no-repeat' />
			<div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-12 xl:gap-36 px-6'>
				<BackgroundStraightLine className='-top-20 2xl:-top-60 right-[54%]' />
				<div className='relative z-20 w-full pt-24 xl:pt-16 pb-40 max-w-md lg:max-w-xl'>
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
						className='wide-screen-with-small-height:!mb-16 2xl:!mb-24 !text-4xl xl:!text-5xl !text-main-color'
					>
						<span className='block w-fit xl:mb-2 xl:pb-2 border-b border-border-color'>
							Backend
						</span>
						<span className='block w-fit xl:mb-2 xl:pb-2 border-b border-border-color'>
							Developer
						</span>
					</Title>
					<Button className='mb-20'>Download CV</Button>
				</div>
				<div className='h-screen relative z-10'>
					<Parallax
						translateY={[50, -50]}
						className='absolute -left-5 top-[40%] 2xl:top-[50%] z-10 w-11 h-[350px]'
					>
						<Title variant='h3-vertical-label'>
							<span className='text-main-color'>6+ years</span> of
							experience
						</Title>
					</Parallax>
					<img
						src={bottomBannerImage.src}
						alt='Bottom Banner'
						className='max-h-full max-w-full'
					/>
					<Parallax
						scale={[0.2, 1.4]}
						rotate={[-160, 100]}
						className='absolute -top-[10%] right-[50%] opacity-20 -z-10'
					>
						<NestedCircles
							count={7}
							radius={isDecreaseShapeSize ? 300 : 500}
							isShowSmallCircles
						/>
					</Parallax>
					<Parallax
						translateY={[-50, 50]}
						className='absolute -left-[30%] 2xl:-left-[10%] top-[50%] w-[320px] h-[320px] -z-10'
					>
						<BasicCircle className='scale-75 wide-screen-with-small-height:scale-75 2xl:scale-100' />
					</Parallax>
					<LinesShape className='left-16 top-0 -rotate-45 -scale-x-100' />
					<Rectangle className='-top-6 -right-6 w-[10%] h-[20%]' />
					<Noize className='top-[40%] -left-[30%]' />
				</div>
			</div>
		</div>
	)
}

export default BottomBanner
