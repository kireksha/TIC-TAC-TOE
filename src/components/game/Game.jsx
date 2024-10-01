import FieldsLayout from "../fieldsLayout/FieldsLayout";
import InformatonLayout from "../information/Information";
import { store } from "../../store";
import styles from "./Game.module.css";
import { useState, useEffect } from "react";

const Game = () => {
    const [storeState, setStoreState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(setStoreState)
    }, [])

    return (
        <div className={styles.GameContainer}>
            <InformatonLayout storeState={storeState} />
            <FieldsLayout storeState={storeState} />
            {(storeState.isEnded || storeState.isDraw) &&
                <button className={styles.ButtonStartAgain} onClick={store.dispatch('RESTART_GAME')}>Play Again</button>
            }
        </div>
    )
}

export default Game