import { ElementsContainerProps } from './CardElementProps';
import '../Response.scss';


export default function CardElement({ elements }: ElementsContainerProps) {
    return (
        <>
            {isAllElementsDataEmpty(elements)
                ? <YellowSquare />
                : elementsHaveSomeData(elements)
            }
        </>
    )
}

function isAllElementsDataEmpty(elements: { data: string }[]): boolean {
    return elements.every((element) => element.data === "")
}

function isElementHaveSomeData(element: { title: string, data: string }) {
    if (element.data !== "") {
        return (<div className="element-card">
            {element.title}: {element.data}
        </div>);
    }
    return <RedSquare />;
}

function elementsHaveSomeData(elements: { title: string, data: string }[]) {
    return elements.map(isElementHaveSomeData);
}

function RedSquare() {
    return (
        <div className="element-card">
            <div className='red-square'></div>
        </div>
    )
}

function YellowSquare() {
    return <div className='yellow-square'></div>
}

