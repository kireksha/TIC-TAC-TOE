import { connect } from "react-redux"
import { Component } from "react";

class InformationLayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: props.currentPlayer,
            isEnded: props.isEnded,
            isDraw: props.isDraw
        }
    };

    render() {
        return (
            <>
                {
                    (!this.state.isEnded && !this.state.isDraw) &&
                    <h1>Turn {this.state.currentPlayer} </h1>
                }
                {
                    this.state.isEnded &&
                    <h1>Winner {this.state.currentPlayer}</h1>
                }
                {
                    this.state.isDraw &&
                    <h1>Draw</h1>
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

