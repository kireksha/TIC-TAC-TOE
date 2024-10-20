import { connect } from "react-redux"
import { Component } from "react";

class InformationLayoutContainer extends Component {
    render() {
        return (
            <>
                {
                    (!this.props.isEnded && !this.props.isDraw) &&
                    <h1 className="text-6xl mt-20 mb-20 font-bold">Turn {this.props.currentPlayer} </h1>
                }
                {
                    this.props.isEnded &&
                    <h1 className="text-6xl mt-20 mb-20 font-bold">Winner {this.props.currentPlayer}</h1>
                }
                {
                    this.props.isDraw &&
                    <h1 className="text-6xl mt-20 mb-20 font-bold">Draw</h1>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isEnded: state.isEnded,
    isDraw: state.isDraw,
    currentPlayer: state.currentPlayer
});

const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);

export default InformationLayout

