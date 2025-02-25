interface GreenCardProps {
    title: string,
    subtitle: string,
    intVal: number
}

export default function GreenCard({ title, subtitle, intVal }: GreenCardProps) {
    return (
        <div className="card green_bg">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}: {intVal}</div>
        </div>
    );
}