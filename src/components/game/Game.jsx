import FieldsLayout from "../fieldsLayout/FieldsLayout";
import InformatonLayout from "../information/Information";
import { store } from "../../store";
import styles from "./Game.module.css";
import { useState } from "react";

const Game = () => {
    const [render, setRender] = useState(store.getState());

    store.subscribe(() => setRender(store.getState()));

    return (
        <div className={styles.GameContainer}>
            <InformatonLayout />
            <FieldsLayout />
            {(store.getState().isEnded || store.getState().isDraw) &&
                <button className={styles.ButtonStartAgain} onClick={() => store.dispatch({ type: 'RESTART_GAME' })}>Play Again</button>
            }
        </div>
    )
}

export default Game