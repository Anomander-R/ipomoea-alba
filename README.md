# Ipomoea alba - Moonflower Slider

**GitHub repo**: [Ipomoea Alba](https://github.com/Anomander-R/ipomoea-alba)

## Description

**Inspiration for repo name**: Ipomoea alba, sometimes called the tropical white morning-glory, moonflower or moon vine, is a species of night-blooming morning glory, native to tropical and subtropical regions of North and South America, from Argentina to northern Mexico, Arizona, Florida and the West Indies. [Wikipedia](https://en.wikipedia.org/wiki/Ipomoea_alba)

![moonflower-slider](https://github.com/Anomander-R/ipomoea-alba/assets/90348779/c41bdcf9-b5da-462a-9a18-cb5198bb6da4)

This repository contains a React application that displays a full-page image slider, inspired by the Ipomoea alba flower. The slider automatically transitions between images, and also allows for manual navigation.

## Features

- Full-page image slider
- Automatic transitions between images
- Manual navigation between images
- Responsive design

## Implementation

The application is implemented using React and custom CSS. The main component is `App`, which maintains the state of the slider and handles navigation events.

The `App` component uses the `useState`, `useEffect`, and `useRef` hooks to manage the state and side effects of the slider. The state includes the current list of items to display and flags indicating whether the next or previous button has been pressed.

The `useEffect` hook is used to implement the automatic transitions between images. When the list of items changes (due to a manual navigation event), the automatic transition is reset to start from the beginning.

The `Carousel` component receives the list of items and navigation callbacks as props, and renders the slider. Each item in the slider is represented by a `CarouselItem` component.

## Limitations

Currently, the top menu and buttons do not have functionality. The "See more" button leads to the websites where the images were sourced from.

## Future Work

Future improvements could include adding functionality to the top menu and buttons, and enhancing the navigation experience (e.g., with transition animations).

## Setup

To run the application locally, clone the repository and install the dependencies with `npm install`. Then start the application with `npm run dev`.

## Contributions

Contributions are welcome. Please open an issue or submit a pull request on GitHub.
