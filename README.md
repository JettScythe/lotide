# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jettscythe/lotide`

**Require it:**

`const _ = require('@jettscythe/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: asserts arrays are equal
* `assertEqual(arg1, arg2)`: asserts basic data types are equal
* `assertObjectsEqual(obj1, obj2)`: asserts objects are equal
* `countLetter(str)`: counts each letter in a string
* `countOnly(allItems, itemsToCount)`: counts only specified items from allItems
* `eqArrays(arr1, arr2)`: confirms arrays are equal
* `eqObjects(obj1, obj2)`: confirms objects are equal
* `findKey(object, callback)`: returns the first key for which the callback returns a truthy value, else returns undefined
* `findKeyByValue(obj, val)`: finds key in object based on val arg
* `flatten(arr)`: merges nested arrays into parent
* `head(arr)`: returns value of content at arr[0]
* `letterPositions(sentence)`: finds index of letters in arg sentence
* `map(array, callback)`: returns new array based on results of callback function
* `middle(arr)`: returns the middle of an array
* `tail(arr)`: returns arr without arr[0]
* `takeUntil(array, callback)`: Takes all the values out of an array or string until callback is hit
* `without(source, itemsToRemove)`: creates an array without itemsToRemove