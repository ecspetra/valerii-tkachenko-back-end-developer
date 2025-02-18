import { FC } from 'react'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import NestedCircles from '@/app/assets/images/NestedCircles'
import classNames from 'classnames'
import summaryImageOne from '../../../../public/assets/images/summary-image-1.jpg'
import Rectangle from '@/app/assets/images/Rectangle'
import { Parallax } from 'react-scroll-parallax'

type ExperienceItemType = {
	company: string
	branch: string
	country: string
	job: string
	date: string
	responsibilities: string[]
	techStack: string[]
}

type PropsType = {
	experience: ExperienceItemType
	idx: string
	isEven: boolean
}

const ExperienceItem: FC<PropsType> = ({
	experience: {
		company,
		branch,
		country,
		job,
		date,
		responsibilities,
		techStack,
	},
	idx,
	isEven,
}) => (
	<Parallax
		translateY={[50, -10]}
		className='group mx-auto lg:mx-0 w-full max-w-2xl lg:max-w-full mb-16 lg:mb-8 pb-8 2xl:mb-16 2xl:pb-16 last:mb-0 last:pb-0 flex flex-col lg:flex-row justify-start lg:justify-between items-center'
	>
		<Parallax
			translateY={[100, -10]}
			className={classNames(
				'w-full lg:max-w-[40%] lg:px-24 mb-8 lg:mb-0',
				isEven ? 'lg:text-right lg:order-1' : 'lg:text-left lg:order-2'
			)}
		>
			<Title variant='h3' className='mb-6 2xl:mb-8'>
				{company}
				<span className='block !font-extralight'>{branch}</span>
			</Title>
			<p>{country}</p>
			<p className='text-dark-text-color'>{date}</p>
		</Parallax>
		<div
			className={classNames(
				'relative duration-300 group-hover:border-main-color w-full lg:max-w-[60%] p-6 2xl:p-12 border-4 border-main-color/20',
				isEven ? 'lg:order-2' : 'lg:order-1'
			)}
		>
			<Title
				variant='h3-horizontal-label'
				className={classNames(
					'-top-8 tabular-nums right-12',
					isEven
						? 'lg:left-[16.5%] lg:-translate-x-1/2'
						: 'lg:right-[16.5%] lg:translate-x-1/2'
				)}
			>
				{idx}
			</Title>
			<BackgroundStraightLine className='-top-6 right-6 z-0 hidden sm:block' />
			<BackgroundStraightLine
				className='-right-6 top-6 z-0 hidden sm:block'
				isHorizontal
			/>
			<Parallax
				scale={[0.5, 1.7]}
				className={classNames(
					'absolute -top-24 opacity-20 -z-10 hidden lg:block',
					isEven ? '-left-16' : '-right-16'
				)}
			>
				<NestedCircles count={4} radius={100} />
			</Parallax>
			<Title
				variant='h3'
				className='w-fit mb-6 2xl:mb-10 !text-main-color border-b border-border-color'
			>
				{job}
			</Title>
			{
				responsibilities.length > 0 
					&& (
						<ul className='mb-6 2xl:mb-2'>
							{responsibilities.map((item, idx) => (
								<li
									key={idx}
									className='mb-4 flex justify-start items-start'
								>
									<span className='mr-4'>—</span>
									{item}
								</li>
							))}
						</ul>
					)
			}
			{
				techStack.length > 0 
					&& (
						<p className='flex justify-start items-start flex-wrap'>
							<span className='mr-4'>Tech stack:</span>
							{techStack.map((item, idx) => (
								<Tag key={idx} tag={item} />
							))}
						</p>
					) 
			}
		</div>
	</Parallax>
)

export default ExperienceItem
