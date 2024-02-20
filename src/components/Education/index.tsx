import Title from '@/app/components/Title'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import Rectangle from '@/app/assets/images/Rectangle'
import Mountains from '@/app/assets/images/Mountains'
import Noize from '@/app/assets/images/Noize'
import Trees from '@/app/assets/images/Trees'

const Education = () => (
	<div
		className='relative w-screen min-h-screen py-60 overflow-hidden flex items-center'
		id='education'
	>
		<Trees variant='v2' className='w-[10%] bottom-[30%] right-[25%]' />
		<BackgroundStraightLine className='-top-40 left-1/2 -translate-x-1/2 z-0' />
		<div className='container max-w-6xl mx-auto w-full px-6 text-center relative z-10'>
			<Title variant='h2' className='!mb-40 relative'>
				Education
				<Mountains className='w-full bottom-[140%] left-1/2 -translate-x-1/2' />
				<Rectangle className='-bottom-2 left-[50%] -translate-x-1/2 w-[260px] h-[100px]' />
				<Noize className='top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
				<div className='absolute -bottom-12 left-[20%] w-[400px] h-[300px] max-h-screen bg-[url("../../public/assets/images/background-image-5.jpg")] bg-cover bg-center bg-no-repeat -z-10' />
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
