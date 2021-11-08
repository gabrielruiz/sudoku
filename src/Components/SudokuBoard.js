import React, {Component} from 'react';
import SudokuTimer from './SudokuTimer';
import SudokuField from './SudokuField';
import SudokuResult from './SudokuResult';
import SudokuChallenge from './SudokuChallenge';
import {opponentSolvedTime} from '../Library/Sudoku'

class SudokuBoard extends Component {

    state = {
        isTimePaused: false
    }

    timerChanged(value) {
        this.setState({
            isTimePaused: value
        })
    }

    render(){
        const {puzzle, onChange, handleSolveClick, hiddingSolveBtn} = this.props,
              isSolved = puzzle.solvedTime;
        
        return (
            <section className={`sudoku-board${(isSolved) ? ' solved': ''}`}>
                {puzzle.challengerSolvedTime && <SudokuChallenge 
                    opponentSolvedTime={opponentSolvedTime(
                        puzzle.challengerStartTime,
                        puzzle.challengerSolvedTime
                    )}/>
                }
                {isSolved && <SudokuResult sudoku={puzzle}/>}
                <SudokuTimer start={puzzle.startTime} isAChallenge={(puzzle.challengerStartTime)} isSolved={isSolved} onChange={this.timerChanged.bind(this)}/>
                {!this.state.isTimePaused && <div className="board-grid">
                    {puzzle.rows.map((row, i)=>(
                        <div key={row.index} className="row">
                            {row.cols.map((field)=>(
                                <SudokuField key={field.col} field={field} onChange={onChange}/>
                                ))}
                        </div>
                    ))}
                </div>}
                {this.state.isTimePaused && <h2 className="board-grid-paused">Game Paused!</h2>}
                <br/>
                {!hiddingSolveBtn && <button onClick={handleSolveClick}>Solve it Magically!</button>}
                
            </section>
        );
    }
}

export default SudokuBoard;