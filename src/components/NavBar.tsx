import React from 'react'
import "./NavBar.css"

interface ISetFunction {
    parentStateSetter: () => void
}

function NavBar({ parentStateSetter }: ISetFunction): JSX.Element {

    const addCard = (): void => {
        parentStateSetter()
    }

    return (
        <div className="navBar">
            <h3>Meus Cards</h3>
            <button onClick={addCard}>Adicionar Card</button>
        </div>
    )
}

export default NavBar