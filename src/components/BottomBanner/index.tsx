import bottomBannerImage from '../../../public/assets/images/bottom-banner-image.jpg'
import Title from '@/app/components/Title'
import Button from '@/app/components/Button'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import NestedCircles from '@/app/assets/images/NestedCircles'
import Contacts from '@/components/Contacts'
import { CONTACTS_LIST } from '@/constants/contactsList'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'
import BasicCircle from '@/app/assets/images/BasicCircle'
import Noize from '@/app/assets/images/Noize'
import { Parallax } from 'react-scroll-parallax'

const BottomBanner = () => {
	return (
		<div className='relative w-screen min-h-screen' id='cv'>
			<div className='absolute bottom-0 right-0 w-[40%] h-[90%] max-h-screen opacity-40 bg-[url("../../public/assets/images/background-image-6.jpg")] bg-cover bg-center bg-no-repeat' />
			<div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center px-6 pb-40'>
				<BackgroundStraightLine className='-top-60 right-[54%]' />
				<div className='relative z-20 w-full max-w-md lg:max-w-xl'>
					<div className='relative'>
						<Parallax translateX={[5, -5]}>
							<Title className='!mb-0'>Valerii</Title>
						</Parallax>
						<Parallax translateX={[-5, 5]}>
							<Title className='ml-[5%]'>Tkachenko</Title>
						</Parallax>
						<BasicCircle className='-left-24 -top-16' isDarkColor />
					</div>
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
					<Button className='mb-20'>Download CV</Button>
				</div>
				<div className='max-w-[70vw] 2xl:max-w-3xl relative z-10'>
					<Parallax
						translateY={[50, -50]}
						className='absolute -left-5 top-[60%] z-10 w-11 h-[350px]'
					>
						<Title variant='h3-vertical-label'>
							<span className='text-main-color'>6+ years</span> of
							experience
						</Title>
					</Parallax>
					<img src={bottomBannerImage.src} alt='Bottom Banner' />
					<Parallax
						scale={[0.2, 1.4]}
						rotate={[-160, 100]}
						className='absolute -top-[10%] right-[50%] opacity-20 -z-10'
					>
						<NestedCircles
							count={7}
							radius={500}
							isShowSmallCircles
						/>
					</Parallax>
					<Parallax
						translateY={[-100, 100]}
						className='absolute -left-[10%] top-[50%] w-[320px] h-[320px] -z-10'
					>
						<BasicCircle />
					</Parallax>
					<LinesShape className='-right-24 top-[30%] -rotate-45 -scale-x-100' />
					<Rectangle className='bottom-0 right-0 w-[10%] h-[20%]' />
					<Noize className='top-[40%] -left-[30%]' />
				</div>
			</div>
		</div>
	)
}

export default BottomBanner
