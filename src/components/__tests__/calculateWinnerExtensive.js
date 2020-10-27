import React from "react"

import { calculateWinner } from "../Game.js"

it('calculates winner under various circumstances', () => {
  expect(
    calculateWinner(['X', 'X', 'X', 
                     null, null, null, 
                     null, null, null])).toBe('X');
  expect(
    calculateWinner([null, null, null, 
                     'O', 'O', 'O', 
                     null, null, null])).toBe('O');
  expect(
    calculateWinner([null, null, null, 
                     null, null, null, 
                     'O', 'O', 'O'])).toBe('O');
  expect(
    calculateWinner(['X', null, null, 
                     'X', null, null, 
                     'X', null, null])).toBe('X');
  expect(
    calculateWinner([null, 'X', null, 
                     null, 'X', null, 
                     null, 'X', null])).toBe('X');
  expect(
    calculateWinner(['O', null, null, 
                     null, 'O', null, 
                     null, null, 'O'])).toBe('O');
  expect(
    calculateWinner([null, null, 'O', 
                     null, null, 'O', 
                     null, null, 'O'])).toBe('O');
  expect(
    calculateWinner([null, null, 'O', 
                     null, 'O', null, 
                     'O', null, null])).toBe('O');
});