export const Card = ({label, current, max}) => {
    return(
        <div className="card">
            <h1>{label}</h1>
            <progress value={current} max={max} />
            <p>Выполнено достижений {current} / {max}</p>
        </div>
    );
}