<h1 align="center">
  <img src="https://user-images.githubusercontent.com/14254413/59166945-ea77ff80-8b2e-11e9-8776-d99bdff3ae6f.png" alt="Standard - JavaScript Style Guide" width="200">
  <br>
  Berlin Clock
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/kntechie/berlin-clock"><img src="https://travis-ci.org/kntechie/berlin-clock.svg?branch=master" alt="travis">
  <img src="https://img.shields.io/npm/v/standard.svg" alt="npm version">
</p>
  
## About this Kata

The Berlin Clock is a clock that tells the time using a series of illuminated coloured blocks, as you can see in the picture for this project.

The top lamp blinks to show seconds- it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, and is made up of 11 lamps- every third lamp is red, the rest are yellow. The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.
  
## Table of Contents

- Quick start
  - [Install](#install)
  - [Usage](#usage)
  - [Tests and Coverage](#Tests-and-coverage)

## Install

Install all the dependencies for the project

```bash
$ npm install
```

## Usage

For running the application ?

```bash
$ npm start
```
This opens the browser and runs the application in http://localhost:3000

## Tests and Coverage

1. For running `tests`

```bash
$ npm run test
```

2. For `coverage` reports

```bash
$ npm run test:coverage
```
