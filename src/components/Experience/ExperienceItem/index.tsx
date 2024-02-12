import { FC } from 'react'
import Title from '@/app/components/Title'
import Tag from '@/components/Tag'
import BackgroundStraightLine from '@/app/assets/images/BackgroundStraightLine'
import NestedCircles from '@/app/assets/images/NestedCircles'
import classNames from 'classnames'

type ExperienceItemType = {
	company: string
	branch: string
	country: string
	job: string
	date: string
	responsibilities: string[]
	teckStack: string[]
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
		teckStack,
	},
	idx,
	isEven,
}) => (
	<div className='w-full mb-8 pb-8 2xl:mb-16 2xl:pb-16 last:mb-0 last:pb-0 flex justify-between items-center'>
		<div
			className={classNames(
				'w-full max-w-[40%] p-12',
				isEven ? 'text-right order-1' : 'text-left order-2'
			)}
		>
			<Title variant='h3' className='!mb-4'>
				<span className='text-main-color border-b border-border-color'>
					{company}
				</span>
				<span className='ml-2 !font-extralight'>{branch}</span>
			</Title>
			<p>{country}</p>
			<p>{date}</p>
		</div>
		<div
			className={classNames(
				'relative w-full max-w-[60%] p-12 border border-border-color bg-stone-900',
				isEven ? 'order-2' : 'order-1'
			)}
		>
			<Title
				variant='h3-horizontal-label'
				className={classNames(
					'-top-8 tabular-nums',
					isEven
						? 'left-[16.5%] -translate-x-1/2'
						: 'right-[16.5%] translate-x-1/2'
				)}
			>
				{idx}
			</Title>
			<BackgroundStraightLine className='-top-8 right-6 z-0' />
			<BackgroundStraightLine
				className='-right-8 top-6 z-0'
				isHorizontal
			/>
			<NestedCircles
				count={4}
				radius={100}
				className={classNames(
					'absolute -top-24 opacity-15 -z-10',
					isEven ? '-left-16' : '-right-16'
				)}
			/>
			<Title variant='h3' className='!mb-8'>
				{job}
			</Title>
			<ul className='mb-8'>
				{responsibilities.map((item, idx) => (
					<li
						key={idx}
						className='mb-1 flex justify-start items-start'
					>
						<span className='mr-4'>—</span>
						{item}
					</li>
				))}
			</ul>
			<p className='flex justify-start items-start flex-wrap'>
				<span className='mr-4'>Teck stack:</span>
				{teckStack.map((item, idx) => (
					<Tag key={idx} tag={item} />
				))}
			</p>
		</div>
	</div>
)

export default ExperienceItem
