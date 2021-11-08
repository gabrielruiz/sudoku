import React, {Component} from 'react';
import {timeInHHMMSS, removeSavedPuzzle, shareURL} from '../Library/Sudoku';

class SudokuTimer extends Component {

    state = {
        elapsed: 0,
        isTimePaused: false,
        pausedTime: 0,
    }

    interval;

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

    saveCurrentTime() {
        clearInterval(this.interval);
        const pausedTime = this.state.elapsed;
        this.setState({
            pausedTime
        })
    }

    reStartTime() {
        const pausedTime = this.state.pausedTime;
        const newTime = new Date().getTime();
        this.interval = setInterval(()=>{
            this.setState({
                elapsed: Math.floor(
                    ( (new Date().getTime() - newTime) / 1000 ) + pausedTime
                )
            });
        }, 1000);
    }

    playPause() {
        const stateIsTimePaused = this.state.isTimePaused;
        const isTimePaused = !stateIsTimePaused;
        this.setState({
            isTimePaused
        });
        this.props.onChange(isTimePaused);
        if (isTimePaused) {
            this.saveCurrentTime();
        } else {
            this.reStartTime();
        }
    }

    newSudoku() {
        removeSavedPuzzle();
        window.location.reload();
    }

    shareSudokuBoard() {
        navigator.clipboard.writeText(shareURL());
        this.shareLinkRef.innerHTML = 'Link copied to your clipboard, paste it wherever you want to share it <br/> (Whatsapp, Telegram, social networks, etc.)';
        this.shareLinkRef.className = 'message';
        setTimeout(()=> {
            this.shareLinkRef.innerHTML = '';
            this.shareLinkRef.className = 'message hidden';
        }, 15000);
    }

    render() {
        const {elapsed} = this.state,
              {isAChallenge, isSolved} = this.props,
              timerStatusClassName = 'pause-sudoku-btn sudoku-time-action ';

        return (
            <section className="sudoku-timer">
                {!isSolved && <h3>{isAChallenge ? 'Your Time': 'Time'}: {timeInHHMMSS(elapsed)}&nbsp;&nbsp;&nbsp;<button className={this.state.isTimePaused ? timerStatusClassName + "sudoku-play": timerStatusClassName + "sudoku-pause" } onClick={this.playPause.bind(this)}>{this.state.isTimePaused ? 'Play': 'Pause'}</button></h3>}
                <p className="sudoku-actions">
                    <button className="new-sudoku-btn icon icon-sudoku" onClick={this.newSudoku}>New Sudoku Board</button>
                    {!isSolved && <button className="share-link-btn icon icon-link" onClick={this.shareSudokuBoard.bind(this)}>Share Sudoku Board</button>}
                </p>
                <p ref={(shareLink) => this.shareLinkRef = shareLink } className="message hidden"></p>
            </section>
        );
    }
}

export default SudokuTimer;