# Sudoku Game

It's a sudoku game created with React


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` or `yarn run eject`

It has added **gh-pages** in the package.json and it's settings following this link [How to deploy a React App in a GitHub Page](https://create-react-app.dev/docs/deployment#github-pages-https-pagesgithubcom):

So it's possible to deploy in GitHub Pages in *gh-pages* branch:

###  `npm run deploy` or `yarn run deploy` 

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Releases:

+ **1.1.0**: 
  - Keep the game saved locally once the game is loaded to avoid change to a new one once the page is refreshed.
  - Show the challenge link by default without wait to complete the game to see it (To start a challange with a friend at the same time).
+ **1.0.0**: 
  - Sudoku game structure with a level medium of difficulty for the gamer as default.
  - Share the Sudoku game once it's completed by a link to challenge with a friend.
  - Show a timer once the game is loaded and save it and send it with the challenge link.
  - Make the Sudoku game responsive for mobile and tablet.

## Future Features:

+ **1.2.0**: 
  - Add a select box to change the game level between easy, medium and expert.
  - Adding a button to pause the timer, pausing the game at the same time and then play again continuing the time counter.
   
