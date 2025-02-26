import './Response.scss';
import { DataContainerResponseDto } from './interface';
import ResponseInfo from './ResponseInfoComponent/ResponseInfo';
import CardElement from './CardElementComponent/CardElement';


export const myResponse: DataContainerResponseDto = {
    response: [
        {
            title: "first title",
            subtitle: "first subtitle",
            elements: [
                {
                    title: "my first title",
                    data: "my first data"
                },
                {
                    title: "my second data",
                    data: ""
                }
            ]
        },
        {
            title: "second title",
            subtitle: "",
            elements: [
                {
                    title: "empty data",
                    data: ""
                },
                {
                    title: "javascript",
                    data: ""
                },
                {
                    title: "react",
                    data: ""
                }
            ]
        },
        {
            title: "gladiator title",
            subtitle: "2200",
            elements: [
                {
                    title: "first kill",
                    data: "yes"
                },
                {
                    title: "second kill",
                    data: ""
                }
            ]
        }
    ]
}

// Для каждого response мы рисуем контейнер, в контейнере:
// 1) Заговок и подзаголовок, двоеточие, число элементов в elements
// 2) Каждый из elements это тоже карточка, с зеленым фоном, в которой написано title двоеточие data, если data не пустая. Если data пустая, то рисуется просто красный квадратик
// 3) Если все из elements имеют пустую дату, вместо карточки с зеленым фоном рисуется квадратик с желтым фоном
// 4) Разложить по компонентам


export default function Response() {
    return (
        myResponse.response.map((response) => {
            return (
                <div className="response-container">
                    <ResponseInfo
                        title={response.title}
                        subtitle={response.subtitle}
                        elements={response.elements}
                    />                   
                    <CardElement elements={response.elements} />
                </div>
            )
        })
    )
}

// elements.every((elem) => elem >= 10);