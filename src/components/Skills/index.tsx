import { SKILLS_LIST } from '@/constants/skillsList'
import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import skillsImageOne from '../../../public/assets/images/skills-image.jpg'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'

const Skills = () => (
	<div
		className='relative w-screen min-h-screen py-60 overflow-hidden'
		id='skills'
	>
		<BackgroundStraightLine className='left-[40%] top-0' />
		<BackgroundStraightLine className='top-[85%] rotate-180' isHorizontal />
		<div className='container max-w-6xl mx-auto w-full px-6'>
			<div className='relative flex justify-between items-end'>
				<div className='w-full relative max-w-[40%] pr-24 -mb-40'>
					<NestedCircles
						count={4}
						radius={300}
						className='absolute -top-[60%] left-[30%] opacity-20 -z-10'
					/>
					<img src={skillsImageOne.src} alt='Skills' />
					<LinesShape className='-left-24 top-[30%] rotate-45' />
					<div className='absolute left-[10%] -bottom-[10%] w-80 h-80 bg-main-color rounded-full -z-10' />
					<div className='absolute -top-[30%] left-[10%] w-[500px] h-[500px] opacity-20 bg-[url("../../public/assets/images/noize-circle.svg")] bg-cover bg-center bg-no-repeat -z-10' />
				</div>
				<div className='w-full max-w-[60%] relative z-10'>
					<Title variant='h2' className='!mb-40 relative'>
						Tech Stack
						<Rectangle className='-bottom-2 left-[35%] w-[220px] h-[100px]' />
						<div className='absolute -bottom-12 left-[40%] w-[500px] h-[400px] bg-[url("../../public/assets/images/test/IMG_6203.JPG")] bg-cover bg-center bg-no-repeat -z-10' />
					</Title>
					<div className='flex flex-wrap justify-start items-start gap-10'>
						{SKILLS_LIST.map((item, idx) => (
							<Title
								key={idx}
								variant='h3'
								className='border-b border-border-color'
							>
								{item}
							</Title>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Skills
