import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import summaryImageOne from '../../../public/assets/images/summary-image-1.jpg'
import summaryImageTwo from '../../../public/assets/images/summary-image-2.jpg'
import Contacts from '@/components/Contacts'
import { CONTACTS_LIST } from '@/constants/contactsList'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'
import Building from '@/app/assets/images/Building'
import BasicCircle from '@/app/assets/images/BasicCircle'
import Noize from '@/app/assets/images/Noize'
import { Parallax } from 'react-scroll-parallax'
import useDecreaseShapeSize from '@/hooks/useDecreaseShapeSize'

const Summary = () => {
	const isDecreaseShapeSize = useDecreaseShapeSize()

	return (
		<div
			className='relative w-screen overflow-hidden px-6 pt-36 pb-16 sm:pb-24 xl:py-60 lg:px-0'
			id='summary'
		>
			<Parallax
				translateX={[100, 0]}
				translateY={[100, 0]}
				opacity={[0.3, 1]}
				className='absolute hidden lg:block top-0 right-0 w-[30%] h-[300px] 2xl:h-[30%] bg-[url("../../public/assets/images/background-image-2.jpg")] bg-cover bg-center bg-no-repeat'
			/>
			<Parallax
				translateY={[50, -100]}
				className='absolute hidden lg:block w-[200px] h-[300px] bottom-0 right-[15%] 2xl:right-[25%]'
			>
				<Building />
			</Parallax>
			<Parallax
				rotate={[-160, 100]}
				className='absolute hidden lg:block top-[60%] -right-[30%] 2xl:-right-[10%] opacity-20 -z-10'
			>
				<NestedCircles
					count={5}
					radius={isDecreaseShapeSize ? 500 : 700}
					isShowSmallCircles
				/>
			</Parallax>
			<BackgroundStraightLine className='left-[10%] 2xl:left-[30%] top-0 hidden sm:block' />
			<BackgroundStraightLine
				className='top-[70%] -left-6 lg:left-0 rotate-180 hidden sm:block'
				isHorizontal
			/>
			<Parallax
				translateY={[50, -50]}
				className='w-full max-w-4xl mx-auto'
			>
				<div className='relative mx-auto lg:mx-0 max-w-xl xl:max-w-2xl mb-12 sm:mb-20 lg:mb-12'>
					<Parallax
						translateY={[50, 0]}
						className='absolute scale-75 sm:scale-100 -top-[30%] left-1/2 -translate-x-1/2 ml-4 lg:ml-0 lg:translate-x-0 lg:-left-[20%] opacity-20 z-10'
					>
						<NestedCircles count={7} radius={200} />
					</Parallax>
					<Title variant='h2'>About me</Title>
					<p className='lg:pl-20 mb-8 text-xl xl:text-2xl font-normal relative z-20 text-center lg:text-left'>
						I offer{' '}
						<span className='text-main-color border-b border-border-color'>
							6 years of hands-on experience
						</span>{' '}
						translating business requirements into high-quality
						software solutions and contributing to the creation and
						development of{' '}
						<span className='text-main-color border-b border-border-color'>
							13+ projects of various sizes and complexity
						</span>{' '}
						.
					</p>
					<p className='lg:pl-20 mb-8 xl:mb-16 text-center lg:text-left'>
						I have established myself as a software engineer who
						enthusiastically takes on new challenges across the full
						stack.
					</p>
					<div className='flex items-stretch justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-base'>
						<div>
							{CONTACTS_LIST.map((item, idx) => (
								<p key={idx} className='text-dark-text-color'>
									{item.title}
								</p>
							))}
						</div>
						<span className='w-[1px] bg-border-color' />
						<div>
							{CONTACTS_LIST.map((item, idx) => (
								<p key={idx}>{item.value}</p>
							))}
						</div>
					</div>
				</div>
			</Parallax>
			<Parallax
				translateY={[50, -50]}
				className='relative mb-48 sm:mb-56 lg:mb-40 2xl:mb-80 w-full max-w-2xl 2xl:max-w-4xl mx-auto'
			>
				<Title
					className='right-[68%] sm:right-[48%] 2xl:right-[58%] top-[55%] z-10'
					variant='h3-vertical-label'
				>
					Summary
				</Title>
				<Parallax
					translateY={[10, -10]}
					className='absolute max-w-[90%] sm:max-w-[65%] 2xl:max-w-[80%] -bottom-32 2xl:-bottom-60 left-0 w-full'
				>
					<img src={summaryImageTwo.src} alt='Summary' />
				</Parallax>
				<Parallax
					translateX={[10, -10]}
					className='relative ml-auto max-w-[70%] sm:max-w-[50%] 2xl:max-w-[60%] overflow-hidden'
				>
					<img src={summaryImageOne.src} alt='Summary' />
					<Rectangle className='hidden lg:block -bottom-12 left-[40%] w-[20%] h-[30%]' />
				</Parallax>
				<LinesShape className='-right-24 top-[30%] -rotate-45 -scale-x-100' />
				<BasicCircle className='left-[25%] top-[25%] scale-75 wide-screen-with-small-height:scale-75 2xl:scale-100' />
				<Noize className='-top-[20%] 2xl:-top-[40%] left-[20%]' />
			</Parallax>
			<Contacts />
		</div>
	)
}

export default Summary
