import {FC} from 'react'
import classNames from "classnames";

type PropsType = {
    className?: string
    isHorizontal?: boolean
    squareSize?: 3 | 6 | 8
}
const BackgroundStraightLine: FC<PropsType> = ({className, isHorizontal = false, squareSize}) => {
    return (
        <span className={classNames(`${isHorizontal ? 'w-full h-[1px] bg-gradient-to-l' : 'w-[1px] h-full bg-gradient-to-b'} from-stone-700 to-transparent absolute`, className)}>{squareSize && <span className={classNames( `w-${squareSize} h-${squareSize} border border-stone-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`)} />}</span>
    )
}

export default BackgroundStraightLine