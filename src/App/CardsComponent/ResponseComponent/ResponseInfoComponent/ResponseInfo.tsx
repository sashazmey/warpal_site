import './ResponseInfo.tsx';
import { ResponseDto } from '../interface.ts';

export default function ResponseInfo({title, subtitle, elements}: ResponseDto) {
    return (
        <>
            <div className="response-container__title">{title}</div>
            <div className="response-container__subtitle">{subtitle}: {elements.length}</div>
        </>
    );
}