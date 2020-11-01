import React from 'react'
import Board from '../board'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  let squaresDummy = ['x', 'x', 'o',
                 'o', 'x', 'o',
                 'x', 'o', 'x'];
  shallow(<Board squares={squaresDummy} />);
});

it('calls onClick when a square is clicked', () =>{
  let squares = Array(9).fill(null);
  const onClick = jest.fn();
  let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
  let buttons = wrapper.find('button.square');
  buttons.last().simulate('click');
  expect(onClick).toBeCalledWith(8);
});