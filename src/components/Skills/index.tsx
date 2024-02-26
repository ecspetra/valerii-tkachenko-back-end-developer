import { SKILLS_LIST } from '@/constants/skillsList'
import Title from '@/app/components/Title'
import NestedCircles from '@/app/assets/images/NestedCircles'
import skillsImageOne from '../../../public/assets/images/skills-image.jpg'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import LinesShape from '@/app/assets/images/LinesShape'
import Rectangle from '@/app/assets/images/Rectangle'
import Trees from '@/app/assets/images/Trees'
import BasicCircle from '@/app/assets/images/BasicCircle'
import Noise from '@/app/assets/images/Noise'
import { Parallax } from 'react-scroll-parallax'
import Sun from '@/app/assets/images/Sun'
import useDecreaseShapeSize from '@/hooks/useDecreaseShapeSize'
import backgroundImage from '../../../public/assets/images/background-image-4.jpg'
import Image from 'next/image'
import summaryImageTwo from '../../../public/assets/images/summary-image-2.jpg'

const Skills = () => {
	const isDecreaseShapeSize = useDecreaseShapeSize()

	return (
		<div
			className='relative w-screen pt-10 sm:pt-32 pb-60 xl:py-60 overflow-hidden'
			id='skills'
		>
			<BackgroundStraightLine className='hidden lg:block left-[30%] 2xl:left-[40%] top-0' />
			<BackgroundStraightLine
				className='top-[85%] rotate-180'
				isHorizontal
			/>
			<div className='container max-w-6xl mx-auto w-full px-6'>
				<div className='relative flex flex-col flex-nowrap lg:flex-row justify-start lg:justify-between items-center lg:items-end'>
					<div className='w-full relative max-w-sm lg:max-w-[40%] lg:pr-24 -mb-40 order-2 lg:order-1'>
						<Parallax
							translateY={[50, -50]}
							className='relative z-10'
						>
							<Image
								className='w-full h-full'
								src={skillsImageOne}
								alt='Skills'
								loading='eager'
							/>
						</Parallax>
						<NestedCircles
							count={4}
							radius={isDecreaseShapeSize ? 200 : 300}
							className='absolute hidden lg:block -top-[20%] 2xl:-top-[60%] left-[30%] opacity-20 -z-10'
						/>
						<LinesShape className='-left-24 top-[30%] rotate-45' />
						<div className='w-[260px] h-[260px] 2xl:w-[320px] 2xl:h-[320px] absolute left-[50%] lg:left-[30%] 2xl:left-[10%] -bottom-[10%] lg:bottom-0 2xl:-bottom-[10%] -z-20'>
							<BasicCircle className='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 wide-screen-with-small-height:scale-75 2xl:scale-100' />
							<Parallax
								scale={[0.5, 1.5]}
								className='hidden lg:block w-[260px] h-[260px] 2xl:w-[320px] 2xl:h-[320px]'
							>
								<Sun className='w-full h-full' />
							</Parallax>
						</div>
						<Noise className='-top-[30%] sm:top-[40%] lg:top-[10%] 2xl:-top-[30%] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[40%] lg:left-[20%] 2xl:left-[10%]' />
					</div>
					<div className='w-full max-w-2xl lg:max-w-[60%] relative z-10 order-1 lg:order-2'>
						<div className='sm:mb-28 2xl:mb-40 relative'>
							<Parallax translateX={[-50, 0]} scale={[1.5, 1]}>
								<Title variant='h2' className='relative'>
									Tech Stack
								</Title>
							</Parallax>
							<Parallax
								translateX={[20, -20]}
								className='absolute -bottom-4 lg:-bottom-12 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[20%] 2xl:left-[40%] w-[140px] h-[100px] sm:w-[220px] sm:h-[160px] lg:w-[320px] lg:h-[220px] 2xl:w-[400px] 2xl:h-[300px] -z-10 overflow-hidden'
							>
								<Parallax
									scale={[1, 2]}
									className='w-full h-full -z-10'
								>
									<Image
										className='w-full h-full'
										src={backgroundImage}
										alt='background-image'
										loading='eager'
									/>
								</Parallax>
							</Parallax>
							<Parallax
								translateY={[50, -50]}
								className='hidden lg:block w-[200px] h-[250px] 2xl:w-[300px] 2xl:h-[350px] absolute top-1/2 -translate-y-1/2 -left-[60%] 2xl:-left-[80%]'
							>
								<Trees />
							</Parallax>
							<Rectangle className='hidden lg:block -bottom-2 left-[35%] lg:left-[10%] 2xl:left-[35%] w-[220px] h-[100px]' />
						</div>
						<Parallax
							translateY={[20, -20]}
							className='flex flex-wrap justify-center lg:justify-start items-start gap-6 sm:gap-8 2xl:gap-10 mb-24 lg:mb-0'
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
