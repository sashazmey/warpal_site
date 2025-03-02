import GreenCard from './GreenCardComponent/GreenCard';
import RedCard from './RedCardComponent/RedCard';
import '../CardsComponent/Cards.scss';


interface SomeDataDto {
    title: string,
    subtitle: string,
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

export default function Cards() {
    return (
        <div className="container">
            {myArray.map((card) => {
                return (
                    card.intVal % 2 === 0
                        ?
                        <GreenCard
                            title={card.title}
                            subtitle={card.subtitle}
                            intVal={card.intVal}
                        />
                        :
                        <RedCard
                            title={card.title}
                            subtitle={card.subtitle}
                            intVal={card.intVal}
                        />
                )
            })}
        </div>
    );
}











