import Title from '@/app/components/Title'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import ExperienceItem from '@/components/Experience/ExperienceItem'
import Rectangle from '@/app/assets/images/Rectangle'
import { Parallax } from 'react-scroll-parallax'

const Experience = () => {
	return (
		<div
			className='relative w-screen min-h-screen py-32 xl:py-60 bg-gradient-to-b from-stone-900 to-background-color'
			id='experience'
		>
			<BackgroundStraightLine className='-top-20 2xl:-top-40 left-1/2 -translate-x-1/2 z-0' />
			<div className='container max-w-6xl mx-auto w-full px-6 relative z-10'>
				<div className='relative mb-40'>
					<Title className='text-center' variant='h2'>
						Experience
					</Title>
					<Parallax
						scaleX={[0, 1]}
						className='absolute -bottom-2 left-[35%] w-[220px] h-[100px] -z-10'
					>
						<Rectangle className='w-full h-full' />
					</Parallax>
				</div>
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
