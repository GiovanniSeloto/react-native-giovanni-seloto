import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [palyerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value)
    }

    function handleSelect() {
        setIsEditing((editin) => !isEditing)
        console.log(isEditing)

        if (isEditing) {
            onChangeName(symbol, palyerName);
        }
    }

    let input = <span className="player-name">{palyerName}</span>

    if (palyerName) {
        input = <input type="text" required value={palyerName} onChange={handleChange} />
    }

    return <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {input}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleSelect}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}