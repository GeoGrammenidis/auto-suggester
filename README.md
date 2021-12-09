# Auto-suggester

## Instructions

Create an auto-suggest input field where the user would type at least 3 letters of a Hacker News story title and display the available stories in a dropdown list, similar to the following image:

![Screenshot](./prototype.png)

### Requirements

- Implement your solution using JavaScript (or TypeScript) and React;
- Your target browser is the latest Chrome or Firefox - no need to cater for outdated browsers;
- Use the Hacker News Search API to retrieve stories in real-time (https://hn.algolia.com/api). No authentication required;
- You may use Create React App (CRA) or any similar scaffolding tool;
- You may use any functional libraries of your choice, e.g. lodash, rxjs, redux, react-query, etc;
- You must NOT use any UI component library or CSS framework (e.g. material-ui, bootstrap, tailwind, etc) as it beats the purpose of this exercise;
- Include simple instructions on how to run your code on a browser. A short list of commands would suffice.

### Notes

- The button is decorative. The dropdown should trigger on typing 3+ chars, not on clicking the button;
- The search should retrieve exact matches on story titles. No fuzzy search;
- Limit suggested results to 5;
- Tests are optional, but highly valued.

### Skills assessment

- Familiarity with JavaScript and React;
- HTML/CSS skills;
- Attention to detail;
- Ability to find the right tools for the job;
- Logic and code structure.

### Time requirement

2-4 hours

## Solution:

### After cloning the project

- Run `npm i`

### To run this project

- Run `npm run start`

### To build this project

- Run `npm run build`

### To run tests for this project

- Run `npm test`

### Live demo

- Nothing is yet written in this section.

### Improvements in mind

- Commends in the code.
- Build tests for each component.

### Bugs found

- Nothing is yet written in this section.

## How I worked on this project step by step

For this project, some knowledge of html, css, js & react is needed. If you don't know about npm, git, webpack, eslint & prettier you should at least check what they are and how they work before continuing.
I didn't use `npx create-react-app ...` to demostrate my ability to choose my tools and I like to use only whatever I need.

### Step 1, Creating a basic app

Commands I used for this step:

- `npm i`
- `npm i -D webpack webpack-cli webpack-dev-server webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-env @babel/preset-react style-loader css-loader`

[package.json](package.json) was created by the `npm i` command.
[package-lock.json](package-lock.json) was generated automatically and shouldn't be touched. For more info about it, read [this](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json).

Webpack

- basic dependencies needed for server to work:
  - [webpack](https://webpack.js.org/concepts/)
  - webpack-cli
  - [webpack-dev-server](https://webpack.js.org/api/webpack-dev-server/#root)
- plugin needed for html files:
  - [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)
- loader dependencies needed for js & rxjs:
  - [babel-loader](https://webpack.js.org/loaders/babel-loader/#root)
  - [@babel/core](https://babeljs.io/docs/en/babel-core)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) (added to options-presets)
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) (added to options-presets)
- loaders needed for css:
  - [style-loader](https://webpack.js.org/loaders/style-loader/#root)
  - [css-loader](https://webpack.js.org/loaders/css-loader/#root)
- entry point:
  - I did set the [entry](https://webpack.js.org/concepts/#entry) point in the [webpack configuration file](webpack.config.js)
- mode:
  - I did set [mode](https://webpack.js.org/concepts/#mode) to "development" temporary in the [webpack configuration file](webpack.config.js)

Prepared the react app in "src" folder:

- [index.html](./src/index.html), has the html head & a body with an element, which should have id "app" to be able to be targeted later
- [index.js](./src/index.js), creates the app component and put it into the element with id "app" (don't forget to import the css to test it)
- [app.js](./src/app.js), contains the main app
- [index.css](./src/index.css), contains the css which is going to apply to the whole app

The project at the of this step has the essentials to run with the command `webpack serve --open`.

### Step 2, Keeping some good practices

Commands I used for this step:

- `git init`
- `npm i -D eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-hooks eslint-webpack-plugin path browserlist`
- `./node_modules/.bin/eslint --init`

Git installation:

- git initiliazed
- [.gitignore](.gitignore) file created (always ignore at least node_modules/ & dist/ )
- committing in regular basis
- using descriptive messages & tags to keep things clear

Specified the version of npm to keep consistency:

- [.nvmrc](.nvmrc) file created
- I set engines in [package.json](package.json)

installing eslint and its plugins to reduce errors while coding:

- [eslint](https://www.npmjs.com/package/eslint) _I have run`./node_modules/.bin/eslint --init` to create [eslint config file](.eslintrc.json)_
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) _this one should be installed from the last command_
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) _to help with accessibilities issues such as a missing property alt from an img element_
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) _to track misspelt imports and other errors about importing_
- [eslint-plugin-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) _helps to deal with hooks_
- also, node env was set to true as well, otherwise [webpack.config file](webpack.config.js) would have errors
- last but not least detected react version

further changes in [webpack.config file](webpack.config.js):

- have added a plugin to resolve some javascript eslint issues `eslint-webpack-plugin`
- for paths to have better scalability imported and used `paths` package
- have set [ouput](https://webpack.js.org/concepts/#output) & [devServer](https://webpack.js.org/configuration/dev-server/#root) to not let it to the default ones
- have set [devtool](https://webpack.js.org/configuration/devtool/#root) to inline-source-map to help with debugging javascript in browser for development mode
- have set [mode](https://webpack.js.org/concepts/#mode) based on an environment variable to be able to easily switch between modes (default is good to be "development")

prettier:

- There are several ways to deal with prettier. [.prettierrc.json](.prettierrc.json) should contain an empty object or the extra rules for formatting we want to change for the specific project. I have configured my VScode to format on save when this file exists. The extension I use is [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

In [package.json](package.json) is good to have:

- [description](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#version) a description is always good to have
- [scripts](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#scripts) for webpack development & production mode. Later on, a script for tests should be added but for now we left it as is
- [author](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#people-fields-author-contributors) always good to mention the author or the contributors
- [email](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#bugs) an e-mail for people to be able to report to you issues
- [repository](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#repository) to easily access the online repo
- [browserslist](https://github.com/browserslist/browserslist) to show which browsers versions are supported. (this one is an npm package)

Created a README file with markup, which at least contains:

- the title of the project
- small description of what it does
- how to run the project
- how to build it
- how to run tests
- improvements in mind
- list of any bugs found
- link with a live demo
- links with sources

### Step 3, Creating initial structure

For accessibility reasons we will use a heading, which is going to be hidden. Two dummy elements, one before and one after the suggester, will be used for demo purposes.

For this suggester component we can use one of those 2 element structures:

Structure 1 (the one I choose):

- form
  - label
  - input
  - button

Structure 2:

- form
  - label
    - input
  - button

The label element in the 1st structure needs the `for` attribute for accessibility reasons while the input element will need an `id` to be able to be associated with the label. With this approach we won't need an extra span element to be able to target the text in the label later on, as well as I prefer this kind of structure since it seems clearer for me.

The input is expected to be type of text and it is good to have a name as well.

All the elements will need a class so that we will be able to target them with css later on.

A good idea here is to add div elements to create rows since we want input & button in the same row.

### Step 4, CSS

To keep everything centralized, I plan to use css variables. Every component will have its own css but most of the values will be coming from css-variables which are going to be initialized in suggesters main file of css. Another advantage of this is that if we want in the future, we may easily change those values even with javascript, which gives a lot of room for creativity.

### Step 5, Building small components

- [SuggesterLabel](./src/components/Suggester/SuggesterLabel/SuggesterLabel.js)
  - input id should be passed for `for` attribute
  - the text is by default "Search" but it can be altered if passed as a child
- [SuggesterSubmit](./src/components/Suggester/SuggesterSubmit/SuggesterSubmit.js)
  - the text is by default "SEARCH" but it can be altered if passed as a child
  - the button should become disable in case of empty string or maybe an error
- [SuggesterInput](./src/components/Suggester/SuggesterInput/SuggesterInput.js)
  - input id should be passed for `id` attribute
  - `placeholder`, `name` & `type` have default values but can be changed
  - a wrapper is needed so that it will be easier to position search results later on.
  - a handler is needed but will be added after commiting.

### Step 6, Connecting the API

- [fetching api](./src/utils/api.js)
  - created the url with the params needed
  - created an Observable. Switchmap is used so it will always switch to the latest fetch.
  - return an Observable to be subscribed
- [useSuggester hook](./src/hooks/useSuggester.js)
  - created a state for the suggester
  - useReducer used because I prefer an imperative way of programming.
  - a useEffect to track input changes which:
    - checks the inputs value if is greater or equal than 3 otherwise, it won't try to fetch anything.
    - tries to fetch from the API with the help of the [util/api.js](./src/utils/api.js)
    - a useRef flag is being used to make sure that the component is still mounted when the response comes
  - a function to handle the event from the input. Also, a debounce of .5s on the input was added in [suggesterInput](./src/components/Suggester/SuggesterInput/SuggesterInput.js) to let the user type and not spam with unnecessary API calls.
  - returned values for now:
    - handleChange, the function that handles the input on change event
    - searchText, the value of the input
    - error, a boolean value that is true if an error occurs
    - stories, to be used shortly to display the results on the screen.

### Step 7, Added components for results

- [SuggesterResults](./src/components/Suggester/SuggesterInput/SuggesterResults/SuggesterResults.js)
  - this should include all the results
  - class `_open` is added when there are results, to help with css
  - worth mentioning that there is added css to transition the height smoothly when the number of the results change
  - an animation added so that the border and the shadow will be kept until the transition ends when there is no result
- [SuggesterStory](./src/components/Suggester/SuggesterInput/SuggesterResults/SuggesterStory/SuggesterStory.js)
  - this is the container for each result. It includes a title & details about the story.
- [SuggesterStoryTitle](./src/components/Suggester/SuggesterInput/SuggesterResults/SuggesterStory/SuggesterStoryTitle/SuggesterStoryTitle.js)
  - before displaying the title:
    - stringified emphasized elements are found in the string and saved in an array
    - then the title is split with delimiter the emphasized elements
    - and then with the help of reduce function reconstructed it with html elements this time.
- [SuggesterStoryDetails](./src/components/Suggester/SuggesterInput/SuggesterResults/SuggesterStory/SuggesterStoryDetails/SuggesterStoryDetails.js)
  - displaying details about the result

hooks added to separate logic

- [useSetResultsNumberForCss](./src/hooks/useSetResultsNumberForCss.js)
  - changes CSS variable to change the height of the results
  - sets the number of the results which are going to be displayed
- [useStoryValidation](./src/hooks/useStoryValidation.js)
  - validates the data from stories object
  - converts invalid data to valid ones

### Step 8, Changes for accessibility reasons

- key event listener when input is focused:
  - ESC, clears the results
  - enter, when there are results prevent default behaviour and writes the result in the input
  - up & down keys, select as active the previous/next result
- mousemove, when the mouse moves on a non-active result, makes the result active.
- input changes to inform screen reader users:
  - role:combobox, informs the input field is an auto-suggest.
  - aria-autocomplete:both, informs for 2 options available:
    - select from the suggestion list
    - type your own input
  - aria-controls, is needed to show which area is controlled
  - aria-expanded, is needed to inform if the area is expanded or not
  - aria-activedescendant, is needed to inform about the active option
- aria-live: assertive, to announce each time the number of results found
- a text before input to inform that users can navigate results with up and down arrow keys

### Step 9, Added cache

Cached results from fetching because we need to have latest theresults. There is no point in fetching again something that is already fetched but we keep it only for 5 mins so that we keep results fresh.

### Step 10, Added loading state

Supported loading. I had already prepared the states to support it. The search was done in 2 state changes for that reason.

### Step 11, CSS for other viewports

Changed a bit the css to be able to support other viewports. Could be done in multiple ways but I chose to simplify the results and reduce the size of the title a bit.
