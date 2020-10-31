import React, {Component} from 'react';
import {timeInHHMMSS, removeSavedPuzzle, shareURL} from '../Library/Sudoku';

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

    newSudoku() {
        removeSavedPuzzle();
        window.location.href="/";
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
              {isAChallenge} = this.props;

        return (
            <section className="sudoku-timer">
                <h3>{isAChallenge ? 'Your Time': 'Time'}: {timeInHHMMSS(elapsed)}</h3>
                <p className="sudoku-actions">
                    <button className="new-sudoku-btn icon icon-sudoku" onClick={this.newSudoku}>New Sudoku Board</button>
                    <button className="share-link-btn icon icon-link" onClick={this.shareSudokuBoard.bind(this)}>Share Sudoku Board</button>
                </p>
                <p ref={(shareLink) => this.shareLinkRef = shareLink } className="message hidden"></p>
            </section>
        );
    }
}

export default SudokuTimer;