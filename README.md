# Tenzies Game (React)

This is a simple Tenzies dice game built using React. The objective of the game is to roll the dice until all dice show the same value. Players can click on individual dice to hold them between rolls.

## Project Overview

The application is a front-end React project with a clean component-based architecture. It demonstrates effective use of React hooks, immutable state updates, conditional rendering, and accessibility best practices.

The game is designed primarily for desktop screens. On smaller screen sizes, users are prompted to switch to a desktop for a better viewing experience.

## Tech Stack

- React (Functional Components)
- React Hooks (useState, useEffect, useRef)
- Tailwind CSS
- Vite / Create React App (depending on setup)
- nanoid (for unique IDs)
- react-confetti (for win animation)

## Folder Structure

src/

- App.jsx
- Hero.jsx
- Slate.jsx
- Die.jsx
- index.css
- main.jsx

## Component Breakdown

### App

Acts as the root component. It loads global styles and renders the Hero component.

### Hero

Responsible for layout and presentation. Displays the game title and conditionally renders the Slate component based on screen size.

### Slate

Handles the core game logic:

- Dice state management
- Rolling and holding dice
- Win condition detection
- Confetti animation on win
- Accessibility enhancements
- Button focus management using refs

### Die

A stateless presentational component representing a single die. It receives its value, held state, and click handler via props.

## How the Game Works

1. The game initializes with ten dice, each having a random value from 1 to 6.
2. Clicking a die toggles its held state.
3. Clicking the Roll Dice button rerolls all unheld dice.
4. The game is won when all dice are held and have the same value.
5. Once won, a New Game button appears to reset the game.

## Accessibility

- Uses semantic HTML elements.
- Includes aria-labels and aria-pressed attributes for screen readers.
- Provides screen-reader-only messages for game completion.

## Running the Project Locally

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev (Vite)
   or
   npm start (CRA)

3. Open the browser at the displayed local URL.

## Deployment

The project can be deployed on Vercel without additional configuration.

Recommended settings:

- Build command: npm run build
- Output directory: dist (Vite) or build (CRA)

## Notes

This project focuses on clarity, correctness, and maintainability. The logic is intentionally kept simple and readable, making it suitable for learning React fundamentals and showcasing clean component design.
