interface RedCardProps {
    title: string,
    subtitle: string,
    intVal: number
}

export default function RedCard({ title, subtitle, intVal }: RedCardProps) {
    return (
        <div className="card red_bg">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}: {intVal}</div>
        </div>
    );
}