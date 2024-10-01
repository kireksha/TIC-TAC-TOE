import { store } from '../../store'

const InformationLayout = ({ storeState }) => {
    return (
        <>
            {
                (!storeState.isEnded && !storeState.isDraw) &&
                <h1>Turn {storeState.currentPlayer}</h1>
            }
            {
                storeState.isEnded &&
                <h1>Winner {storeState.currentPlayer}</h1>
            }
            {
                storeState.isDraw &&
                <h1>Draw</h1>
            }
        </>
    )
}

export default InformationLayout

