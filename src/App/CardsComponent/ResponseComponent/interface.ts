export interface ElementDto {
    title: string,
    data: string
}

export interface ResponseDto {
    title: string,
    subtitle: string,
    elements: ElementDto[]
}

export interface DataContainerResponseDto {
    response: ResponseDto[]
}

export interface ResponseProps {
    title: string,
    subtitle: string,
    elements: ElementDto[]
}
