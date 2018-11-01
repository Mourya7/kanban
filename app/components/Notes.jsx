import React from 'react';
import Note from './Note';
import '../main.css';

export default ({notes,onDelete = () => {}}) => (
  <ul className="notes">{notes.map(({id,task}) =>
    <li key = {id}>
      <Note className="note">
        <span>{task}</span>
        <button className="delete" onClick={onDelete.bind(null,id)}>x</button>
      </Note>
    </li>
  )}</ul>
)
