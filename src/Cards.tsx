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
                    <div className={card.intVal % 2 === 0 ? 'card green_bg' : 'card red_bg'} >
                        <div className="card__title">{card.title}</div>
                        <div className="card__subtitle">{card.subtitle}: {card.intVal}</div>
                    </div>
                )
            })}
        </div>
    );
}

//style={{ backgroundColor: (card.intVal % 2 === 0) ? 'green' : 'red' }}