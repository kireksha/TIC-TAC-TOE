import PropTypes from 'prop-types'

const InformationLayout = ({ isEnded, isDraw, currentPlayer }) => {
    return (
        <>
            {
                (!isEnded && !isDraw) &&
                <h1>Turn {currentPlayer}</h1>
            }
            {
                isEnded &&
                <h1>Winner {currentPlayer}</h1>
            }
            {
                isDraw &&
                <h1>Draw</h1>
            }
        </>
    )
}

InformationLayout.propTypes = {
    isEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    currentPlayer: PropTypes.string,
}

export default InformationLayout

