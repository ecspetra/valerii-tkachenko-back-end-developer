import { SKILLS_LIST } from '@/constants/skillsList'
import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import skillsImageOne from '../../../public/assets/images/skills-image.jpg'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'
import Trees from '@/app/assets/images/Trees'
import BasicCircle from '@/app/assets/images/BasicCircle'
import Noize from '@/app/assets/images/Noize'

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
					<BasicCircle className='left-[10%] -bottom-[10%]' />
					<Noize className='-top-[30%] left-[10%]' />
				</div>
				<div className='w-full max-w-[60%] relative z-10'>
					<Title variant='h2' className='!mb-40 relative'>
						Tech Stack
						<Trees className='w-[50%] top-1/2 -translate-y-1/2 -left-[80%]' />
						<Rectangle className='-bottom-2 left-[35%] w-[220px] h-[100px]' />
						<div className='absolute -bottom-12 left-[40%] w-[500px] h-[400px] bg-[url("../../public/assets/images/background-image-4.jpg")] bg-cover bg-center bg-no-repeat -z-10' />
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
