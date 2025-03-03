import '../Response.scss';
import { ElementDto } from "../interface"

interface CardElementProps {
    elements: ElementDto[]
}

export default function CardElement({ elements }: CardElementProps) {
    return (
        <>
            {isAllElementsDataEmpty(elements)
                ? <YellowSquare />
                : <CardElementContent
                    elements={elements}
                />
            }
        </>
    )
}

function isAllElementsDataEmpty(elements: { data: string }[]): boolean {
    return elements.every((element) => element.data === "")
}

function CardElementContent({ elements }: CardElementProps) {
    return (
        elements.map((element) => {
            if (element.data !== "") {
                return (<div className="element-card">
                    {element.title}: {element.data}
                </div>)
            }
            return <RedSquare />
        })
    )
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

