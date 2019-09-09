import SudokuGenerator from 'sudoku';

export function generateSudoku() {
    const fromURL = extractURLData(),
          raw = (fromURL) ? fromURL.raw : SudokuGenerator.makepuzzle(),
          rawSolution = SudokuGenerator.solvepuzzle(raw),
          rawFormatted = raw.map((e) => (e === null ? null: e+1)),
          rawSolutionFormatted = rawSolution.map((e) => e+1),
          result = {
            raw: raw,
            rows: [],
            solution: rawSolutionFormatted,
            startTime: new Date(),
            solvedTime: null,
            challengerStartTime: (fromURL && fromURL.startTime) || null,
            challengerSolvedTime: (fromURL && fromURL.solvedTime) || null
          };
    
    for(let i = 0; i < 9; i++) {
        const row = {cols:[], index: i};
        for(let j=0; j<9; j++) {
            const value = rawFormatted[i*9+j],
                  col = {
                      row: i,
                      col: j,
                      value: value,
                      readonly: (value !== null)
                  };
            row.cols.push(col);
        }
        result.rows.push(row);
    }
    return result;
  }

export function checkSolution(sudokuPuzzle) {
    const candidate = sudokuPuzzle.rows
        .map((row) => row.cols.map((col) => col.value))
        .flat();

    for(let i = 0; i < candidate.length; i++) {
        if(null === candidate[i] || candidate[i] !== sudokuPuzzle.solution[i]) {
        return false;
        }
    }
    return true;
}

export function shareURL(sudoku) {
    const data = {
            raw: sudoku.raw,
            startTime: sudoku.startTime,
            solvedTime: sudoku.solvedTime
        },
        query = btoa(JSON.stringify(data));
    console.log('Share Sudoku Data:', data);
    return document.location.href.replace(/\?.+$/, '') + `?sudoku=${query}`;
}

export function extractURLData() {
    const match = document.location.search.match(/sudoku=([^&]+)/);
    let result = null;
    if(match) {
        result = JSON.parse(atob(match[1]));
        console.log('Got from URL:', result);
    }
    return result;
}

export function opponentSolvedTime(startTime, solvedTime) {
    let endTime = (startTime) ? Math.floor(
        (new Date(solvedTime).getTime() - new Date(startTime).getTime())/1000
        ) : null;
    
    return endTime;
}

export function timeInHHMMSS(seconds) {
    let time = '00:00:00';

    const secToMilisecs  = 1000,
          minToMilisecs  = 60 * secToMilisecs,
          hourToMilisecs = 60 * minToMilisecs,
          dayToMilisecs  = 24 * hourToMilisecs;

    let timeInDays  = Math.floor(seconds  / dayToMilisecs),
        timeInHours = Math.floor((seconds - timeInDays) / hourToMilisecs),
        timeInMins  = Math.floor((seconds - timeInHours) / minToMilisecs),
        timeInSecs  = Math.floor(seconds  - timeInMins);

    const getInTime = (timeSecs, type) => {
        let time = 0;

        const aDay  = 24*60*60,
              anHr = 60*60,
              aMin = 60,
              aSec = 60,
              days  = Math.floor(timeSecs / aDay),
              hours = Math.floor((timeSecs - days*anHr) / anHr),
              mins  = Math.floor((timeSecs - hours*aMin) / aMin),
              secs  = Math.floor(timeSecs - mins*aSec);
        
        switch(type) {
            case 'days': time = days; break;
            case 'hours': time = hours; break;
            case 'mins': time = mins; break;
            default: time = secs;
        }

        if(10 > time) {
            time = '0' + time;
        }

        return time;
    }

    timeInDays = getInTime(timeInSecs, 'days');
    timeInHours = getInTime(timeInSecs, 'hours');
    timeInMins = getInTime(timeInSecs, 'mins');
    timeInSecs = getInTime(timeInSecs);

    time = ((timeInDays*1 && timeInDays + 'd ') || '') + timeInHours + ':' + timeInMins + ':' + timeInSecs;

    return time;
}