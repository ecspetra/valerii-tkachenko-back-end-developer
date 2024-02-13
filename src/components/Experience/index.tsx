import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import summaryImageOne from '../../../public/assets/images/summary-image.jpg'
import summaryImageTwo from '../../../public/assets/images/top-banner-bg.jpg'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import ExperienceItem from '@/components/Experience/ExperienceItem'

const Experience = () => {
	return (
		<div className='relative w-screen min-h-screen py-60 bg-gradient-to-b from-stone-900 to-background-color'>
			<BackgroundStraightLine className='-top-40 left-1/2 -translate-x-1/2 z-0' />
			<div className='container max-w-6xl mx-auto w-full px-6 relative z-10'>
				<Title className='text-center !mb-40' variant='h2'>
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
