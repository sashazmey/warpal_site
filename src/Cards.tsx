import React from 'react';
import './style.scss';

interface SomeDataDto {
    title: string,  // Большие буквы
    subtitle: string, //{subtitle}:{intVal}
    intVal: number,
}

const myArray: SomeDataDto[] = [
    {
        title: "hello world",
        subtitle: "warpal site",
        intVal: 0
    },
    {
        title: "hello pvp",
        subtitle: "warpal site",
        intVal: 1
    },
    {
        title: "arena master",
        subtitle: "gachi.jpg",
        intVal: 2
    },
    {
        title: "vodka",
        subtitle: "voobrazhenie",
        intVal: 3
    },
    {
        title: "react",
        subtitle: "javascript",
        intVal: 4
    },
]

export default function Сards() {
    return (
        <div className="container">
            {myArray.map((card) => {
                return (
                    card.intVal % 2 === 0
                        ? <GreenCard  {...card} />
                        : <RedCard  {...card} />
                )
            })}
        </div>
    );
}

function GreenCard({ title, subtitle, intVal }: SomeDataDto) {
    return (
        <div className="card green_bg">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}: {intVal}</div>
        </div>
    );
}
function RedCard({ title, subtitle, intVal }: SomeDataDto) { 
    return (
        <div className="card red_bg">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}: {intVal}</div>
        </div>
    );
}

