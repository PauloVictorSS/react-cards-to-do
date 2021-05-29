import React, { useState, useCallback } from 'react'
import NavBar from '../components/NavBar'
import "./Home.css"
import Card from '../components/Card'

function Home(): JSX.Element {

    const [cards, setCards] = useState([1]);

    const wrapperSetCardsState = useCallback(
        () => {
            setCards([...cards, cards.length]);
        },
        [setCards, cards],
    )

    return (
        <div>
            <NavBar parentStateSetter={wrapperSetCardsState} />
            <div className="cardsNumber">
                <h4>Você tem {cards.length} cards</h4>
            </div>
            <div className="cards">
                {cards.map(() => <Card />)}
            </div>
        </div>
    )

}

export default Home