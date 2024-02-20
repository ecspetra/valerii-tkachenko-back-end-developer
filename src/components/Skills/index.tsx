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
import { Parallax } from 'react-scroll-parallax'
import Sun from '@/app/assets/images/Sun'
import useDecreaseShapeSize from '@/hooks/useDecreaseShapeSize'

const Skills = () => {
	const isDecreaseShapeSize = useDecreaseShapeSize()

	return (
		<div
			className='relative w-screen min-h-screen pt-32 pb-60 xl:py-60 overflow-hidden'
			id='skills'
		>
			<BackgroundStraightLine className='left-[30%] 2xl:left-[40%] top-0' />
			<BackgroundStraightLine
				className='top-[85%] rotate-180'
				isHorizontal
			/>
			<div className='container max-w-6xl mx-auto w-full px-6'>
				<div className='relative flex justify-between items-end'>
					<div className='w-full relative max-w-[40%] pr-24 -mb-40'>
						<Parallax
							translateY={[50, -50]}
							className='relative z-10'
						>
							<img src={skillsImageOne.src} alt='Skills' />
						</Parallax>
						<NestedCircles
							count={4}
							radius={isDecreaseShapeSize ? 200 : 300}
							className='absolute -top-[20%] 2xl:-top-[60%] left-[30%] opacity-20 -z-10'
						/>
						<LinesShape className='-left-24 top-[30%] rotate-45' />
						<div className='w-[260px] h-[260px] 2xl:w-[320px] 2xl:h-[320px] absolute left-[30%] 2xl:left-[10%] bottom-0 2xl:-bottom-[10%] -z-20'>
							<BasicCircle className='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 wide-screen-with-small-height:scale-75 2xl:scale-100' />
							<Parallax
								scale={[0.5, 1.5]}
								className='w-[260px] h-[260px] 2xl:w-[320px] 2xl:h-[320px]'
							>
								<Sun className='w-full h-full' />
							</Parallax>
						</div>
						<Noize className='top-[10%] 2xl:-top-[30%] left-[20%] 2xl:left-[10%]' />
					</div>
					<div className='w-full max-w-[60%] relative z-10'>
						<div className='mb-28 2xl:mb-40 relative'>
							<Parallax translateX={[-50, 0]} scale={[1.5, 1]}>
								<Title variant='h2' className='relative'>
									Tech Stack
								</Title>
							</Parallax>
							<Parallax
								translateX={[20, -20]}
								className='absolute -bottom-12 left-[20%] 2xl:left-[40%] w-[320px] h-[220px] 2xl:w-[400px] 2xl:h-[300px] -z-10 overflow-hidden'
							>
								<Parallax
									scale={[1, 2]}
									className='w-full h-full bg-[url("../../public/assets/images/background-image-4.jpg")] bg-cover bg-center bg-no-repeat -z-10'
								/>
							</Parallax>
							<Parallax
								translateY={[50, -50]}
								className='w-[200px] h-[250px] 2xl:w-[300px] 2xl:h-[350px] absolute top-1/2 -translate-y-1/2 -left-[60%] 2xl:-left-[80%]'
							>
								<Trees />
							</Parallax>
							<Rectangle className='-bottom-2 left-[10%] 2xl:left-[35%] w-[220px] h-[100px]' />
						</div>
						<Parallax
							translateY={[20, -20]}
							className='flex flex-wrap justify-start items-start gap-8 2xl:gap-10'
						>
							{SKILLS_LIST.map((item, idx) => (
								<Title
									key={idx}
									variant='h3'
									className='border-b border-border-color'
								>
									{item}
								</Title>
							))}
						</Parallax>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
