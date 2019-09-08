import React, {Component} from 'react';

class SudokuTimer extends Component {

    state = {
        elapsed: 0
    }

    componentDidMount() {
        this.interval = setInterval(()=>{
            this.setState({
                elapsed: Math.floor(
                    (new Date().getTime() - this.props.start.getTime()) / 1000
                )
            });
        }, 1000);
    }

    componentWillUnmount() {
        delete this.interval;
    }

    render() {
        const {elapsed} = this.state,
              {isAChallenge} = this.props;

        return (
            <section className="sudoku-timer">
                <h3>{isAChallenge ? 'Your Time': 'Time'}: {elapsed} seconds</h3>
            </section>
        );
    }
}

export default SudokuTimer;