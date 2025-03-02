import { ElementsContainerProps } from "../interface";
import '../Response.scss';
import IsAllElementsDataEmpty from "./IsAllElementsDataEmptyComponent/IsAllElementsDataEmpty";
import IsElementsHaveSomeData from "./IsElementsHaveSomeDataComponent/IsElementsHaveSomeData";


export default function CardElement({ elements }: ElementsContainerProps) {
    return (
        <>
            <IsAllElementsDataEmpty
                elements={elements}
            />

            {!IsAllElementsDataEmpty({ elements }) &&
                <IsElementsHaveSomeData
                    elements={elements}
                />
            }
        </>
    )
}



