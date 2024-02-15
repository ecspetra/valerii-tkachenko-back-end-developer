import Title from '@/app/components/Title'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import Rectangle from '@/app/assets/images/Rectangle'
import Mountains from '@/app/assets/images/Mountains'

const Education = () => (
	<div
		className='relative w-screen min-h-screen py-60 overflow-hidden flex items-center'
		id='education'
	>
		<BackgroundStraightLine className='-top-40 left-1/2 -translate-x-1/2 z-0' />
		<div className='container max-w-6xl mx-auto w-full px-6 text-center relative z-10'>
			<Title variant='h2' className='!mb-40 relative'>
				Education
				<Mountains className='w-full absolute bottom-[140%] left-1/2 -translate-x-1/2' />
				<Rectangle className='-bottom-2 left-[50%] -translate-x-1/2 w-[260px] h-[100px]' />
				<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-20 bg-[url("../../public/assets/images/noize-circle.svg")] bg-cover bg-center bg-no-repeat -z-10' />
				<div className='absolute -bottom-12 left-[20%] w-[400px] h-[300px] max-h-screen bg-[url("../../public/assets/images/test/IMG_6208.JPG")] bg-cover bg-center bg-no-repeat -z-10' />
			</Title>
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
