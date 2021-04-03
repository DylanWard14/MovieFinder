# Movie Finder [![DylanWard14](https://circleci.com/gh/DylanWard14/MovieFinder/tree/master.svg?style=svg)](https://circleci.com/gh/DylanWard14/MovieFinder/tree/master)

## Introduction

Movie finder is a web application built with React, using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) and a CICD pipeline managed with CircleCI.

## Live Demo

A live demo of the application is available at [MovieFinder](http://dylan-ward.com/MovieFinder).

## Installation

1. Clone the repo: `git@github.com:DylanWard14/MovieFinder.git`
2. `cd MovieFinder`
3. Create `.env.local` file
4. Add your own The Movie Database API key to the file `REACT_APP_API_KEY=YOU_KEY_HERE`
5. Install all the packages: `npm install`
6. Run the application: `npm start`
7. Open your browser: `http://localhost:3000`

## Cypress Tests

1. Create a `cypress.env.json` file at the root of the project
2. Add `{ "REACT_API_KEY": "*" }` to the file, replacing `*` with your The Movie Database API Key
3. Run `npm run cypress:open` to open the Cypress test runner

## Author

[Dylan Ward](http://dylan-ward.com)
