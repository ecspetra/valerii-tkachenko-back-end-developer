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

const Summary = () => (
	<div
		className='relative w-screen min-h-screen overflow-hidden py-60'
		id='summary'
	>
		<Parallax
			translateX={[100, 0]}
			translateY={[100, 0]}
			opacity={[0.3, 1]}
			className='absolute top-0 right-0 w-[30%] h-[30%] bg-[url("../../public/assets/images/background-image-2.jpg")] bg-cover bg-center bg-no-repeat'
		/>
		<Parallax
			translateY={[50, -100]}
			className='absolute w-[200px] h-[300px] bottom-0 right-[25%]'
		>
			<Building />
		</Parallax>
		<Parallax
			rotate={[-160, 100]}
			className='absolute top-[60%] -right-[10%] opacity-20 -z-10'
		>
			<NestedCircles count={5} radius={700} isShowSmallCircles />
		</Parallax>
		<BackgroundStraightLine className='left-[30%] top-0' />
		<BackgroundStraightLine className='top-[70%] rotate-180' isHorizontal />
		<Parallax translateY={[50, -50]} className='w-full max-w-4xl mx-auto'>
			<div className='relative max-w-2xl mb-12'>
				<Parallax
					translateY={[50, 0]}
					className='absolute -top-[30%] -left-[20%] opacity-20 z-10'
				>
					<NestedCircles count={7} radius={200} />
				</Parallax>
				<Title variant='h2'>About me</Title>
				<p className='pl-20 mb-8 text-2xl font-normal'>
					I offer{' '}
					<span className='text-main-color border-b border-border-color'>
						6 years of hands-on experience
					</span>{' '}
					translating business requirements into high-quality software
					solutions and contributing to the creation and development
					of{' '}
					<span className='text-main-color border-b border-border-color'>
						13+ projects of various sizes and complexity
					</span>{' '}
					.
				</p>
				<p className='pl-20 mb-16'>
					I have established myself as a software engineer who
					enthusiastically takes on new challenges across the full
					stack.
				</p>
				<div className='flex items-stretch gap-4'>
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
			className='relative mb-80 w-full max-w-4xl mx-auto'
		>
			<Title
				className='right-[58%] top-[55%] z-10'
				variant='h3-vertical-label'
			>
				Summary
			</Title>
			<Parallax
				translateY={[10, -10]}
				className='absolute max-w-[80%] -bottom-60 left-0 w-full'
			>
				<img src={summaryImageTwo.src} alt='Summary' />
			</Parallax>
			<Parallax
				translateX={[10, -10]}
				className='relative ml-auto max-w-[60%] h-[500px] overflow-hidden'
			>
				<img src={summaryImageOne.src} alt='Summary' />
				<Rectangle className='-bottom-12 left-[40%] w-[20%] h-[30%]' />
			</Parallax>
			<LinesShape className='-right-24 top-[30%] -rotate-45 -scale-x-100' />
			<BasicCircle className='left-[25%] top-[25%]' />
			<Noize className='-top-[40%] left-[20%]' />
		</Parallax>
		<Contacts />
	</div>
)

export default Summary
