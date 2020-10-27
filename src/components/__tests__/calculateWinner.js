import React from "react"
import renderer from "react-test-renderer"
import Game from "../Game.js"

import { calculateWinner } from "../Game.js"

it('calculates winner at its most basic form USING WRAPPER', () => {
  const wrapper = renderer.create(<Game squares={['X', 'X', 'X', 
                     null, null, null, 
                     null, null, null]}/>);
  const inst = wrapper.getInstance();
  expect(
    calculateWinner(inst.props.squares)).toBe('X');
});