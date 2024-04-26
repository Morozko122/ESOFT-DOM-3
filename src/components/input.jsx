import React from 'react'
export const Inputs = ({gameData, handleChange, handleNewGameSubmit}) => {
    return (
        <>
            <div className="inputNewGameBlock">
                <input name="label" value={gameData.label} type="text" onChange={handleChange} placeholder="Название игры"/>
                <input name="current" value={gameData.current} type="number" onChange={handleChange} placeholder="Выполнено"/>
                <input name="max" value={gameData.max} type="number" onChange={handleChange} placeholder="Максимум"/>
                <button type="submit" onClick={handleNewGameSubmit}>
                    Добавить
                </button>
            </div>
        </>
    );
};