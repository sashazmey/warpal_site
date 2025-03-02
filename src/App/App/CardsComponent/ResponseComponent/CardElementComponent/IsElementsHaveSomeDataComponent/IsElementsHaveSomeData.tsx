import '../../../ResponseComponent/Response.scss'
import { ElementsContainerProps } from '../../../ResponseComponent/interface';

export default function IsElementsHaveSomeData({ elements }: ElementsContainerProps) {
    return (

        elements.map((element) => {
            if (element.data !== "") {
                return (<div className="element-card">
                    {element.title}: {element.data}
                </div>)
            }
            return <Redsquare/>
        })
    )
}


function Redsquare() {
    return (
        <div className="element-card">
            <div className='red-square'></div>
        </div>
    )
}