import topBannerImage from '../../../public/assets/images/top-banner-image.jpg'
import Title from '@/app/components/Title'
import Button from '@/app/components/Button'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import NestedCircles from '@/app/assets/images/NestedCircles'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'

const TopBanner = () => {
	return (
		<div
			className='relative w-screen min-h-screen overflow-hidden'
			id='top-banner'
		>
			<div className='absolute top-0 left-0 w-[40%] h-full max-h-screen opacity-40 bg-[url("../../public/assets/images/test/IMG_6217.JPG")] bg-cover bg-center bg-no-repeat' />
			<NestedCircles
				count={3}
				radius={800}
				className='absolute top-[80%] -left-[30%] opacity-20 z-10'
			/>
			<div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center px-6 pb-40'>
				<BackgroundStraightLine className='left-[80%]' />
				<BackgroundStraightLine className='left-[54%]' />
				<BackgroundStraightLine className='top-[90%]' isHorizontal />
				<div className='max-w-[70vw] 2xl:max-w-3xl relative z-10'>
					<Title
						className='-right-5 top-[60%] z-10'
						variant='h3-vertical-label'
					>
						Hi There! <span className='text-main-color'>I am</span>
					</Title>
					<img src={topBannerImage.src} alt='Top Banner' />
					<NestedCircles
						count={7}
						radius={500}
						className='absolute -top-[10%] left-[50%] opacity-20 -z-10'
					/>
					<LinesShape className='-left-24 top-[30%] rotate-45' />
					<Rectangle className='bottom-0 left-0 w-[10%] h-[20%]' />
					<div className='absolute top-[15%] -right-[30%] w-[500px] h-[500px] opacity-20 bg-[url("../../public/assets/images/noize-circle.svg")] bg-cover bg-center bg-no-repeat -z-10' />
				</div>
				<div className='relative z-20 w-full max-w-md lg:max-w-xl'>
					<Title className='relative -ml-[50%]'>
						<span className='block'>Valerii</span>
						<span className='block ml-[5%]'>Tkachenko</span>
						<div className='absolute -left-24 -top-16 w-80 h-80 bg-background-color rounded-full -z-10' />
					</Title>
					<Title
						variant='h2'
						className='!mb-40 !text-5xl !text-main-color'
					>
						<span className='block w-fit mb-2 pb-2 border-b border-border-color'>
							Backend
						</span>
						<span className='block w-fit mb-2 pb-2 border-b border-border-color'>
							Developer
						</span>
					</Title>
					<Button>Download CV</Button>
				</div>
			</div>
		</div>
	)
}

export default TopBanner
