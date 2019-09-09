import React, {Component} from 'react';
import SudokuBoard from './Components/SudokuBoard';
import {generateSudoku, checkSolution, shareURL} from './Library/Sudoku';
import Produce from 'immer';
import './App.css';

class App extends Component{

  state = Produce({},()=>({
    sudokuPuzzle: generateSudoku()
  }));

  handleChange = (e) => {
    let valueStr = ((e.value && e.value.toString()) || ''),
        value = (1 < valueStr.length) ? parseInt(valueStr[0]) : e.value;

    this.setState(
      Produce((state) => {
        state.sudokuPuzzle.rows[e.row].cols[e.col].value = value;
        state = this.handleSolving(state);
      })
    );
  }

  handleSolving = (state) => {
    if(!state.sudokuPuzzle.solvedTime) {
      const isSolved = checkSolution(state.sudokuPuzzle);
      if(isSolved) {
        state.sudokuPuzzle.solvedTime = new Date();
        state.sudokuPuzzle.shareURL = shareURL(state.sudokuPuzzle);
      }
    }
    return state;
  }

  solveSudoku = (e) => {
    this.setState(
      Produce((state) => {
        console.log('Solution: ', state.sudokuPuzzle);
        state.sudokuPuzzle.rows.forEach((row)=>{
          row.cols.forEach(col=>{
            col.value = state.sudokuPuzzle.solution[col.row * 9 + col.col];
          });
        });
      })
    );
  }

  showSudokuTitle() {
    return (this.state.sudokuPuzzle.challengerStartTime) ? 'SUDOKU CHALLENGE!!!' : 'Suduko Game';
  }

  render() {
    const addCurrentYear = () => {
            let addCurrentYear = '',
                currentYear = new Date().getFullYear();
            
            if(2019 !== currentYear) {
              addCurrentYear = '-' + currentYear;
            }

            return addCurrentYear;
          };

    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.showSudokuTitle()}</h1>
        </header>
        <main>
          <SudokuBoard 
            puzzle={this.state.sudokuPuzzle}
            onChange={this.handleChange}
            handleSolveClick={this.solveSudoku}
            hiddingSolveBtn={true}
          />
        </main>
        <footer>
          <p>&copy; 2019{addCurrentYear()} - Created by <a href="https://genesisappsweb.com" target="_blank" rel="noopener noreferrer">Géne-Sis Apps Web</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
