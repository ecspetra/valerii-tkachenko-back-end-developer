import Title from '@/app/components/Title'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import Rectangle from '@/app/assets/images/Rectangle'
import Mountains from '@/app/assets/images/Mountains'
import Noize from '@/app/assets/images/Noize'
import Trees from '@/app/assets/images/Trees'
import { Parallax } from 'react-scroll-parallax'

const Education = () => (
	<div
		className='relative w-screen lg:min-h-screen pt-60 pb-40 sm:py-80 xl:py-60 overflow-hidden flex items-center'
		id='education'
	>
		<Parallax
			translateY={[100, 0]}
			className='hidden lg:block w-[200px] h-[250px] 2xl:w-[250px] 2xl:h-[300px] absolute bottom-[30%] right-[5%] 2xl:right-[25%]'
		>
			<Trees variant='v2' />
		</Parallax>
		<BackgroundStraightLine className='-top-40 left-1/2 -translate-x-1/2 z-0' />
		<div className='container max-w-6xl mx-auto w-full px-6 text-center relative z-10'>
			<div className='sm:mb-28 2xl:mb-40 relative'>
				<Parallax translateY={[100, -50]} scale={[1, 1.5]}>
					<Title variant='h2' className='relative !text-center'>
						Education
					</Title>
				</Parallax>
				<Parallax
					translateX={[-20, 20]}
					className='absolute -bottom-4 lg:-bottom-12 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[20%] w-[140px] h-[100px] sm:w-[220px] sm:h-[160px] lg:w-[320px] lg:h-[220px] 2xl:w-[400px] 2xl:h-[300px] -z-10 overflow-hidden'
				>
					<Parallax
						scale={[1, 2]}
						className='w-full h-full bg-[url("../../public/assets/images/background-image-5.jpg")] bg-cover bg-center bg-no-repeat -z-10'
					/>
				</Parallax>
				<Mountains className='hidden lg:block w-full -bottom-[20%] 2xl:bottom-[140%] left-1/2 -translate-x-1/2' />
				<Rectangle className='hidden lg:block -bottom-2 left-[50%] -translate-x-1/2 w-[260px] h-[100px]' />
				<Noize className='top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-20' />
			</div>
			<Title variant='h3' className='mb-2 !text-main-color'>
				Master of Applied Mathematics
			</Title>
			<Title variant='h3' className='mb-8 !font-extralight'>
				Pryazovskyi State Technical University, Ukraine
			</Title>
			<p className='text-dark-text-color'>Sep 2013 – Jan 2019</p>
		</div>
	</div>
)

export default Education
