# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mxtchjohnston/lotide`

**Require it:**

`const _ = require('@mxtchjohnston/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(Array)`: returns first element of given array
* `tail(Array)`: returns an array of elements without the first
* `middle(Array)`: returns the middle 1 or 2 elements of an array