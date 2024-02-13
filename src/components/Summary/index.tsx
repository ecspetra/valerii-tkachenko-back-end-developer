import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import summaryImageOne from '../../../public/assets/images/summary-image.jpg'
import summaryImageTwo from '../../../public/assets/images/top-banner-bg.jpg'
import Contacts from '@/components/Contacts'
import { CONTACTS_LIST } from '@/constants/contactsList'

const Summary = () => {
	return (
		<div className='relative w-screen min-h-screen overflow-hidden py-60'>
			<div className='absolute top-0 right-0 w-[30%] h-[30%] max-h-screen opacity-15 bg-[url("../../public/assets/images/top-banner-bg.jpg")] mix-blend-luminosity bg-cover bg-center bg-no-repeat' />
			<NestedCircles
				count={5}
				radius={700}
				className='absolute top-[60%] -right-[10%] opacity-15 -z-10'
			/>
			<BackgroundStraightLine className='left-[30%] top-0' />
			<BackgroundStraightLine
				className='top-[70%] rotate-180'
				isHorizontal
			/>
			<div className='w-full max-w-4xl mx-auto'>
				<div className='relative max-w-2xl mb-12'>
					<NestedCircles
						count={7}
						radius={200}
						className='absolute -top-[30%] -left-[20%] opacity-15 z-10'
					/>
					<Title variant='h2'>About me</Title>
					<p className='pl-20 mb-8 text-2xl font-normal'>
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
				<div className='relative mb-80'>
					<Title
						className='right-[58%] top-[55%] z-10'
						variant='h3-vertical-label'
					>
						Summary
					</Title>
					<img
						className='absolute max-w-[80%] -z-10 -bottom-60 left-0 opacity-15 w-full mix-blend-luminosity'
						src={summaryImageOne.src}
						alt='Summary'
					/>
					<img
						className='ml-auto max-w-[60%]'
						src={summaryImageOne.src}
						alt='Summary'
					/>
					<div className='absolute left-full top-[30%] w-24 h-1 bg-main-color -z-10' />
				</div>
				<Contacts />
			</div>
		</div>
	)
}

export default Summary
