import React, {Component} from 'react';

class SudokuChallenge extends Component {

    render() {
        const {opponentSolvedTime} = this.props;

        return (
            <section className="sudoku-challenge">
                <h3>Your opponent solved this sudoku in {opponentSolvedTime} seconds.</h3>
            </section>
        );
    }
}

export default SudokuChallenge;