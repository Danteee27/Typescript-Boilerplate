import React from 'react';
import Column from './Column';

const Board: React.FC = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Column title="To Do" status="todo" />
    <Column title="In Progress" status="in-progress" />
    <Column title="Done" status="done" />
  </div>
);

export default Board;
