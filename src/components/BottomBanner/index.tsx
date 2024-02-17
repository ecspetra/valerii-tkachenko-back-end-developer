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
		<div className='relative w-screen min-h-screen' id='top-banner'>
			<div className='absolute bottom-0 right-0 w-[40%] h-[90%] max-h-screen opacity-40 bg-[url("../../public/assets/images/background-image-6.jpg")] bg-cover bg-center bg-no-repeat' />
			<div className='container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center px-6 pb-40'>
				<BackgroundStraightLine className='-top-60 right-[54%]' />
				<div className='relative z-20 w-full max-w-md lg:max-w-xl'>
					<Title className='relative w-full !text-[130px] whitespace-nowrap'>
						<span className='block'>Contact me</span>
						<span className='block'>for collaboration</span>
					</Title>
					<Title
						variant='h2'
						className='!mb-40 !text-5xl !text-main-color'
					>
						<span className='block w-fit mb-2 pb-2 border-b border-border-color'>
							I hope to hear
						</span>
						<span className='block w-fit mb-2 pb-2 border-b border-border-color'>
							from you soon
						</span>
					</Title>
					<Button className='mb-20'>Download CV</Button>
					<Contacts isLeftAligned />
					<div className='flex flex-col sm:flex-row items-center justify-start'>
						{CONTACTS_LIST.map((item, idx) => {
							if (idx !== 0)
								return (
									<p key={idx}>
										{item.value}
										{idx !== CONTACTS_LIST.length - 1 && (
											<span className='mx-4 hidden sm:inline-block text-dark-text-color'>
												|
											</span>
										)}
									</p>
								)
						})}
					</div>
				</div>
				<div className='max-w-[70vw] 2xl:max-w-3xl relative z-10'>
					<Parallax
						translateY={[50, -50]}
						className='absolute -left-5 top-[60%] z-10 w-11 h-[300px]'
					>
						<Title variant='h3-vertical-label'>
							Backend Developer
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
