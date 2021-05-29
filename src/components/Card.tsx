import React from 'react'
import "./Card.css"

function Card(): JSX.Element {

    return (
        <div className="outerCard">
            <div className="innerCard">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, exercitationem.</p>
                <p className="actions">Actions</p>
                <div className="buttons">
                    <button aria-label="botão 1"><div /></button>
                    <button aria-label="botão 2"><div /></button>
                    <button aria-label="botão 3"><div /></button>
                </div>
            </div>
        </div>
    )
}

export default Card