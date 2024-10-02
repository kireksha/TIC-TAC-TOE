import { store } from "../../store"

const InformationLayout = () => {
    return (
        <>
            {
                (!store.getState().isEnded && !store.getState().isDraw) &&
                <h1>Turn {store.getState().currentPlayer}</h1>
            }
            {
                store.getState().isEnded &&
                <h1>Winner {store.getState().currentPlayer}</h1>
            }
            {
                store.getState().isDraw &&
                <h1>Draw</h1>
            }
        </>
    )
}

export default InformationLayout

