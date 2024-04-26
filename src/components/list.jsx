import React, { useState } from "react";
import { Card } from "./card";
import { v4 as uuidv4 } from 'uuid';
import './list.css'
import { Inputs } from './input';

const items = [{
    id: 'dcf2d487-8881-46af-8f78-1a7772ba9a38',
    label: 'Helldivers 2',
    current: 20,
    max: 38
},
{
    id: 'c2cb4c6d-0a2b-410d-bbd5-abf47c04084a',
    label: 'Terraria',
    current: 92,
    max: 115
},
{
    id: 'f2dc6807-e55d-4329-a9be-ae6dbe7ca8e1',
    label: '7 Days to Die',
    current: 43,
    max: 43
}
]

export const CardList = () => {
    const [gameData, setGameData] = useState({ label: '', current: '', max: '' });
    const [array, setArray] = useState(items);
    const [currentFilter, setFilter] = useState('unfiltered');
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGameData({ ...gameData, [name]: value });
    };

    const handleNewGameSubmit = () => {
        const newGame = {
            id: uuidv4(),
            label: gameData.label,
            current: parseInt(gameData.current),
            max: parseInt(gameData.max)
        };
        setArray((array) => ([...array, newGame]));
        setGameData({ label: '', current: '', max: '' });
    };

    const onDeleteFromList = (id) => {
        const filterArray = array.filter(item => item.id !== id);
        setArray(filterArray);
    };

    const onFilterChange = (e) => {
        setFilter(e.target.value);
        console.log(currentFilter);
    }

    const applyFilter = (currentFilter) => {
        switch (currentFilter) {
            case 'unfiltered':
                return array.filter(item => true);
            case 'notstarted':
                return array.filter(item => item.current === 0);
            case 'inprogress':
                return array.filter(item => item.current > 0 && item.current < item.max);
            case 'completed':
                return array.filter(item => item.current === item.max);
            default:
                return items;
        }
    };
    const filteredItems = applyFilter(currentFilter);
    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Скрыть форму добавления' : 'Показать форму добавления'}
            </button>
            {isVisible && <Inputs gameData={gameData} handleChange={handleChange} handleNewGameSubmit={handleNewGameSubmit} />}
            <div className="filterBlock">
                <select value={currentFilter} onChange={onFilterChange}>
                    <option value="unfiltered">Все</option>
                    <option value="notstarted">Не начаты</option>
                    <option value="inprogress">В прогрессе</option>
                    <option value="completed">Завершены</option>
                </select>
            </div>
            <div className='achievementsBlock'>
                {filteredItems.map(item => (
                    <Card
                        key={item.id}
                        label={item.label}
                        current={item.current}
                        max={item.max}
                        onDeleteFromList={() => onDeleteFromList(item.id)}
                    />
                ))}
            </div>
        </div>

    )
}