import '../../../ResponseComponent/Response.scss'
import { ElementsContainerProps } from '../../../ResponseComponent/interface';

export default function IsAllElementsDataEmpty({ elements }: ElementsContainerProps) {
    if (
        elements.every((element) => element.data === "")
    ) {
        return <YellowSquare />
    }
    return null;
}

function YellowSquare(){
    return <div className='yellow-square'></div>
}