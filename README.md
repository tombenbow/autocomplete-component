# Getting Started with Autocomplete Component
This repository contains an autocomplete component which autocompletes the users search into a 'user directory' of potential users.

The api used to generate the list of potential users is https://randomuser.me.

If more time were available, I would write more intergration tests for the Searchbox component, mocking the data returned by the randomuser api to ensure the 'suggestions' being displayed were relevant to the text entered by the user.

A potential further change would be to seperate the useSearchBox custom hook into two hooks, placing the useEffect which fetches the user data from randomuser into a second hook for further seperation of concerns.

I've kept the styling minimalistic for now, using styled-components. 

## Available Scripts

In the project directory, you can run:

### `npm i`

Install required dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
