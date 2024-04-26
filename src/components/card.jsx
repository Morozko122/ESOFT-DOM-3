import './card.css'
export const Card = ({label, current, max, onDeleteFromList}) => {
    const progression = (current/max).toFixed(2)*100;
    return(
        <div className="card">
            <h1>{label}</h1>
            <progress value={current} max={max} />
            <p>Выполнено достижений {current} / {max}, {progression} %</p>
            <button className="deleteButton" onClick={onDeleteFromList}>Удалить</button>
        </div>
    );
}