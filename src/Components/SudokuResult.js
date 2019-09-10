import React, {Component} from 'react';

class SudokuResultTime extends Component {

    render() {
        const {sudoku} = this.props,
              elapsed = Math.floor((sudoku.solvedTime.getTime() - sudoku.startTime.getTime())/1000);

        return (
            <section className="sudoku-resultTime">
                <h2>You Solved it!!</h2>
                <h3>You solved the Sudoku in {elapsed} seconds</h3>
                <p>Challenge a Friend (or enemy) to solved it in less time: <a href={sudoku.shareURL} target="_blank" rel="noopener noreferrer">Share Link</a></p>
            </section>
        );
    }
}

export default SudokuResultTime;