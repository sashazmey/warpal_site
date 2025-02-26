import {ElementsContainerDto} from "../interface"

export default function CardElement({elements}: ElementsContainerDto) {
    return (
        elements.every((element) => element.data === "") ?
            <div className='yellow-square'></div>
            :
            elements.map((element) => (
                <div className="element-card">
                    {element.data ? (<div className="element-card__content">{element.title}: {element.data}</div>
                    ) : (
                        <div className='red-square'></div>)}
                </div>
            ))
    )
}