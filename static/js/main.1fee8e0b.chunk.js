(window["webpackJsonpsudoku-game"]=window["webpackJsonpsudoku-game"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n.n(o),u=(n(16),n(1)),i=n(2),s=n(4),c=n(3),h=n(5),d=n(6),m=n.n(d);function p(){var e=localStorage.getItem("puzzle");return e?JSON.parse(atob(e)):null}function f(){var e=function(){var e=document.location.search.match(/sudoku=([^&]+)/),t=null;e&&(t=JSON.parse(atob(e[1])),console.log("Got from URL:",t));return t}(),t=p(),n=e?e.raw:m.a.makepuzzle(),a=t?m.a.solvepuzzle(t.raw):m.a.solvepuzzle(n),r=t?t.raw.map((function(e){return null===e?null:e+1})):n.map((function(e){return null===e?null:e+1})),o={raw:n,rows:[],solution:a.map((function(e){return e+1})),startTime:new Date,solvedTime:null,challengerStartTime:e&&e.startTime||null,challengerSolvedTime:e&&e.solvedTime||null};!e&&t?(t.startTime=new Date(t.startTime),o=t):function(e){localStorage.setItem("puzzle",btoa(JSON.stringify(e)))}(o);for(var l=0;l<9;l++){for(var u={cols:[],index:l},i=0;i<9;i++){var s=r[9*l+i],c={row:l,col:i,value:s,readonly:null!==s};u.cols.push(c)}o.rows.push(u)}return o}function v(e){var t={raw:(e=e||p()).raw,startTime:e.startTime,solvedTime:e.solvedTime},n=btoa(JSON.stringify(t));return console.log("Share Sudoku Data:",t),document.location.href.replace(/\?.+$/,"")+"?sudoku=".concat(n)}function k(e){var t=function(e,t){var n=0,a=Math.floor(e/86400),r=Math.floor((e-86400*a)/3600),o=Math.floor((e-86400*a-3600*r)/60),l=Math.floor(e-86400*a-3600*r-60*o);switch(t){case"days":n=a;break;case"hours":n=r;break;case"mins":n=o;break;default:n=l}return 10>n&&(n="0"+n),n},n=t(e,"days");return(1*n&&n+"d "||"")+t(e,"hours")+":"+t(e,"mins")+":"+t(e)}var b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={elapsed:0},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({elapsed:Math.floor(((new Date).getTime()-e.props.start.getTime())/1e3)})}),1e3)}},{key:"componentWillUnmount",value:function(){delete this.interval}},{key:"newSudoku",value:function(){localStorage.removeItem("puzzle"),window.location.reload()}},{key:"shareSudokuBoard",value:function(){var e=this;navigator.clipboard.writeText(v()),this.shareLinkRef.innerHTML="Link copied to your clipboard, paste it wherever you want to share it <br/> (Whatsapp, Telegram, social networks, etc.)",this.shareLinkRef.className="message",setTimeout((function(){e.shareLinkRef.innerHTML="",e.shareLinkRef.className="message hidden"}),15e3)}},{key:"render",value:function(){var e=this,t=this.state.elapsed,n=this.props,a=n.isAChallenge,o=n.isSolved;return r.a.createElement("section",{className:"sudoku-timer"},!o&&r.a.createElement("h3",null,a?"Your Time":"Time",": ",k(t)),r.a.createElement("p",{className:"sudoku-actions"},r.a.createElement("button",{className:"new-sudoku-btn icon icon-sudoku",onClick:this.newSudoku},"New Sudoku Board"),!o&&r.a.createElement("button",{className:"share-link-btn icon icon-link",onClick:this.shareSudokuBoard.bind(this)},"Share Sudoku Board")),r.a.createElement("p",{ref:function(t){return e.shareLinkRef=t},className:"message hidden"}))}}]),t}(a.Component),g=n(10);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=""!==e.target.value?parseInt(e.target.value,10):null;n.props.onChange(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.props.field,{value:t}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.field;return r.a.createElement("input",{className:"field",value:e.value||"",readOnly:e.readonly,onChange:this.handleChange})}}]),t}(a.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.sudoku,t=Math.floor((e.solvedTime.getTime()-e.startTime.getTime())/1e3);return r.a.createElement("section",{className:"sudoku-resultTime"},r.a.createElement("h2",null,"You Solved it!!"),r.a.createElement("h3",null,"You solved the Sudoku in ",k(t)," seconds"),r.a.createElement("p",null,"Challenge a Friend (or enemy) to solved it in less time: ",r.a.createElement("a",{href:e.shareURL,target:"_blank",rel:"noopener noreferrer"},"Share Link")))}}]),t}(a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.opponentSolvedTime;return r.a.createElement("section",{className:"sudoku-challenge"},r.a.createElement("h3",null,"Your opponent solved this sudoku in ",k(e)," seconds."))}}]),t}(a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,n=this.props,a=n.puzzle,o=n.onChange,l=n.handleSolveClick,u=n.hiddingSolveBtn,i=a.solvedTime;return r.a.createElement("section",{className:"sudoku-board".concat(i?" solved":"")},a.challengerSolvedTime&&r.a.createElement(y,{opponentSolvedTime:(e=a.challengerStartTime,t=a.challengerSolvedTime,e?Math.floor((new Date(t).getTime()-new Date(e).getTime())/1e3):null)}),i&&r.a.createElement(S,{sudoku:a}),r.a.createElement(b,{start:a.startTime,isAChallenge:a.challengerStartTime,isSolved:i}),r.a.createElement("div",{className:"board-grid"},a.rows.map((function(e,t){return r.a.createElement("div",{key:e.index,className:"row"},e.cols.map((function(e){return r.a.createElement(O,{key:e.col,field:e,onChange:o})})))}))),r.a.createElement("br",null),!u&&r.a.createElement("button",{onClick:l},"Solve it Magically!"))}}]),t}(a.Component),T=n(7),z=(n(19),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state=Object(T.a)({},(function(){return{sudokuPuzzle:f()}})),n.handleChange=function(e){var t=e.value&&e.value.toString()||"",a=1<t.length?parseInt(t[0]):e.value;n.setState(Object(T.a)((function(t){t.sudokuPuzzle.rows[e.row].cols[e.col].value=a,t=n.handleSolving(t)})))},n.handleSolving=function(e){e.sudokuPuzzle.solvedTime||function(e){for(var t=e.rows.map((function(e){return e.cols.map((function(e){return e.value}))})).flat(),n=0;n<t.length;n++)if(null===t[n]||t[n]!==e.solution[n])return!1;return!0}(e.sudokuPuzzle)&&(e.sudokuPuzzle.solvedTime=new Date,e.sudokuPuzzle.shareURL=v(e.sudokuPuzzle));return e},n.solveSudoku=function(e){n.setState(Object(T.a)((function(e){console.log("Solution: ",e.sudokuPuzzle),e.sudokuPuzzle.rows.forEach((function(t){t.cols.forEach((function(t){t.value=e.sudokuPuzzle.solution[9*t.row+t.col]}))}))})))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"showSudokuTitle",value:function(){return this.state.sudokuPuzzle.challengerStartTime?"SUDOKU CHALLENGE!!!":"Sudoku Game"}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,this.showSudokuTitle())),r.a.createElement("main",null,r.a.createElement(j,{puzzle:this.state.sudokuPuzzle,onChange:this.handleChange,handleSolveClick:this.solveSudoku,hiddingSolveBtn:!0})),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2019",function(){var e="",t=(new Date).getFullYear();return 2019!==t&&(e="-"+t),e}()," - Created by ",r.a.createElement("a",{href:"https://genesisappsweb.com",target:"_blank",rel:"noopener noreferrer"},"G\xe9ne-Sis Apps Web"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.1fee8e0b.chunk.js.map