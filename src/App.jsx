import './App.css'
import { CardList } from './components/list'


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

function App() {
  return (
    <>
      <div>
      </div>
      <h1>Game Achievements Tracker</h1>
      <CardList items={items}/>
    </>
  )
}

export default App
