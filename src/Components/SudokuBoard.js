import React, {Component} from 'react';
import SudokuTimer from './SudokuTimer';
import SudokuField from './SudokuField';
import SudokuResult from './SudokuResult';
import SudokuChallenge from './SudokuChallenge';
import {opponentSolvedTime} from '../Library/Sudoku'

class SudokuBoard extends Component {

    render(){
        const {puzzle, onChange, handleSolveClick} = this.props,
              isSolved = puzzle.solvedTime;
        
        return (
            <section className={`sudoku-board${(isSolved) ? ' solved': ''}`}>
                {puzzle.challengerStartTime && <SudokuChallenge 
                    opponentSolvedTime={opponentSolvedTime(
                        puzzle.challengerStartTime,
                        puzzle.challengerSolvedTime
                    )}/>
                }
                {!isSolved && <SudokuTimer start={puzzle.startTime} isAChallenge={(puzzle.challengerStartTime)}/>}
                {isSolved && <SudokuResult sudoku={puzzle}/>}
                <div className="board-grid">
                    {puzzle.rows.map((row, i)=>(
                        <div key={row.index} className="row">
                            {row.cols.map((field)=>(
                                <SudokuField key={field.col} field={field} onChange={onChange}/>
                                ))}
                        </div>
                    ))}
                </div>
                <br/>
                <button onClick={handleSolveClick}>Solve it Magically!</button>
            </section>
        );
    }
}

export default SudokuBoard;