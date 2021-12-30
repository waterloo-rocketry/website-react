# Waterloo Rocketry Website - React Revamp

This is a React rebuild of the Waterloo Rocketry website - see the [repo for the standard site](https://github.com/waterloo-rocketry/website) for more info. 

### Requirements
[Node 16](https://nodejs.org/en/download/) is required.

Additionally, it is recommended that you use [Visual Studio Code](https://code.visualstudio.com/download) with the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for development, as it will take care of code formatting and enforcing code style for you.

### Local Development
```sh 
# Clone the repo 
git clone https://github.com/waterloo-rocketry/website-react
cd website-react
# Install npm dependencies
npm install 
# Spin up the development server and start making changes. 
# You can have a live preview of the React app at http://localhost:3000/
npm start
```

### Deployment
The React application is deployed to GitHub Pages whenever a commit is made to `master` no extra work is required on your end.

### Style Guide (from original repo)
We generally try to use British/Canadian spellings over American ones. A non-exhaustive list of relevant words this impacts:
* Aluminium, not aluminum
* Mould, not mold
* Fibre(glass), not fiber(glass)

Consistency matters more than strictly going the Canadian way - if you're unsure, try `grepping` it (or ask one of us). :)
