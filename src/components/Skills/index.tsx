import { SKILLS_LIST } from '@/constants/skillsList'
import SkillsItem from '@/components/Skills/SkillsItem'
import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import skillsImageOne from '../../../public/assets/images/top-banner-image.jpg'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'

const Skills = () => (
	<div
		className='relative w-screen min-h-screen py-60 overflow-hidden'
		id='skills'
	>
		<div className='absolute top-0 right-[20%] w-[20%] h-[30%] max-h-screen opacity-15 bg-[url("../../public/assets/images/top-banner-bg.jpg")] mix-blend-luminosity bg-cover bg-center bg-no-repeat' />
		<BackgroundStraightLine className='left-[40%] top-0' />
		<BackgroundStraightLine className='top-[85%] rotate-180' isHorizontal />
		<div className='container max-w-6xl mx-auto w-full px-6 '>
			<div className='relative flex justify-between items-end'>
				<div className='w-full relative max-w-[40%] pr-24 -mb-40'>
					<NestedCircles
						count={4}
						radius={300}
						className='absolute -top-[60%] left-[30%] opacity-15 -z-10'
					/>
					<img src={skillsImageOne.src} alt='Skills' />
					<div className='absolute right-full top-[20%] w-24 h-1 bg-main-color -z-10' />
				</div>
				<div className='w-full max-w-[60%]'>
					<Title variant='h2' className='!mb-40'>
						Tech Stack
					</Title>
					<div className='flex flex-wrap justify-start items-start gap-10'>
						{SKILLS_LIST.map((item, idx) => (
							<SkillsItem key={idx}>{item}</SkillsItem>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Skills
