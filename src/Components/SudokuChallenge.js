import React, {Component} from 'react';
import {timeInHHMMSS} from '../Library/Sudoku';

class SudokuChallenge extends Component {

    render() {
        const {opponentSolvedTime} = this.props;

        return (
            <section className="sudoku-challenge">
                <h3>Your opponent solved this sudoku in {timeInHHMMSS(opponentSolvedTime)} seconds.</h3>
            </section>
        );
    }
}

export default SudokuChallenge;