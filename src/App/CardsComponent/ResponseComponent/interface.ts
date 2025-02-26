export interface ElementDto {
    title: string,
    data: string
}

export interface ElementsContainerDto {
    elements: ElementDto[]
}

export interface ResponseDto {
    title: string,
    subtitle: string,
    elements: ElementDto[]
}

export interface DataContainerResponseDto {
    response: ResponseDto[]
}

