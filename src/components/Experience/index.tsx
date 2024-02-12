import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import summaryImageOne from '../../../public/assets/images/summary-image.jpg'
import summaryImageTwo from '../../../public/assets/images/top-banner-bg.jpg'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import ExperienceItem from '@/components/Experience/ExperienceItem'

const Experience = () => {
	return (
		<div className='relative w-screen min-h-screen overflow-hidden py-60 bg-stone-900'>
			<NestedCircles
				count={5}
				radius={700}
				className='absolute top-[60%] -right-[10%] opacity-15 -z-10'
			/>
			<BackgroundStraightLine className='top-0 left-1/2 -translate-x-1/2 z-0' />
			<div className='max-w-6xl mx-auto w-full px-6 relative z-10'>
				<Title className='text-center' variant='h2'>
					Experience
				</Title>
				<div>
					{EXPERIENCE_LIST.map((item, idx) => (
						<ExperienceItem
							key={idx}
							experience={item}
							idx={`0${idx + 1}`}
							isEven={idx % 2 === 0}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Experience
