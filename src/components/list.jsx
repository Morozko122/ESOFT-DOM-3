import React, { useState } from "react";
import { Card } from "./card";

const items = [{
    id: 0,
    label: 'Helldivers 2',
    current: 20,
    max: 38
  },
  {
    id: 1,
    label: 'Terraria',
    current: 92,
    max: 115
  },
  {
    id: 2,
    label: '7 Days to Die',
    current: 43,
    max: 43
  }
]

export const CardList = () => {
    const [gameData, setGameData] = useState({label:'', current:'', max: ''});
    const [array, setArray] = useState(items);
    
    const onChange = (e) => { 
        const {name, value} = e.target;
        setGameData({...gameData, [name]:value});
        console.log(name);
        console.log(value);
    };

    const newGameSubmit = () => {
        const newGame =   {
            id: array.length,
            label: gameData.label,
            current:  parseInt(gameData.current),
            max:  parseInt(gameData.max)};
        setArray((array)=>([...array, newGame]));
        console.log(array);
        setGameData({label:'', current:'', max: ''});
    };

    return (
        <div>
            <div className='achievementsBlock'>
                {array.map(item => (
                    <Card
                        key={item.id}
                        label={item.label}
                        current={item.current}
                        max={item.max}
                    />
                ))
                }
            </div>
            <input name = "label" value={gameData.label} type="text" onChange={onChange}/>
            <input name = "current" value={gameData.current} type="number" onChange={onChange}/>
            <input name = "max"  value = {gameData.max} type="number" onChange={onChange}/>
            <button type="submit" onClick={newGameSubmit}>
                Добавить
            </button>
        </div>
    )
}