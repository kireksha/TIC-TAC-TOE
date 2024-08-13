import FieldsLayout from "../fieldsLayout/FieldsLayout"
import InformatonLayout from "../information/Information"
import React, { useState } from 'react'
import styles from './Game.module.css'

const PLAYER = {
    crosses: 'X',
    noughts: 'O',
}

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const checkWinner = (fields, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === currentPlayer))
}

const Game = () => {
    const [fields, setFields] = useState(Array(9).fill(''))
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER.crosses)
    const [isEnded, setIsEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false)

    const handleClick = (index) => {
        if (isEnded || isDraw) {
            return
        }
        if (fields[index] !== '') {
            return
        }
        const newFields = fields.slice()
        newFields[index] = currentPlayer
        setFields(newFields)
        if (checkWinner(newFields, currentPlayer)) {
            setIsEnded(true)
            return
        }
        if (!newFields.includes('')) {
            setIsDraw(true)
            return
        }
        setCurrentPlayer((prev) => prev === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses)
    }

    const handlePlayAgainClick = () => {
        setIsDraw(false)
        setIsEnded(false)
        setCurrentPlayer(PLAYER.crosses)
        setFields(Array(9).fill(''))
    }

    return (
        <div className={styles.GameContainer}>
            <InformatonLayout isEnded={isEnded} isDraw={isDraw} currentPlayer={currentPlayer} />
            <FieldsLayout fields={fields} handleClick={handleClick} />
            {(isEnded || isDraw) &&
                <button className={styles.ButtonStartAgain} onClick={handlePlayAgainClick}>Play Again</button>
            }
        </div>
    )
}

export default Game