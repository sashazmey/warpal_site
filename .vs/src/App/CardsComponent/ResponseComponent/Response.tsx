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
                    <CardElement
                        elements={response.elements}
                    />
                </div>
            )
        })
    )
}

