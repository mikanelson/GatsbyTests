import React from 'react'
import Game from '../game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});

it('renders game correctly', () => {
  const wrapper = mount(<Game/>);
  
  let boardState = [];

  for (let i = 0; i < 7; i++) {
    let turn = wrapper.find('button.square').at(i).simulate('click');
    boardState.push(wrapper.find('button.square').at(i).children().first().text());
  }
  
  printBoardState(boardState);

  let winner = wrapper.find('div.game-info').children().first().text();
  expect(winner).toEqual('Winner: X');
});

function printBoardState(board) {
  console.log(board[0] + '  |  ' + board[1] + '  |  ' + board[2] +
             '\n________________\n' + 
             board[3] + '  |  ' + board[4] + '  |  ' + board[5] +
             '\n________________\n' +
             board[6] + '  |     |');
}